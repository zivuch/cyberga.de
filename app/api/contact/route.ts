import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isValidEmail, sanitizeString } from '@/lib/utils';

// Lazy initialization - only create Resend instance when API is called
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '3', 10);
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '3600000', 10);

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message is too long (max 1000 characters).' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeString(name),
      email: sanitizeString(email),
      company: sanitizeString(company),
      message: sanitizeString(message)
    };

    // Send email via Resend
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: 'Cyberga Contact Form <onboarding@resend.dev>', // Use Resend's test domain or verified domain
      to: process.env.CONTACT_EMAIL || 'contact@cyberga.de',
      subject: `New contact from ${sanitizedData.name} (${sanitizedData.company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A0E27;">New Contact Form Submission</h2>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${sanitizedData.email}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${sanitizedData.company}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from the Cyberga.de contact form.
          </p>
        </div>
      `,
      // Plain text version
      text: `
New Contact Form Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Company: ${sanitizedData.company}

Message:
${sanitizedData.message}

---
This email was sent from the Cyberga.de contact form.
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

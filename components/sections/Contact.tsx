'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, XCircle, Mail, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import { isValidEmail, sanitizeString } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Max 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const sanitizedData = {
        name: sanitizeString(formData.name),
        email: sanitizeString(formData.email),
        company: sanitizeString(formData.company),
        message: sanitizeString(formData.message)
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sanitizedData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[#1A1F3A] to-[#0A0E27]">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4 font-[family-name:var(--font-space-grotesk)]">
              {t('title')}
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-8">
                {t('info.email')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF] mb-1">{t('info.email')}</p>
                    <a href="mailto:contact@cyberga.de" className="text-[#E5E7EB] hover:text-[#00D9FF] transition-colors">
                      contact@cyberga.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF] mb-1">{t('info.location')}</p>
                    <p className="text-[#E5E7EB]">{t('info.locationValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E5E7EB] mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('form.namePlaceholder')}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1A1F3A] border ${
                    errors.name ? 'border-red-500' : 'border-[#00D9FF]/20'
                  } text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#00D9FF] transition-colors`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB] mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form.emailPlaceholder')}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1A1F3A] border ${
                    errors.email ? 'border-red-500' : 'border-[#00D9FF]/20'
                  } text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#00D9FF] transition-colors`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#E5E7EB] mb-2">
                  {t('form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('form.companyPlaceholder')}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1A1F3A] border ${
                    errors.company ? 'border-red-500' : 'border-[#00D9FF]/20'
                  } text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#00D9FF] transition-colors`}
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E5E7EB] mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('form.messagePlaceholder')}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1A1F3A] border ${
                    errors.message ? 'border-red-500' : 'border-[#00D9FF]/20'
                  } text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#00D9FF] transition-colors resize-none`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t('form.sending')}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={20} />
                    {t('form.submit')}
                  </span>
                )}
              </Button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
                  <CheckCircle size={20} className="text-[#10B981]" />
                  <p className="text-[#10B981]">{t('form.success')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <XCircle size={20} className="text-red-500" />
                  <p className="text-red-500">{t('form.error')}</p>
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

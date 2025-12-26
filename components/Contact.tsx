"use client";

import { useState, FormEvent } from "react";

interface ContactForm {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

interface ContactMessages {
  subtitle: string;
  title: string;
  description: string;
  form: ContactForm;
}

interface ContactProps {
  messages: ContactMessages;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact({ messages }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-medium mb-4">{messages.subtitle}</p>
          <h2 className="text-heading md:text-display font-serif mb-6">
            {messages.title}
          </h2>
          <p className="text-dark/70 text-lg leading-relaxed mb-12">
            {messages.description}
          </p>

          {/* Success Message */}
          {status === "success" && (
            <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
              {messages.form.success}
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800">
              {messages.form.error}
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  {messages.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={messages.form.namePlaceholder}
                  disabled={status === "sending"}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  {messages.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={messages.form.emailPlaceholder}
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-dark mb-2"
              >
                {messages.form.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder={messages.form.companyPlaceholder}
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark mb-2"
              >
                {messages.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder={messages.form.messagePlaceholder}
                disabled={status === "sending"}
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? messages.form.sending
                  : messages.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

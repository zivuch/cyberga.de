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

export default function Contact({ messages }: ContactProps) {
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

          {/* Contact Form */}
          <form className="space-y-6 text-left">
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
                  className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={messages.form.namePlaceholder}
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
                  className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={messages.form.emailPlaceholder}
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
                className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder={messages.form.companyPlaceholder}
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
                className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder={messages.form.messagePlaceholder}
              />
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn-primary">
                {messages.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

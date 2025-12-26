export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-medium mb-4">Get in Touch</p>
          <h2 className="text-heading md:text-display font-serif mb-6">
            Ready to Secure Your Applications?
          </h2>
          <p className="text-dark/70 text-lg leading-relaxed mb-12">
            Let&apos;s discuss how Cyberga can help ensure the reliability and
            security of your critical applications through professional test
            automation and quality engineering.
          </p>

          {/* Contact Form */}
          <form className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-dark mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your company"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell us about your project and testing needs..."
              />
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

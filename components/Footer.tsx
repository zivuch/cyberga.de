export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Cyberga</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Ensuring the reliability and security of critical applications
              through professional test automation and quality engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                className="text-white/70 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-white/70 text-sm">
              Ready to ensure your applications work reliably and securely?
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-primary hover:text-primary-light transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Cyberga. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

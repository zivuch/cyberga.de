export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-main">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="text-primary font-medium mb-6 tracking-wide">
            Test Automation & Security Consultancy
          </p>

          {/* Main Headline */}
          <h1 className="text-display md:text-display-lg font-serif mb-8">
            Reliability & Security for{" "}
            <span className="text-primary">Critical Applications</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-dark/80 leading-relaxed mb-10 max-w-2xl">
            Cyberga is a test automation and security-focused consultancy that
            ensures critical applications work reliably and securely. We design
            and implement automated end-to-end, API, and system tests to
            validate core business processes, reduce operational risk, and
            protect system stability in complex and regulated environments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-accent-lime/30 rounded-l-full -z-10 hidden lg:block" />
      </div>
    </section>
  );
}

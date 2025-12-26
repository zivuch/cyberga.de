const benefits = [
  {
    title: "Reduce Operational Risk",
    description:
      "Automated testing catches issues before they impact your business, minimizing costly production incidents.",
  },
  {
    title: "Accelerate Delivery",
    description:
      "Continuous quality assurance enables faster release cycles without compromising stability.",
  },
  {
    title: "Protect System Stability",
    description:
      "Comprehensive test coverage ensures your critical applications remain reliable under all conditions.",
  },
  {
    title: "Compliance Ready",
    description:
      "Testing frameworks designed for complex and regulated environments with full audit trails.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Mission */}
          <div>
            <p className="text-primary font-medium mb-4">About Cyberga</p>
            <h2 className="text-heading md:text-display font-serif mb-8">
              Quality Engineering for Mission-Critical Systems
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Cyberga combines test automation and security validation to
                ensure that mission-critical applications function correctly,
                securely, and consistently across complex system landscapes.
              </p>
              <p>
                We partner with organizations that cannot afford application
                failures. Our methodical approach to test automation and
                security validation provides the confidence you need to operate
                and scale.
              </p>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

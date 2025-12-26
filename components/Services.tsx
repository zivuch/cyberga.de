const services = [
  {
    number: "01",
    title: "End-to-End Testing",
    description:
      "Comprehensive automated testing that validates complete user journeys and business workflows, ensuring your application behaves correctly from start to finish.",
    author: "UI/UX Validation",
  },
  {
    number: "02",
    title: "API Testing",
    description:
      "Robust API test automation that verifies endpoints, data integrity, and integration points, catching issues before they reach production.",
    author: "Integration & Performance",
  },
  {
    number: "03",
    title: "Security Validation",
    description:
      "Proactive security testing that identifies vulnerabilities and validates security controls, protecting your applications and data from threats.",
    author: "Vulnerability Assessment",
  },
  {
    number: "04",
    title: "CI/CD Integration",
    description:
      "Seamless integration of automated tests into your development pipeline, enabling continuous quality assurance and faster, safer releases.",
    author: "DevOps & Automation",
    highlighted: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium mb-4">What We Do</p>
          <h2 className="text-heading md:text-display font-serif">
            Our Services
          </h2>
        </div>

        {/* Service Items */}
        <div className="space-y-0">
          {services.map((service) => (
            <div
              key={service.number}
              className="section-border py-8 md:py-12 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Number */}
                <div
                  className={`section-number flex-shrink-0 ${
                    service.highlighted ? "text-primary" : "text-dark"
                  }`}
                >
                  {service.number}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3
                    className={`text-2xl md:text-heading font-serif mb-4 group-hover:text-primary transition-colors ${
                      service.highlighted ? "text-primary" : "text-dark"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed max-w-2xl mb-4">
                    {service.description}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      service.highlighted ? "text-primary" : "text-dark/50"
                    }`}
                  >
                    {service.author}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 hidden md:block">
                  <svg
                    className={`w-8 h-8 transform group-hover:translate-x-2 transition-transform ${
                      service.highlighted ? "text-primary" : "text-dark/30"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

interface ServicesMessages {
  subtitle: string;
  title: string;
  items: ServiceItem[];
}

interface ServicesProps {
  messages: ServicesMessages;
}

export default function Services({ messages }: ServicesProps) {
  return (
    <section id="services" className="py-24">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium mb-4">{messages.subtitle}</p>
          <h2 className="text-heading md:text-display font-serif">
            {messages.title}
          </h2>
        </div>

        {/* Service Items */}
        <div className="space-y-0">
          {messages.items.map((service, index) => (
            <div
              key={service.number}
              className="section-border py-8 md:py-12 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Number */}
                <div
                  className={`section-number flex-shrink-0 ${
                    index === 3 ? "text-primary" : "text-dark"
                  }`}
                >
                  {service.number}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3
                    className={`text-2xl md:text-heading font-serif mb-4 group-hover:text-primary transition-colors ${
                      index === 3 ? "text-primary" : "text-dark"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed max-w-2xl mb-4">
                    {service.description}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      index === 3 ? "text-primary" : "text-dark/50"
                    }`}
                  >
                    {service.tag}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 hidden md:block">
                  <svg
                    className={`w-8 h-8 transform group-hover:translate-x-2 transition-transform ${
                      index === 3 ? "text-primary" : "text-dark/30"
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

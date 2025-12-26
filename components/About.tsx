interface Benefit {
  title: string;
  description: string;
}

interface AboutMessages {
  subtitle: string;
  title: string;
  description1: string;
  description2: string;
  benefits: Benefit[];
}

interface AboutProps {
  messages: AboutMessages;
}

export default function About({ messages }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-dark text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Mission */}
          <div>
            <p className="text-primary font-medium mb-4">{messages.subtitle}</p>
            <h2 className="text-heading md:text-display font-serif mb-8">
              {messages.title}
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>{messages.description1}</p>
              <p>{messages.description2}</p>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8">
              {messages.benefits.map((benefit, index) => (
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

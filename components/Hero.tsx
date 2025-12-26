interface HeroMessages {
  tagline: string;
  headline: string;
  headlineAccent: string;
  description: string;
  cta: string;
  ctaSecondary: string;
}

interface HeroProps {
  messages: HeroMessages;
}

export default function Hero({ messages }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-main">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="text-primary font-medium mb-6 tracking-wide">
            {messages.tagline}
          </p>

          {/* Main Headline */}
          <h1 className="text-display md:text-display-lg font-serif mb-8">
            {messages.headline}{" "}
            <span className="text-primary">{messages.headlineAccent}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-dark/80 leading-relaxed mb-10 max-w-2xl">
            {messages.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              {messages.cta}
            </a>
            <a href="#services" className="btn-outline">
              {messages.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-accent-lime/30 rounded-l-full -z-10 hidden lg:block" />
      </div>
    </section>
  );
}

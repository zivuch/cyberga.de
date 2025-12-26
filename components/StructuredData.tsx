import { type Locale } from "@/lib/i18n";

interface StructuredDataProps {
  locale: Locale;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isGerman = locale === "de";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cyberga",
    legalName: "G&A GbR",
    url: "https://cyberga.de",
    logo: "https://cyberga.de/icon.svg",
    description: isGerman
      ? "Testautomatisierung und Sicherheitsberatung für kritische Anwendungen"
      : "Test automation and security consultancy for critical applications",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jordanstr. 26",
      addressLocality: "Frankfurt am Main",
      postalCode: "60487",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    sameAs: [],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cyberga",
    image: "https://cyberga.de/icon.svg",
    url: "https://cyberga.de",
    description: isGerman
      ? "Cyberga gewährleistet die Zuverlässigkeit und Sicherheit kritischer Anwendungen durch professionelle Testautomatisierung und Qualitätssicherung."
      : "Cyberga ensures the reliability and security of critical applications through professional test automation and quality engineering.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jordanstr. 26",
      addressLocality: "Frankfurt am Main",
      postalCode: "60487",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.1213,
      longitude: 8.6532,
    },
    priceRange: "$$",
    serviceType: isGerman
      ? ["Testautomatisierung", "Sicherheitsberatung", "QA", "CI/CD Integration"]
      : ["Test Automation", "Security Consulting", "QA", "CI/CD Integration"],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isGerman ? "IT-Beratung" : "IT Consulting",
    provider: {
      "@type": "Organization",
      name: "Cyberga",
    },
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isGerman ? "Dienstleistungen" : "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isGerman ? "End-to-End-Tests" : "End-to-End Testing",
            description: isGerman
              ? "Umfassende automatisierte Tests für komplette Benutzerreisen"
              : "Comprehensive automated testing for complete user journeys",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isGerman ? "API-Tests" : "API Testing",
            description: isGerman
              ? "Robuste API-Testautomatisierung"
              : "Robust API test automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isGerman ? "Sicherheitsvalidierung" : "Security Validation",
            description: isGerman
              ? "Proaktive Sicherheitstests und Schwachstellenanalyse"
              : "Proactive security testing and vulnerability assessment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isGerman ? "CI/CD-Integration" : "CI/CD Integration",
            description: isGerman
              ? "Nahtlose Integration automatisierter Tests in Ihre Pipeline"
              : "Seamless integration of automated tests into your pipeline",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cyberga",
    url: "https://cyberga.de",
    inLanguage: [isGerman ? "de-DE" : "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cyberga.de/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

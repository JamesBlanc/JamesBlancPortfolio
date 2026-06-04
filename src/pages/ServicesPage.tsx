import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, services } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { ServiceCard } from "../components/ServiceCard";
import { CTASection } from "../components/CTASection";

export function ServicesPage() {
  useDocumentMeta(
    `Services | ${siteMeta.defaultTitle}`,
    "Explore James Blanc's saxophone, recording, mixing, production, live sound, and mentorship services."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner
        eyebrow="Services"
        title="Creative Support For Stage, Studio, And Artists"
        description="A polished service page built for clients, collaborators, venues, and artists who need strong musicianship and dependable technical execution."
      />
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            bullets={service.bullets}
          />
        ))}
      </section>
      <div className="mt-20">
        <CTASection
          title="Need a custom quote or booking conversation?"
          body="Every project is different. James is available for performances, sessions, lessons, studio support, and artist development conversations."
          primaryCta={{ label: "Book James", href: "/contact" }}
        />
      </div>
    </div>
  );
}

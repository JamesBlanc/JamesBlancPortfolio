import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, serviceCards } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { ServiceCard } from "../components/ServiceCard";
import { CTASection } from "../components/CTASection";

export function HomePage() {
  useDocumentMeta(siteMeta.defaultTitle, siteMeta.defaultDescription);

  return (
    <div className="pb-10">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid opacity-12" />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-slate-950/42 via-slate-950/20 to-transparent" />
        <img
          src="/images/james-hero-new.jpg"
          alt="James Blanc standing with a saxophone in front of a colorful mural."
          className="absolute inset-0 h-full w-full object-cover object-[62%_38%] opacity-96 brightness-102 saturate-105"
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 py-4 text-white [text-shadow:0_14px_36px_rgba(15,23,42,0.62)] sm:px-4">
            <p className="animate-floatIn text-sm font-bold uppercase tracking-[0.42em] text-white/82">
              South Florida Musician
            </p>
            <h1 className="mt-5 animate-floatIn font-heading text-7xl uppercase leading-[0.9] tracking-[0.14em] sm:text-8xl">
              James Blanc
            </h1>
            <p className="mt-5 animate-floatIn text-lg font-semibold uppercase tracking-[0.22em] text-white sm:text-xl">
              Saxophonist • Producer • Audio Engineer • Artist
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/performance-burgundy.jpg"
            alt="James Blanc playing soprano saxophone on stone steps."
            className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <SectionBanner
            eyebrow="Meet James Blanc"
            title="Artist, Producer, Engineer"
            description="James Blanc is a South Florida saxophonist, audio engineer, and producer whose work bridges jazz, rock, funk, and modern production. A fourth-generation sax player, he's shaped his sound through years of ensemble work, session playing, and multigenre performance. Under the mentorship of DMA Dr. Kyle Mechmet in classical saxophone, DMA Dr. Courtney Jones in jazz studies, and Markus Hernandez in contemporary styles, James continues to refine his technique, artistry, and musical identity while studying Commercial Music Technology at Florida Atlantic University. His experience across wind ensembles, jazz orchestras, and contemporary bands has made him a versatile musician with a deep understanding of both traditional and modern expression."
          />
          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-coral transition hover:gap-3"
            >
              Read More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SectionBanner
          eyebrow="Creative Lanes"
          title="Built For Stage, Studio, And Collaboration"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <ServiceCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          title="Need saxophone, production, or live sound?"
          body="Reach out for bookings, collaborations, studio work, live sound, and performance inquiries."
          primaryCta={{ label: "Contact James", href: "/contact" }}
        />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, serviceCards, honors } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { ServiceCard } from "../components/ServiceCard";
import { CTASection } from "../components/CTASection";

export function HomePage() {
  useDocumentMeta(siteMeta.defaultTitle, siteMeta.defaultDescription);

  return (
    <div className="pb-10">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid" />
        <img
          src="/images/james-hero.jpg"
          alt="James Blanc seated with saxophone against a bright blue sky."
          className="absolute inset-0 h-full w-full object-cover mix-blend-soft-light opacity-45"
        />
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-end gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="animate-floatIn text-sm font-bold uppercase tracking-[0.42em] text-aqua">
              South Florida Artist Portfolio
            </p>
            <h1 className="mt-5 animate-floatIn font-heading text-7xl uppercase leading-[0.9] tracking-[0.14em] sm:text-8xl">
              James Blanc
            </h1>
            <p className="mt-5 animate-floatIn text-lg font-semibold uppercase tracking-[0.22em] text-coral sm:text-xl">
              Saxophonist • Producer • Audio Engineer • Artist
            </p>
            <p className="mt-6 max-w-2xl animate-floatIn text-lg leading-8 text-white/78">
              Jazz-rooted performance, modern production, and studio-ready sound
              from Delray Beach to Florida Atlantic University and beyond.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-coral px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-lilac hover:text-ink"
              >
                Book James
              </Link>
              <Link
                to="/vision"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:border-coral hover:text-sand"
              >
                <Play size={16} />
                Enter Vi$ion
              </Link>
            </div>
          </div>
          <div className="grid gap-4 self-end lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-aqua">
                Focus
              </p>
              <p className="mt-3 font-heading text-4xl uppercase tracking-[0.12em]">
                Live Performance
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">
                Jazz and classical performance, band work, restaurant bookings,
                private events, and featured solo moments.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-coral">
                Studio
              </p>
              <p className="mt-3 font-heading text-4xl uppercase tracking-[0.12em]">
                Tracking, Mixing, Production
              </p>
            </div>
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
            title="Artist, Engineer, Collaborator"
            description="James Blanc is a fourth-generation saxophonist, producer, artist, and audio engineer studying Commercial Music Technology at Florida Atlantic University. His work spans jazz performance, live sound, instrumental tracking, MIDI production, mixing, mastering, and creative collaboration."
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
          description="A concise look at the lanes James works in most: performance, engineering, mixing, and production support."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <ServiceCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="rounded-[2rem] bg-white p-7 shadow-velvet">
          <p className="text-sm font-bold uppercase tracking-[0.34em] text-coral">
            Vi$ion
          </p>
          <h2 className="mt-4 font-heading text-5xl uppercase tracking-[0.12em] text-ink">
            Production Alter Ego
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-ink/72">
            Explore the darker, more cinematic production side of James'
            creative work through Vi$ion, where beats, atmosphere, and artist
            direction take the lead.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@1prodvision"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-coral"
            >
              Watch Vi$ion
            </a>
            <a
              href="https://www.beatstars.com/1prodvisionn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-ink/15 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-ink transition hover:-translate-y-1 hover:border-coral hover:text-coral"
            >
              Visit BeatStars
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/studio-performance.jpg"
            alt="James Blanc performing saxophone in a studio."
            className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SectionBanner
          eyebrow="Honors & Highlights"
          title="Recognition & Growth"
          description="Academic recognition, featured performance honors, and years of ensemble work have shaped a portfolio that feels both grounded and forward-moving."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {honors.map((honor) => (
            <div
              key={honor}
              className="rounded-[1.75rem] border border-ink/10 bg-white px-6 py-5 shadow-velvet"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/70">
                {honor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          title="Need saxophone, production, or live sound?"
          body="Reach out for bookings, collaborations, studio work, lessons, and performance inquiries."
          primaryCta={{ label: "Contact James", href: "/contact" }}
          secondaryCta={{ label: "Explore Audio", href: "/audio" }}
        />
      </div>
    </div>
  );
}

import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, honors, experienceGroups } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { CTASection } from "../components/CTASection";

export function AboutPage() {
  useDocumentMeta(
    `About | ${siteMeta.defaultTitle}`,
    "Learn about James Blanc's background in saxophone performance, production, and audio engineering."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner
        eyebrow="About James"
        title="South Florida Musician With A Studio Mindset"
        description="James Blanc is a South Florida saxophonist, producer, audio engineer, and artist whose work lives at the intersection of live performance, modern production, and musical craftsmanship."
      />

      <section className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/studio-session.jpg"
            alt="James Blanc standing in a professional recording studio."
            className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-velvet">
          <p className="text-lg leading-8 text-ink/78">
            James is currently studying Commercial Music Technology at Florida
            Atlantic University, where he continues developing as both a
            performer and an engineer. His background includes jazz, classical,
            ensemble performance, studio recording, live sound, MIDI
            production, and artist-focused mixing and mastering.
          </p>
          <p className="text-lg leading-8 text-ink/78">
            With experience across wind ensemble, jazz orchestra, Latin groups,
            yacht rock, freelance gigs, and production rooms, James brings a
            musical perspective that serves both the audience and the artist.
            His approach is professional, collaborative, and grounded in sound
            that feels expressive rather than overworked.
          </p>
          <div className="grid gap-4 pt-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-cream p-5">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-coral">
                Education
              </p>
              <p className="mt-3 font-heading text-3xl uppercase tracking-[0.12em]">
                Florida Atlantic University
              </p>
              <p className="mt-2 text-sm leading-7 text-ink/72">
                Commercial Music Technology, 2024-Present
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-cream p-5">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-coral">
                Previous Study
              </p>
              <p className="mt-3 font-heading text-3xl uppercase tracking-[0.12em]">
                Atlantic High School
              </p>
              <p className="mt-2 text-sm leading-7 text-ink/72">
                International Baccalaureate Diploma, 2018-2022
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-2">
        {experienceGroups.map((group) => (
          <ExperienceTimeline key={group.title} title={group.title} items={group.items} />
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] bg-white p-8 shadow-velvet">
        <h2 className="font-heading text-5xl uppercase tracking-[0.12em] text-coral">
          Honors
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {honors.map((honor) => (
            <div key={honor} className="rounded-[1.5rem] bg-cream px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink/78">
              {honor}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          title="Looking for a musician who understands the room and the record?"
          body="James brings both performance presence and technical production perspective to every collaboration."
          primaryCta={{ label: "Start A Conversation", href: "/contact" }}
        />
      </div>
    </div>
  );
}

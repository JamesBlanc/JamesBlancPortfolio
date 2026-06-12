import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";

export function AboutPage() {
  useDocumentMeta(
    `About | ${siteMeta.defaultTitle}`,
    "Learn about James Blanc's background in saxophone performance, production, and audio engineering."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner
        eyebrow="About James"
        title="Saxophonist With A Studio Mindset"
      />

      <section className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/about-james-sculpture.jpg"
            alt="James Blanc standing with a saxophone beside a modern sculpture outdoors."
            className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover object-[72%_center]"
          />
        </div>
        <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-velvet">
          <p className="text-lg leading-8 text-ink/78">
            James Blanc is a South Florida saxophonist, audio engineer, and
            producer whose work bridges jazz, rock, funk, and modern
            production. A fourth-generation sax player, he's shaped his sound
            through years of ensemble work, session playing, and multigenre
            performance. Under the mentorship of DMA Dr. Kyle Mechmet in
            classical saxophone, DMA Dr. Courtney Jones in jazz studies, and
            Markus Hernandez in contemporary styles, James continues to refine
            his technique, artistry, and musical identity while studying
            Commercial Music Technology at Florida Atlantic University. His
            experience across wind ensembles, jazz orchestras, and contemporary
            bands has made him a versatile musician with a deep understanding
            of both traditional and modern expression.
          </p>
          <p className="text-lg leading-8 text-ink/78">
            James' performance career is rooted in a wide range of ensemble
            work across both classical and contemporary settings. He is an
            active member of the Symphonic Band of the Palm Beaches, the FAU
            Wind Ensemble, Jazz Orchestra, Music of the Americas Band, and
            Candela Band, giving him constant exposure to diverse musical
            languages. These groups have shaped his flexibility, strengthening
            his ability to move fluidly between orchestral precision, jazz
            improvisation, Latin and Caribbean traditions, and modern
            commercial styles.
          </p>
          <p className="text-lg leading-8 text-ink/78">
            Beyond performance, James is deeply invested in engineering and
            production, specializing in mixing, mastering, MIDI, and
            instrumental tracking. As Head of Production at FAU and an active
            member of Hoot Wisdom, he has built a reputation for elevating
            artists' ideas with clarity, intention, and modern sonic detail.
            His engineering experience extends into the professional field
            through his role as an assistant engineer at Markee Music, working
            under the mentorship of audio technologist, Marko Ruffolo, where
            he contributes to session setup, tracking, and mix preparation. He
            also serves as an audio engineer at Influence Studios, supporting
            artists across a range of modern genres. In live settings, James
            brings the same precision and adaptability as a live sound
            technician, ensuring high-quality sound reinforcement in dynamic
            performance environments. Whether shaping live mixes, engineering
            studio sessions, or performing with jazz, classical, and
            contemporary style bands, James approaches every project with
            focus, versatility, and a dedication to sound, craft, and
            storytelling.
          </p>
        </div>
      </section>
    </div>
  );
}

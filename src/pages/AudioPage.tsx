import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { audioHighlights, siteMeta } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { CTASection } from "../components/CTASection";

export function AudioPage() {
  useDocumentMeta(
    `Audio | ${siteMeta.defaultTitle}`,
    "Audio engineering page for James Blanc featuring studio tracking, mixing support, and live sound experience."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner
        eyebrow="Audio"
        title="Audio Engineering For Sessions, Stages, And Artists"
        description="A sister page to Vi$ion that focuses on James Blanc's engineering work: studio support, tracking, live sound, and the technical side of bringing music across the finish line."
      />

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/audio-james-studio.jpg"
            alt="James Blanc seated in a professional studio surrounded by outboard gear."
            className="h-full min-h-[430px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-velvet">
          <p className="text-lg leading-8 text-ink/78">
            James' audio engineering work is built around musical awareness and
            practical execution. Whether he is tracking instruments, supporting
            a live room, shaping a mix, or handling production logistics, the
            focus stays on clarity, feel, and reliability.
          </p>
          <p className="text-lg leading-8 text-ink/78">
            That balance between artist perspective and engineering discipline
            makes this side of his portfolio distinct from Vi$ion. Audio is
            about service, translation, and getting the sound to land the right
            way in the room, the session, and the final playback.
          </p>
          <div className="grid gap-4 pt-3">
            {audioHighlights.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-mist px-5 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-coral">
                  {item.title}
                </p>
                <p className="mt-3 text-base leading-7 text-ink/72">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-white p-7 shadow-velvet">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-coral">
            Experience
          </p>
          <h2 className="mt-3 font-heading text-5xl uppercase tracking-[0.12em] text-ink">
            Studio, Live Sound, Production Support
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/72">
            James has worked across engineering environments that include live
            sound support, audio internships, production leadership, and
            artist-facing studio collaboration. The goal is always the same:
            support the music with technical choices that feel clean and
            confident.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-coral transition hover:gap-3"
          >
            Ask About Audio Work
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
            <img
              src="/images/audio-rack.jpg"
              alt="Close-up of analog studio equipment and outboard processing gear."
              className="h-[320px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
            <img
              src="/images/audio-console-wide.jpg"
              alt="James Blanc working at a large format mixing console in the studio."
              className="h-[320px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/audio-console-hand.jpg"
            alt="Hand adjusting controls on a studio mixing console."
            className="h-[260px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/audio-console-portrait.jpg"
            alt="Vertical close-up of a mixing console with illuminated meters."
            className="h-[260px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet sm:col-span-2 lg:col-span-1">
          <img
            src="/images/audio-rack.jpg"
            alt="Studio signal chain and rack-mounted audio processors."
            className="h-[260px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          title="Need engineering support for a session or event?"
          body="Reach out for tracking, mix support, live sound, or collaborative production help."
          primaryCta={{ label: "Contact James", href: "/contact" }}
          secondaryCta={{ label: "See Vi$ion", href: "/vision" }}
        />
      </div>
    </div>
  );
}

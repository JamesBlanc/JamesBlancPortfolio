import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";

export function MusicPage() {
  useDocumentMeta(
    `Vi$ion | ${siteMeta.defaultTitle}`,
    "Explore Vi$ion, the darker production alter ego of James Blanc, through video, beats, and creative direction."
  );

  return (
    <div className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionBanner
          eyebrow="Vi$ion"
          title="Noir Production Identity"
          description="A darker, more cinematic page built around James Blanc's production alter ego. The mood leans monochrome, minimal, and evocative, with the emphasis on atmosphere, beats, and visual identity."
          theme="dark"
        />
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#141414] p-5 shadow-velvet">
            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src="/images/studio-monochrome.jpg"
                  alt="Black and white portrait of James Blanc holding a saxophone."
                  className="h-full min-h-[420px] w-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col justify-between p-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.38em] text-sand/70">
                    Alter Ego
                  </p>
                  <h3 className="mt-4 font-heading text-6xl uppercase tracking-[0.14em] text-white">
                    Vi$ion
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                    Vi$ion is the production-facing side of James Blanc: moody
                    textures, sharp rhythm choices, modern beat language, and a
                    visual world that feels deliberate instead of loud.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="min-h-[170px] rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand/60">
                      Mood
                    </p>
                    <p className="mt-4 text-[0.95rem] uppercase leading-10 tracking-[0.16em] text-white/84">
                      Noir, spare, cinematic
                    </p>
                  </div>
                  <div className="min-h-[170px] rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand/60">
                      Focus
                    </p>
                    <p className="mt-4 text-[0.95rem] uppercase leading-10 tracking-[0.16em] text-white/84">
                      Beats, direction, texture
                    </p>
                  </div>
                  <div className="min-h-[170px] rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand/60">
                      Energy
                    </p>
                    <p className="mt-4 text-[0.95rem] uppercase leading-10 tracking-[0.16em] text-white/84">
                      Controlled, modern, haunting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-white/10 bg-[#141414] p-7 shadow-velvet">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-sand/60">
                Channel
              </p>
              <h3 className="mt-3 font-heading text-4xl uppercase tracking-[0.12em] text-white">
                Featured YouTube
              </h3>
              <p className="mt-4 text-base leading-8 text-white/72">
                The visual tone here is meant to mirror the producer identity:
                dark space, strong contrast, restrained accents, and a more
                immersive tone than the main performance portfolio.
              </p>
              <a
                href="https://www.youtube.com/@1prodvision/featured"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:-translate-y-1 hover:bg-sand"
              >
                Visit Vi$ion Channel
              </a>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-[#141414] p-7 shadow-velvet">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-sand/60">
                Beat Store
              </p>
              <h3 className="mt-3 font-heading text-4xl uppercase tracking-[0.12em] text-white">
                Beats & Drafts
              </h3>
              <p className="mt-4 text-base leading-8 text-white/72">
                Use BeatStars as the storefront layer for Vi$ion. This block is
                ready for an embed later if James wants visitors to audition
                beats directly on the page.
              </p>
              <a
                href="https://www.beatstars.com/1prodvisionn"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:border-sand hover:text-sand"
              >
                Open BeatStars
              </a>
            </article>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-5 shadow-velvet">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=1prodvision"
                title="Vi$ion YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-7 shadow-velvet">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-sand/60">
              Watch Vi$ion
            </p>
            <h3 className="mt-3 font-heading text-5xl uppercase tracking-[0.12em] text-white">
              Featured Links
            </h3>
            <div className="mt-6 grid gap-4">
              <a
                href="https://www.youtube.com/@1prodvision/featured"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 transition hover:-translate-y-1 hover:border-sand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand/60">
                  Featured
                </p>
                <p className="mt-3 font-heading text-3xl uppercase tracking-[0.12em] text-white">
                  Channel Highlights
                </p>
              </a>
              <a
                href="https://www.youtube.com/@1prodvision/videos"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 transition hover:-translate-y-1 hover:border-sand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand/60">
                  Uploads
                </p>
                <p className="mt-3 font-heading text-3xl uppercase tracking-[0.12em] text-white">
                  Video Releases
                </p>
              </a>
              <a
                href="https://www.youtube.com/@1prodvision"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 transition hover:-translate-y-1 hover:border-sand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand/60">
                  Channel
                </p>
                <p className="mt-3 font-heading text-3xl uppercase tracking-[0.12em] text-white">
                  Full YouTube Page
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

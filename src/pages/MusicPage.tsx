import { ArrowUpRight, Play } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta } from "../data/siteContent";

const visionTracks = [
  {
    title: "WHAT YOU NEED",
    src: "/audio/what-you-need.mp3",
  },
  {
    title: "THE END",
    src: "/audio/the-end.mp3",
  },
  {
    title: "THANK YOU",
    src: "/audio/thank-you.mp3",
  },
  {
    title: "STAR LOVE",
    src: "/audio/star-love.mp3",
  },
  {
    title: "NO SLEEP",
    src: "/audio/no-sleep.mp3",
  },
  {
    title: "FEEL IT",
    src: "/audio/feel-it.mp3",
  },
];

const visionLinks = [
  {
    label: "YouTube",
    title: "@1prodvision",
    href: "https://www.youtube.com/@1prodvision",
  },
  {
    label: "BeatStars",
    title: "1prodvisionn",
    href: "https://www.beatstars.com/1prodvisionn",
  },
];

export function MusicPage() {
  useDocumentMeta(
    `Vi$ion | ${siteMeta.defaultTitle}`,
    "A dark, minimal listening page for Vi$ion featuring direct playback and official channel links."
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/55">
            Vi$ion
          </p>
          <h1 className="mt-4 font-heading text-5xl uppercase tracking-[0.14em] text-white sm:text-6xl">
            Independent Producer
          </h1>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-velvet backdrop-blur">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-black">
                <img
                  src="/images/vision-portrait.jpg"
                  alt="Black and white portrait image for Vi$ion with James seated on playground equipment."
                  className="h-full min-h-[320px] w-full object-cover grayscale"
                />
              </div>
              <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-black">
                <img
                  src="/images/vision-all-night-long.jpg"
                  alt="Black and white Vi$ion image of James standing outdoors at night."
                  className="h-full min-h-[420px] w-full object-cover object-center grayscale"
                />
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-velvet backdrop-blur sm:p-8">
            <div className="border-b border-white/10 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.36em] text-white/55">
                Playlist
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/45">
                Selected tracks
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              {visionTracks.map((track, index) => (
                <article
                  key={track.title}
                  className="rounded-[1.4rem] border border-white/8 bg-black/40 px-4 py-4"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78">
                        <Play className="h-4 w-4 fill-current" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.34em] text-white/38">
                          Track {index + 1}
                        </p>
                        <h2 className="mt-2 font-heading text-2xl uppercase tracking-[0.12em] text-white sm:text-3xl">
                          {track.title}
                        </h2>
                      </div>
                    </div>
                    <audio controls preload="none" className="w-full opacity-90">
                      <source src={track.src} />
                      Your browser does not support the audio player.
                    </audio>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {visionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-velvet transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.36em] text-white/52">
                    {link.label}
                  </p>
                  <h2 className="mt-4 font-heading text-4xl uppercase tracking-[0.12em] text-white">
                    {link.title}
                  </h2>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-white/55 transition group-hover:text-white" />
              </div>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}

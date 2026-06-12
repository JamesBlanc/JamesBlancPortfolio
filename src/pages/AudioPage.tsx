import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";

const audioPortfolioTracks = [
  {
    title: "Vi$ion x Rubesh - Blue",
    src: "/audio/vision-x-rubesh-blue.wav",
  },
  {
    title: "Philmycupup - Thoomin",
    src: "/audio/philmycupup-thoomin.mp3",
  },
  {
    title: "Nate - La Luna",
    src: "/audio/nate-la-luna.mp3",
  },
  {
    title: "James Blanc - Just the Two of Us",
    src: "/audio/james-blanc-just-the-two-of-us.mp3",
  },
  {
    title: "Dono - Phrozen",
    src: "/audio/dono-phrozen.wav",
  },
  {
    title: "Abhorrent Abstraction - Ripped Face",
    src: "/audio/abhorrent-abstraction-ripped-face.mp3",
  },
];

export function AudioPage() {
  useDocumentMeta(
    `Audio | ${siteMeta.defaultTitle}`,
    "Audio engineering portfolio for James Blanc featuring selected works and direct playback."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner eyebrow="Audio" title="Audio Engineering Portfolio" />

      <section className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-white p-4 shadow-velvet">
          <img
            src="/images/audio-portfolio-james.jpg"
            alt="James Blanc standing in a studio beside speakers and a mixing console."
            className="h-full min-h-[620px] w-full rounded-[1.5rem] object-cover object-center"
          />
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-velvet sm:p-8">
          <div className="border-b border-ink/10 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-coral">
              Selected Works
            </p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-ink/72">
              A simplified listening view of James' audio engineering portfolio
              with direct playback for six featured tracks.
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {audioPortfolioTracks.map((track, index) => (
              <article
                key={track.title}
                className="rounded-[1.5rem] border border-ink/10 bg-cream px-4 py-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-sm font-extrabold uppercase tracking-[0.08em] text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-heading text-3xl uppercase tracking-[0.1em] text-ink">
                        {track.title}
                      </h2>
                    </div>
                  </div>
                  <audio controls preload="none" className="w-full">
                    <source src={track.src} />
                    Your browser does not support the audio player.
                  </audio>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

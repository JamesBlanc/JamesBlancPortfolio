import { Link } from "react-router-dom";

type CTASectionProps = {
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  title,
  body,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-white shadow-velvet sm:px-10 lg:flex lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-sand">
            Ready to Connect
          </p>
          <h2 className="mt-4 font-heading text-5xl uppercase tracking-[0.12em] text-white sm:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {body}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
          <Link
            to={primaryCta.href}
            className="inline-flex items-center rounded-full bg-coral px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-lilac hover:text-ink"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:border-sand hover:text-sand"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

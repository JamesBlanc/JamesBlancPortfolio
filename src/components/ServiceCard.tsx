type ServiceCardProps = {
  title: string;
  description: string;
  bullets?: string[];
};

export function ServiceCard({ title, description, bullets }: ServiceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-ink/10 bg-white p-7 shadow-velvet transition hover:-translate-y-2">
      <div className="h-2 w-16 rounded-full bg-coral transition group-hover:w-28" />
      <h3 className="mt-6 font-heading text-4xl uppercase tracking-[0.12em] text-ink">
        {title}
      </h3>
      <p className="mt-4 text-base leading-8 text-ink/72">{description}</p>
      {bullets && (
        <ul className="mt-6 space-y-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink/70">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-aqua" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

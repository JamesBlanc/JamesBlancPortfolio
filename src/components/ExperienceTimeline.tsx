type ExperienceTimelineProps = {
  title: string;
  items: string[];
};

export function ExperienceTimeline({ title, items }: ExperienceTimelineProps) {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-7 shadow-velvet">
      <h3 className="font-heading text-4xl uppercase tracking-[0.12em] text-coral">
        {title}
      </h3>
      <div className="mt-8 space-y-5">
        {items.map((item, index) => (
          <div key={item} className="relative pl-8">
            <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-coral bg-white" />
            {index !== items.length - 1 && (
              <span className="absolute left-[7px] top-6 h-[calc(100%+0.75rem)] w-[2px] bg-ink/10" />
            )}
            <p className="text-base leading-7 text-ink/78">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

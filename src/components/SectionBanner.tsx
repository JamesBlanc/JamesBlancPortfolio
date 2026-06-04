type SectionBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionBanner({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionBannerProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const light = theme === "light";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-flex rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-[0.34em] ${
            light ? "bg-coral text-white" : "bg-coral/90 text-white"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <div
        className={`w-full rounded-[2rem] px-6 py-5 shadow-velvet ${
          light ? "bg-aqua" : "bg-aqua/90"
        }`}
      >
        <h2
          className={`font-heading text-5xl uppercase tracking-[0.14em] sm:text-6xl ${
            light ? "text-ink" : "text-white"
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-3xl text-base leading-8 sm:text-lg ${
            light ? "text-ink/75" : "text-white/72"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

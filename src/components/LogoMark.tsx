import { Link } from "react-router-dom";

type LogoMarkProps = {
  compact?: boolean;
};

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-left text-ink transition hover:opacity-90"
      aria-label="James Blanc home"
    >
      <span className="leading-none">
        <span
          className={`block font-heading uppercase tracking-[0.16em] ${
            compact ? "text-3xl" : "text-4xl"
          }`}
        >
          James Blanc
        </span>
        {!compact && (
          <span className="mt-1 block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aqua">
            Saxophonist / Producer / Engineer
          </span>
        )}
      </span>
    </Link>
  );
}

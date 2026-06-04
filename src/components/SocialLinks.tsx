import { Instagram, Music2, Youtube } from "lucide-react";
import { socials } from "../data/siteContent";

const icons = {
  Instagram,
  YouTube: Youtube,
  BeatStars: Music2,
};

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = icons[social.label as keyof typeof icons];

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:-translate-y-1 hover:border-coral hover:bg-lilac hover:text-coral"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}

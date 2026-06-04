import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { navLinks } from "../data/siteContent";
import { SocialLinks } from "./SocialLinks";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-ink/90 backdrop-blur-md transition ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-10 pt-24 text-white">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
          aria-label="Close menu"
        >
          <X />
        </button>
        <nav className="flex flex-1 flex-col justify-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                `font-heading text-5xl uppercase tracking-[0.14em] transition ${
                  isActive ? "text-aqua" : "text-white hover:text-coral"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <SocialLinks />
      </div>
    </div>
  );
}

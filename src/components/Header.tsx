import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../data/siteContent";
import { LogoMark } from "./LogoMark";
import { SocialLinks } from "./SocialLinks";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 border-b border-transparent transition ${
          scrolled ? "bg-cream/95 shadow-velvet backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <LogoMark compact />
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `group relative font-heading text-2xl uppercase tracking-[0.16em] ${
                    isActive ? "text-coral" : "text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[3px] bg-coral transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <SocialLinks />
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}

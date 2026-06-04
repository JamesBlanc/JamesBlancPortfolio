import { Link } from "react-router-dom";
import { contactDetails, navLinks } from "../data/siteContent";
import { LogoMark } from "./LogoMark";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <LogoMark />
          <p className="max-w-md text-sm leading-7 text-ink/70">
            Jazz-rooted performance, modern production, and studio-ready sound
            for events, artists, venues, and collaborators across South Florida
            and beyond.
          </p>
          <SocialLinks />
        </div>
        <div>
          <h3 className="font-heading text-2xl uppercase tracking-[0.14em] text-coral">
            Navigation
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm uppercase tracking-[0.2em] hover:text-coral">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl uppercase tracking-[0.14em] text-coral">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
            <p>{contactDetails.location}</p>
            <a href={`tel:${contactDetails.phone}`} className="block hover:text-coral">
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="block hover:text-coral">
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

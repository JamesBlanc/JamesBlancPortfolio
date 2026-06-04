import { MapPin, Mail, Phone } from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, contactDetails } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { ContactForm } from "../components/ContactForm";
import { SocialLinks } from "../components/SocialLinks";

export function ContactPage() {
  useDocumentMeta(
    `Contact | ${siteMeta.defaultTitle}`,
    "Contact James Blanc for bookings, studio work, collaborations, and live sound inquiries."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner
        eyebrow="Contact"
        title="Bookings, Studio Work, Collaborations"
        description="Reach out for performance bookings, studio projects, live sound support, lessons, or creative collaboration."
      />
      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-white p-7 shadow-velvet">
            <h2 className="font-heading text-4xl uppercase tracking-[0.12em] text-coral">
              Direct Contact
            </h2>
            <div className="mt-6 space-y-5 text-base text-ink/75">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-aqua" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.34em] text-ink/50">
                    Location
                  </p>
                  <p className="mt-1">{contactDetails.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-aqua" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.34em] text-ink/50">
                    Phone
                  </p>
                  <a href={`tel:${contactDetails.phone}`} className="mt-1 block hover:text-coral">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-aqua" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.34em] text-ink/50">
                    Email
                  </p>
                  <a href={`mailto:${contactDetails.email}`} className="mt-1 block hover:text-coral">
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-velvet">
            <h2 className="font-heading text-4xl uppercase tracking-[0.12em] text-coral">
              Social Links
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/72">
              Follow James for music releases, performance clips, and ongoing
              creative work.
            </p>
            <SocialLinks className="mt-6" />
          </div>
        </div>
      </section>
    </div>
  );
}

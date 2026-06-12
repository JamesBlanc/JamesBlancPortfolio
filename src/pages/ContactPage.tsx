import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, contactDetails } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { ContactForm } from "../components/ContactForm";

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
        description="Reach out for performance bookings, studio projects, live sound support, lessons, or creative collaboration. You can also email James directly at visionaryproductionss@gmail.com."
      />
      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="space-y-5">
          <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-velvet">
            <img
              src="/images/contact-james-sky.jpg"
              alt="James Blanc seated outdoors with a saxophone against a bright blue sky."
              className="h-full min-h-[540px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
          <div className="rounded-[2rem] bg-white px-6 py-5 shadow-velvet">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-ink/50">
              Direct Email
            </p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="mt-2 block text-lg text-ink/78 transition hover:text-coral"
            >
              {contactDetails.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

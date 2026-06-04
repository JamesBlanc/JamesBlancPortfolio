import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white p-7 shadow-velvet">
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
            Name
            <input
              required
              type="text"
              className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
            Email
            <input
              required
              type="email"
              className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
            Phone
            <input
              type="tel"
              className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
              placeholder="(561) 699-5411"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
            Inquiry Type
            <select className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist">
              <option>Booking</option>
              <option>Studio Work</option>
              <option>Mixing/Mastering</option>
              <option>Production</option>
              <option>Lessons</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
          Message
          <textarea
            required
            rows={6}
            className="rounded-[1.5rem] border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
            placeholder="Tell James about your event, session, or project."
          />
        </label>
        <p className="rounded-2xl border border-dashed border-ink/15 bg-cream px-4 py-3 text-sm leading-7 text-ink/65">
          Placeholder handler is active here. Connect this form to Formspree,
          EmailJS, Resend, or a backend API when you're ready to receive live
          submissions.
        </p>
        <button
          type="submit"
          className="inline-flex w-fit items-center rounded-full bg-coral px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-ink"
        >
          Send Inquiry
        </button>
        {submitted && (
          <p className="rounded-2xl bg-lilac px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Thanks for reaching out. This demo form is ready for your email integration.
          </p>
        )}
      </form>
    </div>
  );
}

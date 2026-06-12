import { ChangeEvent, FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Booking",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send your inquiry right now.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "Booking",
        message: "",
      });
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your inquiry right now.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
            Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
              placeholder="(561) 699-5411"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/75">
            Inquiry Type
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
            >
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-[1.5rem] border border-ink/10 bg-cream px-4 py-3 text-base outline-none transition focus:border-coral focus:bg-mist"
            placeholder="Tell James about your event, session, or project."
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-fit items-center rounded-full bg-coral px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-ink"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
        {submitted && (
          <p className="rounded-2xl bg-lilac px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Thanks for reaching out. Your inquiry has been sent to James.
          </p>
        )}
        {error && (
          <p className="rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-ink/75">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

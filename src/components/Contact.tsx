import { type ChangeEvent, type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "dennissv.severino@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+63 962-992-5647",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Talisay City, Negros Occidental, Philippines",
  },
];

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    tone: "idle" | "success" | "error";
    message: string;
  }>({
    tone: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ tone: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message ??
            "Your message could not be sent right now. Please try again.",
        );
      }

      setFormData(initialFormData);
      setFormStatus({
        tone: "success",
        message:
          result?.message ??
          "Your inquiry was sent. I will get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="pt-3"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="mt-5 text-4xl font-semibold text-[var(--page-text)] md:text-5xl">
            Let&apos;s build something modern and useful together.
          </h2>
          <div className="section-rule mt-6"></div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--page-muted)]">
            If you have a project, freelance opportunity, or collaboration idea,
            send the details over. I&apos;m interested in work that values clean
            execution and good product thinking.
          </p>

          <div className="mt-10 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="glass-panel flex items-center gap-4 rounded-[1.5rem] px-5 py-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--button-primary-bg)] text-[var(--button-primary-text)]">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--page-muted-soft)]">
                      {item.label}
                    </p>
                    <p className="font-semibold text-[var(--page-text)]">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="glass-panel-strong rounded-[2rem] p-6 md:p-8"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[var(--page-text)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--page-text)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="John@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-[var(--page-text)]"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project discussion"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
                required
                className="w-full rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[var(--page-text)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me what you're building, what stage you're in, and what you need help with."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
              ></textarea>
            </div>

            {formStatus.message ? (
              <p
                className={`text-sm ${
                  formStatus.tone === "success"
                    ? "text-emerald-600"
                    : "text-rose-600"
                }`}
                role="status"
              >
                {formStatus.message}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--button-primary-hover)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-[var(--page-muted-soft)]">
                Your inquiry will be saved to my private Google Sheet.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

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

export default function Contact() {
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
          <form className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--page-text)]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--page-text)]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="John@example.com"
                  className="w-full rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--page-text)]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project discussion"
                className="w-full rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--page-text)]">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell me what you're building, what stage you're in, and what you need help with."
                className="w-full resize-none rounded-2xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] px-4 py-3 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:border-[var(--accent)] focus:outline-none"
              ></textarea>
            </div>

            <button className="inline-flex items-center rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-soft)] hover:bg-[var(--button-primary-hover)]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

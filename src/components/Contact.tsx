import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--page-bg)] px-10 py-20 md:px-20"
    >
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-widest text-[var(--page-muted-soft)]">
            - CONTACT
          </p>

          <h2 className="mb-4 text-4xl font-bold text-[var(--page-text)] md:text-5xl">
            Lets Work <br /> Together
          </h2>

          <div className="mb-6 h-[2px] w-16 bg-[var(--page-border)]"></div>

          <p className="mb-10 max-w-md text-[var(--page-muted)]">
            Have a project in mind? Let&apos;s create something extraordinary
            together.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded bg-[var(--button-primary-bg)] p-3 text-[var(--button-primary-text)]">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold text-[var(--page-text)]">Email</p>
                <p className="text-sm text-[var(--page-muted-soft)]">
                  dennissv.severino@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded bg-[var(--button-primary-bg)] p-3 text-[var(--button-primary-text)]">
                <FaPhone />
              </div>
              <div>
                <p className="font-semibold text-[var(--page-text)]">Phone</p>
                <p className="text-sm text-[var(--page-muted-soft)]">
                  +63 962-992-5647
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded bg-[var(--button-primary-bg)] p-3 text-[var(--button-primary-text)]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold text-[var(--page-text)]">
                  Location
                </p>
                <p className="text-sm text-[var(--page-muted-soft)]">
                  Talisay City, Negros Occidental, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-[var(--page-text)]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b border-[var(--page-border-soft)] bg-transparent py-2 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--page-text)]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="John@example.com"
                  className="w-full border-b border-[var(--page-border-soft)] bg-transparent py-2 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--page-text)]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Discussion"
                className="w-full border-b border-[var(--page-border-soft)] bg-transparent py-2 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--page-text)]">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full resize-none border-b border-[var(--page-border-soft)] bg-transparent py-2 text-[var(--page-text)] placeholder:text-[var(--page-muted-soft)] focus:outline-none"
              ></textarea>
            </div>

            <button className="rounded bg-[var(--button-primary-bg)] px-8 py-2 text-[var(--button-primary-text)] transition hover:bg-[var(--button-primary-hover)]">
              Send Me Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

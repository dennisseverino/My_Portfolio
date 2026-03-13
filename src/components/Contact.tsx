import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F4F0] px-10 md:px-20 py-20">

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="text-gray-500 tracking-widest text-sm mb-4">
            - CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#353535] mb-4">
            Lets Work <br /> Together
          </h2>

          <div className="w-16 h-[2px] bg-[#353535] mb-6"></div>

          <p className="text-gray-600 mb-10 max-w-md">
            Have a project in mind? Let's create something extraordinary together.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-[#353535] text-white p-3 rounded">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold text-[#353535]">Email</p>
                <p className="text-gray-500 text-sm">
                  dennissv.severino@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#353535] text-white p-3 rounded">
                <FaPhone />
              </div>
              <div>
                <p className="font-semibold text-[#353535]">Phone</p>
                <p className="text-gray-500 text-sm">
                  +63 962-992-5647
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#353535] text-white p-3 rounded">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold text-[#353535]">Location</p>
                <p className="text-gray-500 text-sm">
                  Talisay City, Negros Occidental, Philippines
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div>
          <form className="space-y-8">

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm mb-2 text-[#353535]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#353535]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="John@example.com"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-sm mb-2 text-[#353535]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Discussion"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-2 text-[#353535]">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 resize-none"
              ></textarea>
            </div>
            <button className="bg-[#353535] text-white px-8 py-2 rounded hover:bg-[#2a2a2a] transition">
              Send Me Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
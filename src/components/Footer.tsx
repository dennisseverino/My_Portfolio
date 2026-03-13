import { FaFacebookF, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#353535] text-white px-10 md:px-20 py-16">

      {/* TOP */}
      <div className="grid md:grid-cols-3 gap-10 items-start">

        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Dennis B. Severino IV
          </h3>
          <p className="text-gray-400">Full Stack Engineer</p>
        </div>

        {/* CENTER */}
        <div>
          <p className="text-gray-400 mb-4 tracking-widest text-sm">
            FOLLOW
          </p>

          <div className="flex gap-4">
            <div className="border border-gray-500 p-3 rounded hover:border-white transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="border border-gray-500 p-3 rounded hover:border-white transition cursor-pointer">
              <FaGithub />
            </div>
            <div className="border border-gray-500 p-3 rounded hover:border-white transition cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-gray-400 mb-4">Contact me</p>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <div className="border border-gray-500 p-2 rounded">
                <FaEnvelope />
              </div>
              <p className="text-gray-400 text-sm">
                dennissv.severino@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="border border-gray-500 p-2 rounded">
                <FaPhone />
              </div>
              <p className="text-gray-400 text-sm">
                +63 962-992-5647
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-600 my-10"></div>

      {/* BOTTOM */}
      <p className="text-gray-500 text-sm">
        © 2026 Dennis B. Severino IV. All rights reserved.
      </p>

    </footer>
  );
}
import { Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-10 sm:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-xs sm:text-xl font-bold tracking-widest mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-2xl sm:text-5xl font-bold">
            Contact<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Contact Card */}
        <div className="bg-linear-to-r from-[#141414] to-[#1e1e1e] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium sm:font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-300 flex flex-col">
              <a
                href="mailto:gopilalanjaniya@gmail.com"
                className="hover:text-orange-500 transition-colors text-base sm:text-lg font-medium sm:font-semibold"
              >
                gopilalanjaniya@gmail.com
              </a>

              <p className="hover:text-orange-500  text-base sm:text-lg font-medium sm:font-semibold">
                +91 87709 15122
              </p>

              <p className="text-base sm:text-lg font-medium sm:font-semibold">
                Khargone
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/Gopianjaniya"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition  text-lg font-semibold rounded-full w-10 h-10 sm:w-15 sm:h-15 border border-gray-700 flex justify-center items-center hover:bg-orange-700 hover:border-orange-700 hover:scale-103"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com/in/gopilal-anjaniya-3667ba279"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition  text-lg font-semibold w-10 h-10 sm:w-15 sm:h-15 border border-gray-700 hover:border-orange-700 flex justify-center items-center rounded-full hover:bg-orange-700 hover:scale-106 p-2"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-base sm:text-xl font-medium sm:font-semibold mb-6">
              Preferred Contact Method
            </h3>

            <p className="text-gray-300">both</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 text-sm sm:text-xl font-semibold">
          © 2025 · Built by {" "}
          <span className="text-orange-500 font-medium sm:font-bold">Gopilal Anjaniya</span>
        </div>
      </div>
    </section>
  );
}

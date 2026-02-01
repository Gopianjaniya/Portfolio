import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-linear-to-b from-[#141414] to-[#202020] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm sm:text-lg font-bold tracking-widest mb-2">
            ACADEMIC BACKGROUND
          </p>
          <h2 className="text-5xl font-bold">
            Education<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Education Card */}
        <div
          className="max-w-2xl bg-black rounded-3xl p-8 md:p-10 shadow-lg  transition-all duration-400 ease-in-out
    hover:scale-103
    hover:shadow-lg"
        >
          {/* Top Row */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#1c1c1c] rounded-xl flex items-center justify-center text-orange-500 text-xl">
              🎓
            </div>

            <div>
              <h3 className="text-xl font-bold leading-snug">
                Patel College of Science & Technology, Sheri Gram Ralamandal,
                Indore
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                Bachelor of Technology - B.Tech
              </p>
            </div>
          </div>

          {/* Duration */}
          <p className="text-orange-500 font-semibold mb-4">2022 - 2026</p>

          {/* Stream */}
          <p className="text-gray-400 text-lg">
            Computer Science and Engineering
          </p>
        </div>
      </div>
    </section>
  );
}

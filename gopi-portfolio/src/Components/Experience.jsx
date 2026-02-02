import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-xs sm:text-xl font-bold tracking-widest mb-2">
            CAREER PATH
          </p>
          <h2 className="text-2xl sm:text-5xl font-bold">
            Experience<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div
          className="bg-linear-to-r from-[#141414] to-[#202020] rounded-3xl p-4 md:p-10 flex flex-col md:flex-row gap-8 relative  transition-all duration-300 ease-in-out
    hover:scale-102
    hover:shadow-lg z-10"
        >
          {/* Left Side */}
          <div className="md:w-1/4">
            <div className="flex flex-col items-start gap-4 mb-4">
              <div
                className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-black font-bol  transition-all duration-400 ease-out
    hover:scale-110
    hover:shadow-lg"
              >
                4B
              </div>
              <div>
                <h3 className="font-semibold text-xl sm:text-2xl">
                  4Brains Software LLP
                </h3>
                <p className="text-gray-400 sm:text-lg font-semibold">
                  Internship
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-3/4">
            {/* Top */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-1">
                  MERN Stack Developer
                </h4>
                <p className="text-gray-400 sm:text-lg font-semibold flex items-center gap-1">
                  📍 India
                </p>
              </div>

              <p className="text-orange-500 text-lg font-semibold mt-2 md:mt-0">
                Jul/2025 - Jan/2026
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 font-medium sm:font-semibold text-lg">
              Full Stack Developer Intern (MERN Stack) at 4Brains Software LLP |
              July 1, 2025 – Present. Currently working as a Full Stack
              Developer Intern using the MERN stack. I develop end-to-end web
              applications with React on the frontend and Node.js, Express on
              the backend. I design and integrate REST APIs, handle application
              logic, and work with MongoDB databases for data storage and
              retrieval. I build responsive UIs using React, JavaScript, and
              Tailwind CSS, and manage source code, version control, and team
              collaboration using Git and GitHub. This role is helping me gain
              hands-on experience in full stack development and real-world
              project workflows.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Express.js",
                "MongoDB",
                "Node.js",
                "JavaScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-[#222] text-sm sm:text-base font-bold text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const skillsLeft = ["HTML", "JavaScript", "React.js", "Node.js", "Github"];
const skillsRight = ["CSS", "TailwindCSS", "Express.js", "MongoDB"];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white p-10 sm:py-24 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm sm:text-xl font-medium sm:font-bold tracking-widest mb-2">
            EXPERTISE
          </p>
          <h2 className="text-2xl sm:text-5xl font-bold">
            Skills<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {skillsLeft.map((skill, index) => (
              <div
                key={skill}
                className={`group flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 rounded-2xl transition text-white font-medium sm:font-semibold hover:font-bold hover:bg-orange-500 bg-neutral-900 hover:text-black hover:scale-107`}
              >
                <span>{skill}</span>

                <span className="text-xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {skillsRight.map((skill) => (
              <div
                key={skill}
                className={`group flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 rounded-2xl transition text-white font-semibold hover:font-bold hover:bg-orange-500 bg-neutral-900 hover:text-black hover:scale-107`}
              >
                {skill}
                <span className="text-xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

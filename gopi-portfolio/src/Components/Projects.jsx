import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm sm:text-xl font-bold tracking-widest mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-5xl font-bold">
            Projects<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Project Card */}
        <div className="flex flex-col gap-5">
          <div
            className="max-w-8xl bg-black rounded-3xl p-8 md:p-10  shadow-lg  transition-all duration-400 ease-in-out
    hover:scale-103
    hover:shadow-lg"
          >
            {/* Title */}
            <h3 className="text-3xl font-semibold mb-4">E-Commerce</h3>

            {/* Description */}
            <ul className="text-gray-300 space-y-2 mb-6 leading-relaxed list-disc list-inside text-lg">
              <li>
                Developed a role-based E-commerce platform with Admin panel,
                User interface, and Backend services.
              </li>
              <li>
                Implemented user authentication, product management, cart, and
                order workflows.
              </li>
              <li>
                Deployed frontend, admin, and backend applications for live
                production access.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["React", "Node.js", "TailwindCSS", "Express.js", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full bg-[#1f1f1f] text-sm sm:text-base font-bold text-gray-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* CTA */}
            <a
              href="https://e-commerce-u7or.vercel.app/"
              className="inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all"
            >
              View Project <span>→</span>
            </a>
          </div>
          <div
            className="max-w-8xl bg-black rounded-3xl p-8 md:p-10  shadow-lg  transition-all duration-400 ease-in-out
    hover:scale-103
    hover:shadow-lg"
          >
            {/* Title */}
            <h3 className="text-3xl font-semibold mb-4">Portfolio</h3>

            {/* Description */}
            <ul className="text-gray-300 space-y-2 mb-6 leading-relaxed list-disc list-inside text-lg">
              <li>
                A personal portfolio built with React and modern frontend tools
                to showcase my projects and skills.
              </li>
              <li>
                A responsive portfolio website built using React, Tailwind CSS,
                and modern UI practices.
              </li>
              <li>
                A frontend portfolio project created with React as part of my
                full-stack learning journey.
              </li>{" "}
              <li>
                A modern developer portfolio built using React, focused on clean
                design and smooth user experience.
              </li>{" "}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["React", "TailwindCSS", "JavaScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full bg-[#1f1f1f] text-sm sm:text-base font-bold text-gray-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all"
            >
              View Project <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

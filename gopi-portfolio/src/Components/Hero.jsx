 
import { MyPhoto } from "../assets/Photo";
import { LocationEdit } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex items-center md:px-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
        {/* Left Content */}
        <div className="sm:w-200 sm:pl-3 p-2">
          <div className="px-4">
            <h1 className="text-xl md:text-5xl font-semibold leading-tight mb-6">
              Hello. <br />
              I'm <span className="text-orange-500">Gopilal Anjaniya.</span>
            </h1>

            <p className="text-gray-400 w-85 sm:w-200 pr-2 sm:max-w-xl leading-relaxed mb-8 sm:text-xl font-medium sm:font-bold sm:tracking-wide">
              Pursuing Software Engineering Patel Group of Institutions, indore
              - Aspiring Full Stack MERN Developer (MongoDB, Express.js,
              React.js, Node.js) | JavaScript | SQL | Passionate About Building
              Web Applications
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-wrap gap-4 w-90 px-3">
            <button className="bg-orange-500 text-white font-medium sm:font-semibold py-3 px-8 sm:px-8 sm:py-3 rounded-full">
              Software Engineer
            </button>

            <div className="flex items-center gap-1 border border-gray-700 bg-gray-900 font-medium sm:font-semibold px-4 py-3 sm:px-7 sm:py-3 rounded-full text-gray-300">
              <span>
                <LocationEdit size={20} />
              </span>
              <span>Indore, Madhya Pradesh, India, IN</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end sm:w-137.5 sm:h-105 mt-10  ">
          <div className="w-[70%] aspect-3/4 rounded-3xl overflow-hidden">
            <img
              src={MyPhoto}
              alt="Gopilal Anjaniya"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

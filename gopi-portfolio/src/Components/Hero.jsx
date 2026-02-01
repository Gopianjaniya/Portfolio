 
import { MyPhoto } from "../assets/Photo";
import { LocationEdit } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="w-200 pl-3">
          <h1 className="text-5xl md:text-5xl font-semibold leading-tight mb-6">
            Hello. <br />
            I'm <span className="text-orange-500">Gopilal Anjaniya.</span>
          </h1>

          <p className="text-gray-400 max-w-xl leading-relaxed mb-8 text-xl font-bold tracking-wide">
            Pursuing Software Engineering Patel Group of Institutions, indore -
            Aspiring Full Stack MERN Developer (MongoDB, Express.js, React.js,
            Node.js) | JavaScript | SQL | Passionate About Building Web
            Applications
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full">
              Software Engineer
            </button>

            <div className="flex items-center gap-2 border border-gray-700 bg-gray-900  font-semibold px-7 py-3 rounded-full text-gray-300">
              <span>
                <LocationEdit />
              </span>
              <span>Indore, Madhya Pradesh, India, IN</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end w-137.5 h-105 mt-10  ">
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

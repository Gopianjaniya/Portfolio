const languages = [
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Basic" },
];

export default function Languages() {
  return (
    <section
      id="languages"
      className="bg-linear-to-b from-[#0d0d0d] to-[#181818] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm sm:text-xl font-bold tracking-widest mb-2">
            COMMUNICATION
          </p>
          <h2 className="text-5xl font-bold">
            Languages<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Language Rows */}
        <div className="space-y-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-black rounded-2xl px-6 py-7 flex items-center justify-between  shadow-lg  transition-all duration-400 ease-in-out
    hover:scale-103
    hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-lg">✺</span>
                <span className="font-bold">{lang.name}</span>
              </div>

              <span className="text-orange-500 font-medium">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

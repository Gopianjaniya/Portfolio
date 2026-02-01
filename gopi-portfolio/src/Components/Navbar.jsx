import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 md:px-16 py-6 flex items-center justify-between bg-black fixed z-50">
        {/* Logo */}
        <div className="text-white text-xl sm:text-4xl font-bold">
          GA<span className="text-orange-500">.</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Menu Icon */}
          <button onClick={() => setOpen(true)} className="space-y-1">
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <MenuOverlay isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

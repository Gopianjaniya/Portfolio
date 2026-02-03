import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="min-w-94 sm:w-full px-5 sm:py-6 py-3 flex items-center justify-between bg-black fixed z-50 opacity-95">
        {/* Logo */}
        <div className="text-white text-xl sm:text-4xl font-bold">
          GA<span className="text-orange-500">.</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Menu Icon */}
          <button onClick={() => setOpen(true)} className="space-y-1">
            <span className="block sm:w-8 w-6 h-0.5 sm:h-1 bg-white"></span>
            <span className="block sm:w-8 w-6 h-0.5 sm:h-1 bg-white"></span>
            <span className="block sm:w-8 w-6 h-0.5 sm:h-1 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <MenuOverlay isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

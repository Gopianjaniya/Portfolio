import { Briefcase, Code2, Contact, FolderGit2, GraduationCap, Languages, User } from "lucide-react";
import React from "react";

const menuItems = [
  { name: "About", id: "home", icon: <User /> },
  { name: "Experience", id: "experience", icon: <Briefcase /> },
  { name: "Education", id: "education", icon: <GraduationCap /> },
  { name: "Skills", id: "skills", icon: <Code2/> },
  { name: "Languages", id: "languages", icon: <Languages/> },
  { name: "Projects", id: "projects", icon: <FolderGit2/> },
  { name: "Contact", id: "contact", icon: <Contact/> },
];

export default function MenuOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a] rounded-3xl p-8 w-[90%] max-w-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#222] text-white flex items-center justify-center hover:bg-orange-600"
        >
          ✕
        </button>

        {/* Menu Items */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="flex items-center gap-3 px-5 py-5 font-bold text-xl rounded-full  bg-neutral-800 transition text-white hover:bg-orange-600 hover:scale-105"
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Iyanuoluwa
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#about" className="text-slate-300 hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="text-slate-300 hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#skills" className="text-slate-300 hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#contact" className="text-slate-300 hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            <a href="#about" className="block text-slate-300 hover:text-blue-400 transition py-2">
              About
            </a>
            <a href="#projects" className="block text-slate-300 hover:text-blue-400 transition py-2">
              Projects
            </a>
            <a href="#skills" className="block text-slate-300 hover:text-blue-400 transition py-2">
              Skills
            </a>
            <a href="#contact" className="block text-slate-300 hover:text-blue-400 transition py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
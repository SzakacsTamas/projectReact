import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToLogin = (e) => {
    e.preventDefault();
    const el = document.getElementById("login");
    if (el) {
      const topOffset = window.innerHeight / 2 - el.offsetHeight / 2;
      const top = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false); // ha mobil menüben vagyunk, zárjuk be
  };

  return (
    <nav className="fixed top-0 w-full bg-zinc-900/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Bal oldali linkek (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#stats"
            className="text-white font-medium hover:text-indigo-400 transition-colors"
          >
            Statisztikák
          </a>
          <a
            href="#footer"
            className="text-white font-medium hover:text-cyan-400 transition-colors"
          >
            Elérhetőségek
          </a>
        </div>

        {/* Cím */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl sm:text-2xl font-bold text-white">
          Tanterem
        </h1>

        {/* Jobb oldali gomb */}
        <a
          href="#login"
          onClick={scrollToLogin}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold shadow-md hover:opacity-90 hover:scale-105 "
        >
          Belépés
        </a>

        {/* Hamburger gomb (mobil) */}
        <button
          className="md:hidden ml-3 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil menü */}
      <div
        className={`md:hidden bg-zinc-900/95 backdrop-blur-md px-4 pt-2 pb-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a
          href="#stats"
          className="block text-white font-medium hover:text-indigo-400 transition-colors my-1"
          onClick={() => setIsOpen(false)}
        >
          Statisztikák
        </a>
        <a
          href="#footer"
          className="block text-white font-medium hover:text-cyan-400 transition-colors my-1"
          onClick={() => setIsOpen(false)}
        >
          Elérhetőségek
        </a>
      </div>
    </nav>
  );
}
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToLogin = (e) => {
    e.preventDefault();
    const el = document.getElementById("login");

    if (el) {
      const topOffset = window.innerHeight / 2 - el.offsetHeight / 2;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - topOffset;

      window.scrollTo({ top, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50
    bg-[#070b14]/60 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* BAL OLDAL */}

        <div className="flex items-center gap-3">

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg
            text-gray-300 hover:text-white hover:bg-white/5 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>

          {/* DESKTOP QUICKLINKS */}
          <div className="hidden md:flex gap-8 ml-4">

            <a
              href="#stats"
              className="text-gray-300 hover:text-cyan-400 transition font-medium"
            >
              Statisztikák
            </a>

            <a
              href="#footer"
              className="text-gray-300 hover:text-purple-400 transition font-medium"
            >
              Elérhetőségek
            </a>

          </div>

        </div>

        {/* LOGO */}

        <div className="absolute left-1/2 -translate-x-1/2 select-none">
<h1 className="text-xl sm:text-2xl font-bold text-rose-600">
  Tantér
</h1>
        </div>

        {/* JOBB OLDAL */}

        <div className="flex items-center">

          <a
            href="#login"
            onClick={scrollToLogin}
className="
px-3 py-1.5 text-sm
sm:px-4 sm:py-2 sm:text-base
rounded-xl
border border-purple-800/70
bg bg-slate-300/20
text-white font-semibold
shadow-md shadow-purple-500/80
hover:scale-105 hover:shadow-cyan-500/80 hover:border-cyan-700/80
transition-all
"
          >
            Belépés
          </a>

        </div>

      </div>

      {/* MOBIL MENÜ */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-4 space-y-3
        bg-purple-300/10 backdrop-blur-xl
        border-t border-white/10 shadow-lg">

          <a
            href="#stats"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-400 transition"
          >
            Statisztikák
          </a>

          <a
            href="#footer"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-purple-400 transition"
          >
            Elérhetőségek
          </a>

        </div>
      </div>

      {/* NAVBAR ALSÓ ELVÁLASZTÓ */}

      <div className="absolute bottom-0 left-0 w-full h-px
      bg-gradient-to-r from-transparent via-violet-800/90 to-transparent" />

    </nav>
  );
}
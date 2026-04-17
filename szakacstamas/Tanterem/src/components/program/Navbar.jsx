import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar({ onHamburger }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50
        flex items-center justify-between px-4
        backdrop-blur-xl border-b transition-colors duration-300
        ${dark
          ? "bg-slate-900/70 border-indigo-500/20 shadow-xl shadow-white/10"
          : "bg-white/50 border-slate-400 shadow-xl shadow-slate-800/30"
        }`}
    >

      {/* Bal oldal */}
      <div className="flex items-center gap-3">
        <button
          onClick={onHamburger}
          className={`w-9 h-9 flex items-center justify-center rounded-lg
            transition-all duration-200 text-xl
            ${dark
              ? " text-slate-200 hover:text-indigo-500 hover:bg-indigo-500/22"
                : "text-black  hover:bg-white"
            }`}
        >
          ☰
        </button>
      </div>

      {/* Logo — abszolút középen */}
      <Link className="absolute left-1/2 -translate-x-1/2" to="/">
      
        <img
          src="src/images/logo2.png"
          alt="Tanterem logo"
          className="max-w-[80px] sm:max-w-[90px] h-auto object-contain"
        />
      </Link>

      {/* Jobb oldal */}
      <div className="relative" ref={menuRef}>
        <div
          onClick={() => setMenuOpen((o) => !o)}
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full cursor-pointer
            bg-gradient-to-br from-rose-500 to-cyan-400
            flex items-center justify-center font-bold text-xs sm:text-sm text-white
            transition-all duration-200
            ${dark
              ? "border border-indigo-400/40 hover:border-cyan-400/60"
              : "border-2 border-indigo-300 hover:border-indigo-500 shadow-sm"
            }`}
        >
          CG
        </div>

        {/* Popup menü */}
        {menuOpen && (
          <div
            className={`absolute right-0 top-12
              w-[85vw] max-w-[256px]
              rounded-2xl shadow-2xl
              border backdrop-blur-xl z-50 overflow-hidden
              ${dark
                ? "bg-slate-900/95 border-indigo-500/20"
                : "bg-white/90 border-slate-200"
              }`}
          >

            {/* Profil fejléc */}
            <div className="flex flex-col items-center py-4 sm:py-5 px-3 sm:px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full
                bg-gradient-to-br from-indigo-500 to-cyan-400
                flex items-center justify-center
                font-bold text-lg sm:text-2xl text-white mb-2 sm:mb-3">
                CG
              </div>
              <p className={`font-semibold text-xs sm:text-sm ${dark ? "text-slate-200" : "text-slate-800"}`}>
                Felhasználónév
              </p>
              <p className={`font-mono text-[10px] sm:text-xs mt-0.5 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                iharos@example.com
              </p>
            </div>

            <div className={`h-px mx-4 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

            {/* Témaváltó + Értesítések */}
            <div className="p-1.5 sm:p-2">
              <button
                onClick={toggle}
                className={`w-full text-left px-3 py-2 sm:py-2.5
                  rounded-xl text-xs sm:text-sm
                  font-mono transition-all duration-200 cursor-pointer
                  ${dark
                    ? "text-slate-300 border border-transparent hover:text-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.5),0_0_50px_rgba(250,204,21,0.2)]"
                    : "text-slate-600 border border-transparent hover:text-indigo-900 hover:border-slate-800 hover:shadow-[0_0_25px_rgba(0,0,0,0.9),inset_0_0_50px_rgba(0,0,0,0.1)]"
                  }`}
              >
                {dark ? "✴︎ Világos mód" : "🌌 Sötét mód"}
              </button>

              <button
                className={`w-full text-left px-3 py-2 sm:py-2.5
                  rounded-xl text-xs sm:text-sm
                  font-mono transition-all duration-200 cursor-pointer
                  ${dark
                    ? "text-slate-300 hover:bg-indigo-500/15 hover:text-indigo-400"
                    : "text-slate-600 hover:bg-indigo-100/80 hover:text-indigo-600"
                  }`}
              >
                <strong className="text-base sm:text-lg">🕭</strong> Értesítések
              </button>
            </div>

            <div className={`h-px mx-4 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

            {/* Fiók műveletek */}
            <div className="p-1.5 sm:p-2">
<Link
  to="/sajat-fiok"
  className={`block w-full text-left px-3 py-2 sm:py-2.5
    rounded-xl text-xs sm:text-sm
    font-mono transition-all duration-200 cursor-pointer
    ${
      dark
        ? "text-slate-300 hover:bg-indigo-500/15 hover:text-indigo-400"
        : "text-slate-600 hover:bg-indigo-100/80 hover:text-indigo-600"
    }`}
>
  Saját fiók
</Link>

              <button
                className={`w-full text-left px-3 py-2 sm:py-2.5
                  rounded-xl text-xs sm:text-sm
                  font-mono transition-all duration-200 cursor-pointer
                  ${dark
                    ? "text-slate-300 hover:bg-indigo-500/15 hover:text-indigo-400"
                    : "text-slate-600 hover:bg-indigo-100/80 hover:text-indigo-600"
                  }`}
              >
                <strong className="text-base sm:text-lg">+</strong> Fiók létrehozása
              </button>
            </div>

            <div className={`h-px mx-4 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

            {/* Kijelentkezés */}
            <div className="p-1.5 sm:p-2">
              <button
                className={`w-full text-left px-3 py-2 sm:py-2.5
                  rounded-xl text-xs sm:text-sm
                  font-mono transition-all duration-200
                  ${dark
                    ? "text-red-400/70 hover:bg-red-500/10 hover:text-red-400"
                    : "text-red-400 hover:bg-red-50 hover:text-red-600"
                  }`}
              >
                ➜ Kijelentkezés
              </button>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({ onHamburger }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50
        flex items-center justify-between px-4
        backdrop-blur-xl border-b transition-colors duration-300
        ${dark
          ? "bg-slate-900/70 border-indigo-500/20" /*FEKETE */
          : "bg-white/75 border-slate-400 shadow-xl" /*Fehér */
        }`}
    >

      {/* Bal oldal */}
      <div className="flex items-center gap-3">
        <button
          onClick={onHamburger}
          className={`w-9 h-9 flex items-center justify-center rounded-lg
            transition-all duration-200 text-xl
            ${dark
              ? "text-slate-400 hover:bg-indigo-500/15 hover:text-indigo-400"
              : "text-slate-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
        >
          ☰
        </button>

        <span className="font-mono font-bold text-xl tracking-widest
          bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400
          bg-clip-text text-transparent">
          Tantér
        </span>
      </div>

      {/* Jobb oldal */}
      <div className="flex items-center gap-3">

        {/* Témaváltó */}
        <button
          onClick={toggle}
          title="Témaváltás"
          className={`w-9 h-9 flex items-center justify-center rounded-lg
            transition-all duration-200 text-lg
            ${dark
              ? "text-slate-400 hover:bg-indigo-500/15 hover:text-yellow-400"
              : "text-slate-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
        >
          {dark ? "☀" : "🌙"}
        </button>

        {/* Értesítés */}
        <button
          className={`w-9 h-9 flex items-center justify-center rounded-lg
            transition-all duration-200 text-lg
            ${dark
              ? "text-slate-400 hover:bg-indigo-500/15 hover:text-indigo-400"
              : "text-slate-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
        >
          🔔
        </button>

        {/* Avatar */}
        <div className={`w-9 h-9 rounded-full cursor-pointer
          bg-gradient-to-br from-indigo-500 to-cyan-400
          flex items-center justify-center font-bold text-sm text-white
          transition-all duration-200
          ${dark
            ? "border border-indigo-400/40 hover:border-cyan-400/60"
            : "border-2 border-indigo-300 hover:border-indigo-500 shadow-sm"
          }`}>
          CG
        </div>
      </div>
    </nav>
  );
}
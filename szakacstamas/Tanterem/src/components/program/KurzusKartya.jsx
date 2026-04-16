import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export default function KurzusKartya({ cim, tanar, szerep = "student", to }) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <Link
      to={to}
      className={`block group relative rounded-2xl p-5 cursor-pointer
        transition-all duration-300 backdrop-blur-md
        hover:-translate-y-1
        ${
          dark
            ? "bg-[#0f172a]/80 border border-indigo-500/20 hover:border-indigo-500/70 hover:bg-[#0f172a]/95 hover:shadow-[0_8px_32px_rgba(34,211,238,0.1)]"
            : "bg-white/80 border border-slate-400/60 hover:border-indigo-400 hover:bg-white hover:shadow-[0_8px_32px_rgba(99,102,241,0.22)]"
        }`}
    >
      {/* Felső sor */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400" />
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border
          ${
            dark
              ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
              : "bg-indigo-100 text-indigo-600 border-indigo-300/60"
          }`}
        >
          {szerep === "teacher" ? "Tanár" : "Tanuló"}
        </span>
      </div>

      <div className={`h-px mb-3 ${dark ? "bg-indigo-500/15" : "bg-slate-400/50"}`} />

      <div className={`font-semibold text-sm mb-1 ${dark ? "text-slate-200" : "text-slate-800"}`}>
        {cim}
      </div>
      <div className={`font-mono text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}>
        {tanar}
      </div>
    </Link>
  );
}
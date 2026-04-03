export default function KurzusKartya({ cim, tanar, szerep = "student", onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-[#0f172a]/80 border border-indigo-500/20
        rounded-2xl p-5 cursor-pointer
        hover:border-cyan-400/40 hover:bg-[#0f172a]/95
        hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(34,211,238,0.1)]
        transition-all duration-250 backdrop-blur-md"
    >
      {/* Felső sor */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400" />
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full
          bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          {szerep === "teacher" ? "Tanár" : "Tanuló"}
        </span>
      </div>

      <div className="h-px bg-indigo-500/15 mb-3" />

      <div className="font-semibold text-slate-200 text-sm mb-1">{cim}</div>
      <div className="font-mono text-xs text-slate-500">{tanar}</div>
    </div>
  );
}

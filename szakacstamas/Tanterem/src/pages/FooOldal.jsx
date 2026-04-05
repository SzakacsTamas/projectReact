import KurzusKartya from "../components/program/KurzusKartya";
import { useTheme } from "../context/ThemeContext";
// Példa adat — később API-ból jöhet
const kurzusok = [
  { id: 1, cim: "Programozás 13.C", tanar: "Dr. Deszka Dávid", szerep: "student" },
  { id: 2, cim: "Matematika 13.C",  tanar: "Kovács Mária",     szerep: "student" },
];

const userRole = "teacher"; // "student" | "teacher"

export default function FooOldal() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <div>
      {/* Fejléc */}
      <div className="mb-7">

<h1 className={`text-2xl font-bold
  ${dark
    ? "bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
    : "drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
  }`}>
  Kurzusaid
</h1>
      </div>

      {/* Kártyák rács */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        {kurzusok.map((k) => (
          <KurzusKartya
            key={k.id}
            cim={k.cim}
            tanar={k.tanar}
            szerep={k.szerep}
            onClick={() => console.log("Megnyitva:", k.cim)}
          />
        ))}

        {/* Kurzus hozzáadás — csak tanárnak */}
{userRole === "teacher" && (
  <div
    className={`group border-2 border-dashed rounded-2xl p-5
      cursor-pointer flex flex-col items-center
      justify-center gap-2 min-h-[110px]
      transition-all duration-200
      ${dark
        ? "border-indigo-500/30 hover:border-indigo-400/60 hover:bg-indigo-500/15"
        : "border-violet-500/50 hover:border-violet-600/80 hover:bg-violet-300/70"
      }`}
    onClick={() => console.log("Kurzus létrehozás")}
  >
    <span className={`text-3xl transition-colors
      ${dark
        ? "text-indigo-500/50 group-hover:text-indigo-400"
        : "text-violet-400/60 group-hover:text-violet-500"
      }`}>
      +
    </span>
    <span className={`font-mono text-xs transition-colors
      ${dark
        ? "text-slate-500 group-hover:text-slate-400"
        : "text-slate-400 group-hover:text-slate-600"
      }`}>
      Kurzus létrehozása
    </span>
  </div>
)}
      </div>

      {/* Következő komponens helye */}
      <div className="mt-8 border border-dashed border-indigo-500/20 rounded-2xl
        p-6 flex items-center justify-center
        font-mono text-xs text-indigo-500/40 tracking-widest">
        [ KÖVETKEZŐ KOMPONENS HELYE ]
      </div>
    </div>
  );
}

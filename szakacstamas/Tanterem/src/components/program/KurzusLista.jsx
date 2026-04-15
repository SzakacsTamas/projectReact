import KurzusKartya from "./KurzusKartya";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export default function KurzusLista({ kurzusok, userRole }) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <>
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

      {/* Grid */}
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

        {/* Hozzáadás */}
        {userRole === "teacher" && (
          <Link
  to="/KurzusLetrehozas"
  className={`group border-2 border-dashed rounded-2xl p-5
    cursor-pointer flex flex-col items-center justify-center gap-2 min-h-[110px]
    transition-all duration-200 block
    ${
      dark
        ? "border-indigo-500/30 hover:border-indigo-400/60 hover:bg-indigo-500/35"
        : "border-violet-500/50 hover:border-violet-600/80 hover:bg-violet-300/70"
    }
  `}
>
  <span className="text-3xl">+</span>
  <span className="text-xs font-mono">
    Kurzus létrehozása
  </span>
</Link>
        )}
      </div>
    </>
  );
}
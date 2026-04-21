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
            ? "text-white"
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
            to={`/kurzus/${k.id}`}
          />
        ))}

        {/* Hozzáadás — csak tanárnak */}
        {userRole === "teacher" && (
          <Link
            to="/kurzus-letrehozas"
            className={`group border-2 border-dashed rounded-2xl p-5
              flex flex-col items-center justify-center gap-2 min-h-[110px]
              transition-all duration-200
              ${dark
                ? "border-indigo-500/30 hover:border-indigo-400/60 hover:bg-indigo-500/15 text-slate-500 hover:text-slate-400"
                : "border-blue-800/50 hover:border-blue-700 hover:bg-blue-800/25 text-slate-600 hover:text-slate-500"
              }`}
          >
            <span className="text-3xl transition-colors">+</span>
            <span className="text-xs font-mono transition-colors">Kurzus létrehozása</span>
          </Link>
        )}
      </div>
    </>
  );
}
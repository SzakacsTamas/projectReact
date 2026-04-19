import { useParams } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
// Példa adat — később API-ból jön
const kurzusAdatok = {
  1: {
    cim: "Programozás 13.C",
    tanar: "Dr. Deszka Dávid",
    leiras: "Bevezetés a programozás világába, algoritmusok és adatszerkezetek.",
    letszam: 28,
    kod: "PROG13C",
    tananyagok: [
      { id: 1, cim: "Bevezetés a programozásba", leiras: "Alapfogalmak, változók, típusok", datum: "2025.01.10", ido: "15 perc" },
      { id: 2, cim: "Vezérlési szerkezetek", leiras: "If-else, switch, ciklusok", datum: "2025.01.17", ido: "25 perc" },
      { id: 3, cim: "Függvények", leiras: "Függvénydefiníció, paraméterek, visszatérési érték", datum: "2025.01.24", ido: "30 perc" },
      { id: 4, cim: "Tömbök és listák", leiras: "Adatszerkezetek alapjai", datum: "2025.02.01", ido: "20 perc" },
    ],
  },
  2: {
    cim: "Matematika 13.C",
    tanar: "Kovács Mária",
    leiras: "Emelt szintű matematika érettségire való felkészülés.",
    letszam: 22,
    kod: "MAT13C",
    tananyagok: [
      { id: 1, cim: "Függvények és határértékek", leiras: "Alapfüggvények, határérték fogalma", datum: "2025.01.09", ido: "20 perc" },
      { id: 2, cim: "Differenciálszámítás", leiras: "Derivált fogalma és szabályai", datum: "2025.01.16", ido: "35 perc" },
    ],
  },
};

export default function Kurzus1() {
  const { id } = useParams();
  const { theme } = useTheme();
  const dark = theme === "dark";

  const kurzus = kurzusAdatok[id];

  if (!kurzus) {
    return (
      <div className={`flex items-center justify-center h-64 font-mono text-sm
        ${dark ? "text-slate-500" : "text-slate-400"}`}>
        ❌ Kurzus nem található
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-2">

      {/* FEJLÉC */}
      <div className={`relative rounded-2xl overflow-hidden mb-8 border
        ${dark
          ? "bg-gradient-to-br from-indigo-950/80 via-slate-900/90 to-purple-950/80 border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
          : "bg-gradient-to-br from-indigo-100/80 via-white/90 to-purple-100/80 border-indigo-200 shadow-[0_8px_40px_rgba(99,102,241,0.12)]"
        }`}>

        {/* Dekor blob */}
        <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full top-[-100px] right-[-80px] pointer-events-none" />
        <div className="absolute w-[200px] h-[200px] bg-cyan-500/10 blur-[60px] rounded-full bottom-[-60px] left-[-60px] pointer-events-none" />

        <div className="relative p-6 sm:p-8">

          {/* Felső sor — kod + létszám */}
          <div className="flex items-center justify-between mb-4">
            <span className={`font-mono text-xs px-3 py-1 rounded-full border tracking-widest
              ${dark
                ? "bg-indigo-500/20 border-indigo-500/30 text-indigo-300"
                : "bg-indigo-100 border-indigo-300 text-indigo-600"
              }`}>
              # {kurzus.kod}
            </span>
            <span className={`font-mono text-xs px-3 py-1 rounded-full border
              ${dark
                ? "bg-slate-800/60 border-slate-700 text-slate-400"
                : "bg-white/80 border-slate-200 text-slate-500"
              }`}>
              👥 {kurzus.letszam} tanuló
            </span>
          </div>
          {/* Tanár */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shrink-0" />
            <span className={`font-mono text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
              {kurzus.tanar}
            </span>
          </div>
          {/* Cím */}
          <h1 className={`text-3xl sm:text-4xl font-bold mb-2
            ${dark
              ? "bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent"
              : "text-slate-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            }`}>
            {kurzus.cim}
          </h1>



        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

  {/* Leírás */}
  <p className={`text-sm leading-relaxed max-w-xl
    ${dark ? "text-slate-400" : "text-slate-600"}`}>
    {kurzus.leiras}
  </p>

  {/* Gomb */}
  <Link
    to={`/kurzus/${id}/uj-feladat`}
    className={`text-xs font-mono px-4 py-4 rounded-xl border
      transition-all duration-200 cursor-pointer
      flex items-center gap-2 justify-center shrink-0
      ${
        dark
          ? "border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          : "border-indigo-400 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-600"
      }`}
  >
    + Feladat létrehozása
  </Link>

</div>
        </div>
      </div>

      {/* TANANYAGOK */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className={`font-mono text-xs uppercase tracking-widest
          ${dark ? "text-slate-500" : "text-slate-400"}`}>
          Tananyagok · {kurzus.tananyagok.length} fejezet
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {kurzus.tananyagok.map((t, index) => (
          <Link
          to={`/kurzus/${id}/feladat/${t.id}`}
            key={t.id}
            className={`group relative rounded-2xl p-5 border cursor-pointer
              transition-all duration-200 hover:-translate-y-0.5
              ${dark
                ? "bg-slate-900/60 border-indigo-500/15 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-[0_4px_20px_rgba(99,102,241,0.1)] backdrop-blur-md"
                : "bg-white/70 border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-[0_4px_20px_rgba(99,102,241,0.1)] backdrop-blur-md"
              }`}
          >
            <div className="flex items-start gap-4">

              {/* Sorszám */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center
                font-mono font-bold text-xs shrink-0
                ${dark
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                  : "bg-indigo-100 text-indigo-600 border border-indigo-200"
                }`}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Tartalom */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className={`font-semibold text-sm ${dark ? "text-slate-200" : "text-slate-800"}`}>
                    {t.cim}
                  </h3>
                  <span className={`font-mono text-[10px] shrink-0 px-2 py-0.5 rounded-full border
                    ${dark
                      ? "bg-slate-800 border-slate-700 text-slate-500"
                      : "bg-slate-100 border-slate-200 text-slate-400"
                    }`}>
                    ⏱ {t.ido}
                  </span>
                </div>
                <p className={`text-xs mb-2 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                  {t.leiras}
                </p>
                <span className={`font-mono text-[10px] ${dark ? "text-slate-600" : "text-slate-400"}`}>
                  {t.datum}
                </span>
              </div>

              {/* Nyíl */}
              <div className={`text-lg transition-transform duration-200 group-hover:translate-x-1 shrink-0
                ${dark ? "text-slate-700 group-hover:text-indigo-400" : "text-slate-300 group-hover:text-indigo-500"}`}>
                →
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
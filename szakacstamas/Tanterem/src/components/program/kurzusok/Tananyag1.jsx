import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useBreadcrumb } from "../../../context/BreadcrumbContext";

const kurzusAdatok = {
  1: {
    cim: "Programozás 13.C",
    tananyagok: [
      { id: 1, cim: "Bevezetés a programozásba", leiras: "Alapfogalmak, változók, típusok", datum: "2025.01.10", ido: "15 perc", csatoltak: [{ nev: "bevezeto.pdf", meret: "340 KB" }] },
      { id: 2, cim: "Vezérlési szerkezetek", leiras: "If-else, switch, ciklusok", datum: "2025.01.17", ido: "25 perc", csatoltak: [] },
      { id: 3, cim: "Függvények", leiras: "Függvénydefiníció, paraméterek, visszatérési érték", datum: "2025.01.24", ido: "30 perc", csatoltak: [] },
      { id: 4, cim: "Tömbök és listák", leiras: "Adatszerkezetek alapjai", datum: "2025.02.01", ido: "20 perc", csatoltak: [] },
    ],
  },
  2: {
    cim: "Matematika 13.C",
    tananyagok: [
      { id: 1, cim: "Függvények és határértékek", leiras: "Alapfüggvények, határérték fogalma", datum: "2025.01.09", ido: "20 perc", csatoltak: [] },
      { id: 2, cim: "Differenciálszámítás", leiras: "Derivált fogalma és szabályai", datum: "2025.01.16", ido: "35 perc", csatoltak: [] },
    ],
  },
};

export default function Tananyag1() {
  const { id, tananyagId } = useParams();
  const { theme } = useTheme();
  const dark = theme === "dark";
  const { setKurzusNev, setFeladatNev } = useBreadcrumb();

  const kurzus = kurzusAdatok[id];
  const tananyag = kurzus?.tananyagok.find((t) => t.id === Number(tananyagId));

  useEffect(() => {
    if (tananyag) {
      setFeladatNev(tananyag.cim);
      setKurzusNev(kurzus?.cim ?? null);
    }
    return () => {
      setFeladatNev(null);
      setKurzusNev(null);
    };
  }, [tananyag, id]);

  const [torlesModal, setTorlesModal] = useState(false);

  if (!tananyag) {
    return (
      <div className={`flex items-center justify-center h-64 font-mono text-sm
        ${dark ? "text-slate-500" : "text-slate-400"}`}>
        ❌ Tananyag nem található
      </div>
    );
  }

  const chipClass = (color) => `font-mono text-xs px-3 py-1 rounded-full border ${
    color === "purple"
      ? dark ? "bg-purple-500/20 border-purple-500/30 text-purple-300" : "bg-purple-100 border-purple-300 text-purple-600"
      : color === "cyan"
      ? dark ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-300" : "bg-cyan-100 border-cyan-300 text-cyan-600"
      : dark ? "bg-slate-800/60 border-slate-700 text-slate-400" : "bg-white/80 border-slate-200 text-slate-500"
  }`;

  return (
    <div className="max-w-4xl mx-auto px-2 pb-12">

      {/* FEJLÉC */}
      <div className={`relative rounded-2xl overflow-hidden mb-6 border
        ${dark
          ? "bg-gradient-to-br from-purple-950/80 via-slate-900/90 to-indigo-950/80 border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.15)]"
          : "bg-gradient-to-br from-purple-100/80 via-white/90 to-indigo-100/80 border-purple-200 shadow-[0_8px_40px_rgba(168,85,247,0.12)]"
        }`}>
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-[80px] rounded-full top-[-100px] right-[-80px] pointer-events-none" />
        <div className="absolute w-[200px] h-[200px] bg-indigo-500/10 blur-[60px] rounded-full bottom-[-60px] left-[-60px] pointer-events-none" />

        <div className="relative p-6 sm:p-8">

          {/* Chipek */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={chipClass("purple")}>🗐 Tananyag</span>
            <span className={chipClass("cyan")}>⏱ {tananyag.ido}</span>
            <span className={chipClass("slate")}>📅 {tananyag.datum}</span>
          </div>

          {/* Cím */}
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4
            ${dark
              ? "bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent"
              : "text-slate-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            }`}>
            {tananyag.cim}
          </h1>

          {/* Leírás */}
          <p className={`text-sm leading-relaxed mb-6
            ${dark ? "text-slate-400" : "text-slate-600"}`}>
            {tananyag.leiras}
          </p>

          {/* Gombok */}
          <div className="flex flex-wrap gap-3">
            <button className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-200
              ${dark
                ? "border-purple-500/40 text-purple-400 hover:bg-purple-500/15 hover:border-purple-400"
                : "border-purple-300 text-purple-600 hover:bg-purple-50"
              }`}>
              ✐ Szerkesztés
            </button>
            <button
              onClick={() => setTorlesModal(true)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-200
                ${dark
                  ? "border-red-500/30 text-red-400/70 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400"
                  : "border-red-300 text-red-400 hover:bg-red-50 hover:text-red-600"
                }`}>
              🗑 Törlés
            </button>
          </div>

        </div>
      </div>

      {/* CSATOLT FÁJLOK */}
      {tananyag.csatoltak.length > 0 && (
        <div className="mb-6">
          <h2 className={`font-mono text-xs uppercase tracking-widest mb-3
            ${dark ? "text-slate-500" : "text-slate-400"}`}>
            Csatolt fájlok · {tananyag.csatoltak.length}
          </h2>
          <div className="flex flex-wrap gap-3">
            {tananyag.csatoltak.map((f) => (
              <div key={f.nev} className={`flex items-center gap-2 px-4 py-2 rounded-xl border
                cursor-pointer transition-all duration-200
                ${dark
                  ? "bg-slate-900/60 border-purple-500/15 hover:border-purple-400/40 text-slate-300"
                  : "bg-white/70 border-slate-200 hover:border-purple-300 text-slate-700"
                }`}>
                <span className="text-sm">📎</span>
                <span className="font-mono text-xs">{f.nev}</span>
                <span className={`font-mono text-[10px] ${dark ? "text-slate-600" : "text-slate-400"}`}>{f.meret}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TÖRLÉS MODAL */}
      {torlesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
          <div className={`w-full max-w-sm rounded-2xl border p-6 shadow-2xl
            ${dark
              ? "bg-slate-900/95 border-red-500/30"
              : "bg-white/95 border-red-200"
            }`}>
            <h3 className={`font-bold text-lg mb-2 ${dark ? "text-slate-200" : "text-slate-800"}`}>
              Tananyag törlése
            </h3>
            <p className={`text-sm mb-6 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Biztosan törlöd a <strong>"{tananyag.cim}"</strong> tananyagot? Ez a művelet nem vonható vissza.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setTorlesModal(false)}
                className={`flex-1 py-2 rounded-xl text-sm font-mono border transition-all duration-200
                  ${dark
                    ? "border-slate-700 text-slate-400 hover:bg-slate-800"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}>
                Mégse
              </button>
              <button
                onClick={() => { setTorlesModal(false); console.log("Törölve"); }}
                className={`flex-1 py-2 rounded-xl text-sm font-mono border transition-all duration-200
                  ${dark
                    ? "border-red-500/40 text-red-400 hover:bg-red-500/10 hover:border-red-400"
                    : "border-red-400 text-red-600 hover:bg-red-50"
                  }`}>
                🗑 Törlés
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
} 
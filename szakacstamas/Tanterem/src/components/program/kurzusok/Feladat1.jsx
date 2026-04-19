import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const feladatAdatok = {
  1: {
    cim: "Változók és típusok",
    leiras: "Készíts egy Python programot amely bekér egy nevet és egy számot a felhasználótól, majd kiírja hogy a szám páros vagy páratlan, és köszönti a felhasználót.",
    hatarido: "2025.02.15 23:59",
    maxPont: 100,
    lezarva: false,
    csatoltak: [
      { nev: "feladat_leiras.pdf", meret: "120 KB" },
      { nev: "segédanyag.py", meret: "2 KB" },
    ],
    beadasok: [
      { id: 1, nev: "Kiss Péter",    datum: "2025.02.10", pont: 85,  beadva: true  },
      { id: 2, nev: "Nagy Anna",     datum: "2025.02.12", pont: 92,  beadva: true  },
      { id: 3, nev: "Kovács Bence",  datum: null,         pont: null, beadva: false },
      { id: 4, nev: "Tóth Réka",     datum: "2025.02.14", pont: null, beadva: true  },
      { id: 5, nev: "Szabó Márton",  datum: null,         pont: null, beadva: false },
    ],
  },
};

export default function Feladat1() {
  const { id, feladatId } = useParams();
  const { theme } = useTheme();
  const dark = theme === "dark";

  const feladat = feladatAdatok[feladatId ?? 1];

  const [lezarva, setLezarva] = useState(feladat?.lezarva ?? false);
  const [pontok, setPontok] = useState(
    Object.fromEntries(feladat?.beadasok.map((b) => [b.id, b.pont ?? ""]) ?? [])
  );
  const [torlesModal, setTorlesModal] = useState(false);

  if (!feladat) {
    return (
      <div className={`flex items-center justify-center h-64 font-mono text-sm
        ${dark ? "text-slate-500" : "text-slate-400"}`}>
        ❌ Feladat nem található
      </div>
    );
  }

  const beadottDb = feladat.beadasok.filter((b) => b.beadva).length;
  const ertekeltDb = feladat.beadasok.filter((b) => b.pont !== null).length;

  const chipClass = (color) => `font-mono text-xs px-3 py-1 rounded-full border ${
    color === "indigo"
      ? dark ? "bg-indigo-500/20 border-indigo-500/30 text-indigo-300" : "bg-indigo-100 border-indigo-300 text-indigo-600"
      : color === "cyan"
      ? dark ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-300" : "bg-cyan-100 border-cyan-300 text-cyan-600"
      : color === "red"
      ? dark ? "bg-red-500/20 border-red-500/30 text-red-300" : "bg-red-100 border-red-300 text-red-600"
      : dark ? "bg-slate-800/60 border-slate-700 text-slate-400" : "bg-white/80 border-slate-200 text-slate-500"
  }`;

  return (
    <div className="max-w-4xl mx-auto px-2 pb-12">

      {/* FEJLÉC */}
      <div className={`relative rounded-2xl overflow-hidden mb-6 border
        ${dark
          ? "bg-gradient-to-br from-indigo-950/80 via-slate-900/90 to-purple-950/80 border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
          : "bg-gradient-to-br from-indigo-100/80 via-white/90 to-purple-100/80 border-indigo-200 shadow-[0_8px_40px_rgba(99,102,241,0.12)]"
        }`}>
        <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full top-[-100px] right-[-80px] pointer-events-none" />
        <div className="absolute w-[200px] h-[200px] bg-cyan-500/10 blur-[60px] rounded-full bottom-[-60px] left-[-60px] pointer-events-none" />

        <div className="relative p-6 sm:p-8">

          {/* Chipek */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={chipClass("indigo")}>📋 Feladat</span>
            <span className={chipClass("cyan")}>⏰ {feladat.hatarido}</span>
            <span className={chipClass("slate")}>🏆 Max: {feladat.maxPont} pont</span>
            {lezarva && <span className={chipClass("red")}>🔒 Lezárva</span>}
          </div>

          {/* Cím */}
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4
            ${dark
              ? "bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent"
              : "text-slate-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            }`}>
            {feladat.cim}
          </h1>

          {/* Leírás */}
          <p className={`text-sm leading-relaxed mb-6
            ${dark ? "text-slate-400" : "text-slate-600"}`}>
            {feladat.leiras}
          </p>

          {/* Stat sor */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { label: "Beadta", value: `${beadottDb} / ${feladat.beadasok.length}` },
              { label: "Értékelt", value: `${ertekeltDb} / ${beadottDb}` },
            ].map((s) => (
              <div key={s.label} className={`px-4 py-2 rounded-xl border text-center min-w-[90px]
                ${dark ? "bg-slate-800/50 border-slate-700" : "bg-white/70 border-slate-200"}`}>
                <div className={`font-bold text-lg ${dark ? "text-slate-200" : "text-slate-800"}`}>{s.value}</div>
                <div className={`font-mono text-[10px] uppercase tracking-wider ${dark ? "text-slate-500" : "text-slate-400"}`}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Gombok */}
          <div className="flex flex-wrap gap-3">
            <button className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-200
              ${dark
                ? "border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/15 hover:border-indigo-400"
                : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"
              }`}>
              ✐ Szerkesztés
            </button>
            <button
              onClick={() => setLezarva((v) => !v)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-200
                ${lezarva
                  ? dark ? "border-green-500/40 text-green-400 hover:bg-green-500/10" : "border-green-400 text-green-600 hover:bg-green-50"
                  : dark ? "border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10" : "border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                }`}>
              {lezarva ? "🔓 Megnyitás" : "🔒 Lezárás"}
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
      {feladat.csatoltak.length > 0 && (
        <div className="mb-6">
          <h2 className={`font-mono text-xs uppercase tracking-widest mb-3
            ${dark ? "text-slate-500" : "text-slate-400"}`}>
            Csatolt fájlok · {feladat.csatoltak.length}
          </h2>
          <div className="flex flex-wrap gap-3">
            {feladat.csatoltak.map((f) => (
              <div key={f.nev} className={`flex items-center gap-2 px-4 py-2 rounded-xl border
                cursor-pointer transition-all duration-200
                ${dark
                  ? "bg-slate-900/60 border-indigo-500/15 hover:border-indigo-400/40 text-slate-300"
                  : "bg-white/70 border-slate-200 hover:border-indigo-300 text-slate-700"
                }`}>
                <span className="text-sm">📎</span>
                <span className="font-mono text-xs">{f.nev}</span>
                <span className={`font-mono text-[10px] ${dark ? "text-slate-600" : "text-slate-400"}`}>{f.meret}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BEADÁSOK */}
      <div className="mb-4">
        <h2 className={`font-mono text-xs uppercase tracking-widest mb-3
          ${dark ? "text-slate-500" : "text-slate-400"}`}>
          Beadások · {feladat.beadasok.length} tanuló
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {feladat.beadasok.map((b) => (
          <div key={b.id} className={`group rounded-2xl px-5 py-4 border
            transition-all duration-200
            ${dark
              ? "bg-slate-900/60 border-indigo-500/15 hover:border-indigo-500/30 backdrop-blur-md"
              : "bg-white/70 border-slate-200 hover:border-indigo-200 backdrop-blur-md"
            }`}>
            <div className="flex flex-wrap items-center gap-3">

              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400
                flex items-center justify-center text-white font-bold text-xs shrink-0">
                {b.nev.charAt(0)}
              </div>

              {/* Név + dátum */}
              <div className="flex-1 min-w-0">
                <div className={`font-semibold text-sm ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  {b.nev}
                </div>
                <div className={`font-mono text-[10px] ${dark ? "text-slate-600" : "text-slate-400"}`}>
                  {b.beadva ? `Beadva: ${b.datum}` : "Még nem adta be"}
                </div>
              </div>

              {/* Státusz */}
              <span className={`font-mono text-[10px] px-2 py-1 rounded-full border shrink-0
                ${b.beadva
                  ? dark ? "bg-green-500/15 border-green-500/30 text-green-400" : "bg-green-100 border-green-300 text-green-600"
                  : dark ? "bg-red-500/15 border-red-500/30 text-red-400" : "bg-red-100 border-red-300 text-red-500"
                }`}>
                {b.beadva ? "✓ Beadva" : "✗ Hiányzik"}
              </span>

              {/* Pontozás */}
              {b.beadva && (
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min="0"
                    max={feladat.maxPont}
                    value={pontok[b.id]}
                    onChange={(e) => setPontok((p) => ({ ...p, [b.id]: e.target.value }))}
                    placeholder="pont"
                    className={`w-16 px-2 py-1 rounded-lg text-xs font-mono text-center
                      border outline-none transition-all duration-200
                      ${dark
                        ? "bg-slate-800/60 border-indigo-500/20 text-slate-200 focus:border-indigo-400"
                        : "bg-white border-slate-300 text-slate-800 focus:border-indigo-400"
                      }`}
                  />
                  <span className={`font-mono text-xs ${dark ? "text-slate-600" : "text-slate-400"}`}>
                    / {feladat.maxPont}
                  </span>
                  <button className={`px-2 py-1 rounded-lg text-[10px] font-mono border
                    transition-all duration-200
                    ${dark
                      ? "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
                      : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                    }`}>
                    ✓
                  </button>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

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
              Feladat törlése
            </h3>
            <p className={`text-sm mb-6 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Biztosan törlöd a <strong>"{feladat.cim}"</strong> feladatot? Ez a művelet nem vonható vissza.
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
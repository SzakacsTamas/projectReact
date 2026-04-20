import { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

function generateCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default function KurzusLetrehozas() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const [cim, setCim] = useState("");
  const [lathatasag, setLathatasag] = useState("publikus");
  const [korlatok, setKorlatok] = useState(false);
  const [letszam, setLetszam] = useState("");
  const [leiras, setLeiras] = useState("");
  const [kod] = useState(generateCode);
  const [masolva, setMasolva] = useState(false);

  const handleMasolas = () => {
    navigator.clipboard.writeText(kod);
    setMasolva(true);
    setTimeout(() => setMasolva(false), 2000);
  };

  const handleLetrehozas = () => {
    console.log({ cim, lathatasag, korlatok, letszam, leiras, kod });
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className={`w-full max-w-2xl rounded-2xl border backdrop-blur-xl shadow-2xl
        transition-colors duration-300
        ${dark
          ? "bg-slate-900/80 border-indigo-500/20 shadow-indigo-500/10"
          : "bg-white/70 border-slate-200 shadow-slate-300/50"
        }`}>
        <div className="p-6 sm:p-8">

          {/* Fejléc */}
          <h1 className={`text-2xl font-bold text-center mb-1
            ${dark
              ? "bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
              : "text-slate-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            }`}>
            Kurzus Létrehozása
          </h1>
          <div className={`h-px mt-4 mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Kurzus címe */}
          <div className="mb-6">
            <label className={`block font-mono text-xs tracking-widest uppercase mb-2 
              ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Kurzus címe
            </label>
            <input
              type="text"
              value={cim}
              onChange={(e) => setCim(e.target.value)}
              placeholder="pl. Programozás 13.C"
              className={`w-full px-4 py-2.5 rounded-xl text-sm font-mono
                border outline-none transition-all duration-200 
                ${dark
                  ? "bg-slate-800/60 border-indigo-500/20 text-slate-200 placeholder-slate-600 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  : "bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                }`}
            />
          </div>

          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Három oszlop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            {/* Láthatóság */}
            <div>
              <label className={`block font-mono text-xs tracking-widest uppercase mb-3
                ${dark ? "text-slate-400" : "text-slate-500"}`}>
                Láthatóság
              </label>
              <div className="flex gap-2">
                {["publikus", "privát"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setLathatasag(opt)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono capitalize cursor-pointer
                      border transition-all duration-200
                      ${lathatasag === opt
                        ? dark
                          ? "bg-indigo-500/20 border-indigo-400 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                          : "bg-indigo-100 border-indigo-400 text-indigo-700"
                        : dark
                          ? "bg-transparent border-slate-700 text-slate-500 hover:border-indigo-500/50"
                          : "bg-transparent border-slate-300 text-slate-400 hover:border-indigo-300"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Létszám */}
            <div>
              <label className={`block font-mono text-xs tracking-widest uppercase mb-3
                ${dark ? "text-slate-400" : "text-slate-500"}`}>
                Létszám
              </label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  id="korlatok"
                  checked={korlatok}
                  onChange={(e) => setKorlatok(e.target.checked)}
                  className="accent-cyan-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="korlatok" className={`text-xs font-mono cursor-pointer
                  ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  Korlátolt
                </label>
              </div>
              {korlatok && (
                <input
                  type="number"
                  min="1"
                  value={letszam}
                  onChange={(e) => setLetszam(e.target.value)}
                  placeholder="Max. létszám"
                  className={`w-full px-3 py-2 rounded-xl text-xs font-mono
                    border outline-none transition-all duration-200
                    ${dark
                      ? "bg-slate-800/60 border-indigo-500/20 text-slate-200 placeholder-slate-600 focus:border-indigo-400"
                      : "bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-indigo-400"
                    }`}
                />
              )}
            </div>

            {/* Leírás */}
            <div>
              <label className={`block font-mono text-xs tracking-widest uppercase mb-3
                ${dark ? "text-slate-400" : "text-slate-500"}`}>
                Leírás
              </label>
              <textarea
                rows={3}
                value={leiras}
                onChange={(e) => setLeiras(e.target.value)}
                placeholder="Rövid leírás a kurzusról.."
                className={`w-full px-3 py-2 rounded-xl text-xs font-mono resize-none
                  border outline-none transition-all duration-200
                  ${dark
                    ? "bg-slate-800/60 border-indigo-500/20 text-slate-200 placeholder-slate-600 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                    : "bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-indigo-400"
                  }`}
              />
            </div>
          </div>

          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Kurzus kódja */}
          <div className="mb-6">
            <label className={`block font-mono text-xs tracking-widest uppercase mb-3
              ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Kurzus kódja
            </label>
            <div className="flex items-center gap-3">
              <span className={`font-mono font-bold text-lg tracking-widest px-4 py-2 rounded-xl border
                ${dark
                  ? "bg-slate-800/60 border-indigo-500/20 text-indigo-300"
                  : "bg-slate-100 border-slate-300 text-indigo-600"
                }`}>
                {kod}
              </span>
              <button
                onClick={handleMasolas}
                className={`px-4 py-2 rounded-xl text-xs font-mono border
                  transition-all duration-200 cursor-pointer
                  ${masolva
                    ? dark
                      ? "border-cyan-400 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                      : "border-green-400 text-green-600 bg-green-50"
                    : dark
                      ? "border-indigo-500/40 text-slate-400 hover:border-indigo-400 hover:text-indigo-300"
                      : "border-slate-300 text-slate-600 hover:border-indigo-400 hover:text-indigo-600"
                  }`}
              >
                {masolva ? "✓ Másolva!" : "Másolás"}
              </button>
            </div>
          </div>

          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Gombok */}
          <div className="flex gap-3">
            <Link
            to="/"
             
              onClick={handleLetrehozas}
              className={`flex-1 py-2.5 rounded-xl text-sm font-mono
                border transition-all duration-200 cursor-pointer
                ${dark
                  ? "border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "border-indigo-400 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-600"
                }`}
            >
              ✓ Létrehozás
            </Link>

          
            <Link
  to="/"
            
              className={`flex-1 py-2.5 rounded-xl text-sm font-mono
                border transition-all duration-200 cursor-pointer
                ${dark
                  ? "border-red-500/30 text-red-400/70 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400"
                  : "border-red-300 text-red-400 hover:bg-red-50 hover:border-red-500 hover:text-red-600"
                }`}
            >
              ✕ Elvetés
              
            </Link>
      
          </div>

        </div>
      </div>
    </div>
  );
}
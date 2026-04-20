import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";

export default function FeladatLetrehozas() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const navigate = useNavigate();
  const { id } = useParams();

  const [cim, setCim] = useState("");
  const [leiras, setLeiras] = useState("");
  const [hatarido, setHatarido] = useState("");
  const [maxPont, setMaxPont] = useState(100);
  const [lathatasag, setLathatasag] = useState("publikus");
  const [fajlok, setFajlok] = useState([]);

  const handleFajl = (e) => {
    const ujak = Array.from(e.target.files).map((f) => ({
      nev: f.name,
      meret: `${(f.size / 1024).toFixed(0)} KB`,
    }));
    setFajlok((prev) => [...prev, ...ujak]);
  };

  const handleLetrehozas = () => {
    console.log({ cim, leiras, hatarido, maxPont, lathatasag, fajlok });
    navigate(`/kurzus/${id}`);
  };

  const inputClass = `w-full px-4 py-2.5 rounded-xl text-sm font-mono
    border outline-none transition-all duration-200
    ${dark
      ? "bg-slate-800/60 border-indigo-500/20 text-slate-200 placeholder-slate-600 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
      : "bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
    }`;

  const labelClass = `block font-mono text-xs tracking-widest uppercase mb-2
    ${dark ? "text-slate-400" : "text-slate-500"}`;

  return (
    <div className="flex justify-center py-8">
      <div className={`w-full max-w-2xl rounded-2xl border backdrop-blur-xl shadow-2xl
        transition-colors duration-300
        ${dark
          ? "bg-slate-900/80 border-indigo-500/20 shadow-indigo-500/10"
          : "bg-white/80 border-slate-200 shadow-slate-300/50"
        }`}>
        <div className="p-6 sm:p-8">

          {/* Fejléc */}
          <h1 className={`text-2xl font-bold text-center mb-1
            ${dark
              ? "bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
              : "text-slate-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            }`}>
            Feladat Létrehozása
          </h1>
          <p className={`text-center font-mono text-xs mb-6 mt-1
            ${dark ? "text-slate-600" : "text-slate-400"}`}>
            Kurzus #{id}
          </p>

          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Cím */}
          <div className="mb-5">
            <label className={labelClass}>Feladat címe</label>
            <input
              type="text"
              value={cim}
              onChange={(e) => setCim(e.target.value)}
              placeholder="pl. Változók és típusok"
              className={inputClass}
            />
          </div>

          {/* Leírás */}
          <div className="mb-5">
            <label className={labelClass}>Leírás</label>
            <textarea
              rows={5}
              value={leiras}
              onChange={(e) => setLeiras(e.target.value)}
              placeholder="A feladat részletes leírása..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className={`h-px mb-5 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Határidő + Max pont */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className={labelClass}>Határidő</label>
              <input
                type="datetime-local"
                value={hatarido}
                onChange={(e) => setHatarido(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Max pont</label>
              <input
                type="number"
                min="0"
                value={maxPont}
                onChange={(e) => setMaxPont(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

         

          <div className={`h-px mb-5 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Fájl feltöltés */}
          <div className="mb-6">
            <label className={labelClass}>Csatolt fájlok</label>
            <label className={`flex flex-col items-center justify-center gap-2
              w-full py-6 rounded-xl border-2 border-dashed cursor-pointer
              transition-all duration-200
              ${dark
                ? "border-indigo-500/25 hover:border-indigo-400/50 hover:bg-indigo-500/5 text-slate-500 hover:text-slate-400"
                : "border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/50 text-slate-400 hover:text-slate-600"
              }`}>
              <span className="text-2xl">📎</span>
              <span className="font-mono text-xs">Kattints a feltöltéshez</span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFajl}
              />
            </label>

            {/* Feltöltött fájlok */}
            {fajlok.length > 0 && (
              <div className="mt-3 flex flex-col gap-2">
                {fajlok.map((f, i) => (
                  <div key={i} className={`flex items-center justify-between
                    px-4 py-2 rounded-xl border
                    ${dark
                      ? "bg-slate-800/40 border-indigo-500/15 text-slate-300"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📄</span>
                      <span className="font-mono text-xs">{f.nev}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[10px] ${dark ? "text-slate-600" : "text-slate-400"}`}>
                        {f.meret}
                      </span>
                      <button
                        onClick={() => setFajlok((prev) => prev.filter((_, j) => j !== i))}
                        className={`text-xs transition-colors
                          ${dark ? "text-red-400/50 hover:text-red-400" : "text-red-300 hover:text-red-500"}`}>
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Gombok */}
          <div className="flex gap-3 ">
            <button
              onClick={handleLetrehozas}
              className={`flex-1 py-2.5 cursor-pointer rounded-xl text-sm font-mono border
                transition-all duration-200
                ${dark
                  ? "border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "border-indigo-400 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-600"
                }`}>
              ✓ Létrehozás
            </button>
            <button
              onClick={() => navigate(`/kurzus/${id}`)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-mono border
                transition-all duration-200 cursor-pointer
                ${dark
                  ? "border-red-500/30 text-red-400/70 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400"
                  : "border-red-300 text-red-400 hover:bg-red-50 hover:border-red-500 hover:text-red-600"
                }`}>
              ✕ Elvetés
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
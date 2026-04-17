import { useState, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export default function SajatFiok() {
  const { theme } = useTheme();
  const dark = theme === "dark";

const [jelszoModositas, setJelszoModositas] = useState(false);
const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
  const [felhasznalonev, setFelhasznalonev] = useState("Példafelhasználó");
  const [jelszo, setJelszo] = useState("TitkosJelszo123");
  const [jelszoLathato, setJelszoLathato] = useState(false);
  const [felszEdit, setFelszEdit] = useState(false);
  const [jelszoEdit, setJelszoEdit] = useState(false);
  const [tempFelsz, setTempFelsz] = useState(felhasznalonev);
  const [tempJelszo, setTempJelszo] = useState(jelszo);
  const [profilKep, setProfilKep] = useState(null);
  const fileRef = useRef(null);
  const [email] = useState("iharos@example.com");

  const [szerep] = useState("student"); // "student" | "teacher"
  const [kurzusokSzama] = useState(5);


  const handleKepValtas = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setProfilKep(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleMentes = () => {
    setFelhasznalonev(tempFelsz);
    setJelszo(tempJelszo);
    setFelszEdit(false);
    setJelszoEdit(false);
  };

  const handleMegse = () => {
    setTempFelsz(felhasznalonev);
    setTempJelszo(jelszo);
    setFelszEdit(false);
    setJelszoEdit(false);
  };

  const inputClass = `w-full px-4 py-2 rounded-xl text-sm font-mono
    border outline-none transition-all duration-200
    ${dark
      ? "bg-slate-800/60 border-indigo-500/20 text-slate-200 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
      : "bg-white border-slate-300 text-slate-800 focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
    }`;

  const editBtnClass = `px-3 py-1.5 rounded-xl text-xs font-mono border
    transition-all duration-200 cursor-pointer
    ${dark
      ? "border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/15 hover:border-indigo-400"
      : "border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-500"
    }`;

  return (
    <div className="flex justify-center py-4">
      <div className={`w-full max-w-xl rounded-2xl border backdrop-blur-xl shadow-2xl
        transition-colors duration-300
        ${dark
          ? "bg-slate-900/80 border-indigo-500/20 shadow-indigo-500/10"
          : "bg-white/80 border-slate-200 shadow-slate-300/50"
        }`}>
        <div className="p-6 sm:p-8">

          {/* Fejléc */}
          <div className="flex items-center justify-between mb-6">
            <h1 className={`text-2xl font-bold
              ${dark
                ? "bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                : "text-slate-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
              }`}>
              Fiók kezelés
            </h1>

            {/* Profilkép */}
            <div
              className="relative cursor-pointer"
              onClick={() => fileRef.current.click()}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2
                border-indigo-400/40 hover:border-cyan-400/60 transition-all duration-200">
                {profilKep ? (
                  <img src={profilKep} alt="Profilkép" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-cyan-400
                    flex items-center justify-center font-bold text-xl text-white">
                    CG
                  </div>
                )}
              </div>
              {/* Szerkesztő ikon */}
              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full
                bg-indigo-500 flex items-center justify-center text-white text-[10px]
                border-2 border-slate-900">
                ✐
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleKepValtas}
              />
            </div>
          </div>

  {/* 🔥 STAT BLOKK */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className={`p-4 rounded-xl border text-center
              ${dark
                ? "bg-slate-800/40 border-indigo-500/20 text-slate-300"
                : "bg-slate-50 border-slate-200 text-slate-700"
              }`}>
              <p className="text-xs font-mono mb-1 opacity-70">
                {szerep === "teacher" ? "Létrehozott kurzusok" : "Kurzusaim"}
              </p>
              <p className="text-2xl font-bold text-indigo-400">
                {kurzusokSzama}
              </p>
            </div>

            <div className={`p-4 rounded-xl border text-center
              ${dark
                ? "bg-slate-800/40 border-indigo-500/20 text-slate-300"
                : "bg-slate-50 border-slate-200 text-slate-700"
              }`}>
              <p className="text-xs font-mono mb-1 opacity-70">Szerep</p>
              <p className="text-sm font-semibold">
                {szerep === "teacher" ? "Tanár" : "Tanuló"}
              </p>
            </div>
          </div>


          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />



          {/* Felhasználónév */}
          <div className="mb-5">
            <label className={`block font-mono text-xs tracking-widest uppercase mb-2
              ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Felhasználónév
            </label>
            <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border
              transition-all duration-200
              ${dark
                ? "bg-slate-800/40 border-indigo-500/15"
                : "bg-slate-50 border-slate-200"
              }`}>
              {felszEdit ? (
                <input
                  autoFocus
                  type="text"
                  value={tempFelsz}
                  onChange={(e) => setTempFelsz(e.target.value)}
                  className={inputClass}
                />
              ) : (
                <span className={`flex-1 font-mono text-sm
                  ${dark ? "text-slate-200" : "text-slate-800"}`}>
                  {felhasznalonev}
                </span>
              )}
              <button
                className={editBtnClass}
                onClick={() => setFelszEdit((v) => !v)}
              >
                ✐
              </button>
            </div>
          </div>
          {/* Email */}
<div className="mb-5">
  <label className={`block font-mono text-xs tracking-widest uppercase mb-2
    ${dark ? "text-slate-400" : "text-slate-500"}`}>
    Email
  </label>

  <div className={`px-4 py-2.5 rounded-xl border font-mono text-sm
    ${dark
      ? "bg-slate-800/40 border-indigo-500/15 text-slate-400"
      : "bg-slate-50 border-slate-200 text-slate-500"
    }`}>
    {email}
  </div>
</div>

{/* Jelszó */}
<div className="mb-8">
  <label className={`block font-mono text-xs tracking-widest uppercase mb-2
    ${dark ? "text-slate-400" : "text-slate-500"}`}>
    Jelszó
  </label>

  {!jelszoModositas ? (
    <button
      onClick={() => setJelszoModositas(true)}
      className={`w-full px-4 py-2.5 rounded-xl text-sm font-mono border text-left
        transition-all duration-200 cursor-pointer
        ${
          dark
            ? "bg-slate-800/40 border-indigo-500/15 text-indigo-400 hover:border-indigo-400"
            : "bg-slate-50 border-slate-200 text-slate-600 hover:border-indigo-400"
        }`}
    >
      Jelszó módosítása
    </button>
  ) : (
    <div className="flex flex-col gap-3">
      <input
        type="password"
        placeholder="Jelenlegi jelszó"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className={inputClass}
      />

      <input
        type="password"
        placeholder="Új jelszó"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className={inputClass}
      />

      <input
        type="password"
        placeholder="Új jelszó megerősítése"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={inputClass}
      />

      <button
        onClick={() => setJelszoModositas(false)}
        className={editBtnClass}
      >
        ✕ Mégse
      </button>
    </div>
  )}
</div>

          <div className={`h-px mb-6 ${dark ? "bg-indigo-500/20" : "bg-slate-200"}`} />

          {/* Gombok */}
          <div className="flex gap-3">
            <Link
            to="/"
              onClick={handleMentes}
              className={`flex-1 py-2.5 rounded-xl text-sm font-mono border
                transition-all duration-200
                ${dark
                  ? "border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "border-indigo-400 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-600"
                }`}
            >
              ✓ Mentés
            </Link>
            <Link
            to="/"
              onClick={handleMegse}
              className={`flex-1 py-2.5 rounded-xl text-sm font-mono border
                transition-all duration-200
                ${dark
                  ? "border-red-500/30 text-red-400/70 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400"
                  : "border-red-300 text-red-400 hover:bg-red-50 hover:border-red-500 hover:text-red-600"
                }`}
            >
              ✕ Mégse
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
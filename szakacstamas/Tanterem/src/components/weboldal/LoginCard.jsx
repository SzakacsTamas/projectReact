export default function LoginCard() {
  return (
   <section className=" max-w-6xl mx-auto px-4 my-16 grid md:grid-cols-2 gap-6 items-stretch">
  {/* STATISZTIKA BLOKK */}
  <div  
  id="statisztikak"
    className="
      bg-white/10 backdrop-blur-xl
      p-6 sm:p-8
      rounded-2xl
      border border-white/10
      shadow-xl shadow-black/30
      transition-all duration-300
      grid grid-cols-1 gap-4  
    "
  >
        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide ">
      Statisztikák
    </h3>
    <hr />
    <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-indigo-500/20 transition-all duration-300 flex-1">
      <span className="text-sm text-white/60">Tanár</span>
      <span className="text-2xl font-bold text-white mt-1">120</span>
    </div>

    <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-cyan-500/20 transition-all duration-300 flex-1">
      <span className="text-sm text-white/60">Diák</span>
      <span className="text-2xl font-bold text-white mt-1">540</span>
    </div>

    <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-purple-500/20 transition-all duration-300 flex-1">
      <span className="text-sm text-white/60">0-24 elérhetőség</span>
      <span className="text-2xl font-bold text-white mt-1">99%</span>
    </div>
  </div>

  {/* LOGIN CARD */}
  <div
    id="login"
    className="
      bg-white/10 backdrop-blur-xl
      p-6 sm:p-8
      rounded-2xl
      border border-white/10
      shadow-xl shadow-black/30
      transition-all duration-300
      flex flex-col
    "
  >
    {/* CÍM */}
    <h3 className="text-center text-xl sm:text-2xl font-semibold text-white tracking-wide py-1">
      Bejelentkezés
    </h3>
    <hr />

    {/* INPUTOK */}
    <div className="space-y-4 py-4">
      <input
        className="
          w-full p-3 rounded-xl
          bg-white/5
          border border-white/10
          text-white placeholder-white/40
          outline-none
          transition-all duration-300
          focus:border-indigo-400
          focus:ring-2 focus:ring-indigo-400/30
        "
        placeholder="Email cím"
      />

      <input
        type="password"
        className="
          w-full p-3 rounded-xl
          bg-white/5
          border border-white/10
          text-white placeholder-white/40
          outline-none
          transition-all duration-300
          focus:border-cyan-400
          focus:ring-2 focus:ring-cyan-400/30
        "
        placeholder="Jelszó"
      />
    </div>

    {/* GOMB */}
    <button
      className="
        mt-6 px-4 py-3 rounded-xl
        bg-gradient-to-r from-green-800 to-cyan-400
        text-black font-semibold
        transition-all duration-300
        hover:scale-[1.08]
        hover:brightness-110
        active:scale-[0.90]
        hover:cursor-pointer
      "
    >
      Bejelentkezés
    </button>

    {/* EXTRA LINK */}
    <div className="text-center mt-4">
      <span className="text-white/40 text-sm">
        Nincs még fiókod?{" "}
      </span>
      <a
        href="#"
        className="text-indigo-400 hover:text-cyan-400 transition text-sm"
      >
        Regisztráció
      </a>
      <br />
      <a
        href="#"
        className="text-purple-400 hover:text-green-400 transition text-sm"
      >
        Elfelejtett jelszó
      </a>
    </div>
  </div>
</section>
  );
}
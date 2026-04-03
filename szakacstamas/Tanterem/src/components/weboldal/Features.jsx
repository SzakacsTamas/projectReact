export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-16">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold text-white mb-8 py-3">
        Fő funkciók
      </h1>
      <hr className="border-white/20 mb-8" />

      <div className="grid md:grid-cols-3 gap-6">

        {/* Online tananyag */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/30 transition hover:scale-[1.03] hover:shadow-indigo-500/40">
          <h2 className="text-xl font-bold text-indigo-400 mb-2 flex items-center gap-2">
            📚 Online tananyag
          </h2>
          <p className="text-white/60 text-sm">
            Tananyagaid bármikor elérhetőek, rendszerezve modulokra és témakörökre, így könnyen követheted a haladást.
          </p>
        </div>

        {/* Feladatkezelés */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/30 transition hover:scale-[1.03] hover:shadow-cyan-500/40">
          <h2 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
            📝 Feladatkezelés
          </h2>
          <p className="text-white/60 text-sm">
            Készíts, oszd ki és kövesd nyomon a feladatokat diákjaidnak egyszerűen és hatékonyan.
          </p>
        </div>

        {/* Kommunikáció */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/30 transition hover:scale-[1.03] hover:shadow-purple-500/40">
          <h2 className="text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
            💬 Kommunikáció
          </h2>
          <p className="text-white/60 text-sm">
            Chat, értesítések és fórumok segítik a gyors és hatékony kommunikációt a tanulók és tanárok között.
          </p>
        </div>

      </div>
    </section>
  );
}
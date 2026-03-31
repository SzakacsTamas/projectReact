export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-16">
      <h2 className="text-center text-2xl mb-8">Fő funkciók</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 p-6 rounded-xl">
          📚 Online tananyag
        </div>
        <div className="bg-white/10 p-6 rounded-xl">
          📝 Feladatkezelés
        </div>
        <div className="bg-white/10 p-6 rounded-xl">
          💬 Kommunikáció
        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
<footer id="footer" className="bg-zinc-900 py-10 text-white">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">

    {/* CÉG / TANEREM */}
    <div className="space-y-2">
      <h5 className="text-lg font-semibold text-indigo-400">Tanterem</h5>
      <p className="text-white/60 text-sm">
        Digitális oktatási rendszer modern iskolák számára.
      </p>
    </div>

    {/* LOGO */}
    <div className="flex justify-center md:justify-center">
      <img 
        src="src/images/logo.png" 
        alt="Tanterem logo" 
        className="max-w-[120px] h-auto object-contain"
      />
    </div>

    {/* KAPCSOLAT */}
    <div className="space-y-2">
      <h5 className="text-lg font-semibold text-purple-400">Kapcsolat</h5>
      <p className="text-white/60 text-sm">Email: info@tanterem.hu</p>
      <p className="text-white/60 text-sm">Telefon: +36 30 123 4567</p>
    </div>

  </div>

  {/* Alsó sor */}
  <hr className="my-6 border-white/10" />
  <p className="text-center text-white/50 text-sm">
    © 2026 Tanterem – Minden jog fenntartva
  </p>
</footer>
  );
}
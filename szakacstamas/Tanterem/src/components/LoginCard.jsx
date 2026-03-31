export default function LoginCard() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-16 grid md:grid-cols-2 gap-6 items-center">

      <img src="/kepek/luca.jpg" className="rounded-xl" />

      <div  id="login"  className="bg-white/10 p-6 rounded-xl">
        <h3 className="text-center mb-4">Bejelentkezés</h3>

        <input className="w-full mb-3 p-3 rounded bg-white/10" placeholder="Email" />
        <input type="password" className="w-full mb-3 p-3 rounded bg-white/10" placeholder="Jelszó" />

        <button className="w-full border py-3 rounded">
          Belépés
        </button>
      </div>
    </section>
  );
}
import KurzusKartya from "../components/KurzusKartya";

// Példa adat — később API-ból jöhet
const kurzusok = [
  { id: 1, cim: "Programozás 13.C", tanar: "Dr. Deszka Dávid", szerep: "student" },
  { id: 2, cim: "Matematika 13.C",  tanar: "Kovács Mária",     szerep: "student" },
];

const userRole = "teacher"; // "student" | "teacher"

export default function FooOldal() {
  return (
    <div>
      {/* Fejléc */}
      <div className="mb-7">
        <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1">
          Üdvözlet · 2025
        </p>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400
          bg-clip-text text-transparent">
          Kurzusaid
        </h1>
      </div>

      {/* Kártyák rács */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        {kurzusok.map((k) => (
          <KurzusKartya
            key={k.id}
            cim={k.cim}
            tanar={k.tanar}
            szerep={k.szerep}
            onClick={() => console.log("Megnyitva:", k.cim)}
          />
        ))}

        {/* Kurzus hozzáadás — csak tanárnak */}
        {userRole === "teacher" && (
          <div
            className="group border-2 border-dashed border-indigo-500/25
              rounded-2xl p-5 cursor-pointer flex flex-col items-center
              justify-center gap-2 min-h-[110px]
              hover:border-indigo-400/50 hover:bg-indigo-500/5
              transition-all duration-200"
            onClick={() => console.log("Kurzus létrehozás")}
          >
            <span className="text-3xl text-indigo-500/50 group-hover:text-indigo-400 transition-colors">
              +
            </span>
            <span className="font-mono text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
              Kurzus létrehozása
            </span>
          </div>
        )}
      </div>

      {/* Következő komponens helye */}
      <div className="mt-8 border border-dashed border-indigo-500/20 rounded-2xl
        p-6 flex items-center justify-center
        font-mono text-xs text-indigo-500/40 tracking-widest">
        [ KÖVETKEZŐ KOMPONENS HELYE ]
      </div>
    </div>
  );
}

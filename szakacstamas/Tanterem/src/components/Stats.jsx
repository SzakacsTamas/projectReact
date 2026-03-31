import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState({ tanar: 0, diak: 0 });

  useEffect(() => {
    fetch("/api/stats", { method: "POST" })
      .then(res => res.json())
      .then(d => {
        if (d.success) {
          setStats({ tanar: d.tanarDb, diak: d.diakDb });
        }
      });
  }, []);

  return (
    <section id="stats" className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center">
        <div>{stats.tanar} Tanár</div>
        <div>{stats.diak} Diák</div>
        <div>0-24</div>
      </div>
    </section>
  );
}
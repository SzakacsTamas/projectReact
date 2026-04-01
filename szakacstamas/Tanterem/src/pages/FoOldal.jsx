import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import LoginCard from "../components/LoginCard";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function App() {
  const [stats, setStats] = useState({ tanar: 0, diak: 0 });

  useEffect(() => {
    fetch("/api/stats", { method: "POST" })
      .then((res) => res.json())
      .then((d) => {
        if (d.success) {
          setStats({ tanar: d.tanarDb, diak: d.diakDb });
        }
      });
  }, []);

  return (
    <div className="  select-none relative min-h-screen overflow-hidden text-white
    bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#020617]">

      {/* AURORA BLOBS */}

      <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full bottom-[-160px] right-[-160px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full top-[40%] left-[30%]" />

      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[140px] rounded-full bottom-[30%] right-[20%]" />

      {/* RADIAL LIGHT */}

      <div className="pointer-events-none absolute inset-0 
      bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <Features />

      {/* LOGIN */}
      <LoginCard />

      {/* STATS */}


      {/* FOOTER */}
      <Footer />

    </div>
  );
}
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div className={`select-none relative min-h-screen overflow-hidden transition-colors duration-300
      ${dark
        ? "bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#020617] text-white"
        : "bg-gradient-to-br from-[#e8eaf6] via-[#f3e5f5] to-[#e0f7fa] text-slate-800"
      }`}>

      {/* AURORA BLOBS */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full bottom-[-160px] right-[-160px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full top-[40%] left-[30%]" />
        <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[140px] rounded-full bottom-[30%] right-[20%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      {/* NAVBAR */}
      <Navbar onHamburger={() => setSidebarOpen((o) => !o)} />

      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} />

      {/* MAIN CONTENT */}
      <main
        className="relative z-10 pt-16 transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? "210px" : "56px" }}
      >
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
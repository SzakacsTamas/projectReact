import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const isMobile = () => window.innerWidth < 1024;
const userRole= "fasz";
const menuItems = [
    { icon: '🏠︎', label: 'Főoldal', to: '/' },
    ...(userRole === 'teacher'
      ? [{ icon: '✙', label: 'Kurzus létrehozás', to: '/kurzus-letrehozas' }]
      : [{ icon: '➣', label: 'Kurzus csatlakozás', to: '/kurzus-csatlakozas' }]),
    { icon: '✉︎', label: 'Üzenetek', to: '/uzenetek' },
  ];

export default function Sidebar({ open }) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [mobile, setMobile] = useState(isMobile);

  useEffect(() => {
    const handler = () => setMobile(isMobile());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <aside
      className={`fixed top-16 left-0 z-40 flex flex-col
        backdrop-blur-2xl border-r
        transition-all duration-300 overflow-hidden
        ${dark
          ? "bg-[#070b14]/10 border-indigo-500/15 shadow-xl shadow-white/20"
          : "bg-white/40 border-slate-400 shadow-xl shadow-slate-800/80"
        }`}
      style={{
        width: mobile
          ? open ? "65px" : "0px"
          : open ? "220px" : "70px",
        height: "calc(100vh - 64px)",
      }}
    >
      <div className="flex flex-col gap-1 p-2 flex-1">
        <div className={`h-px my-1 ${dark ? "bg-indigo-500/15" : "bg-slate-400/50"}`} />

        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center gap-3 px-2 py-2.5 rounded-xl
              transition-all duration-200 whitespace-nowrap
              ${dark
                ? "text-slate-200 hover:text-indigo-500 hover:bg-indigo-500/22"
                : "text-black  hover:bg-white"
              }`}
          >
            <span className="text-xl w-7 flex justify-center shrink-0">{item.icon}</span>
            {open && !mobile && (
              <span className="font-mono text-xs tracking-wide">{item.label}</span>
            )}
          </Link>
        ))}
      </div>

      {/* Kijelentkezés */}
      <div className={`p-2 border-t ${dark ? "border-indigo-500/40" : "border-slate-400/50"}`}>
        <Link
          to="/kijelentkezes"
          className={`flex items-center gap-3 px-2 py-2.5 rounded-xl
            transition-all duration-200 whitespace-nowrap
            ${dark
              ? "text-red-400/70 hover:text-red-400 hover:bg-red-500/10"
              : "text-red-400 hover:text-red-600 hover:bg-red-50"
            }`}
        >
          <span className="text-xl w-7 flex justify-center shrink-0">➜</span>
          {open && !mobile && (
            <span className="font-mono text-xs tracking-wide">Kijelentkezés</span>
          )}
        </Link>
      </div>
    </aside>
  );
}
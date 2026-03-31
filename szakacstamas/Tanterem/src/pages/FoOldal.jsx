import { useEffect, useState } from "react";
import Navbar  from "../components/Navbar";
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
    <div className="relative min-h-screen  bg-zinc-800 overflow-hidden text-white">
     <div className='absolute w-[420px]  h-[420px] sm:w-[600px] sm:h-[600px] bg-indigo-500/15 blur-3xl rounded-full top-[-140px] left-[-140px] sm:top-[-200px] sm:left-[-200px]' />
      <div className='absolute w-[420px]  h-[420px] sm:w-[600px] sm:h-[600px] bg-cyan-500/10 blur-3xl rounded-full bottom-[-140px] right-[-140px] sm:bottom-[-200px] sm:right-[-200px]' />



      {/* NAVBAR */}
      <Navbar/>

      {/* HERO */}
     <Hero/>

      {/* FEATURES */}
     <Features/>
      {/* LOGIN */}
      <LoginCard/>

      {/* STATS */}
    <Stats />

      {/* FOOTER */}
      <Footer />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur aliquid rem accusantium alias quos consequuntur odit autem tempora laborum corporis, nihil provident animi pariatur error nisi numquam? Illum, molestiae!</div>
    </div>
  );
}
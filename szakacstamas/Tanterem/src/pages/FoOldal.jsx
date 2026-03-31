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
    <div className="relative min-h-screen text-white bg-[#0A0E14]">

      {/* háttér */}
      <div className="fixed inset-0 -z-10 bg-[url('/kepek/kezdoHatter.jpg')] bg-cover bg-center" />

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
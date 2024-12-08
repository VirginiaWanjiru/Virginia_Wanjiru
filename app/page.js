import Image from "next/image";
import Hero from "@/app/components/HeroSection";
import Navbar from '@/app/components/Navbar';
import ProjectSection from '@/app/components/ProjectSection';

import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    
      <main className=" flex min-h-screen flex-col bg-black text-white ">
        <Navbar />
       <div className="container mx-auto py-4 px-12">
        <Hero/> 
        <AboutSection/>
        <ProjectSection/>

        </div>

       
        </main>
  )
}

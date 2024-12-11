import Image from "next/image";
import Hero from "@/app/components/HeroSection";
import Navbar from '@/app/components/Navbar';
import ProjectSection from '@/app/components/ProjectSection';
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    
      <main className=" flex min-h-screen flex-col bg-[#121212] ">
        <Navbar />
       <div className="container mt-24 mx-auto px-12 py-4">
        <Hero/> 
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
       

        </div>
        <Footer/>  
        </main>
  )
}

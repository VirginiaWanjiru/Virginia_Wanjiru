"use client"

import React from 'react';
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';




const HeroSection = () => {
  return (

    
    <section>
<div className="grid grid-cols-1 sm:grid-cols-12 mt-10">
 <div className= "col-span-7 place-self-center text-center sm:text-left"> 
<h1 className=" mb-4  text-4xl lg:text-5xl sm:text-5xl font-extrabold font-serif "> 
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-purple-500 ">Hello, I&apos;m Vee <br></br> Data Enthusiast</span>
   </h1>

   
    <div className=" text-white mb-4 text-4xl lg:text-2xl sm:text-2xl font-extrabold">
{/* <TypeAnimation sequence ={['',1000,'',1000,'',1000,'',1000,'',1000]}wrapper="span"speed={30} repeat={Infinity}/> */}
    
</div>
<p className='text-[ADB7BE] text-base text-balance text-md lg:text-sm mb-6'>
A motivated Business and Information Technology graduate from Strathmore University with a strong background in
Business Information Technology. Experienced in working within fast-paced environments, brings excellent
communication, organizational skills, and attention to detail, coupled with proficiency in digital tools. Has experience
in web development, artificial intelligence, data analysis, UX Design and IT Project Management to bring to life
scalable and realistic tech solutions.
</p>
<div>
    <button className=" px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via--purple-400 to-pink-500 hover:bg-slate-200 text-white hover:text-black w-full sm:w-fit ">Hire me </button>
    <button className=" px-6 py-3 rounded-full  bg-gradient-to-br from-blue-500 via--purple-400 to-pink-500 text-white hover:bg-slate-200 hover:text-black   mt-3 w-full sm:w-fit" >Download CV </button>
</div>
</div>

<div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
<div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]" >
    < Image 
    src='/lavender.png'
    alt="this is the photo"
    className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
    width={200}
    height={200} />
    </div>
    </div>

   
</div>

    </section>
  )
}

export default HeroSection;
import React from 'react';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
<div className="grid grid-cols-1 sm:grid-cols-12">
 <div className= "col-span-7 place-self-center"> 
<h1 className="text-white mb-4  text-4xl lg:text-6xl font-extrabold "> Hello, I am Vee, </h1>
<p className='text-[ADB7BE]text-lg lg:text-xl mb-6'>dwbhchsajnbchndbhjn</p>
<div>
    <button className=" px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black ">Hire me </button>
    <button className=" px-6 py-3 rounded-full bg-transparent text-white hover:bg-slate-200 hover:text-black border border-white  mt-3 " >Download CV </button>
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
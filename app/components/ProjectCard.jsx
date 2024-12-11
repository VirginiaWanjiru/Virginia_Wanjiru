import React from 'react'
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline"
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description ,gitUrl, previewUrl}) => {
  return (

    <div className=" w-full max-w-lg max-h-lg flex-shrink-0 container mx-auto px-4"  > 
        <div className=" h-52 md:h-72 relative group "
        style={{ background: `url(${imgUrl})`,backgroundSize: "cover"}}> 

        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link href={previewUrl} className="mr-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white"/>
            </Link>

            <Link href="/" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE]  cursor-pointer group-hover/link:text-white"/>
            </Link>
       
       
        </div>
        </div>
        <div className="text-white  bg-[#5c5757] bg-opacity-50 px-1 py-1">
            
            <h5 className="font-xl font-bold text-xl md:text-xl sm:text-xl ">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>

        </div>

    </div>
 
  
  )
}

export default ProjectCard
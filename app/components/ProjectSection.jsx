import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [

    {
        id:1,
        title: "React Website",
        description:" Audit Firm Website for a client H.W. Gichohi ",
        image:"/images/projects/picture3.jpg",
        tag:["Web"],
        gitUrl :"/",
        previewUrl:"/"
    },
    {
        id:2,
        title: "FAMA - FarmersConnectWeb ",
        description:" Farmers connect website integrated with Machine learning ",
        image:"/images/projects/picture3.jpg",
        tag:["Web"],
        gitUrl :"/",
        previewUrl:"/"
    },
{
    id:3,
    title: "BI Crop Prediction Analytics",
    description:" Crop Prediction Analytics",
    image:"/images/projects/picture3.jpg",
    tag:["Web"],
    gitUrl :"/",
    previewUrl:"/"
},
{
    id:4,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/picture3.jpg",
    tag:["Mobile"],
    gitUrl :"/",
    previewUrl:"/"
},
{
    id:5,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/picture3.jpg",
    tag:["Mobile"],
    gitUrl :"/",
    previewUrl:"/"
},
{
    id:6,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/picture3.jpg",
    tag:["Mobile"],
    gitUrl :"/",
    previewUrl:"/"
}
]


const ProjectSection = () => {
  return (
    <div>
        <h2 className="font-bold text-4xl mb-4 sm:place-items-center">My Projects  </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 text-white py-6 ">
            <button className="rounded-xl border-2 border-purple-500 px-4 py-4 text-xl cursor-pointer">All</button>
            <button  className="rounded-xl border-2 border-slate-600 px-4 py-4 text-xl cursor-pointer hover:border-white">Web</button>
            
        </div>
        <div> {projectsData.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)} </div>
    </div>
  )
}

export default ProjectSection
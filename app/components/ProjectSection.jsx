'use client'

import React from 'react'
import {useState} from "react";
import ProjectCard from './ProjectCard'
import ProjectTag from "./ProjectTag"

const projectsData = [

    {
        id:1,
        title: "React Website",
        description:" Audit Firm Website for a client H.W. Gichohi ",
        image:"/images/projects/react.png",
        tag:["Web"],
        gitUrl:"https://github.com/VirginiaWanjiru/HWGichohiWebsite.git",
        previewUrl:"https://hw-gichohi-website.vercel.app/"
    },
    {
        id:2,
        title: "FAMA - FarmersConnectWeb ",
        description:" Farmers connect website integrated with Machine learning ",
        image:"/images/projects/crop.png",
        tag:["Web", "Data"],
        gitUrl :"https://github.com/VirginiaWanjiru/FAMA-FarmersConnectWeb",
        previewUrl:"/"
    },
{
    id:3,
    title: "BI Crop Prediction Analytics",
    description:" Crop Prediction Analytics",
    image:"/images/projects/data.jpg",
    tag:["Data"],
    gitUrl :"https://github.com/VirginiaWanjiru/BIProject-Crop-Prediction-Analytics",
    previewUrl:"{No preview}"
},
{
    id:4,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/figma.png",
    tag:["Design"],
    gitUrl :"https://www.figma.com/design/VzwWG3ciXJOYszyUiizL01/Soko-V2?node-id=410-1342&node-type=canvas&t=fVDEwefU9vBrmLqi-0",
    previewUrl:"https://www.figma.com/design/VzwWG3ciXJOYszyUiizL01/Soko-V2?node-id=410-1342&node-type=canvas&t=fVDEwefU9vBrmLqi-0"
}


]


const ProjectSection = () => {
    const [tag, setTag] = useState("Web");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

  return (
    <div  className="container mb-10" id="projects">
        <h2 className="text-center font-bold text-4xl mb-2 sm:place-items-center">My Projects  </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-10 rounded-lg">
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Design" isSelected={tag === "Design"} />
            <ProjectTag onClick={handleTagChange} name="Data" isSelected={tag === "Data"} />
            
        </div>
        <div className="flex flex-cols-4 justify-center " > {filteredProjects.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)} </div>
    </div>
  )
}

export default ProjectSection
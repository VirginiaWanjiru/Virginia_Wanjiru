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
    tag:["Data"],
    gitUrl :"/",
    previewUrl:"/"
},
{
    id:4,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/picture3.jpg",
    tag:["Design"],
    gitUrl :"/",
    previewUrl:"/"
},
{
    id:5,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/picture3.jpg",
    tag:["Data"],
    gitUrl :"/",
    previewUrl:"/"
},
{
    id:6,
    title: " Promotion App for Shopping Malls ",
    description:" Project was about designing the UI for the mobile application",
    image:"/images/projects/picture3.jpg",
    tag:["Design"],
    gitUrl :"/",
    previewUrl:"/"
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
    <div  className="container mb-10">
        <h2 className="text-center font-bold text-4xl mb-2 sm:place-items-center">My Projects  </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-10 ">
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Design" isSelected={tag === "Design"} />
            <ProjectTag onClick={handleTagChange} name="Data" isSelected={tag === "Data"} />
            
        </div>
        <div className="flex flex-wrap justify-center " > {filteredProjects.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)} </div>
    </div>
  )
}

export default ProjectSection
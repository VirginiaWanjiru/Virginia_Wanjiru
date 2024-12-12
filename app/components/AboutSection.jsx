"use client"

import React from 'react'
import Image from 'next/image'
import {useTransition, useState} from "react";
import TabButton from "./TabButton";
import Me from "@/public/images/projects/me.png";

const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className=" list-disc pl-2  ">
                <li>
                   Front-End Development: HTML, CSS, Javascript, React, NextJs, TailwindCSS, FramerMotion
                </li>
                <li>
                Databases: MySQL, PostgreSQL 
                </li>
                <li>
                    Python
                </li>
                <li>
                    PowerBI
                </li>
                
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className=" list-disc pl-2  ">
               <li>Strathmore University: Bachelors of Business Information Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className=" list-disc pl-2  ">
                
                <li>
                 AWS Cloud Foundations 
                </li>
                <li>
                IBM Professional Data Analytics Certification
                </li>
                <li>
                Certificate of Data Protection
                </li>
                
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className=" list-disc pl-2  ">
                
                <li>
                 AWS Cloud Foundations 
                </li>
                <li>
                IBM Professional Data Analytics Certification
                </li>
                <li>
                Certificate of Data Protection
                </li>
                
            </ul>
        )
    },
]



const AboutSection = () => {
    const[tab, setTab] = useState("skills");
    const [isPending, startTransition,] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);

        });
    };




  return (
    <section className="text-white  " id="about">
        <div className="md:grid md:grid-cols-2 gap-4 items-center py-4 px-4 xl:gap-12 sm:py-12 xl:py-12 ml-20 ">
        <div><Image src={Me} alt="hdhdd" width={300} height={250} className="rounded"/> </div>
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full  ">
        <div> 
            <h2 className="text-4xl font-bold text-white mb-4 "> 
                About Me
            </h2>
            <p className=" text-base lg:text-sm ">Experienced in working within fast-paced environments, brings excellent
            communication, organizational skills, and attention to detail, coupled with proficiency in digital tools. 
            Has experience in web development, artificial intelligence, data analysis, UX Design and IT Project Management to bring to life
            scalable and realistic tech solutions.</p>

            <div className="flex flex-row justify-start mt-8  ">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> Certifications </TabButton> 
            
           
            </div> 
            <div className=" mt-8 "> {TAB_DATA.find((t) => t.id === tab).content}</div>      


       </div>
       </div>
        </div>
       

        
        </section>
  )
}

export default AboutSection
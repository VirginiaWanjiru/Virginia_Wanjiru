"use client"

import React from 'react'
import GitHubIcon from "@/public/images/projects/github.svg"
import LinkedinIcon from "@/public/images/projects/linkedin.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
          

         const options = {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSONdata,
         }

         const response = await fetch(endpoint, options);
         const resData = await response.json ();

         if (resData.status === 'success'){
            console.log('Message sent');
         }

    }
  return (
   <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4  bg-gradient-to-r from-blue-400 via-purple-500 to-pink-700 rounded-lg px-4 py-4 gap-4 relative">



    <div>
    <h5 className="text-2xl font-bold text-black my-2 mb-4"> Lets Connect </h5>
    <p className="text-neutral-200 mb-8 max-w-md"> 
    Looking for opportunities. My inbox is always open. Whether you have a question or just a hi, I&apos;ll try my best to get back to you.
    </p>
    <div className="socials flex flex-row gap-4 container border max-w-fit px-3 py-3 rounded-xl border-black ">
    <Link href="github.com">
    <Image src={GitHubIcon} alt="githubicon" className="h-10 w-auto" />
    </Link>

    <Link href="Linkedin.com">
    <Image src={LinkedinIcon} alt="linkedicon" className="h-10 w-auto"/>
    </Link>
    </div>
        </div> 
        <div >
            <form className="flex flex-col " onSubmit={handleSubmit}>
                <div className="mb-6">
                <label htmlFor="email" className="text-white block text-sm font-medium">Your Email</label>
                <input className=" bg-[#18191E] border border-[#33353] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2" name="email" type="email" id="email" required placeholder="johndoe@gmail.com" />
                </div>
                <div className="mb-6">
                <label htmlFor="subject">Subject</label>
                <input className=" bg-[#18191E] border border-[#33353] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 " name="subject" type="text" id="subject" required placeholder="Your subject here " />
                </div>

                <div className="mb-6">
                <label htmlFor="message">Message</label>
                <textarea className=" bg-[#18191E] border border-[#33353] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2" name="message" type="text" id="message" required placeholder="Lets talk about ..." />
                </div>

                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-3 rounded w-full "> Submit


                </button>

            </form>
        </div>
   </section>
  )
}

export default EmailSection
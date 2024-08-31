"use client";

import Image from "next/image";
import { useState } from "react";


export default function Projects() {

  const [projects, setProjects] = useState([
    {
      id: 4,
      title: "Hidalgo NFT",
      image: "/images/mockups/hidalgo.png",
      description:"Hidalgo NFT is a startup company I worked with in 2022. I was there front-end developer. Aside from developing the project, I was also responsible for overseeing things related to publication and design. The project also included a digital lore book and a minting site.",
      date: "February 2022",
      techstacks: [
        "HTML","CSS","JavaScript","React","TailWind"
      ],
      link:"/"
    },
    {
      id: 1,
      title: "Anapolo - Spaced Repetition",
      image: "/images/mockups/anapolo.png",
      description:"Anapolo is developed as my thesis. It aids law students memorize stuff they need to using flashcards. The software utilizes a scheduling method I developed for optimal scheduling. Aside from that, I also created an AI Law Professor which checks user's answer in the mock cases section. This application is really cool, check it out! ( I put my everything on it, It's my pride).",
      date: "May 2024",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"http://http://anapolothesis.wuaze.com/"
    },
    
  
    {
      id: 3,
      title: "Anabu Clinic Appointment System and Patient Management System",
      image: "/images/mockups/anabu.png",
      description:"It's common for barangays to still use manual method when it comes to everything. This project was a referesher to me, so I went to them and said, 'Hey, I'll create an application for your clinic, for free. Just let me do this!'",
      date: "July 2023",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"/"
    },
   
    {
      id: 5,
      title: "TransUnion Image Corp Transition Project Tracker",
      image: "/images/mockups/project tracker.png",
      description:"When I had my Internship with TransUnion, I was assigned to the infrastructure department, so no dev stuff there. But luckily, I was assigned to an ongoing project in which involved inventory management and project management, so I did this application haha!",
      date: "July 2024",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"/"
    },
    {
      id: 6,
      title: "MGHS Social Media Posting Planner",
      image: "/images/mockups/social media planner.png",
      description:"This project is dedicated to a friend of mine. I created this for him and asked him if I can add this to my portfolio. He didn't answer. I took that as a yes :). One of his tasks were to monitor and manage posts of companies assigned to him so... He wanted to please his manager so I added an admin side that creates reports. This app is also amazing!",
      date: "July 2024",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"/"
    },
    {
      id: 7,
      title: "Interview Letter Creator",
      image: "/images/mockups/interviewlettercreator.png",
      description:"This project is my first international commission. The client requested to create the application using Adalo which you'll find it hard to use if you do not have any programming background. I added this because I think this is worth it! By the way, it was really hard to integrate paypal here, luckily I found a third-party provider that completed the project.",
      date: "July 2024",
      techstacks: [
        "Adalo","PayPal","Zapier"
      ],
      link:"/"
    }  ,{
      id: 2,
      title: "Control History",
      image: "/images/mockups/1.png",
      description:"This is my very first chrome extension application. The main purpose of the application (based on my client), is to hide his porn history, totally from his browser, even if he went to them in the future. Google should be scared what I'm capable of. They should hire me. Really. (Google Developer Documentation is the worst).",
      date: "December 2023",
      techstacks: [
        "HTML","CSS","JavaScript","NodeJS","MongoDB", "PayPal"
      ],
      link:"/"
    },

  ])
  return (

   
   <div className="">


    <div className="projects-container">

<div className="title-container">
<p className="title poppins-medium text-5xl mb-20 proj-title">My Projects</p>
<div className="line"></div>
</div>


    

      {projects.map((project)=>(

       <div className="project-window mb-10">

        <div className="project-context mr-5">
          <div className="project-header">
            <p className="poppins-medium text-xl">{project.title}</p>
            <p>{project.date}</p>
          </div>

          <div className="techstack-proj">
      
        {project.techstacks.map((tech, index) => (
          <p className={tech} key={index}>{tech}</p> 
        ))}
      </div>

          <p className="project_description text-xs mt-3">{project.description}</p>

        </div>
        <div className="project-mock">

        <Image
              src= {project.image}
              alt= {project.title + "_img"}
              width={1000}
              height={1000}
              className="mock-img mt-10"
            />

        </div>
       </div>
      ))}

    </div>
    
   </div>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  const [loading, setLoading] = useState(true); // Track loading state

  // Initialize AOS (animation library)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to handle image loading completion
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when images have loaded
  };

  const [projects, setProjects] = useState([
    {
      id: 4,
      title: "Hidalgo NFT",
      image: "/images/mockups/hidalgo.png",
      description: "Hidalgo NFT is a startup company I worked with in 2022. I was their front-end developer. Aside from developing the project, I was also responsible for overseeing things related to publication and design. The project also included a digital lore book and a minting site.",
      date: "February 2022",
      techstacks: [
        "HTML","CSS","JavaScript","React","TailWind"
      ],
      link:"https://hidalgo-nft-official.pages.dev/"
    },
    {
      id: 1,
      title: "Anapolo - Spaced Repetition",
      image: "/images/mockups/anapolo.png",
      description: "Anapolo is developed as my thesis. It aids law students memorize stuff they need to using flashcards. The software utilizes a scheduling method I developed for optimal scheduling. Aside from that, I also created an AI Law Professor which checks user's answers in the mock cases section. This application is really cool, check it out! ( I put my everything on it, It's my pride).",
      date: "May 2024",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"http://anapolothesis.wuaze.com/"
    },
    {
      id: 2,
      title: "Control History",
      image: "/images/mockups/1.png",
      description: "This is my very first Chrome extension application. The main purpose of the application (based on my client), is to hide his porn history, totally from his browser, even if he visits those sites in the future. Google should be scared of what I'm capable of. They should hire me. Really. (Google Developer Documentation is the worst).",
      date: "December 2023",
      techstacks: [
        "HTML","CSS","JavaScript","NodeJS","MongoDB", "PayPal"
      ],
      link:"https://chromewebstore.google.com/detail/control-history/jjnfnjihahafmfncpholikbckebepcji?hl=en&pli=1"
    },
    {
      id: 8,
      title: "Bankist",
      image: "/images/mockups/bankist.png",
      description: "Bankist is a single-page application created to simulate a banking application.This application utilizes state management only and does not use any database. Did this as a refresher. :)",
      date: "November 2024",
      techstacks: [
        "HTML","CSS","JavaScript","React","TailWind"
      ],
      link:"https://my-bankistv2.netlify.app"
    },
    {
      id: 7,
      title: "Interview Letter Creator",
      image: "/images/mockups/interviewlettercreator.png",
      description: "This project is my first international commission. The client requested to create the application using Adalo, which you'll find hard to use if you do not have any programming background. I added this because I think it's worth it! By the way, it was really hard to integrate PayPal here, luckily I found a third-party provider that completed the project.",
      date: "July 2024",
      techstacks: [
        "Adalo","PayPal","Zapier"
      ],
      link:"https://davids-team-305.adalo.com/"
    },
    {
      id: 6,
      title: "MGHS Social Media Posting Planner",
      image: "/images/mockups/social media planner.png",
      description: "This project is dedicated to a friend of mine. I created this for him and asked him if I can add this to my portfolio. He didn't answer. I took that as a yes :). One of his tasks was to monitor and manage posts of companies assigned to him, so... He wanted to please his manager, so I added an admin side that creates reports. This app is also amazing!",
      date: "July 2024",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"http://social-medial-planner.infinityfreeapp.com/"
    },
    {
      id: 3,
      title: "Anabu Clinic Appointment System and Patient Management System",
      image: "/images/mockups/anabu.png",
      description: "It's common for barangays to still use manual methods when it comes to everything. This project was a refresher for me, so I went to them and said, 'Hey, I'll create an application for your clinic, for free. Just let me do this!'",
      date: "July 2023",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:""
    },
    {
      id: 5,
      title: "TransUnion Image Corp Transition Project Tracker",
      image: "/images/mockups/project tracker.png",
      description: "When I had my internship with TransUnion, I was assigned to the infrastructure department, so no dev stuff there. But luckily, I was assigned to an ongoing project involving inventory management and project management, so I did this application haha!",
      date: "July 2024",
      techstacks: [
        "HTML","CSS","JavaScript","PHP","MySQL"
      ],
      link:"#"
    },
    
  
   
  ]);

  return (
    <div className="">
      <div className="projects-container">
        {/* Show loader until everything is loaded */}
        {loading && (
          <div className="loader">
            {/* This can be a spinner or any loader of your choice */}
            <div className="spinner"></div>
          </div>
        )}
        
        <div className="title-container">
          <p className="title poppins-medium text-5xl mb-20 proj-title">My Projects</p>
          <div className="line"></div>
        </div>

        {projects.map((project) => (
          <div className="project-window mb-10" key={project.id}>
            <div className="project-context mr-5" data-aos="fade-down-right" data-aos-duration="1500">
              <div className="project-header">
                <p className="poppins-medium text-xl">{project.title}</p>
                <p>{project.date}</p>
              </div>
              <div className="techstack-proj">
                {project.techstacks.map((tech) => (
                  <p className={tech} key={tech}>{tech}</p>
                ))}
              </div>
              <p className="project_description text-xs mt-3">{project.description}</p>
            </div>
            <div className="project-mock" data-aos="fade-down-left" data-aos-duration="1500">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title + "_img"}
                  width={1000}
                  height={1000}
                  className="mock-img mt-10"
                  onLoadingComplete={handleImageLoad} // Trigger when the image has finished loading
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


















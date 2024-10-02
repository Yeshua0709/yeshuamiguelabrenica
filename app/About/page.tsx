"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const timelineData = [
    {
      year: "October 2024",
      title: "College is Over!",
      description:
        "After 17 years, I'm finally done studying. I'm still thinking whether I should pursue a Master's degree. Should I? ",
      accentColor: "#41516C",
    },
    {
      year: "April 2024",
      title: "Internship With TransUnion",
      description:
        "Not to brag, but I had the best internship ever. If you're looking for companies to apply for your internship, shoot your shot with TransUnion as they provide tasks that are real, meaning, their program for interns is within the company's business process. + The allowance is big!",
      accentColor: "#FBCA3E",
    },
    {
      year: "2021 - 2023",
      title: "My Mapua Journey",
      description:
        "I wouldn't state it was hard, but it's not easy also. Kinda mid. I was able to maintain my ranking as a consistent dean's lister & a 3-time overall Rank 1. During This time, I had a lot of projects and most of them are from international. You may check-out those projects in my Projects Section.",
      accentColor: "#E24A68",
    },
    {
      year: "2021",
      title: "I finished Senior HS with High Honors!",
      description:
        "Initially, it was my mom's choice for me to take a computer-related strand. so I majored in computer programming in senior highschool with Asian Institute in Computer Studies PH. This was the time I got hooked with programming, because before, I had 0 background with it. Believe me, this wasn't my thing before cause I was into multimedia arts but I needed to up my game because I was really competitive so I did a lot of self-study to catch-up with my classmates. ",
      accentColor: "#1B5F8C",
    }
  ];


  return (
    <div className="projects-container">
      <div className="title-container">
        <p className="title poppins-medium text-5xl mb-20 proj-title">About Me</p>
        <div className="line"></div>
      </div>

      <div className="about-header">
        <div className="about-context" data-aos="fade-right" data-aos-duration="1000">
          <p className="text-xl"  data-aos="fade-right" data-aos-duration="1500">
            I&apos;m a <span className="poppins-semibold">Magna Cum Laude</span> Graduate from{" "}
            <span className="poppins-semibold">Mapua University</span> with a bachelor&apos;s degree in{" "}
            <span className="poppins-semibold">Information Technology</span> majoring in{" "}
            <span className="poppins-semibold">Application Development</span>.
          </p>

          <br />

          <p className="text-xl"  data-aos="fade-right" data-aos-duration="2000">
            I like to build solutions that make the <span className="poppins-semibold">world</span> a{" "}
            <span className="poppins-semibold">better place.</span>
          </p>

          <br />

          <p className="text-xl"  data-aos="fade-right" data-aos-duration="2500">
            Aside from programming, I also do{" "}
            <span style={{ color: "gray", textDecoration: "underline", fontWeight: "500" }}>
              <Typewriter
                words={["Web Design.", "Photography.", "Project Management.", "Graphic Design.", "Video Editing."]}
                loop={0} // 0 for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <br />

          <p className="text-xl"  data-aos="fade-right" data-aos-duration="3000">
            If you are interested in hiring me, here&apos;s my{" "}
            <a href="/cv.pdf" download="CV-Abrenica" style={{ textDecoration: "underline", color: "inherit" }}>
              resume
            </a>.
          </p>
        </div>

        <div className="about-img"  data-aos="fade-left" data-aos-duration="1000">
          <Image
            src="/images/about-banner.jpg"
            alt="about-banner"
            width={700}
            height={700}
            className=""
          />
        </div>
      </div>


      <div className="timeline-container mt-40">
      <h1 className="timeline-header mb-20"><p className="text-3xl">My journey as a developer so far...</p></h1>
      <ul className="timeline-list">
  {timelineData.map((item, index) => (
    <li 
      key={index} 
      className="timeline-item" 
      data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
      style={{ "--accent-color": item.accentColor } as React.CSSProperties}
    >
      <div className="timeline-date">{item.year}</div>
      <div className="timeline-title">{item.title}</div>
      <div className="timeline-descr">{item.description}</div>
    </li>
  ))}
</ul>
      
    </div>
     


    </div>
  );
}
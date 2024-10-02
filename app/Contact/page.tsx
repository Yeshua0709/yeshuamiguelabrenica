'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
<div className="projects-container main-about">
    
<div className="title-container about">
        <p className="title poppins-medium text-5xl mb-20 proj-title">Hit Me Up</p>
        <div className="line"></div>
      </div>

<p className="text-2xl sub" data-aos="fade-right" data-aos-duration="1000">Reach out, and let&apos;s make things happen!</p>
<br></br>
<p className="text-2xl sub"  data-aos="fade-right" data-aos-duration="1500">You may send me an <a style={{textDecoration:"underline", fontWeight:"500"}} href="mailto:abrenica.y@gmail.com">email.</a></p>
<br></br>
<p className="text-2xl sub"  data-aos="fade-right" data-aos-duration="2000">or contact me through Viber, <span style={{textDecoration:"underline", fontWeight:"500"}}>+63-997-215-7320</span></p>
</div>
  );
}

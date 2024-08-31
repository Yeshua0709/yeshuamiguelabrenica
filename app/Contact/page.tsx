import Image from "next/image";

export default function Contact() {
  return (
<div className="projects-container main-about">
    
<div className="title-container about">
        <p className="title poppins-medium text-5xl mb-20 proj-title">Hit Me Up</p>
        <div className="line"></div>
      </div>

<p className="text-2xl sub">Reach out, and let's make things happen!</p>
<br></br>
<p className="text-2xl sub">You may send me an <a style={{textDecoration:"underline", fontWeight:"500"}} href="mailto:abrenica.y@gmail.com">email.</a></p>
<br></br>
<p className="text-2xl sub">or contact me through Viber, <span style={{textDecoration:"underline", fontWeight:"500"}}>+63-997-215-7320</span></p>
</div>
  );
}

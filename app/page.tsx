import Image from "next/image";
import "./globals.css";
import Link from "next/link";
export default function Home() {
  return (
   
    <div className="">


<div className="home-container">

  <div className="home-flex">

        <div className="banner-text">

        <p className="text-3xl pb-2 title"> <b className="poppins-semibold title">Magna Cum Laude</b> Graduate</p>
        <p className="text-2xl">Mapua University</p>
        <br></br>
        <p className="text-lg">A 22-year old <b className="poppins-medium">developer</b> based in Manila, Philippines</p>
        <br></br>

        <a href="mailto:abrenica.y@gmail.com" className="connect-btn">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>

        Connect with me</a>
        </div>


      <div className="banner-img">
      <Image
              src="/images/image-banner.png"
              alt="My Image"
              width={400}
              height={200}
              className="image-banner"
            />
      </div>
  </div>

</div>


<div className="techstack-main">
<div className="techstack">
<div className="title poppins-medium">My Techstack</div>

<div className="techstack-container">
<Image
              src="/images/techstack/1.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
<Image
              src="/images/techstack/2.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
<Image
              src="/images/techstack/3.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
        
        <Image
              src="/images/techstack/4.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/5.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/6.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
              <Image
              src="/images/techstack/7.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/8.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/9.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/10.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/11.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
</div>
</div>
</div>


<div className="techstack-main">
<div className="techstack">
<div className="title poppins-medium">My Other Tools</div>

<div className="techstack-container">
<Image
              src="/images/techstack/12.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
<Image
              src="/images/techstack/13.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
<Image
              src="/images/techstack/14.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
        
        <Image
              src="/images/techstack/15.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/16.png"
              alt="My Image"
              width={100}
              height={100}
               className="techstack-logo"
            />
              <Image
              src="/images/techstack/17.png"
              alt="My Image"
              width={100}
              height={100}
              className="techstack-logo"
            />
              
</div>
</div>
</div>

<div className="mockups">

  <div className="mockups-header">
  <p className="title poppins-medium text-5xl">Projects I’ve worked on</p>
  <Link href="/Projects" className="view-btn"> 
  <svg  xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-arrow-right-short view-logo" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
  
  View More</Link>
  </div>


<div className="mockups-container">

  <div className="left">
 
    <p className="text-xl poppins-medium">Anapolo - Spaced Repetition Software</p>
  <Image
              src="/images/mockups/anapolo.png"
              alt="My Image"
              width={1000}
              height={1100}
              className="mock-img"
            />

  </div>

  <div className="right">
    <div className="right-window mb-4">
    <p className="text-base poppins-medium">TransUnion Project Tracker</p>
    <Image
              src="/images/mockups/project tracker.png"
              alt="My Image"
              width={600}
              height={500}
              className="mock-img mt-10"
            />

    </div>
    <div className="right-window">
    <span className="text-base poppins-medium">Social Media Planner</span>
    <Image
              src="/images/mockups/social media planner.png"
              alt="My Image"
              width={500}
              height={500}
              className="mock-img "
            />

    </div>
  </div>

</div>

</div>


</div>


  );
}

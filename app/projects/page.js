"use client";
import Navbar from "@/components/home/Navbar";
import PageTransition from "@/components/home/PageTransition";
import Image from "next/image";
import React, {useState} from "react";
import {AiFillGithub} from "react-icons/ai";
import {motion} from "framer-motion";
import {BiLinkExternal} from "react-icons/bi";
import Link from "next/link";
import AppModal from "@/components/home/AppModal";
// import { useRouter } from "next/router";
const Project = () => {
  //  const router = useRouter()
  const [modal, setmodal] = useState(false);
  const [currentProject, setcurrentProject] = useState({});

  const projects = [
    {
      title: "Movie Explorer Application",
      repoLink: "https://github.com/FHSS-USJ/assignment-02-HiruniKau.git",
      liveLink: "",
      imgSrc: "/public/movie.png",
      delay: 0.6,
      link: "",
      skills: [
        "tsx",
        "css",
        "next js",
        "react js",
        "uiux design",
        "context API",
      ],
      desc: `A Next.js 14 app leveraging SSR and CSR to offer seamless movie browsing from a mocked database. This project demonstrates dynamic routing, responsive design, and data-driven UI.`,
    },
    {
      title: "We@FHSS App - Color Rechange",
      repoLink: "",
      liveLink: "https://www.figma.com/design/KpAJqJ6NO968pUguD0pAji/We%40fhss-App-Color-Rechange?node-id=0-1&t=EwS3NhXuaYnbvn8X-1",
      imgSrc: "/public/fhss.png",
      delay: 0.8,
      link: "",
      skills: ["uiux design", "Color Theory", "User-Centric Design", "Figma"],
      desc: `A redesign initiative where I transformed the app's visual theme to a vibrant yellow palette, enhancing user experience through a refreshed, cohesive color scheme`,
    },
    {
      title: "Travelidea Travel Booking App",
      imgSrc: "/public/travel.png",
      repoLink: "",
      liveLink: "https://www.figma.com/design/zyF6Xy4XpC8J8tGzeG12SK/Travel-Booking-App?node-id=262-65&t=AKzxozryX4RUcHLZ-1",
      delay: 0.9,
      link: "",
      skills: ["uiux design", "Color Theory", "User-Centric Design", "Figma"],
      desc: `TravelIdea is a dynamic UI/UX design project focused on creating an intuitive platform for travel enthusiasts. It features user-friendly navigation, visually appealing layouts, and interactive elements to inspire seamless trip planning. 
      The design emphasizes accessibility and aesthetic balance, catering to users seeking an engaging and efficient travel planning experience.
      `,
    },
  ];
  return (
    <>
      <PageTransition />
      <div className='container xl:max-w-5xl mx-auto h-max-content xl:h-screen flex flex-col justify-center align-middle  px-5 xl:px-0 xl:py-0 py-28 text-white'>
        <div className='grid xl:grid-cols-2 gap-4 '>
          <div className='flex flex-col justify-center text-center xl:text-start align-middle'>
            <h1 className='text-3xl  font-bold  '>
              My <span className='main-heading mr-2'>Projects</span>
            </h1>
            <p className='mt-2 xl:max-w-lg constant-text'>
            Discover my portfolio and experience the fusion of vibrant user interfaces, responsive design, and cutting-edge web trends. Together, we can bring digital visions to life, crafting impactful experiences, one pixel and one line of code at a time
            </p>
            <a
              href='https://drive.google.com/file/d/1UQpHc93cdfORs03lDjSF4hxGq5tBurcQ/view?usp=sharing'
              download='MyCV.pdf'
            >
              <button className='bg-white  main-heading mt-5 block mx-auto xl:mx-0 mb-9 xl:mb-0  font-bold rounded px-4 py-2'>
                More coming soon
              </button>
            </a>
          </div>

          {projects.map((currElm) => {
            return (
              <>
                <motion.div
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 1, delay: currElm.delay}}
                  onClick={() => {
                    setmodal(true);
                    setcurrentProject(currElm);
                    // console.log(currentProject[0].skills)
                  }}
                 
                  className='xl:px-8 xl:py-6 px-5 py-5 rounded border mb-5 xl:mb-0 cursor-pointer relative project-group overflow-hidden'
                >
                  <Image
                    className='shadow rounded md:w-full md:h-60 object-cover mx-auto project-card'
                    width={"500"}
                    height={"500"}
                    src={currElm.imgSrc}
                    alt='no'
                  
                  />

                  <div  onClick={() => setmodal(false)} className='text text-white h-0  text-2xl absolute bottom-0 left-0 hover-bg   w-full flex  align-bottom '>
                    <Link
                   
                      href={currElm.repoLink}
                      className='fa-brands ms-5 mb-5 mt-auto  w-10 border py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
                    >
                      <AiFillGithub />
                    </Link>
                    <Link
                      href={currElm.liveLink}
                      className='fa-brands ms-2 mb-5 mt-auto  w-10 border py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
                    >
                      <BiLinkExternal />
                    </Link>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>

      {/* modal */}
      <AppModal
        title={"Project"}
        setmodal={setmodal}
        modal={modal}
        footer={null}
        width={800}
      >
        <Image
          className='shadow rounded w-screen h-60 mx-auto project-card'
          width={"500"}
          height={"500"}
          src={currentProject.imgSrc}
          alt='no'
        />
        {currentProject?.skills?.map((currElm) => {
          return (
            <>
              <button className='  main-heading font-bold rounded-full px-4 skills ms-2 mt-2'>
                {currElm}
              </button>
            </>
          );
        })}

        <div className='border-l-2 md:ms-4 mt-7 border-black h-max-content '>
          <h1 className=' font-bold text-3xl ms-4 mb-3'>
            {currentProject.title}
          </h1>
          <p className=' ms-4 text-justify mb-3 constant-text '>
            {currentProject.desc}
          </p>
          <div className=' text-2xl   w-full flex   '>
            <Link
              href={currentProject.repoLink}
              className='fa-brands ms-5 mb-5 mt-auto modal-btn  w-10 border shadow-xl py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
            >
              <AiFillGithub />
            </Link>
            <Link
              href={currentProject.liveLink}
              className='fa-brands ms-2 mb-5 mt-auto modal-btn  w-10 border shadow-xl py-2 px-2 duration-500 h-10 rounded-full   bg-white main-heading hover:scale-90 hover:bg-white'
            >
              <BiLinkExternal />
            </Link>
          </div>
        </div>
      </AppModal>

      {/* navbar for desktop */}
      <div className='hidden px-5 py-4 xl:flex flex-col gap-8 text-2xl justify-between  items-center nav-bg  nav-desktop  h-max  rounded-full'>
        <Navbar />
      </div>

      {/* navbar for mobile */}
      <div className=' px-5 py-3 flex xl:hidden gap-8 text-3xl  mobile-nav-bg justify-between fixed bottom-0  items-center  w-screen h-max  '>
        <Navbar from='mobile-nav' />
      </div>
    </>
  );
};

export default Project;

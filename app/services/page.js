import Lists from "@/components/home/Lists";
import Modal from "@/components/home/AppModal";
import Navbar from "@/components/home/Navbar";
import PageTransition from "@/components/home/PageTransition";
import React from "react";
import {FaReact} from "react-icons/fa";
import Image from "next/image";

const Services = () => {
 
  return (
    <>
      <Image
        className='absolute hidden md:block right-0 bottom-0 mix-blend-screen '
        src={"./pattern.jpg"}
        width={"400"}
        height={"400"}
      />

      <PageTransition />
      <div className='container mx-auto flex flex-col xl:px-0 px-5 justify-center align-middle h-max-content xl:h-screen  '>
        <div className='grid xl:grid-cols-3 gap-3 '>
          {/* first col */}
          <div className='text-center mt-10 xl:text-start mb-8 xl:mb-0'>
            <h1 className='text-white text-3xl  mt-20  font-bold mb-4 '>
              What I Do <span className='main-heading'>Know</span>
            </h1>
            <p className='constant-text mx-auto text-center xl:text-left '>
            Unlock the potential of your digital projects with my innovative approach. As a dedicated IT undergraduate specializing in UI/UX design and web development, I focus on creating engaging and user-friendly web solutions. My passion for technology drives me to craft visually appealing interfaces that prioritize both performance and usability. Whether you need a personal portfolio, an interactive application, or guidance on the latest design trends, 
            I'm here to collaborate and bring your vision to life. Let's work together to transform your ideas into a captivating online experience!
            </p>
            <a
              href='https://drive.google.com/file/d/1UQpHc93cdfORs03lDjSF4hxGq5tBurcQ/view?usp=sharing'
              download='MyCV.pdf'
            >
              <button className='bg-white hidden md:block main-heading mt-5  mx-auto xl:mx-0 mb-9 xl:mb-0  font-bold rounded px-9 py-2'>
                Reach me
              </button>
            </a>
            <div
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 1}}
              className=' xl:flex md:hidden  xl:-mt-20 flex-col justify-center  '
            >
              <Image
                className='shadow rounded '
                width={"600"}
                height={"600"}
                src={"./coding 2.png"}
                alt='no'
              />
            </div>
          </div>
          {/* second col */}
          <div className='xl:col-span-2 xl:me-8 xl:mt-20'>
            <div className='services-bg h-max-content mb-44 xl:mb-0 xl:p-10 p-5 rounded '>
              <Lists />
            </div>
          </div>
        </div>
      </div>

      {/* navbar for desktop */}
      <div className='hidden px-5 py-4 xl:flex  flex-col gap-8 text-2xl justify-between  items-center nav-bg  nav-desktop  h-max  rounded-full'>
        <Navbar />
      </div>

      {/* navbar for mobile */}
      <div className=' px-5 py-3 flex  mobile-nav-bg  xl:hidden gap-8 text-3xl justify-between fixed bottom-0  items-center  w-screen h-max  '>
        <Navbar from='mobile-nav' />
      </div>
    </>
  );
};

export default Services;

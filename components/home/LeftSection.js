"use client"
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {BsFacebook} from "react-icons/bs";
import {motion} from "framer-motion";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import TypeWriter from "./TypeWrite";
import TypeWrite from "./TypeWrite";

const LeftSection = () => {
  return (
    <>
      <div className=' text-center flex flex-col justify-center  xl:text-left'>
        <motion.h1
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1 , delay : 0.8}}
          className='text-3xl md:text-5xl  mb-5 font-bold  text-white '
        >
          Hi! &#x1F44B; , <br />
          I am Hiruni <br />
          <span className='main-heading'>IT Undergraduate</span>
        </motion.h1>
         <TypeWrite />

        <p className='text-white xl:max-w-lg '>
        Driven by a passion for transforming concepts into immersive digital experiences, 
        I thrive in the fast-paced world of web development and design. Each project is a new opportunity to innovate and make a meaningful impact, 
        blending creativity with technology to craft solutions that resonate and engage.
        </p>

        <span className='inline-flex text-2xl text-white mt-3 mx-auto xl:mx-0 '>
          <Link href={'https://github.com/HiruniKau'} className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90  hover:bg-white'>
            <AiFillGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/hiruni-kaushalya-indrajith-446688311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90 hover:bg-white'>
            <FaLinkedinIn />
          </Link>
          <Link href={'hirunikaushalyaindrajith@gmail.com'} className='fa-brands mr-2  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90 hover:bg-white'>
            <MdEmail />
          </Link>
          <Link href={'tel:0754239617'} className='fa-brands  w-10 border py-2 px-2 duration-500 h-10 rounded-full icon-hover hover:scale-90 hover:bg-white'>
            <IoLogoWhatsapp />
          </Link>
        </span>
      </div>
    </>
  );
};

export default LeftSection;

"use client"
import Navbar from "@/components/home/Navbar";
import PageTransition from "@/components/home/PageTransition";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <>

<Image className="absolute right-0 bottom-0 mix-blend-screen " src={"./pattern.jpg"} width={"500"} height={"500"} />

    <PageTransition />
      <div className='container mx-auto h-screen flex justify-center xl:px-0 px-5 align-middle'>

        <motion.div  initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 1}} className='flex justify-center flex-col'>
      <h1 className="text-white text-3xl text-center font-bold mb-8 ">Get in <span className="main-heading">Touch.</span> </h1>

          <div className='grid grid-cols-2 gap-2'>
          
            <input type='text' placeholder="Name"  required className=' input-border py-1 px-2' />
            <input type='text' placeholder="Email" className='input-border py-1 px-2' />
           
          </div>
          <div className='mt-5'>
            <input type='text' placeholder="Subject" className='input-border py-1 px-2 w-full' />
          </div>
          <div className='mt-5'>
            <textarea type='text' placeholder="Message" rows={'5'} className='input-border py-1 px-2 w-full' />
          </div>
          <div className='mt-5'>
            <button className='input-border py-1 px-2 form-btn text-white text-bold w-full bg-violet-900 rounded-full'>Submit</button>
          </div>

          <div className="mt-10 text-center">
          <h2>+94-754239617</h2>
          <h2>hirunikaushalyaindrajith@gmail.com</h2>
          <h2>Hiruni Kaushalya Indrajith</h2>
          </div>

          <div className="mt-20 text-center">
            <h2>© 2024 Hiruni Kaushalya. All rights reserved.</h2>
          </div>
        </motion.div>
      </div>

       {/* navbar for desktop */}
       <div className='hidden px-5 py-4 xl:flex flex-col gap-8 text-2xl justify-between  items-center nav-bg  nav-desktop  h-max  rounded-full'>
        <Navbar />
      </div>

       {/* navbar for mobile */}
       <div className=' px-5 py-3 flex xl:hidden  mobile-nav-bg gap-8 text-3xl justify-between fixed bottom-0  items-center nav-bg w-screen h-max  '>
        <Navbar from='mobile-nav' />
      </div>

    </>
  );
};

export default Contact;

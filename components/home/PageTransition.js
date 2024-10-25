"use client";
import {motion, AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import React from "react";

const PageTransition = () => {
  const path = usePathname()
  // console.log(paths);
  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
        className='w-screen z-50 h-screen fixed right-full bottom-0 top-0 transition-one' 
        key={path}       
        initial={{x : '100%' , width : '100%'}}
        animate={{x : '0%' , width : '0%'}}
        exit={{x : ['0%' , '100%'] , width : ['0%' , '100%']}}
        
        transition={{duration: 0.9, ease: "easeInOut"}}
      ></motion.div>
       <motion.div
        className='w-screen z-30 h-screen fixed right-full bottom-0 top-0 transition-two'        
        initial={{x : '100%' , width : '100%'}}
        animate={{x : '0%' , width : '0%'}}
        exit={{x : ['0%' , '100%'] , width : ['0%' , '100%']}}
        transition={{duration: 0.9, delay:0.2 , ease: "easeInOut"}}
      ></motion.div>
       <motion.div
        className='w-screen z-10 h-screen fixed right-full bottom-0 top-0 transition-three'
       
        initial={{x : '100%' , width : '100%'}}
        animate={{x : '0%' , width : '0%'}}
        exit={{x : ['0%' , '100%'] , width : ['0%' , '100%']}}
        transition={{duration: 0.9, delay : 0.4 , ease: "easeInOut"}}
      ></motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;

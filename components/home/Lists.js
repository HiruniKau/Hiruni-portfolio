"use client";
import React from "react";
import {BsCodeSlash} from "react-icons/bs";
import {FaConnectdevelop, FaFigma, FaReact} from "react-icons/fa";
import {SiNextdotjs} from "react-icons/si";
import {motion} from "framer-motion";

const Lists = () => {
  const servicesData = [
    {
      title: "Web Designing",
      desc: "Elevate your online presence with stunning web design. I craft visually appealing, responsive websites that capture your brand's essence and engage visitors across all devices.",
      icon: <FaConnectdevelop />,
      delay : 1
    },
    {
      title: "Custom Web Applications",
      desc: "Create custom web applications tailored to your needs. I develop solutions that are functional, user-friendly, and secure, ensuring your application is scalable and meets your unique requirements.",
      icon: <BsCodeSlash />,
      delay : 1.3
    },
    {
      title: "UIUX Design",
      desc: "Enhance user experiences with intuitive UI/UX design. I focus on understanding user needs to create visually appealing interfaces that engage and satisfy.",
      icon: <FaFigma />,
      delay : 1.6
    },
    {
      title: "Next.js Development",
      desc: "Build fast and scalable web applications with Next.js. I specialize in creating dynamic, server-rendered solutions that optimize performance.",
      icon: <SiNextdotjs />,
      delay : 1.9
    },
  ];
  return (
    <>
      <div class='md:w-2/3'>
        <div class='relative mt-5 text-left'>
          {servicesData.map((currElm) => {
            return (
              <>
                <motion.div
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 1, delay: currElm.delay}}
                  class='flex items-center relative'
                >
                  <div class='border-r-2 list-border absolute h-full left-1 md:left-20 top-2 '>
                    <i class='fas fa-circle -top-1 -ml-4 ps-1 pt-1 absolute text-3xl bg-white rounded-full h-10 w-10 main-heading'>
                      {currElm.icon}
                    </i>
                  </div>
                  <div class='md:ml-28 ml-10'>
                    <div class='font-bold'>{currElm.title}</div>

                    <div class='mb-10 '>{currElm.desc}</div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lists;

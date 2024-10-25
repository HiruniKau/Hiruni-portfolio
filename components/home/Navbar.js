"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
//react icons
import {AiFillHome, AiFillMessage} from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";
import {FaBriefcaseMedical} from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Navbar = ({from}) => {
    const pathname = usePathname()
    // console.log(paths);
  const navs = [
    {
      name: "home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      name: "about",
      icon: <FaUserAlt />,
      path: "/about",
    },
    {
      name: "projects",
      icon: <FaBriefcaseMedical />,
      path: "/projects",
    },
    {
      name: "servives",
      icon: <MdOutlineMiscellaneousServices />,
      path: "/services",
    },
    {
      name: "contact",
      icon: <AiFillMessage />,
      path: "/contact",
    },
   
     
  ];
  return (
    <>
      
        {navs.map((currElm, index) => {
          return (
            <>
            {from !== 'mobile-nav' && (
              <Link key={index} className=' flex'  href={currElm.path}>
              <span className="absolute icons-text">{currElm.name}</span>
            <i className={pathname === currElm.path ? 'main-heading ' : 'text-white icon-hover duration-500' }>{currElm.icon} </i>  
              </Link>
            )}               

              {from === 'mobile-nav' && (
                <Link key={index} className=' flex'  href={currElm.path}>
              <span className="absolute icons-text">{currElm.name}</span>
            <i className={pathname === currElm.path ? 'main-heading bg-white rounded-full h-16 w-16 ps-4 pt-4 overflow-hidden ' : 'text-white icon-hover duration-500' }>{currElm.icon} </i>  
              </Link>
              ) }
            </>
          );
        })}
      
    </>
  );
};

export default Navbar;

import LeftSection from "@/components/home/LeftSection";
import Navbar from "@/components/home/Navbar";
import PageTransition from "@/components/home/PageTransition";
import ParticlesBg from "@/components/home/ParticlesBg";
import RightImg from "@/components/home/RightImg";
import Image from "next/image";

export default function Home() {
  return (
    <>

    
    <ParticlesBg />
    <PageTransition />
      <div className='container mx-auto h-screen main overflow-hidden px-5 xl:px-0 flex justify-center align-middle'>
        {/* <p className="text-lg text-white">hello</p> */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 '>
          {/* left side */}
          <LeftSection />

          {/* right side */}
          <RightImg src='/public/profile.png'/>
        </div>
      </div>

      {/* navbar for desktop */}
      <div className='hidden px-5 py-6 xl:flex flex-col gap-8 text-2xl justify-between  items-center nav-bg  nav-desktop  h-max  rounded-full'>
        <Navbar />
      </div>

       {/* navbar for mobile */}
       <div className=' px-5 py-3 flex xl:hidden gap-8 text-3xl justify-between fixed bottom-0 mobile-nav-bg  items-center nav-bg w-screen h-max  '>
        <Navbar from='mobile-nav' />
      </div>
      
    </>
  );
}

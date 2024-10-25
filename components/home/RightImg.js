"use client";
import {motion} from "framer-motion";
import Image from "next/image";

const RightImg = ({src}) => {
  return (
    <>
      <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 1}}
        className='hidden xl:flex flex-col justify-center  '
      >
        <Image
          className='shadow rounded '
          width={"600"}
          height={"600"}
          src={src}
          alt='no'
        />
      </motion.div>
    </>
  );
};

export default RightImg;

import React from "react";
import { Typewriter , Cursor} from 'react-simple-typewriter'

const TypeWrite = () => {

  return (
  
      <p className="hidden md:block text-2xl xl:text-3xl mb-3 xl:mb-1 type">
        I'm a
        <span className="ms-2 main-heading" >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['UIUX Designer', 'Next JS Developer', 'Frontend Developer']}
            loop={5}            
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <Cursor />
      </p>
   
  )
}


export default TypeWrite;



// import React from 'react';
// import grained from 'grained';


// var options = {
//     animate: true,
//     patternWidth: 100,
//     patternHeight: 100,
//     grainOpacity: 0.05,
//     grainDensity: 1,
//     grainWidth: 1,
//     grainHeight: 1
//   };


//   const MyComponent = () => {
//     React.useEffect(() => {
//       if (typeof window !== 'undefined') {
//         grained('elementId', options);
//       }
//     }, []);
  
//     return (
//       <div id="elementId">
//         {/* Your content goes here */}
//       </div>
//     );
//   };
  

"use client"
import React from 'react'

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const YourComponent = () => {
  const [isCard2Expanded, setIsCard2Expanded] = useState(false);
  const controls = useAnimation();

  const handleCard2Click = () => {
    setIsCard2Expanded(!isCard2Expanded);

    controls.start({
      width: isCard2Expanded ? '50%' : '100%',
      x: isCard2Expanded ? '0%' : '50%',
    });
  };

  return (
    <div className='w-full flex'>
      <motion.div
        className='card1 w-3/6 h-96 bg-red'
        animate={controls}
        initial={{ width: '50%', x: '0%' }}
      ></motion.div>
      <div className='w-3/6 flex flex-col'>
        <motion.div
          className='card2  h-48 bg-red'
          onClick={handleCard2Click}
          initial={{ width: '100%', x: '0%' }}
        ></motion.div>
        <div className='card3  h-48 bg-red'></div>
      </div>
    </div>
  );
};

export default YourComponent;

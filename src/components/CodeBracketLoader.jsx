// import React, { useEffect, useState } from 'react';
// import './CodeBracketLoader.scss';

// const CodeBracketLoader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading process (e.g., fetching data)
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Adjust the time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     isLoading && (
//       <div className="loader-container">
//         <div className="loader">
//           <span className="angle">&lt;</span>
//           <span className="angle">/</span>
//           <span className="angle">&gt;</span>
//         </div>
//       </div>
//     )
//   );
// };

// export default CodeBracketLoader;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Loader.scss"; // We'll create this CSS file

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="code-loader">
        <motion.span
          className="angle-bracket left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          &lt;
        </motion.span>
        
        <motion.div 
          className="slash"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          /
        </motion.div>
        
        <motion.span
          className="angle-bracket right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          &gt;
        </motion.span>
        
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
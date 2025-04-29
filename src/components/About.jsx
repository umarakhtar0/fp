
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import profileImage from "../assets/profile.png"; // Import your profile image
import "./About.scss";

const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1vYH9_8SIe-AKqYz3MLA93SjkMRyOfzoU/view?usp=sharing", "_blank");
  };

  return (
    <section 
      className={`about-section ${darkMode ? "dark" : "light"}`} 
      id="about"
      ref={ref}
    >
      <div className="container">
        {/* Hero Section with Profile Image */}
        <motion.div 
          className="hero-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="profile-container"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="profile-image">
              <motion.img
                       src="https://res.cloudinary.com/dxx12rebk/image/upload/v1745923783/profile_cqqtou.png"

                alt="Profile"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="hero-text"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            >
              {"Hello, I'm".split("").map((char, i) => (
                <motion.span 
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: 0.6 + i * 0.05
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.05, delayChildren: 0.9 }}
              className="highlight"
            >
              {"Umar Akhtar".split("").map((char, i) => (
                <motion.span 
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: 0.9 + i * 0.05
                  }}
                  whileHover={{ y: -5 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
            >
              Web Developer & Graphic Designer
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          {/* About Text */}
          <motion.div 
            className="about-text"
            animate={isInView ? { 
              y: [0, -10, 0],
            } : {}}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
            >
              About Me
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.7 }}
            >
              "I’m a web developer and graphic designer with a passion for creating modern, user-friendly websites and stunning visual designs.
              
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
            >
             I bring ideas to life by combining creative thinking with technical skills to deliver smooth, beautiful digital experiences."
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="cta-button"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              y: [0, -15, 0]
            } : {}}
            transition={{ 
              delay: 2.0,
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.button
              className="resume-button"
              onClick={handleDownloadResume}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", delay: 2.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode 
                  ? "0 5px 15px rgba(255, 190, 11, 0.4)" 
                  : "0 5px 15px rgba(58, 134, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <FiDownload className="icon" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
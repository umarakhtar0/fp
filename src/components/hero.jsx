


import React from "react";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from '../assets/profile.png';
import './Hero.scss'


const Hero = () => {
  const roles = ['Web Developer', 'Graphic Designer'];
  const [displayedRole, setDisplayedRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
   
    let timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      // Typing animation
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, 1500); // Pause before deleting
      }
    } else if (isDeleting) {
      // Deleting animation
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
        }, 50); // Deleting speed (faster than typing)
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, currentRoleIndex, isTyping, isDeleting,roles]);
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-text">
          <h1>Hello I'm A</h1>
          <span className="highlight">
              {displayedRole}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="cursor"
              >
                |
              </motion.span>
            </span>
          <p>
          Hi, I’m Umar Akhtar, a passionate web developer based in Pakistan.
  
  Welcome to my portfolio world!
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100077245312859" className="icon">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" className="icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" className="icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/umar-akhtar-2b6b28335/" className="icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <motion.div
          className="hero-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-circle">
            <img
              src={profile}
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;




import React from "react";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from '../assets/profile.png';
import './Hero.scss'
// import './HeroSection.scss'

const Hero = () => {
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
          <h2>
            <span>Web </span>
            <span className="highlight">Developer</span>
          </h2>
          <p>
          Hi, I’m Umar Akhtar, a passionate web developer based in Pakistan.
  {/* I specialize in HTML, CSS, JavaScript, React, Node.js, and more. */}
  Welcome to my portfolio world!
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100077245312859" className="icon">
              <FaFacebook />
            </a>
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a href="#" className="icon">
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

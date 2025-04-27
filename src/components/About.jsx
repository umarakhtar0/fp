// import React, { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from "react-icons/fi";
// import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiGraphql, SiMongodb, SiTailwindcss, SiDocker } from "react-icons/si";
// import { TbBrandThreejs } from "react-icons/tb";
// import "./About.scss";

// const About = ({ darkMode }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.1 });
  
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
  
//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

//   const handleDownloadResume = () => {
//     window.open("https://drive.google.com/file/d/1vYH9_8SIe-AKqYz3MLA93SjkMRyOfzoU/view?usp=sharing", "_blank");
//   };

//   // Skill icons mapping
//   const skillIcons = {
//     "React.js": <FaReact />,
//     "TypeScript": <SiTypescript />,
//     "Node.js": <FaNodeJs />,
//     "Next.js": <SiNextdotjs />,
//     "GraphQL": <SiGraphql />,
//     "MongoDB": <SiMongodb />,
//     "Tailwind CSS": <SiTailwindcss />,
//     "Figma": <FaFigma />,
//     "Docker": <SiDocker />,
//     "Three.js": <TbBrandThreejs />
//   };

//   return (
//     <section 
//       className={`about-section ${darkMode ? "dark" : "light"}`} 
//       id="about"
//       ref={ref}
//     >
//       {/* Animated background elements */}
//       <motion.div 
//         className="bg-elements"
//         style={{ y: yBg, opacity: opacityBg }}
//       >
//         {[...Array(10)].map((_, i) => (
//           <motion.div 
//             key={i}
//             className="bg-element"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
//             transition={{ 
//               delay: i * 0.1,
//               duration: 1,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//         ))}
//       </motion.div>

//       <div className="container">
//         {/* Hero Section with 3D effect */}
//         <motion.div 
//           className="hero-container"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div 
//             className="profile-container"
//             initial={{ rotateY: 180, opacity: 0 }}
//             animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
//             transition={{ 
//               type: "spring",
//               stiffness: 100,
//               damping: 10,
//               delay: 0.2
//             }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="profile-image">
//               <motion.div
//                 className="image-mask"
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ delay: 0.4 }}
//               />
//               <motion.div 
//                 className="tech-orbits"
//                 animate={isInView ? { rotate: 360 } : { rotate: 0 }}
//                 transition={{ 
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               >
//                 {[...Array(5)].map((_, i) => (
//                   <motion.div 
//                     key={i}
//                     className="tech-orbit"
//                     animate={isInView ? { 
//                       scale: [1, 1.2, 1],
//                       opacity: [0.7, 1, 0.7]
//                     } : {}}
//                     transition={{ 
//                       duration: 3,
//                       delay: i * 0.5,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   >
//                     {Object.values(skillIcons)[i]}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div 
//             className="hero-text"
//             initial={{ x: -50, opacity: 0 }}
//             animate={isInView ? { x: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.5 }}
//           >
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
//             >
//               {"Hello, I'm".split("").map((char, i) => (
//                 <motion.span 
//                   key={i}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={isInView ? { y: 0, opacity: 1 } : {}}
//                   transition={{ 
//                     type: "spring",
//                     stiffness: 100,
//                     delay: 0.6 + i * 0.05
//                   }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </motion.span>
//               ))}
//             </motion.h1>
            
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ staggerChildren: 0.05, delayChildren: 0.9 }}
//               className="highlight"
//             >
//               {"John Doe".split("").map((char, i) => (
//                 <motion.span 
//                   key={i}
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={isInView ? { y: 0, opacity: 1 } : {}}
//                   transition={{ 
//                     type: "spring",
//                     stiffness: 100,
//                     delay: 0.9 + i * 0.05
//                   }}
//                   whileHover={{ y: -5 }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </motion.span>
//               ))}
//             </motion.h1>
            
//             <motion.div
//               className="title-tags"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 1.3 }}
//             >
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ delay: 1.4 }}
//               >
//                 Full-Stack Dev
//               </motion.span>
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ delay: 1.5 }}
//               >
//                 UI/UX Designer
//               </motion.span>
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ delay: 1.6 }}
//               >
//                 Tech Enthusiast
//               </motion.span>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           className="about-content"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ delay: 1.8 }}
//         >
//           {/* About Text with floating animation */}
//           <motion.div 
//             className="about-text"
//             animate={isInView ? { 
//               y: [0, -10, 0],
//             } : {}}
//             transition={{ 
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           >
//             <motion.h2
//               initial={{ x: -50, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ delay: 1.9 }}
//             >
//               About Me
//             </motion.h2>
            
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 2.0 }}
//             >
//               I'm a passionate developer with over 5 years of experience creating 
//               exceptional digital experiences.
//             </motion.p>
            
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 2.1 }}
//             >
//               My approach combines technical expertise with design thinking to deliver 
//               solutions that are both performant and visually stunning.
//             </motion.p>
//           </motion.div>

//           {/* Skills Section with orbiting icons */}
//           <motion.div 
//             className="skills-section"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 2.2 }}
//           >
//             <motion.h3
//               initial={{ scale: 0 }}
//               animate={isInView ? { scale: 1 } : {}}
//               transition={{ type: "spring", delay: 2.3 }}
//             >
//               Technical Skills
//             </motion.h3>
            
//             <div className="skills-container">
//               <div className="skills-grid">
//                 {Object.entries(skillIcons).map(([skill, icon], index) => (
//                   <motion.div
//                     key={skill}
//                     className="skill-card"
//                     initial={{ scale: 0, rotate: -180 }}
//                     animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                     transition={{ 
//                       type: "spring",
//                       delay: 2.4 + index * 0.1,
//                       stiffness: 100
//                     }}
//                     whileHover={{ 
//                       y: -10,
//                       boxShadow: darkMode 
//                         ? "0 10px 25px -5px rgba(255, 190, 11, 0.3)" 
//                         : "0 10px 25px -5px rgba(58, 134, 255, 0.3)"
//                     }}
//                   >
//                     <div className="skill-icon">
//                       {icon}
//                     </div>
//                     <div className="skill-name">{skill}</div>
//                     <motion.div 
//                       className="skill-level"
//                       initial={{ scaleX: 0 }}
//                       animate={isInView ? { scaleX: 1 } : {}}
//                       transition={{ delay: 2.8 + index * 0.05 }}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Experience Timeline with connector animation */}
//           <motion.div 
//             className="experience-section"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 3.0 }}
//           >
//             <motion.h3
//               initial={{ x: -50 }}
//               animate={isInView ? { x: 0 } : {}}
//               transition={{ type: "spring", delay: 3.1 }}
//             >
//               Professional Journey
//             </motion.h3>
            
//             <div className="timeline">
//               {[
//                 {
//                   year: "2022 - Present",
//                   role: "Senior Frontend Developer",
//                   company: "Tech Innovations Inc.",
//                   description: "Leading frontend architecture and mentoring junior developers."
//                 },
//                 {
//                   year: "2020 - 2022",
//                   role: "Full-Stack Developer",
//                   company: "Digital Solutions LLC",
//                   description: "Built and maintained multiple web applications using React and Node.js."
//                 },
//                 {
//                   year: "2018 - 2020",
//                   role: "Junior Developer",
//                   company: "StartUp Ventures",
//                   description: "Contributed to various projects and learned modern web technologies."
//                 }
//               ].map((exp, index) => (
//                 <motion.div 
//                   key={index}
//                   className="timeline-item"
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 3.2 + index * 0.2 }}
//                   whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
//                 >
//                   <motion.div 
//                     className="timeline-connector"
//                     initial={{ scaleY: 0 }}
//                     animate={isInView ? { scaleY: 1 } : {}}
//                     transition={{ delay: 3.4 + index * 0.2 }}
//                   />
//                   <div className="timeline-year">{exp.year}</div>
//                   <div className="timeline-content">
//                     <h4>{exp.role}</h4>
//                     <h5>{exp.company}</h5>
//                     <p>{exp.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* CTA Section with floating action */}
//           <motion.div 
//             className="cta-section"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { 
//               opacity: 1,
//               y: [0, -15, 0]
//             } : {}}
//             transition={{ 
//               delay: 4.0,
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           >
//             <motion.button
//               className="resume-button"
//               onClick={handleDownloadResume}
//               initial={{ scale: 0 }}
//               animate={isInView ? { scale: 1 } : {}}
//               transition={{ type: "spring", delay: 4.1 }}
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: darkMode 
//                   ? "0 5px 15px rgba(255, 190, 11, 0.4)" 
//                   : "0 5px 15px rgba(58, 134, 255, 0.4)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Download Resume</span>
//               <FiDownload className="icon" />
//               <motion.div 
//                 className="button-particles"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : {}}
//               >
//                 {[...Array(8)].map((_, i) => (
//                   <motion.span
//                     key={i}
//                     animate={{
//                       y: [0, -20, 0],
//                       opacity: [0, 1, 0]
//                     }}
//                     transition={{
//                       duration: 2,
//                       delay: i * 0.2,
//                       repeat: Infinity,
//                       repeatDelay: 4
//                     }}
//                   />
//                 ))}
//               </motion.div>
//             </motion.button>

//             <motion.div
//               className="social-links"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 4.2 }}
//             >
//               {[
//                 { icon: <FiGithub />, label: "GitHub", url: "#" },
//                 { icon: <FiLinkedin />, label: "LinkedIn", url: "#" },
//                 { icon: <FiTwitter />, label: "Twitter", url: "#" },
//                 { icon: <FiMail />, label: "Email", url: "mailto:example@example.com" }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   aria-label={social.label}
//                   initial={{ scale: 0 }}
//                   animate={isInView ? { scale: 1 } : {}}
//                   transition={{ 
//                     type: "spring",
//                     delay: 4.3 + index * 0.1
//                   }}
//                   whileHover={{ 
//                     y: -5,
//                     scale: 1.2,
//                     color: darkMode ? "#ffbe0b" : "#3a86ff"
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

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
                src={profileImage}
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
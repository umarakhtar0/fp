import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaPaintBrush, FaMobileAlt,
  FaRocket, FaMagic, FaLaptopCode
} from 'react-icons/fa';
import './Services.scss';
import Tilt from 'react-parallax-tilt';


const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Clean, scalable code with modern best practices."
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Designing beautiful interfaces with strong UX focus."
  },
  {
    icon: <FaLaptopCode />,
    title: "Graphic Design",
    desc: "Logos, posters, and full brand kits that stand out."
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Mobile-first, pixel-perfect on all screen sizes."
  },
  {
    icon: <FaRocket />,
    title: "Performance Boost",
    desc: "Speedy sites that load lightning-fast."
  },
  {
    icon: <FaMagic />,
    title: "Creative Animation",
    desc: "Sleek animations & micro-interactions."
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400}>
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
            <span> My Services</span>
          </h1>
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
    
        ))}
      </div>
      </Tilt>
    </section>
  );
};

export default Services;
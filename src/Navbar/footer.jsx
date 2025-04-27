import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaGithub, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope 
} from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/profile.php?id=100077245312859' },
    { icon: <FaTwitter />, url: '' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/umar-akhtar-2b6b28335/' },
    { icon: <FaGithub />, url: 'https://github.com/umarakhtar0' },
    { icon: <FaYoutube />, url: 'https://youtube.com' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Faisalabad, Pk' },
    { icon: <FaPhone />, text: '+92 342 6874805' },
    { icon: <FaEnvelope />, text: 'umarakhtarqq389@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <motion.div 
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-brand">
            <motion.h3 
              className="logo"
              whileHover={{ scale: 1.05 }}
            >
              Umar<span>  Akhtar</span>
            </motion.h3>
            <p className="tagline">
              Building digital experiences that matter.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={link.url}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Umar Akhtar. &copy; All rights reserved in 2025.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
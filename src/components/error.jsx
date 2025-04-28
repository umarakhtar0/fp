import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './error.scss'; // Create this SCSS file

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="error-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="error-content">
        <motion.div
          className="error-code"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          404
        </motion.div>
        <h1>Page Not Found</h1>
        <p>We couldn't find what you were looking for</p>
        <motion.button
          className="home-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
        >
          Return Home
        </motion.button>
        <div className="countdown">
          Redirecting in 5 seconds...
        </div>
      </div>
    </motion.div>
  );
};

export default Error;
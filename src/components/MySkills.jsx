
import './SkillsPage.scss'


import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillsExperience = () => {
  const [activeTab, setActiveTab] = useState('web');

  const webSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'PHP', level: 90 }
  ];

  const designSkills = [
    { name: 'Photoshop', level: 92 },
    { name: 'Illustrator', level: 88 },
    { name: 'Canva', level: 95 },
    { name: 'PixelLab', level: 90 },
    { name: 'PostermyWall', level: 87 },
    { name: 'Branding', level: 90 }
  ];

  const experience = [
   
  ];

  return (
    <div className="skills-experience-container">
      
     
   

      {/* Tab Navigation */}
      <div className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => setActiveTab('web')}
        >
          Web Developer
        </button>
        <button 
          className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          Graphic Designer
        </button>
      </div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="skills-section"
      >
        <h1 className="section-title">My Skills</h1>
        <div className="skills-grid">
          {(activeTab === 'web' ? webSkills : designSkills).map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-level"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                <div className="skill-percent">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

     
      </div>
  );
};

export default SkillsExperience;
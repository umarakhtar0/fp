// Projects.jsx
import ProjectCard from './Projects';  // Fixed typo in import
import './Projects.scss';
// import image1 from '../assets/q.jpg'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'




const projects = [
  {
    title: 'Abroad Mentors',
    image:image1,
    link: 'https://abroadmentors.net',
    languages: ['React', 'Node.js']  // Add languages used
  },
  {
    title: 'First Portfolio',
    // description: 'Personal portfolio showcasing my web development skills.',
    image:image2,
    link: 'https://umarakhtar-portfolio.netlify.app',
    languages: ['HTML', 'CSS', 'JavaScript']  // Add languages used
  },
  {
    title: 'Fast Food',
    // description: 'Explore our pizza website and order your favorites online!',
    image:image3,
    link: 'https://my-pizza1.netlify.app',
    languages: ['React','SCSS']  // Add languages used
  },
  {
    title: 'Notes Website',
    // description: 'Check the weather in real-time.',
    image: image6,
    link: 'https://react-firebase-011.web.app',
    languages: [ 'React','Firebase']  // Add languages used
  },
  {
    title: 'Weather Checker',
    // description: 'Browse our restaurant and experience exceptional dining with every visit!',
        image:image4,
    link: 'umar-weather-123.surge.sh',
    languages: ['HTML', 'CSS', 'JavaScript']  // Add languages used
  },
  {
    title: 'Apple Calculator',
    // description: 'Search and save your favorite meals.',
    image: image5,
    link: 'https://certain-bird.surge.sh',
    languages: ['HTML', 'CSS', 'JavaScript']  // Add languages used
  },
 
 
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="section-title">My Web & Graphic Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

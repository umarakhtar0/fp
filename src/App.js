// import React from 'react';
// import { useState, useEffect } from 'react';
// import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'antd/dist/reset.css';
// import { BrowserRouter } from 'react-router-dom';
// import Header from './Navbar/header';
// import Footer from './Navbar/footer';
// import Hero from './components/hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import  GraphicProjects from './components/graphicProjects';
// import Contact from './components/Contact';
// import Services from './components/services';
// import CompanyPage from './components/CompanyPage';
// import MySkills from './components/MySkills';
// import CodeBracketLoader from './components/CodeBracketLoader';






// function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Simulate page load time
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Show loader for 3 seconds (you can adjust this time)
    
//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <CodeBracketLoader />
//       </div>
//     );
//   }
//   return (
    
//     <BrowserRouter>
    
//        <div className="floating-circle large">
    
//       </div>
//       <div className="app-container">
     
//         <Header />
//         <main className="main-content">
      
//           <section id="hero"><Hero /></section>
//           <section id="services"><Services/></section>
//           <section id="about"><About /></section>
//           <section id="skills"><Skills /></section>
//           <section id="projects"><Projects /></section>
//           <section id="graphicProjects"><  GraphicProjects/></section>
//           <section id="myskills">< MySkills/></section>
          
//           <section id="CompanyPage"> <CompanyPage /></section>
         
//           <section id="contact"><Contact /></section>
        
          
          
        
    
         
//         </main>
//         <Footer />
//       </div>

//     </BrowserRouter>
//   );
// }

// export default App;






import React from 'react';
import { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'antd/dist/reset.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Navbar/header';
import Footer from './Navbar/footer';
import Hero from './components/hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import  GraphicProjects from './components/graphicProjects';
import Contact from './components/Contact';
import Services from './components/services';
import CompanyPage from './components/CompanyPage';
import MySkills from './components/MySkills';
import CodeBracketLoader from './components/CodeBracketLoader';
import Error from './components/error';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <CodeBracketLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <div className="floating-circle large"></div>
            <div className="app-container">
              <Header />
            
              <main className="main-content">

                 <section id="hero"><Hero /></section>
                 <section id="services"><Services/></section>
                 <section id="about"><About /></section>
                 <section id="skills"><Skills /></section>
                 <section id="projects"><Projects /></section>
                 <section id="graphicProjects"><  GraphicProjects/></section>
                <section id="myskills">< MySkills/></section>
                
               <section id="CompanyPage"> <CompanyPage /></section>
               
                <section id="contact"><Contact /></section>
                {/* Other sections... */}
               
              </main>
              <Footer />
            </div>
          </>
        } />
 
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

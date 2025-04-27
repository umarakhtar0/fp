import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
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





function App() {
 
  return (
    
    <BrowserRouter>
    
       <div className="floating-circle large">
    
      </div>
      <div className="app-container">
     
        <Header />
        <main className="main-content">
    
          <section id="hero"><Hero /></section>
          <section id="services"><Services/></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="graphicProjects"><  GraphicProjects/></section>
          <section id="CompanyPage"> <CompanyPage /></section>
         
          <section id="contact"><Contact /></section>
          
          
        
    
         
        </main>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;


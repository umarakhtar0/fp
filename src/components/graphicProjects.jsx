import React, { useState, useEffect, useRef } from 'react';
import './Gallery.scss';

// Define the image URLs from Cloudinary directly
const images = [
  'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925192/Screenshot_2025-04-05_at_1.11.32_PM_ud0x6w.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925191/UNIVERSITY_OF_NORTHAMPTON_mrhdzf.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925188/PP_yw77mb.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925188/NEW_2_fibjvv.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925188/8_bed3mf.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925188/6_frqtrk.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925187/6_1_kwssqc.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925187/6_yfsooi.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925186/5_s9np7f.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925185/4_tmkgkh.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925184/3_cn8bvi.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925184/4_ibsddb.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925182/3_webngk.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925182/3_copy_c1waie.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925181/2_hrmtcf.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925181/3_copy_2_gfqrwn.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925179/2_n8vpvc.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925178/2_copy_zhoxtf.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925178/2_copy_iuzyck.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925178/2_2_hrllgl.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925178/2_2_u7tqtl.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925177/2_uccgdv.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925177/1_lkrsvf.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925176/1_ufggtm.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925177/2_4.16.04_PM_ptzcqp.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925176/1_vs6ban.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925176/1_copy_eppxt7.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925174/1_2_wottco.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925174/1_copy_2_udxelk.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925174/1_copy_dxdvo0.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925173/1_2_htefm6.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925173/1_copy_3_qd2uem.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925173/1_10_agp8y6.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925173/1_copy_2_zek4id.jpg',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925171/1_4_t1p6ju.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925171/1_7_jg6ubc.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925171/1_3_s1spqz.png',
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925171/1_2_v3ohmz.png',
 
 'https://res.cloudinary.com/dxx12rebk/image/upload/v1745925079/0_s2ubkl.jpg',
];

const HorizontalGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);
  
  // Handle scroll to current index
  useEffect(() => {
    if (galleryRef.current && containerRef.current) {
      const galleryItem = galleryRef.current.children[currentIndex];
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = galleryItem.offsetWidth;
      const scrollPosition = galleryItem.offsetLeft - (containerWidth / 2) + (itemWidth / 2);
      
      galleryRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="horizontal-gallery-container" ref={containerRef}>
      <div 
        className="horizontal-gallery"
        ref={galleryRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className={`gallery-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img 
              src={image} 
              alt={`Gallery item ${index + 1}`}
              className="gallery-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <span className="image-title">Image {index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;

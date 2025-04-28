import React, { useState, useEffect, useRef } from 'react';
import './Gallery.scss';

// Dynamically import all images from your folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/graphic', false, /\.(png|jpe?g|svg)$/));

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
  }, [images]);
  

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
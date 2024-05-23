import React, { useEffect } from 'react';
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'


const Slider = () => {

    useEffect(() => {
        
        const carousel = document.querySelector('.carousel');
        const carouselInstance = new window.bootstrap.Carousel(carousel, {
          interval: 2000, 
          wrap: true, 
          pause: 'hover', 
        });
    
        return () => {
          
          carouselInstance.dispose();
        };
      }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner mt-3  mx-3">
        <div className="carousel-item active">
          <img src={ image1} className="d-block w-100" alt="Slider Image 1" />
        </div>
        <div className="carousel-item">
          <img src={ image2} className="d-block w-100" alt="Slider Image 2" />
        </div>
        <div className="carousel-item">
          <img src={ image3} className="d-block w-100" alt="Slider Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Slider;

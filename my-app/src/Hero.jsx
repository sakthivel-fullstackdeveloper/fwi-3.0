import React from 'react';
import hero from './assets/img/hero-img.png'
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
function Hero(){

    return (
        <>
          {/* Header */}
<section id="hero" className="d-flex align-items-center">
<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" 
    data-aos="fade-up" data-aos-delay="200">
      <h1>Better Solutions For Your Websites Security</h1>
      <h2>We are a team of talented protections for websites with 24/7 support</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video">
          <i className="bi bi-play-circle"></i><span>Watch Video</span>
        </a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={hero} className="img-fluid animated" alt="hero" />
    </div>
  </div>
</div>
</section>
</>
)}
export default Hero;
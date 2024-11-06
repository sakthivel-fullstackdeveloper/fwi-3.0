import React from 'react';
import logo from './assets/img/icon2.png' 
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';


function Header() {
 

  return (
    <>
      {/* Header */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html" className="logo me-auto">
              <img height="100px" width="100px" src={logo} alt="Logo" className="img-fluid" />
            </a>
            <a href="index.html">Riskfinder</a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="#hero">Get Started</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

    </>
  );
}

export default Header;

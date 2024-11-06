import React, { useEffect } from 'react';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';

// Import your main JavaScript file
import './assets/js/main.js'; // This will include all the logic from your previous code

function Services() {
  useEffect(() => {
    // No additional initialization required since main.js handles it
  }, []); // Run only once on component mount

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Explore our range of services tailored to meet your needs. From comprehensive website audits to personalized risk assessments, we offer solutions designed to enhance your online security and performance. Partner with us to safeguard your digital assets and elevate your web presence.
          </p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="#">Website Audits</a></h4>
              <p>Benefit from expert website audits to assess the overall health and performance of your online presence.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="#">Risk Assessments</a></h4>
              <p>Receive personalized risk assessments to identify and mitigate potential vulnerabilities in your digital infrastructure.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="#">Security Solutions</a></h4>
              <p>Explore tailored security solutions to fortify your online defenses and safeguard your digital assets from cyber threats.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer"></i></div>
              <h4><a href="#">Performance Enhancement</a></h4>
              <p>Enhance your web performance with customized solutions aimed at optimizing speed, reliability, and user experience.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;

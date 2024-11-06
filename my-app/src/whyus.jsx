import React from 'react';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
function Whyus() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>Welcome to our Website Risk Finder! <strong>We understand the importance of identifying and mitigating risks associated with your website.</strong></h3>
              <p>
                In today's digital landscape, cyber threats and compliance issues pose significant challenges, but with our tool, you can stay ahead.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                    <span>01</span> Are there any potential vulnerabilities in your website's security that need addressing?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Our Website Risk Finder helps identify and address any potential vulnerabilities in your website's security. Through comprehensive scans and assessments, we pinpoint areas of weakness and provide actionable recommendations to enhance your website's security posture and protect against cyber threats.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                    <span>02</span> Is your website equipped to handle potential security threats and maintain its integrity?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Our Website Risk Finder ensures that your website is prepared to handle various security threats and maintain its integrity. By conducting thorough assessments and providing insights into potential vulnerabilities, we empower you to strengthen your website's defenses and safeguard it against unforeseen risks.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                    <span>03</span> Is your website optimized to provide the best user experience and meet the needs of your visitors?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Our Website Risk Finder evaluates the user experience and performance of your website to ensure it meets the highest standards of usability and accessibility. By analyzing factors such as page load times, navigation efficiency, and overall user interface, we help you optimize your website for maximum engagement and satisfaction.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" 
               style={{ backgroundImage: 'url("src/assets/img/why-us.png")' }} 
               data-aos="zoom-in" data-aos-delay="150">
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;

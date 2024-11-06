import React, { useEffect, useState } from 'react';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
import skill from './assets/img/skills.png';

function Skills() {
  const [progressValues, setProgressValues] = useState({
    workProgress: 0,
    paymentsProtections: 0,
    improvementsToNewSites: 0,
    newProjects: 0
  });

  // Effect to animate the progress bars
  useEffect(() => {
    const timeoutIds = [];

    // Set progress values to animate
    timeoutIds.push(setTimeout(() => setProgressValues(prev => ({ ...prev, workProgress: 100 })), 500));
    timeoutIds.push(setTimeout(() => setProgressValues(prev => ({ ...prev, paymentsProtections: 90 })), 1000));
    timeoutIds.push(setTimeout(() => setProgressValues(prev => ({ ...prev, improvementsToNewSites: 75 })), 1500));
    timeoutIds.push(setTimeout(() => setProgressValues(prev => ({ ...prev, newProjects: 100 })), 2000));

    return () => timeoutIds.forEach(id => clearTimeout(id)); // Cleanup on unmount
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={skill} className="img-fluid" alt="Skills" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>We provide comprehensive assessments of your website's performance, ensuring optimal functionality and user satisfaction.</h3>
            <p className="fst-italic">
              Our analysis includes evaluating page load times, navigation efficiency, mobile responsiveness, and overall user experience.
            </p>

            <div className="skills-content">
              <div className="progress">
                <span className="skill">Work progress <i className="val">{progressValues.workProgress}%</i></span>
                <div className="progress-bar-wrap">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow={progressValues.workProgress} 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ width: `${progressValues.workProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Payments protections <i className="val">{progressValues.paymentsProtections}%</i></span>
                <div className="progress-bar-wrap">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow={progressValues.paymentsProtections} 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ width: `${progressValues.paymentsProtections}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Improvement to New Sites <i className="val">{progressValues.improvementsToNewSites}%</i></span>
                <div className="progress-bar-wrap">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow={progressValues.improvementsToNewSites} 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ width: `${progressValues.improvementsToNewSites}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">New projects <i className="val">{progressValues.newProjects}+</i></span>
                <div className="progress-bar-wrap">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow={progressValues.newProjects} 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ width: `${progressValues.newProjects}%` }}
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

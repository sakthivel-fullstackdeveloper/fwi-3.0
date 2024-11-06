import React from "react";
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
function Footer() {
    return(
        <>
        
      {/* Footer */}
      <footer id="footer">
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>FWI</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="">FWI</a>
          </div>
        </div>
      </footer>
  
        </>
    )
}
export default Footer;
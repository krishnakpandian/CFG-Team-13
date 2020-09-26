import React from 'react';
import './Footer.scss';


const Footer = () => {
    return(
        <React.Fragment>
            <div class="footer-container">
        <div class="footer">
          <div class="footer-heading footer-1">
            <h2>Paul Quinn College</h2>
            <a href="https://www.google.com/maps/place/3837+Simpson+Stuart+Rd,+Dallas,+TX+75241/data=!4m2!3m1!1s0x864e97d3b6cd2173:0x26bbe05b9cd10b6b?sa=X&ved=2ahUKEwiS0biWg4bsAhVGCKwKHRBmBQgQ8gEwAHoECAsQAQ">
              3837 Simpson Stuart Rd, Dallas, TX 75241
            </a>
            <a href="tel:2143761000">(214)-376-1000</a>
            <a href="https://www.pqc.edu/admissions/">apply@pqc.edu</a>
          </div>
          <div class="footer-heading footer-2">
            <h2>Quick Links</h2>
            <a href="#">Home</a>
            <a href="#">Success</a>
            <a href="#">Events</a>
            <a href="#">Cost Comparator</a>
          </div>
        </div>
      </div>
        </React.Fragment>
    );
}

export default Footer;
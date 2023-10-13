import React from 'react';
import './Footer.css'; // You will create this CSS file

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerRow">
          <div className="footerColumn">
            <h2>About</h2>
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, documentaries, and more on thousands of internet-connected devices.</p>
          </div>
          <div className="footerColumn">
            <h2>Help Center</h2>
            <ul>
              <li>Account</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footerColumn">
            <h2>Terms of Use</h2>
            <ul>
              <li>Account</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="footerColumn">
            <h2>Follow Us</h2>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;

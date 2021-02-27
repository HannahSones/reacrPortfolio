import React from 'react';
import '../style.css';
import './footer.css';

function Footer() {
  return (
    <div>
      <img className="footerBackground"
            src={`${process.env.PUBLIC_URL}/assets/Shapes/Footer.png`}
          />
    <footer className="footerContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p>Copyright | Hannah Sones 2021</p>
          </div>
          <div className="col-md-3 socialIcons">
            <a href="https://github.com/HannahSones" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/hannahsones/" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;

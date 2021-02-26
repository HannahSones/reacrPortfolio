import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <p>Copyright | Hannah Sones 2021</p>
          </div>
          <div class="col-md-3 socialIcons">
            <a href="https://github.com/HannahSones" target="_blank">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/hannahsones/" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

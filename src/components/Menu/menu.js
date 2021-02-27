import React from 'react';
import '../style.css';
import './menu.css';
import Navigation from '../Navigation/navigation';

function Menu() {
  return (
    <div className="menu fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo_transparent.png`}
              height="50"
              alt="Logo"
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <Navigation />
        </div>
      </nav>
    </div>
  );
}

export default Menu;

import React from "react";
import "../style.css";
import "./menu.css";
import Navigation from "../Navigation/navigation";

function Menu() {
  return (
    <div className="menu fixed-top">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo_transparent.png`}
              height="50"
              alt="Logo"
              loading="lazy"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <Navigation />
        </div>
      </nav>
    </div>
  );
}

export default Menu;

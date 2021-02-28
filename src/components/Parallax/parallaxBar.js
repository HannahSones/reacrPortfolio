import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "./parallaxBar.css";

function ScrollBar() {
  return (
    <section
      className="parallaxContainer"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/LightbulbIdea.png"
        })`,
      }}
    >
      <div className="container">
        <div className="row centredQuote">
          <div className="col-md-8">
            <h1>
              Have a project in mind?
              <span>
                {" "}
                See how <em>I can</em> help you
              </span>
            </h1>
            <Link to="/contact">
              <span>
                <a>
                  <i className="far fa-hand-point-right fa-2x"></i>
                </a>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollBar;

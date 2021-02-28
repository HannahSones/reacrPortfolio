import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <img
        className="profileBackground"
        src={`${process.env.PUBLIC_URL}/assets/Shapes/Profile.png`}
      />
      <div className="container projectContainer">
        <div className="col-md-12">
          <h2 data-aos="fade-up" data-aos-duration="1500">
            Projects
          </h2>
          <hr data-aos="fade-up" data-aos-duration="1500" />

          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/myWardrobe.png`}
                  className="card-img-top"
                  alt="My Wardobe app"
                />
                <div className="card-body">
                  <h5 className="card-title">My Wardrobe</h5>
                  <p className="card-text">
                    A full-stack application that lets you plan, save and create
                    your outfits at the touch of a button.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/neverMissABeat.png`}
                  className="card-img-top"
                  alt="An app to listen to music"
                />
                <div className="card-body">
                  <h5 className="card-title">Never Miss A Beat</h5>
                  <p className="card-text">
                    An app that enables users to search for their favourite
                    artists and see upcoming live events based on search
                    history.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/WeatherDashboard.png`}
                  className="card-img-top"
                  alt="An application for viewing the weather"
                />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">
                    A dynamic weather dashboard utilising the Open Weather API
                    and built with jQuery, HTML and Bootstrap.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 center">
              <Link to="/portfolio">
                <span>
                  <a className="btn viewProjectsBtn">View more</a>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

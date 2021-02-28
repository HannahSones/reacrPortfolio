import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <section>
      <div className="portfolioContainer">
        <div className="container">
          <div className="row">
            <div
              className="col-md-9"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h2>Portfolio</h2>
              <hr />
              <p>
                Check out a collection of my applications built using a both
                front-end and back-end technologies icluding, HTML, CSS,
                JavaScript, jQuery, React, Node, Mongo, Express and MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="portfolioBackground"
        src={`${process.env.PUBLIC_URL}/assets/Shapes/Profile.png`}
      />

      <div className="projectsGrid">
        <div className="card-deck">
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
                  <hr />
                  <p className="card-text">
                    A full-stack application that lets you plan, save and create
                    your outfits at the touch of a button.
                  </p>
                  <a
                    href="https://mywardrobeproject.herokuapp.com/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/myWardrobe"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fab fa-js fa-2x"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <i className="fas fa-database fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/employeeDirectory.png`}
                  className="card-img-top"
                  alt="An application to find employees in a database"
                />
                <div className="card-body">
                  <h5 className="card-title">Employee Directory</h5>
                  <hr />
                  <p className="card-text">
                    An employee directory built using React, so that a user can
                    view their entire employee directory at once and have quick
                    access to information.
                  </p>
                  <a
                    href="https://hannahsones.github.io/employeedirectory/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/employeedirectory"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i class="fab fa-react fa-2x"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <i className="fas fa-database fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
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
                  <hr />
                  <p className="card-text">
                    A dynamic weather dashboard utilising the Open Weather API
                    and built with jQuery, HTML and Bootstrap.
                  </p>
                  <a
                    href="https://hannahsones.github.io/WeatherDashboard/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/WeatherDashboard"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fab fa-html5 fa-2x"></i>
                  <i className="fab fa-css3-alt fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/budgetTracker.png`}
                  className="card-img-top"
                  alt="Budget tracker"
                />
                <div className="card-body">
                  <h5 className="card-title">Budget Tracker</h5>
                  <hr />
                  <p className="card-text">
                    A Budget Tracker application using PWA functionality with a
                    manifest and service worker file to allow for offline
                    access.
                  </p>
                  <a
                    href="https://thawing-reaches-04479.herokuapp.com/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/budgetTracker"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fas fa-database fa-2x"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
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
                  <hr />
                  <p className="card-text">
                    An app that enables users to search for their favourite
                    artists and see upcoming live events based on search
                    history.
                  </p>
                  <a
                    href="https://pavn93.github.io/Never-Miss-A-Beat/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/Never-Miss-A-Beat"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fab fa-html5 fa-2x"></i>
                  <i className="fab fa-css3-alt fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/workoutTracker.png`}
                  className="card-img-top"
                  alt="An app to generate random passwords"
                />
                <div className="card-body">
                  <h5 className="card-title">Fitness Tracker</h5>
                  <hr />
                  <p className="card-text">
                    A workout tracker application that uses a Mongo Database to
                    allow users to keep track of their workout regime.
                  </p>
                  <a
                    href="https://afternoon-river-94265.herokuapp.com/?id=601d654618de7d0015c3788d"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/WorkoutTracker"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fas fa-database fa-2x"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/myBurger.png`}
                  className="card-img-top"
                  alt="Burger app"
                />
                <div className="card-body">
                  <h5 className="card-title">My Burger</h5>
                  <hr />
                  <p className="card-text">
                    A burger logger built with MySQL, Node, Express, Handlebars
                    and my own ORM.
                  </p>
                  <a
                    href="https://dry-inlet-47678.herokuapp.com/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/burger"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fas fa-database fa-2x"></i>
                  <i className="fab fa-css3-alt fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/workDayScheduler.png`}
                  className="card-img-top"
                  alt="An app for planning your day"
                />
                <div className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <hr />
                  <p className="card-text">
                    A simple work day scheduler built with jQuery and responsive
                    HTML and CSS, which uses local storage to retain data.
                  </p>
                  <a
                    href="https://hannahsones.github.io/WorkDayScheduler/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/WorkDayScheduler"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fab fa-html5 fa-2x"></i>
                  <i className="fab fa-css3-alt fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Projects/PasswordGenerator.png`}
                  className="card-img-top"
                  alt="An app to generate random passwords"
                />
                <div className="card-body">
                  <h5 className="card-title">Password Generator</h5>
                  <hr />
                  <p className="card-text">
                    A simple application that allows a user to generate a random
                    password based on criteria they've selected such as length
                    and character type.
                  </p>
                  <a
                    href="https://hannahsones.github.io/PasswordGenerator/"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View app
                  </a>
                  <a
                    href="https://github.com/HannahSones/PasswordGenerator"
                    className="btn projectBtn"
                    target="_blank"
                  >
                    View repo
                  </a>
                </div>
                <div className="card-footer">
                  <i className="fab fa-html5 fa-2x"></i>
                  <i className="fab fa-css3-alt fa-2x"></i>
                  <i className="fab fa-js fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactMe">
        <h4>
          Ready to see how I can help you? <span>Get in touch</span>
        </h4>
        <Link to="/contact">
          <span>
            <button className="btn contactBtn">Contact me</button>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;

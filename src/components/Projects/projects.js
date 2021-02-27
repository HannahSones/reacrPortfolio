import React, { useEffect } from 'react';
import '../style.css';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
    <img class="profileBackground"
            src={`${process.env.PUBLIC_URL}/assets/Shapes/Profile.png`}
          />
    <div class="container projectContainer">
      <div class="col-md-12">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          Projects
        </h2>
        <hr data-aos="fade-up" data-aos-duration="1500" />

        <div
          class="row row-cols-1 row-cols-md-3 g-4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="2000"
        >
          <div class="col">
            <div class="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Projects/myWardrobe.png`}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">My Wardrobe</h5>
                <p class="card-text">
                  A full-stack application that lets you plan, save and create
                  your outfits at the touch of a button.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Projects/neverMissABeat.png`}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Never Miss A Beat</h5>
                <p class="card-text">
                  An app that enables users to search for their favourite
                  artists and see upcoming live events based on search history.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Projects/WeatherDashboard.png`}
                class="card-img-top"
                alt="An application for viewing the weather"
              />
              <div class="card-body">
                <h5 class="card-title">Weather Dashboard</h5>
                <p class="card-text">
                  A dynamic weather dashboard utilising the Open Weather API and
                  built with jQuery, HTML and Bootstrap.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <a
              href="#profile"
              class="btn btn-dark"
              role="button"
              aria-pressed="true"
            >
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Projects;

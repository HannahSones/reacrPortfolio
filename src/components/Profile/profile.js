import React, { useEffect } from 'react';
import '../style.css';
import './profile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Profile() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <section id="profile" className="profileContainer">
      <div className="container">
        <div className="row">
          <div
            className="col-md-9"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2>Profile</h2>
            <hr />
            <p>
              Digital marketing professional with a proven track record in
              delivering integrated omni-channel campaigns using a range of web
              development skills for multiple household names.
            </p>
            <p>
              Eagerness for continued professional development within an
              industry that is always evolving, I am currently enrolled on the
              University of Birmingham's full stack development bootcamp. Skills
              learnt include HTML/CSS, JavaScript, jQuery and node.js. Alongside
              this, I am also completing the IDM’s Professional Diploma in
              Digital Marketing.
            </p>
            <p>
              Intrigued by big data and how customers interact with brands
              online, my knowledge of cutting-edge web technologies combined
              with marketing expertise will allow me to target users along the
              customer journey using data-driven techniques.
            </p>
          </div>
          <img
            className="headshot col-md-3"
            src={`${process.env.PUBLIC_URL}/assets/HSHeadshot.png`}
            alt="Hannah Sones Headshot"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
        <div className="container">
          <div
            className="row centreBtn"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="col-md-4">
              <a
                className="btn CVbtn"
                href={`${process.env.PUBLIC_URL}/assets/Docs/HS_WebDevCV.pdf`}
                target="_blank"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

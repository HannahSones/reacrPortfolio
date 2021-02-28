import React, { useEffect } from "react";
import "../style.css";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <div>
        <img
          className="contactBackground"
          src={`${process.env.PUBLIC_URL}/assets/Shapes/Contact.png`}
        ></img>
      </div>
      <div
        className="contactContainer"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h1>Let's talk</h1>
        <h4>
          I'd love to hear how I can help you. Send me a message using the
          contact form below to see how we can work together.
        </h4>
        <form>
          <div className="form-outline mb-4">
            <input type="text" className="form-control" />
            <label className="form-label" for="form4Example1">
              Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" className="form-control" />
            <label className="form-label" for="form4Example2">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea className="form-control" rows="4"></textarea>
            <label className="form-label" for="form4Example3">
              Message
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" value="" />
            <label className="form-check-label" for="form4Example4">
              Send me a copy of this message
            </label>
          </div>

          <button type="submit" className="btn btn-block mb-4 sendBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

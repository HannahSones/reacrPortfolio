import React, { useEffect } from 'react';
import '../style.css';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <form className="text-center border border-light p-5">

    <p className="h4 mb-4">Get in touch</p>
  
    <input type="text" formControlName="contactFormName" id="defaultContactFormName" mdbInput
      className="form-control mb-4" placeholder="Name"/>
   
    <input type="email" formControlName="contactFormEmail" id="defaultContactFormEmail" mdbInput
      className="form-control mb-4" placeholder="E-mail"/>
  
    <label>Subject</label>
    <select formControlName="contactFormSubjects" className="browser-default custom-select mb-4">
      <option value="" disabled>Choose option</option>
      <option value="1" selected>Ask a question</option>
      <option value="2">Request a quote</option>
      <option value="3">Provide feedback</option>
    </select>
  

    <div className="form-group">
      <textarea formControlName="contactFormMessage" className="form-control rounded-0" mdbInput id="exampleFormControlTextarea2"
        rows="3" placeholder="Message"></textarea>
    </div>
  
    <button mdbBtn color="info" outline="true" block="true" className="z-depth-0 my-4 waves-effect">Send</button>
  
  </form>
  )
}

export default Contact;
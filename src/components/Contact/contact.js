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
    <form class="text-center border border-light p-5">

    <p class="h4 mb-4">Get in touch</p>
  
    <input type="text" formControlName="contactFormName" id="defaultContactFormName" mdbInput
      class="form-control mb-4" placeholder="Name"/>
   
    <input type="email" formControlName="contactFormEmail" id="defaultContactFormEmail" mdbInput
      class="form-control mb-4" placeholder="E-mail"/>
  
    <label>Subject</label>
    <select formControlName="contactFormSubjects" class="browser-default custom-select mb-4">
      <option value="" disabled>Choose option</option>
      <option value="1" selected>Ask a question</option>
      <option value="2">Request a quote</option>
      <option value="3">Provide feedback</option>
    </select>
  

    <div class="form-group">
      <textarea formControlName="contactFormMessage" class="form-control rounded-0" mdbInput id="exampleFormControlTextarea2"
        rows="3" placeholder="Message"></textarea>
    </div>
  
    <button mdbBtn color="info" outline="true" block="true" class="z-depth-0 my-4 waves-effect">Send</button>
  
  </form>
  )
}

export default Contact;
import React, { useEffect } from 'react';
import '../style.css';
import './cv.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CV() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <section class="cvContainer" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Shapes/CV.png'})` 
    }}>
    <div class="container">
        <div class="row centreBtn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <div class="col-md-4">
                <a class="btn btn-outline-light" href="assets/documents/HS_WebDev CV.pdf" target="_blank">View
                    CV</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default CV
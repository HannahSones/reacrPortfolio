import React, { useEffect } from 'react';
import '../style.css';
import './banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

  return (
    <header className="bannerContainer" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/computerCodeLaptop.png'})` 
      }}>
        <section>
            <div class="container headerBlock">
                <div class="row" data-aos="fade-up" data-aos-duration="2000">
                    <div class="col-md-12">
                        <h1>HANNAH<span>SONES</span></h1>
                        <p>Full stack web developer</p>
                        <hr />
                    </div>
                </div>
                <div class="row" data-aos="fade-up" data-aos-duration="2000">
                    <div class="col-md-12">
                        <a href="#profile" class="btn profileBtn" role="button" aria-pressed="true">Find out more</a>
                    </div>
                </div>
            </div>
        </section>
    </header>
  );
}

export default Banner;
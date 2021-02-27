import React from 'react';
import '../style.css';
import './parallaxBar.css';

function ScrollBar() {

  return (
    <section className="parallaxContainer" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/LlightbulbIdea.png'})` 
      }}>
        <div className="container">
            <div className="row centredQuote">
                <div className="col-md-8">
                    <h1>Have a project in mind?<span> See how <em>I can</em> help you</span></h1>
                    <a href="#"><i className="far fa-hand-point-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ScrollBar;
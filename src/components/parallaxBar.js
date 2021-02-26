import React from "react"
import "./style.css"

function ScrollBar() {

  return (
    <section className="parallaxBar" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/LlightbulbIdea.png'})` 
      }}>
        <div class="container">
            <div class="row centredQuote">
                <div class="col-md-8">
                    <h1>Have a project in mind?<span> See how <em>I can</em> help you</span></h1>
                    <a href="#"><i class="far fa-hand-point-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ScrollBar;
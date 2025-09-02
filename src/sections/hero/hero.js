import React from 'react'

import "./hero.scss";
function Hero() {

    return (
       <section id="home">
           <div>
           <h3 className="strokeText heroHeading">hello I am </h3>
           </div>
           <div  >
           <h1 className="heroHeading">
            Rafii Syahbani.
           </h1>
           </div>
           <div  >
           <h2 className="heroHeading">I build things for the web.</h2>
           </div>
           <div>
            <p>
            I am a Front End web developer who enjoys building beautiful web applications that delivers a better user experience.
            </p>
            </div>
            <div className="btn_container">
            <a aria-label="link to my work section"className="btn" href="#work"> My Project</a>
            </div>
       </section>
    )
}

export default Hero

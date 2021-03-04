import React from 'react'
import "./hero.scss";
function Hero() {
    return (
       <section id="home">
           <h3 className="strokeText">hello I am </h3>
           <h1>
            Meryem Barroug.
           </h1>
           <h2>I build things for the web.</h2>
            <p>
            I am a Front End web developer who enjoys building beautiful web applications that delivers a better user experience.
            </p>
            <div>
            <a className="btn" href="#project"> My work</a>
            </div>
       </section>
    )
}

export default Hero

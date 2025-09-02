import React from 'react';

import"./about.scss";

function About() {

    return (
        <section id="about" >
            <h3 className="title">About</h3>
            <h2 className="strokeText scrol_anime ">NICE TO MEET YOU </h2>
            <p className="scrol_anime">
            I'm a front-end developer with a passion for creating a beautiful responsive application; 
            that delivers a better user experience and can be used by everyone. 
            Technology has always been a major interest in my life, so I tried to combine 
            my interest in web technologies with my sense of attention to details to make beautiful modern websites.
            </p>
            
                <p className="scrol_anime">
                With a growing interest in AI and web technologies, I focus on building interfaces that not only look good but also feel intuitive and dynamic. I'm always eager to learn new tools and technologies that help push my creative and technical limits.<br/></p>
           <div className="skill_Container">
                <span className="skill">HTML</span>
                <span className="skill">CSS(Sass)</span>
                <span className="skill">Javascript</span>
                <span className="skill">React.js</span>
                <span className="skill">Node.js</span>
                <span className="skill">Gatsby</span>
                </div>
         

        </section>
    )
}

export default About;

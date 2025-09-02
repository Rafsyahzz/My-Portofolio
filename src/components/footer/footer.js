import React from 'react'
import SocialIcons from '../social_icons/social_icons';
import "./footer.scss";
function Footer() {
    return (
        <footer >
            <SocialIcons className="horisontal"/>
            <p className="scrol_anime">
            build with <span role="img" aria-label="heart emoji"> ❤️</span> by Rafii Syahbani.
            </p>
           

        </footer>
    )
}

export default Footer

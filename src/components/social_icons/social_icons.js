import React from 'react'
import CodeSandbox from '../icons/codeSandbox';
import Github from '../icons/github';
import Linkedin from '../icons/linkedin';
import "./social_icons.scss";

function SocialIcons({className}) {
    return (
        <div className={`social_icons_container ${className}`}>
            
        <div className="icon">
                <a href="https://www.youtube.com/watch?v=RLc8NB2JyxE">
            <Linkedin />
            </a>
            </div>
            <div className="icon">
                <a href="https://www.youtube.com/watch?v=RLc8NB2JyxE">
            <Github/>
            </a>
            </div>
            <div className="icon strokeIcon">
                <a href="https://www.youtube.com/watch?v=RLc8NB2JyxE">
            <CodeSandbox />
            </a>
            </div>
        </div>
    )
}

export default SocialIcons

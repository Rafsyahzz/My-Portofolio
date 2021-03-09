import React from 'react'
import CodeSandbox from '../icons/codeSandbox';
import Github from '../icons/github';
import Linkedin from '../icons/linkedin';
import "./social_icons.scss";

function SocialIcons({className}) {
    return (
        <div className={`social_icons_container ${className}`}>
            
        <div className="icon">
                <a href="https://linkedin.com/in/barrougmeryem">
            <Linkedin />
            </a>
            </div>
            <div className="icon">
                <a href="https://github.com/MeryemBa">
            <Github/>
            </a>
            </div>
            <div className="icon strokeIcon">
                <a href="https://codesandbox.io/u/MeryemBa">
            <CodeSandbox />
            </a>
            </div>
        
        </div>
    )
}

export default SocialIcons

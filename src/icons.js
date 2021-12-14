import React from 'react';
import linkedinIcon from "./images/linkedin-icon.png";
import GithubIcon from "./images/github-icon.png";
import GmailIcon from "./images/gmail-icon.png";
import ResumeIcon from "./images/resume-icon.png";
import NotesIcon from "./images/notes-icon.png";


export default function icons() {
    return (
        <div>
            <div className="work-div">
            <h1>PROJECTS</h1>
                
                <a
                    href="https://functioning-keeper-app.herokuapp.com/"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <img src={NotesIcon} alt="Notes Logo"  className="notes-icon icons"/>
                </a>
            </div>
            <div className="icons-div">
                <a
                    href="https://www.linkedin.com/in/renato-pimentel/"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Logo"  className="linkedin-icon icons"/>
                </a>
                <a
                    href="https://github.com/renatotabossi/"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <img src={GithubIcon} alt="GitHub Logo" className="github-icon icons"/>
                </a>
                <a
                    href="mailto:renatotabossi@gmail.com"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <img src={GmailIcon} alt="Gmail Logo"  className="gmail-icon icons"/>
                </a>
                <a
                    href="mailto:renatotabossi@gmail.com"
                    rel="noopener noreferrer"
                    target='_blank'>
                    <img src={ResumeIcon} alt="Gmail Logo" className="resume-icon icons"/>
                </a>
            </div>
        </div>
    )
}

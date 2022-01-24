import React from "react";
import NotesIcon from "./images/notes-icon.png";
import BudgetIcon from "./images/budget-icon.png";
import SecretIcon from "./images/secret-icon.png";
import LandingPageIcon from "./images/landing-page-icon.png";
import QuizIcon from "./images/quiz-icon.png";

export default function ProjectsIcons() {
    return (
        <div className="work-div">
            <h1
                style={{
                    margin: "auto",
                }}
            >
                Projects
            </h1>

            <a
                href="https://functioning-keeper-app.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src={NotesIcon}
                    alt="Notes Logo"
                    className="notes-icon icons"
                />
                <span className="description-span">Google Keep Like App</span>
            </a>

            <a
                href="https://budget-project-react-app.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src={BudgetIcon}
                    alt="Budget Logo"
                    className="budget-icon icons"
                />
                <span className="description-span">Personal Budget App</span>
            </a>
            <a
                href="https://oxi-interiores.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src={LandingPageIcon}
                    alt="Landing Page Logo"
                    className="landing-page-icon icons"
                />
                <span className="description-span">Landing Page (beta)</span>
            </a>
            <a
                href="https://secret-app-ejs.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src={SecretIcon}
                    alt="Secret Apps Logo"
                    className="secret-icon icons"
                />
                <span className="description-span">
                    Secrets Posting App (fullstack)
                </span>
            </a>

            <a
                href="https://quiz-app-training.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img src={QuizIcon} alt="Quiz App Logo" className="icons" />
                <span className="description-span">Quiz App (Javascript)</span>
            </a>
        </div>
    );
}
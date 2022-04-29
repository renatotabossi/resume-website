import React from "react";
import NotesIcon from "./images/notes-icon.png";
import BudgetIcon from "./images/budget-icon.png";
import QuizIcon from "./images/quiz-icon.png";
import TicTacToeIcon from "./images/tic-tac-toe-icon.png";

export default function ProjectsIcons() {
    return (
        <div className="work-div">
            <h1
                style={{
                    margin: "auto",
                    textDecoration: "underline dotted",
                }}
            >
                Projects
            </h1>
            <a
                href="https://budget-project-react-app.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src={BudgetIcon}
                    alt="Budget Logo"
                    className="budget-icon icons"
                    ß
                />
                <span className="description-span">Personal Budget App</span>
            </a>
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
                href="https://js-app-tic-tac-toe.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src={TicTacToeIcon}
                    alt="Tic Tac Toe App Logo"
                    className="icons"
                />
                <span className="description-span">
                    Tic Tac Toe Game (Javascript)
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

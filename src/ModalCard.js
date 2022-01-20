import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AboutMeIcon from "./images/about-me-icon.png";
import ProfilePicture from "./images/profile-picture.jpeg";

export default function ModalCard() {
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function toggleLanguage() {
        let newLanguage = "en";
        if (language === newLanguage) {
            newLanguage = "pt";
        }
        setLanguage(newLanguage);
    }

    const aboutMeEng = `Hello! Welcome to my Portfolio, I'm Renato Tabossi, a Front-End Developer, former
    lawyer and business graduate, with experience on React
    and other Javascript Frameworks and Libs (Jquery, Node)
    and also knowledge of CSS (Bootstrap, MUI, Sass,
    Tailwind). Take a look at my GITHUB, Linkedin and online
    projects ! Shoot me an email or DM if you have any
    questions !`;

    const aboutMePtBr = `Ola! Bem-vindo ao meu Portfolio, sou Renato Tabossi, um 
    Front-End Developer, fui advogado e sou formado em Business, possuo vasta 
    experiência em React e outras Frameworks e Libs de Javascript (Jquery, Node), 
    possuo também conhecimento em CSS (Bootstrap, Sass, MUI, Tailwind). Fique a 
    vontade para olhar meus projetos que estão online, bem como meu GITHUB e Linkedin ! 
    Se tiver qualquer dúvida me mande um email ou DM que estarei mais que feliz em responder.`;

    return (
        <>
            <Button
                className="button-modal"
                variant="outline-info"
                onClick={handleShow}
            >
                <img
                    src={AboutMeIcon}
                    className="button-modal-icon"
                    alt="about me icon"
                />
                <p className="about-me-text">About me</p>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="modal-box"
                size="lg"
                centered="true"
            >
                <Modal.Body className="modal-box">
                    <img
                        src={ProfilePicture}
                        className="profile-picture"
                        alt="profile"
                    ></img>
                    <span className="about-me-description">
                        {language === "en" ? aboutMeEng : aboutMePtBr}
                    </span>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button
                        onClick={toggleLanguage}
                        variant="outline-primary"
                        size="lg"
                    >
                        {language === "en" ? "PT" : "EN"}
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

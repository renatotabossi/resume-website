import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AboutMeIcon from "./images/about-me-icon.png";
import ProfilePicture from "./images/profile-picture.jpeg";

export default function ModalCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        Hello! I'm Renato Tabossi, a Front-End Developer, former
                        lawyer and business graduate, with experience on React
                        and other Javascript Frameworks and Libs (Jquery, Node)
                        and also knowledge of CSS (Bootstrap, MUI, Sass,
                        Tailwind). Take a look at my GITHUB, Linkedin and online
                        projects ! Shoot me an email or DM if you have any
                        questions !
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

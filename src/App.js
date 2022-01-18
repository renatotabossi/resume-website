import React from "react";
import Iphone from "./iphone";
import BackgroundImage from "./images/backgroundgif.gif";
import ModalCard from "./ModalCard";

function App() {
    return (
        <div
            className="root-div"
            style={{
                backgroundImage: `url(${BackgroundImage})`,

                backgroundSize: "cover",
            }}
        >
            <Iphone />
            <ModalCard />
        </div>
    );
}

export default App;

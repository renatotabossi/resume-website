import React from "react";
import Iphone from "./iphone";
import Icons from "./icons";
import BackgroundImage from "./images/backgroundgif.gif";
import TimeWeather from "./TimeWeather";

function App() {
    return (
        <div
            className="root-div"
            style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div><TimeWeather/></div>
            <div><Iphone/></div>
            <div><Icons/></div>
        </div>
    )
}

export default App;

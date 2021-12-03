import React from 'react'
import IphoneWallpaper from "./images/iphonewallpaper2.jpeg"; 

export default function iphone() {
    return (
        <div className="iphone-background">
            
            <div class="iphone"></div>
            <div class="circle"></div>
            <div class="camera"></div>
            <div class="speaker"></div>
            <div class="screen"><img src={IphoneWallpaper} alt="" className="iphone-wallpaper"/></div>
            <div class="home1"></div>
            <div class="home2"></div>
            <div class="highlight"></div>
            <div class="line"></div>
        </div>
    );
};

import React from "react";
import "./Hero.css"
import hero_img from "../../assets/hero-img.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container wrapper">
                <div className="text-part">
                    <span>I am Satya</span>
                    <h1>Front-End & React Developer</h1>
                    <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                    <a href="" className="btn-1">Download CV <i class="ri-download-2-line"></i></a>
                </div>
                <div className="img-part">
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
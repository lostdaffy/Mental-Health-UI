import React from "react";
import "./Hero.css"
import hero_img from "../../assets/hero-img.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container wrapper">
                <div className="text-part">
                    <span>I am Front-End Developer</span>
                    <h1>Better Design For Your Digital Products</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of</p>
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
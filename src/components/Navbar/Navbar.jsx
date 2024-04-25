import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="container navbar">
            <h1 className="logo"><i class="ri-logout-circle-r-line"></i> lostdaffy</h1>
            <ul className="links">
                <li>Home</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Resume</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
            <a href="" className="btn-1">Hire Me!</a>
        </nav>
    )
}

export default Navbar
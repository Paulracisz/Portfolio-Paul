import React from "react";
import '../Css/Header.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div id="headerbg">
            <img id="profilepic" alt="me"/>
            <div id="navlinkdiv">
                <NavLink className="navs" id="contactnav" to="/">
                    <p className="navtext"> Home</p>
                </NavLink>
                <NavLink className="navs" id="resumenav" to="/"><p > Resume</p></NavLink>
                <NavLink className="navs" id="worknav" to="/"><p> Projects</p></NavLink>
                <NavLink className="navs" id="linknav" to="/"><p > About</p></NavLink>
            </div>
        </div>
    )
}

export default Header;
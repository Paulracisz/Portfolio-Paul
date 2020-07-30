import React from "react";
import '../Css/Header.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div id="headerbg">
            <img id="profilepic" alt="me"/>
            <div id="navlinkdiv">
                <NavLink to="/" />
                <NavLink to="/" />
                <NavLink to="/" />
            </div>
        </div>
    )
}

export default Header;
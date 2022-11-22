import React from "react";
import "../styles/NavBar.css";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {AiFillCaretDown} from "react-icons/ai";

function NavBar() {
    return (
        <div className="NavBar">
            <a href="/">
                <img src={logo} alt="logoImage" className="logoImage"></img>
            </a>
            <div className="nav-links">
                <Link to="/home" className="link navbar-child">
                    Home
                </Link>
                <div className="navbar-child dropdown">
                    <Link to='/projects' className='drop-btn link'>
                        Projects
                        <AiFillCaretDown/>
                    </Link>
                    <div className="dropdown-content">
                        <Link to="/projects/counter" className="dropdown-link link">Counter</Link>
                        <Link className="dropdown-link link" to="/sandbox">Sandbox</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

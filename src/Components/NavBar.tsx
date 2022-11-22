import React from "react";
import "../styles/NavBar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

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
                    <Link to="/counter" className="link navbar-child">
                        Projects
                    </Link>
                    <div className="navbar-child dropdown">
                        <div className='drop-btn'>
                            Dropdown
                            <AiFillCaretDown />
                        </div>
                        <div className="dropdown-content">
                            <Link to="/counter" className="dropdown-link link">Content1</Link>
                            <div className="dropdown-link">Content2</div>
                            <div className="dropdown-link">Content3</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default NavBar;

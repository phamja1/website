import React from "react";
import "../styles/NavBar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav-tag">
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
                    <div className="dropdown navbar-child">
                        {/* <button className="dropbtn">
                            Dropdown
                        </button>
                        <div className="dropdown-content">
                            <a href="/counter">Counter</a>
                        </div> */}
                        Dropdown
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

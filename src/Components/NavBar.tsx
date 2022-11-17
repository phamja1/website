import React from "react";
import "../styles/NavBar.css";
import logo from "../logo.svg";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav-link">
                <a href="/">
                    <img src={logo} alt="logoImage" className="logoImage"></img>
                </a>
                <ul>
                    <li>
                        <Link to="/home">
                            <div className='Navbar-link'>Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/counter">
                            <div className='Navbar-link'>Projects</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;

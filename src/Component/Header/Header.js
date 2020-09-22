import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './Header.css'
const Header = () => {
    return (
    <div className="d-flex justify-content-between">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="Travel-Guru"/></Link>

        <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search your Destination..." aria-label="Search"></input>
        </form>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link nav-text" to="">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link nav-text" to="">Destination</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link nav-text" to="">Blog </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link nav-text" to="Login"><button className="yellow-btn form-control">Login</button></Link>
                </li>
            
            </ul>
            
        </div>
        </nav>
    </div>
    );
};

export default Header;
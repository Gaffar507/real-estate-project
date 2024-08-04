import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const links = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/list">Lists</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/agents">Agents</Link>
        </>
    );
};

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const user = true;

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" className="brand">
                    <img src="/logo.png" alt="brand logo" />
                    <span>LamaEstate</span>
                </Link>
                <div className="links">{links()}</div>
            </div>
            <div className="right">
                {user ? (
                    <div className="profile">
                        <Link to="/signIn" className="user">
                            <img src="https://th.bing.com/th/id/OIP.4llqBTcDP9m3BZTwOxIbwwHaHa?rs=1&pid=ImgDetMain" alt="user" />
                            <p>John</p>
                        </Link>
                        <Link to="/signUp" className="profile">
                            <span className="notification">3</span>
                            <p>Profile</p>
                        </Link>
                    </div>
                ) : (
                    <div className="signProfile">
                        <Link to="/signIn">Sign In</Link>
                        <Link to="/signUp" className="btn">
                            Sign Up
                        </Link>
                    </div>
                )}

                <div className="menuIcon">
                    <img src={`/${toggle ? 'cancel.png' : 'menu.png'}`} alt="menu" onClick={() => setToggle((toggle) => !toggle)} />
                    <div className={`${toggle ? 'sideLinks active' : 'sideLinks'}`}>
                        {links()}
                        <Link to="/signIn">Sign In</Link>
                        <Link to="/signUp">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

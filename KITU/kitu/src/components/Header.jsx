import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header mobile-header">
            <div className="top-bar">
                <div className="container ">
                    <div className="address">
        BTM 1st Stage, Bengaluru,Karnataka 560068 &nbsp; | &nbsp;  +91 7019781243
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

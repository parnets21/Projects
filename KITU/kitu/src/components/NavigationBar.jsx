import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className='logotransform'>
                    <div className="navbar-logo">
                        <img src="/Assets/kitulogo.png" alt="KITU" />
                        <span>KARNATAKA STATE IT/ITeS EMPLOYEES UNION</span>
                    </div>
                </div>
                <div className='nav-button'>
                    <button>Join Us</button>
                    <button>Donate</button>
                </div>
                <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><Link to ="/">HOME</Link></li>
                    <li><Link to ="/about">ABOUT US</Link></li>
                    <li><Link to ="/event">EVENT</Link></li>
                    <li><Link to ="/gallery">GALLERY</Link></li>
                    <li><Link to ="/contact">CONTACT US</Link></li>
                </ul>
                {/* <div className="navbar-icons">
                    <i className="fas fa-user"></i>
                    <i className="fas fa-search"></i>
                </div> */}
                <div className="navbar-toggle" onClick={toggleMobileMenu}>
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
            <div className={`offcanvas ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="offcanvas-menu">
                    <li><a href="#home" onClick={toggleMobileMenu}>HOME</a></li>
                    <li><a href="#about" onClick={toggleMobileMenu}>ABOUT US</a></li>
                    <li><a href="#category" onClick={toggleMobileMenu}>EVENT</a></li>
                    <li><a href="#blog" onClick={toggleMobileMenu}>GALLERY</a></li>
                    <li><a href="#contact" onClick={toggleMobileMenu}>CONTACT US</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from '../helpers/Button';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState<boolean>(false);
    const [active, setActive] = useState<string>('');

    const handleClick = () => setClick(!click);
    const closeMobileMenu = (active: string) => {
        setActive(active);
        setClick(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fas fa-user-check"></i>
                        <div className="navbar-logo-text">KLEINER</div>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={`nav-item${active === 'home' ? ' nav-active' : ''}`}>
                            <a className="nav-links" href="#home" onClick={() => closeMobileMenu('home')}>Home</a>
                            {/* <Link to="/home" className="nav-links"  onClick={() => closeMobileMenu('home')}>Home</Link> */}
                        </li>
                        <li className={`nav-item${active === 'about' ? ' nav-active' : ''}`}>
                            {/* <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link> */}
                            <a className="nav-links" href="#about" onClick={() => closeMobileMenu('about')}>About</a>
                        </li>
                        <li className={`nav-item${active === 'contact' ? ' nav-active' : ''}`}>
                            {/* <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link> */}
                            <a className="nav-links" href="#contact" onClick={() => closeMobileMenu('contact')}>Contact</a>

                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

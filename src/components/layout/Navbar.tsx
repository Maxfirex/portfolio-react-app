import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
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
                        <li className={`nav-item${active === 'hero' ? ' nav-active' : ''}`}>
                            <Link smooth to="/home#top" className="nav-links"  onClick={() => closeMobileMenu('hero')}>Home</Link>
                        </li>
                        <li className={`nav-item${active === 'about' ? ' nav-active' : ''}`}>
                            <Link smooth to="/home#about" className="nav-links" onClick={() => closeMobileMenu('about')}>About</Link>
                        </li>
                        <li className={`nav-item${active === 'contact' ? ' nav-active' : ''}`}>
                            <Link smooth to="/home#contact" className="nav-links" onClick={() => closeMobileMenu('contact')}>Contact</Link>
                        </li>
                        <li className={`nav-item${active === 'projects' ? ' nav-active' : ''}`}>
                            <Link smooth to="/projects" className="nav-links" onClick={() => closeMobileMenu('projects')}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

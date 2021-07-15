import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../helpers/Button';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState<boolean>(false);
    const [button, setButton]= useState<boolean>(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => { 
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <div className="navbar-logo-text">KLEINER</div><i className="fas fa-user-check"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/extras" className="nav-links" onClick={closeMobileMenu}>Extras</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

// 

import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact 15.21.17.png';
import { Link } from 'react-scroll';
import menu from '../../assets/burger-menu-right-svgrepo-com.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Projects</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Client</Link>
                {/* <a href='https://www.linkedin.com/in/meena-thiru/'><Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">LinkedIn</Link></a> */}
                <a href="https://www.linkedin.com/in/meena-thiru/" target="_blank" rel="noopener noreferrer" className="listItem">LinkedIn</a>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="contact" className="desktopMenuImg" />Contact Me
            </button> 
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Client</Link>
                {/* <Link activeClass='active' to='linkedIn' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>LinkedIn</Link> */}
                <a href="https://www.linkedin.com/in/meena-thiru/" target="_blank" rel="noopener noreferrer" className="listItem" onClick={() => setShowMenu(false)}>LinkedIn</a>
            </div> 
        </nav>
    );
}

export default Navbar;

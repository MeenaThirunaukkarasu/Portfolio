import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
// import contactImg from '../../assets/contact.png';
import contactImg from '../../assets/contact 15.21.17.png'
import  { Link } from 'react-scroll';
// import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
        <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem">Client</Link>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem">LinkedIn</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="contact" className="desktopMenuImg" />Contact Me</button> 
            {/* <img src={menu} alt="Menu" className='mobMenu' /> */}
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>(!showMenu)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>(!showMenu)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>(!showMenu)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>(!showMenu)}>Client</Link>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>(!showMenu)}>LinkedIn</Link>
        </div>
        </nav>
  )
 
}

export default Navbar
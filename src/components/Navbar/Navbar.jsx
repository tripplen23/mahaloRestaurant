import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  // Toggle Menu
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // return navbar
  return (
    <nav className='app__navbar'>

      {/* logo */}
      <div className="app__navbar-logo">
        <img src ={images.mahalo} alt="app__logo" />
      </div>

      {/* Nav sections */}
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      {/* Nav login */}
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="https://www.facebook.com/messages/t/107887905284069" target="_blank" rel='noopener' className='p__opensans'>Order Now</a>
      </div>  

      {/* Navbar Small Screen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {/* Toggle Menu */}
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home" >
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>Say Mahalo!</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
      Welcome to Mahalo Sashimi Restaurant, where we offer the finest selection of sashimi and raw seafood dishes in town. Our passion for fresh, high-quality ingredients shines through in every dish we serve. Whether you're in the mood for a classic sashimi platter or something a little more creative, we have something for everyone. Join us for a truly unforgettable dining experience.
      </p>
      <button type='button' className='custom__button'>
        <a href="#menu">Explore Menu</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;

import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{ marginBottom:'3rem'}}>Find Us</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">Sunrise Riverside, Phuoc Kien Ward, Nha Be District, <br/> Ho Chi Minh city</p>
        <p className="p__cormorant" style={{ color:'#DCCA87', margin:'2rem 0' }}>Opening Hours.</p>
        <p className="p__opensans">Mon - Fri: 11:00 - 20:00</p>
        <p className="p__opensans">Sat - Sun: 11:00 - 20:00</p>
      </div>

      <button className='custom__button' style={{ marginTop:'2rem' }}>
        <a href="https://map.coccoc.com/map?borders=10.714846152674534%2C106.69231152494447%2C10.723943567880177%2C106.71243882139223&query=Sunrise+Riverside%2C+Phuoc+Kien+Ward%2C+Nha+Be+District%2C+Ho+Chi+Minh+City" target="_blank" rel="noopener">Visit Us</a>
      </button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;

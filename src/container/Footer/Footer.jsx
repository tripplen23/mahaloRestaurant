import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (

  <div className='app__footer section__padding' id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      
      {/* contact address */}
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Sunrise Riverside, Ho Chi Minh city</p>
        <br />
        <a className='p__opensans' href="https://api.whatsapp.com/send?phone=+358415751134" target="_blank" rel="noreferrer">+358 415-751-134</a>
        <br />
        <a className='p__opensans' href="https://api.whatsapp.com/send?phone=+84906959527" target="_blank" rel="noreferrer">+84 906-959-527</a>
      </div>

      {/*Links logo*/}
      <div className="app__footer-links_logo">
        <img src={images.mahalo} alt="footer_logo" />
        <p className="p__opensans">"Experience the freshest catch at Mahalo Sashimi Restaurant."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        
        {/*Social*/}
        <div className='app__footer-links_icons'>
          <a href="https://www.tiktok.com/@mahalo.salmon?_t=8YYRZHzWKuo&_r=1" target="_blank" rel="noopener"><FaTiktok /></a>
          <a href="https://www.facebook.com/sushideliverydistrict7" target="_blank" rel="noopener"><FiFacebook /></a>
          <a href="https://www.instagram.com/mahalo_salmon/" target="_blank" rel="noopener"><FiInstagram /></a>
        </div>

      </div>

      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>11:00 - 20:00</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>11:00 - 20:00</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Mahalo. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;

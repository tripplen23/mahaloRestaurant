import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id ="about">

    {/* Background Letter */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay"/>
    </div>

    {/* Content Inside */}
    <div className="app__aboutus content flex__center">

      {/* About Us */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img1' />
        <p className="p__opensans">
          Mahalo Salmon embraces a fusion of Hawaiian and Japanese theme in which culinary and inspiration are the key elements to build an aesthetic foody island
        </p>
      </div>

      {/* Knife Image */}
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about_knife" className='knife__img' />
      </div>

      {/* History */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Inspired by the fresh seafood from Japan and colorful Poke bowl from Hawaii, the team of four shareholders decided to start up an online restaurant to from that deliver the most convenient, nutritious, and quick meal to busy people with just a click.
        </p>
      </div>

    </div>
  </div>
);

export default AboutUs;

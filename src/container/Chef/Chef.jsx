import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    {/* Chef's image */}
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    {/* Chef's words */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      {/* Chef's quote */}
      <div className='app__chef-content'>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">As the head chef at Mahalo Sashimi Restaurant, I am dedicated to bringing you the freshest and most authentic sashimi experience possible. Our seafood is carefully selected and sourced from the finest purveyors, ensuring that every bite is bursting with flavor and quality.</p>
        </div>
        <br />
        <p className="p__opensans">Whether you're a sashimi connoisseur or new to the world of raw fish, I invite you to come and discover the art of sashimi at Mahalo.</p>
      </div>

      {/* Chef's sign */}
      <div className="app__chef-sign">
        <p>Nguyen Huu Khanh Linh (Lu)</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

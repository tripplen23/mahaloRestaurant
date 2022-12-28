import React from 'react';

import { SubHeading, MenuItem } from '../../components'
import { images,data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">

    {/* Title */}
    <div className="app__specialMenu-title">
      <SubHeading title = "Menu That Fits You Palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      {/* Sashimi info */}
      <div className="app__specialMenu-menu_sashimi flex__center">
        <p className='app__specialMenu-menu_heading'>Sashimi</p>
        <div className="app__specialMenu_menu_items">
          {data.sashimi.map((sashimi, index) => (
            <MenuItem key={sashimi.title + index} title={sashimi.title} price={sashimi.price} tags={sashimi.tags} />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu_img"/>
      </div>

      {/* Special Dishes info */}
      <div className="app__specialMenu-menu_specialDishes flex__center">
        <p className='app__specialMenu-menu_heading'>Special Dishes</p>
        <div className="app__specialMenu_menu_items">
          {data.specialDishes.map((specialDishes, index) => (
            <MenuItem key={specialDishes.title + index} title={specialDishes.title} price={specialDishes.price} tags={specialDishes.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop: 15 }}>
      <button type="button" className='custom__button'>
        <a href='https://www.facebook.com/media/set/?set=a.119866990752827&type=3' target="_blank" rel="noopener">View More</a>
      </button>
    </div>
  </div>
);

export default SpecialMenu;

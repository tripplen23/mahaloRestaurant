import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5z9191k', 'template_x8yzqnd', form.current, 'XgQIrORrMIsCrATc4')

    e.target.reset(alert("Thank You For Subscribing!"));
  };
  return (
    <div className='app__newsletter'>

      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subcribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>

      <div className='app__newsletter-input flex__center'>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <input type="email" name='email' placeholder='Enter your e-mail address' required/>
          <button type='submit' className='custom__button'>
            Subscribe
          </button>
        </form>

      </div>

    </div>
  )
};

export default Newsletter;

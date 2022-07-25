import React from "react";
import { GiFamilyHouse } from "react-icons/gi";
import image1 from "../images/APKFile-primary.webp";
import image2 from "../images/PlayStore-primary.webp";
import image3 from "../images/AppStore-primary.webp";
function Mail() {
  return (
    <section className='mail-section'>
      <div className='mail-container'>
        <h3>Join our mailing list</h3>
        <p>
          Get access to exclusive news and be the first to learn about new
          product launches.
        </p>
        <div className='mail-input'>
          <input type='email' placeholder='name@example.com' />
          <button className='btn'>Sign up</button>
        </div>
        <div className='about'>
          <div className='business'>
            <GiFamilyHouse />
            <h4>World’s largest network of bank account numbers</h4>
            <p>
              Get local bank account numbers for your business in over 30
              countries.
            </p>
          </div>
          <div className='business'>
            <GiFamilyHouse />
            <h4>World’s largest network of bank account numbers</h4>
            <p>
              Get local bank account numbers for your business in over 30
              countries.
            </p>
          </div>
          <div className='business'>
            <GiFamilyHouse />
            <h4>World’s largest network of bank account numbers</h4>
            <p>
              Get local bank account numbers for your business in over 30
              countries.
            </p>
          </div>
        </div>
        <div className='images'>
          <img src={image1} alt='' />
          <img src={image2} alt='' />
          <img src={image3} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Mail;

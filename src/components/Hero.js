import React from "react";
import image from "../images/trustpilot.png";
import hero1 from "../images/accounts-mobile.webp";
import hero2 from "../images/currenxie-visa.webp";
function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-info'>
          <h1>One account to replace them all.</h1>
          <p>
            Global payments simplified: multicurrency accounts, Visa cards, bank
            transfers and foreign exchange for businesses.
          </p>
          <button className='btn'>Get started</button>
          <p className='free'>It's free.</p>
          <div className='trustpilot'>
            <img src={image} alt='' />
            <h4>
              Rated <br /> Excellent
            </h4>
          </div>
        </div>
        <div className='hero-images'>
          <img src={hero2} alts='' />
          <img src={hero1} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;

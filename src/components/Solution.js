import React from "react";
import { GiFamilyHouse } from "react-icons/gi";
import image1 from "../images/transactions.webp";
import image2 from "../images/currenxie-visa.webp";

import image3 from "../images/accounts-mobile.webp";
function Solution() {
  return (
    <section className='solution-section'>
      <div className='solution-container'>
        <h3>A solution you need</h3>
        <div className='solutions'>
          <div className='solution'>
            <img src={image1} alt='' />
            <h4>
              <GiFamilyHouse />
              Payments
            </h4>
            <p>
              <b>Pay and get globally.</b> Access Currenxie's global bank
              account network to collect and make payments, so you always get
              the local treatment. Fast, affordable, and flexible.
            </p>
            <button className='btn'>Learn more</button>
          </div>
          <div className='solution'>
            <img src={image2} alt='' />
            <h4>
              <GiFamilyHouse />
              Payments
            </h4>
            <p>
              <b>Pay and get globally.</b> Access Currenxie's global bank
              account network to collect and make payments, so you always get
              the local treatment. Fast, affordable, and flexible.
            </p>
            <button className='btn'>Learn more</button>
          </div>
          <div className='solution'>
            <img src={image2} alt='' />
            <h4>
              <GiFamilyHouse />
              Payments
            </h4>
            <p>
              <b>Pay and get globally.</b> Access Currenxie's global bank
              account network to collect and make payments, so you always get
              the local treatment. Fast, affordable, and flexible.
            </p>
            <button className='btn'>Learn more</button>
          </div>
          <div className='solution'>
            <img src={image3} alt='' />
            <div>
              <h4>
                <GiFamilyHouse />
                Payments
              </h4>
              <p>
                <b>Pay and get globally.</b> Access Currenxie's global bank
                account network to collect and make payments, so you always get
                the local treatment. Fast, affordable, and flexible.
              </p>
              <button className='btn'>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;

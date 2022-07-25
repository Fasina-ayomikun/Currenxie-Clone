import React from "react";
import { AiOutlineRocket } from "react-icons/ai";

import { AiOutlineAlignRight } from "react-icons/ai";
function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-info'>
          <h5 className='logo'>Currenxie</h5>
          <ul className='nav-links'>
            <li className='nav-link'>
              <a href='#'>
                <AiOutlineRocket /> Features
              </a>
            </li>
            <li className='nav-link'>
              <a href='#'>
                <AiOutlineRocket />
                Resources
              </a>
            </li>
            <li className='nav-link'>
              <a href='#'>
                {" "}
                <AiOutlineRocket />
                Company
              </a>
            </li>
            <li className='nav-link'>
              <a href='#'>
                {" "}
                <AiOutlineRocket />
                eCommerce
              </a>
            </li>
          </ul>
        </div>
        <h5 className='login'>
          Log in <AiOutlineRocket />
        </h5>
        <AiOutlineAlignRight className='toggle-btn' />
      </div>
    </div>
  );
}

export default Navbar;

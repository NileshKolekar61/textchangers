import React from "react";
import './header.css';

const Header = () => {
  return (
    <>
      <div className="header-con">
        <div className="hearder-div1">
          <a href="#"><h1>TextChanger</h1></a>
        </div>
        <div className="hearder-div2">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

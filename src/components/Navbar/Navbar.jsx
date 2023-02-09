import React from "react";
import Toggle from "../Toggle/Toggle";
import logo from "../../img/cw2sglogo2.png";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div   className="n-name"><img src={logo} alt="" /></div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link  activeClass="active" to="Navbar" spy={true} smooth={true}>
              <div className="navv">
                Home
                </div>
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
              <div className="navv">
              Serivces
                </div>
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
              <div className="navv">
              Experience
                </div>
                
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
              <div className="navv">
              Protfolio
                </div>
                
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
              <div className="navv">
              About
                </div>
                
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">
        <div className="navv">
        Contact
                </div></button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;

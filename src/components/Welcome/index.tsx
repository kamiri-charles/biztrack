import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import TextEffect from "../../assets/TextEffect";

const Welcome: React.FC = () => {

  return (
    <div className="welcome">
      <div className="landing-header">
        <div className="section-link brand-space"></div>
        <a href="#about" className="section-link">
          About
        </a>
        <a href="#faq" className="section-link">
          FAQ
        </a>
        <a href="#contact" className="section-link">
          Contact
        </a>

        <Link to="/sign-in" className="section-button">
          Sign In
        </Link>
        <Link to="/sign-up" className="section-button">
          Sign Up
        </Link>
      </div>
      <div className="section" id="default">
        <div className="welcome-text">
          <span>Welcome to,</span>
          <TextEffect text="BIZTRACK!" interval={30} />
          <span>Empowering Enterprenuers, One Business at a Time.</span>
        </div>
      </div>

      <div className="section" id="about">
        <div className="section-title">ABOUT</div>
        This is the about page.
      </div>

      <div className="section" id="faq">
        <div className="section-title">FAQ</div>
        This is the FAQ page.
      </div>

      <div className="section" id="contact">
        <div className="section-title">Contact</div>
        This is the contact page.
      </div>
    </div>
  );
};

export default Welcome;

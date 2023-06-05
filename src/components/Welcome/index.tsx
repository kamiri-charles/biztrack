import React from "react";
import { Link } from "react-router-dom";
import TextEffect from "../../assets/TextEffect";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import "./styles.scss";
import TestimonialCard from "../../assets/TestimonialCard";

const Welcome: React.FC = () => {

  const testimonials = [
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },

    {
      name: "Jane Doe",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },

    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },

  ]

  return (
    <div className="welcome">
      <div className="landing-header">
        <Link 
          to="/"
          className="brand-space"
          onClick={() => {
            document.getElementById("default")?.scrollIntoView({ behavior: "smooth" });}}>
          <span>BIZ</span>TRACK
        </Link>

        <Link
          to="/#about"
          className="section-link"
          onClick={() => {
             document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });}}
              >About</Link>


        <Link
          to="/#faq"
          className="section-link"
          onClick={() => {
            document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });}}
        >
          FAQ
        </Link>

        <Link
          to="/#contact"
          className="section-link"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });}}
        > 
          Contact
        </Link>

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

        <TestimonialCard testimonials={testimonials} />
        
      </div>

      <About />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Welcome;

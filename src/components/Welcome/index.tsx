import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import TextEffect from "../../assets/TextEffect";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import "./styles.scss";


// TODO: Landing header should have a dark background on scroll
const Welcome: React.FC = () => {

  let landing_header = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let handle_scroll = () => {
      if (window.scrollY >= 1474 && !landing_header.current?.classList.contains('scrolled')) {
        landing_header.current?.classList.add('scrolled');
      } else if (
        window.scrollY < 1474
      ) {
        landing_header.current?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handle_scroll);

    return () => {
      window.removeEventListener('scroll', handle_scroll);
    };

  }, []);
  return (
    <div className="welcome">
      <div className="landing-header" ref={landing_header}>
        <Link
          to="/"
          className="brand-space"
          onClick={() => {
            document
              .getElementById("default")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>BIZ</span>TRACK
        </Link>

        <Link
          to="/#about"
          className="section-link"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About
        </Link>

        <Link
          to="/#faq"
          className="section-link"
          onClick={() => {
            document
              .getElementById("faq")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          FAQ
        </Link>

        <Link
          to="/#contact"
          className="section-link"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </Link>
      </div>

      <div className="section" id="default">
        <div className="welcome-text">
          <span>Welcome to,</span>
          <TextEffect text="BIZTRACK!" interval={30} />
          <span>Empowering Enterprenuers, One Business at a Time.</span>
        </div>

        <div className="buttons">
          <Link to="/sign-up" className="welcome-page-link">
            Create an account
          </Link>
          or
          <Link to="sign-in" className="welcome-page-link">
            Sign in to your account
          </Link>
        </div>
      </div>

      <About />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Welcome;

import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Typed from "typed.js";

const Header: React.FC = () => {
  // Create reference to store DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span>Biz</span>Track"],
      typeSpeed: 75,
      startDelay: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <i className="bx bx-menu"></i>
        <div ref={el}>
          <span>Biz</span>Track
        </div>
      </div>

      <div className="right">
        <div className="search">
          <input type="text" placeholder="Businesses, People, Locations" />
          <i className="bx bx-search"></i>
        </div>

        <div className="profile">
          <div className="profile-image">
            {/*  Random image from unsplash */}
            {/* <img src="https://source.unsplash.com/random" alt="profile" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

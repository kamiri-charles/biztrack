import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./styles.scss";

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
        <div ref={el}>
          <span>Biz</span>Track
        </div>
      </div>

        <div className="profile">
          <div className="profile-image">
            {/*  Random image from unsplash */}
            {/* <img src="https://source.unsplash.com/random" alt="profile" /> */}
          </div>
        </div>
    </div>
  );
};

export default Header;

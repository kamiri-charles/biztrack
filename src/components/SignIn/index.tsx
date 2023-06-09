// TODO: Sign in with Google, Facebook, Twitter, Github, etc.
// TODO: Add forgot password functionality.
// TODO: Add remember me functionality.
// TODO: Add show password functionality.

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { sign_in } from "./sign_in";

interface UserData {
  username_or_email: string;
  password: string;
}

const SignIn: React.FC = () => {
  let [userData, setUserData] = useState<UserData>({
    username_or_email: "",
    password: "",
  });

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
    <div className="sign-in">
      <div className="custom-header" ref={el}></div>

      <form>
        <div className="form-title">Sign in to your account.</div>
        <label>
          <span className={userData.username_or_email === "" ? "" : "active"}>
            Username / Email address
          </span>

          <input
            className={userData.username_or_email === "" ? "" : "active"}
            type="text"
            value={userData.username_or_email}
            onChange={(e) =>
              setUserData({ ...userData, username_or_email: e.target.value })
            }
            required
          />
        </label>
        <label>
          <span className={userData.password === "" ? "" : "active"}>
            Password
          </span>

          <input
            className={userData.password === "" ? "" : "active"}
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
        </label>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            sign_in(userData);
          }}
        >
          Log In
        </button>

        <div className="form-footer">
          Don't have an account? <br />
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

const SignUp: React.FC = () => {
  let [userData, setUserData] = useState<UserData>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
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
    <div className="sign-up">
      <div className="custom-header" ref={el}></div>

      <form>
        <div className="form-title">Create an account.</div>
        <label>
          <span className={userData.first_name === "" ? "" : "active"}>
            Enter your first name
          </span>

          <input
            className={userData.first_name === "" ? "" : "active"}
            type="text"
            value={userData.first_name}
            onChange={(e) =>
              setUserData({ ...userData, first_name: e.target.value })
            }
            required
          />
        </label>

        <label>
          <span className={userData.last_name === "" ? "" : "active"}>
            Enter your last name
          </span>

          <input
            className={userData.last_name === "" ? "" : "active"}
            type="text"
            value={userData.last_name}
            onChange={(e) =>
              setUserData({ ...userData, last_name: e.target.value })
            }
            required
          />
        </label>

        <label>
          <span className={userData.email === "" ? "" : "active"}>
            Enter your email
          </span>

          <input
            className={userData.email === "" ? "" : "active"}
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
        </label>

        <label>
          <span className={userData.username === "" ? "" : "active"}>
            Username
          </span>

          <input
            className={userData.username === "" ? "" : "active"}
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            required
          />
        </label>
        <label>
          <span className={userData.password === "" ? "" : "active"}>
            Create a password
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

        <button type="submit">Create Account</button>

        <div className="form-footer">
          Already have an account? <br />
          <Link to="/sign-in">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

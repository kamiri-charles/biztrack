import React, { useEffect } from 'react';
import './Navbar.scss';

interface NavbarProps {
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({onSectionChange}) => {

    useEffect(() => {
        localStorage.setItem('biztrack_curr_section', 'dashboard');
    }, []);


    const handleClick = (sec: string) => {
        localStorage.setItem('biztrack_curr_section', sec);
        onSectionChange(sec);
    }

    return (
      <div className="navbar">
        <div
          className={
            localStorage.getItem("biztrack_curr_section") === "dashboard"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => handleClick("dashboard")}
        >
          <i className="bx bxs-dashboard"></i>
          <span>Dashboard</span>
        </div>

        <div
          className={
            localStorage.getItem("biztrack_curr_section") === "businesses"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => handleClick("businesses")}
        >
          <i className="bx bxs-store-alt"></i>
          <span>Businesses</span>
        </div>

        <div
          className={
            localStorage.getItem("biztrack_curr_section") === "sales"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => handleClick("sales")}
        >
          <i className="bx bxs-dollar-circle"></i>
          <span>Sales</span>
        </div>

        <div
          className={
            localStorage.getItem("biztrack_curr_section") === "misc"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => handleClick("misc")}
        >
          <i className="bx bx-question-mark"></i>
          <span>Misc</span>
        </div>
      </div>
    );
}

export default Navbar;
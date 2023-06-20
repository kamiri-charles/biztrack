import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navbar from "./Navbar";
import "./styles.scss";
import Dashboard from "./Dashboard";
import Businesses from "./Businesses";
import Sales from "./Sales";
import Misc from "./Misc";

const Home: React.FC = () => {

  let [currSec, setCurrSec] = useState<string | undefined>();

  useEffect(() => {
    let sec = localStorage.getItem('biztrack_curr_section');
    setCurrSec(sec || undefined);
  }, []);


  const handleSectionChange = (newSection: React.SetStateAction<string | undefined>) => {
    setCurrSec(newSection);
  };

  return (
    <div className="home">
      <Header />
      <Navbar onSectionChange={handleSectionChange} />

      <div className="content-wrapper">
        {
          currSec === 'dashboard' ? <Dashboard /> :
          currSec === 'businesses' ? <Businesses /> :
          currSec === 'sales' ? <Sales /> : <Misc /> 
        }
      </div>
    </div>
  );
};

export default Home;

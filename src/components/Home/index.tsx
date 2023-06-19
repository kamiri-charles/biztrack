import React from "react";
import "./styles.scss";
import Header from "../Header";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
    </div>
  );
};

export default Home;

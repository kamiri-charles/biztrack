import React, {useRef, useEffect} from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import "boxicons/css/boxicons.min.css";
import './App.scss';


function App() {

  const blob_el = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.onpointermove = e => {
      const {clientX, clientY} = e;

      blob_el.current?.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 3000, fill: "forwards"})
    }
  }, []);

  return (
    <div className="App">
      <div className="blob" ref={blob_el}></div>
      <div className="blur"></div>
      <Router basename="biztrack">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

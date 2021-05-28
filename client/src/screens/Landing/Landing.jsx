import React from 'react';
import "./Landing.css"
import Logo from "../../components/Logo/Logo"

function Landing(props) {
  return (
    <div className="landing">
      <Logo />
      <p className='logo-header'>the oakland</p>
      <h6 className='logo-subhead'>ART NOVELTY COMPANY</h6>
    </div>
  );
}

export default Landing;
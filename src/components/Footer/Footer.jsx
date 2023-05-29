import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import insta from '../../img/instagramgif.gif'
import twitter from '../../img/twittergif.gif'
import linkedin from '../../img/linkedingif.gif'


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>skarthikeyan25052001@gmail.com</span>
        <div className="f-icons">
          <img src={insta}></img>
          <img src={twitter}></img>
          <img src={linkedin}></img>          
        </div>
      </div>
    </div>
  );
};

export default Footer;

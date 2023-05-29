import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.webp";
import Emoji2 from "../../img/emoji2.gif";
import Emoji3 from "../../img/emoji3.gif";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>        
        <spane>
        Hans on Experienced in React.js, HTML, CSS, and JavaScript.
          <br />
        Deployed many projects
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >     
        <div className="card">
          <img className="image" src={HeartEmoji}></img>
          <h4>Front end</h4>
          <p>"Html, Css, JavaScript, React-Js, J-Query, Bootstrap , Tailwind , Git , Git-Hub"</p>
          </div>                
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >          
          <div className="card">
          <img className="image" src={Emoji2}></img>
          <h4>Back end</h4>
          <p>"Java , Nodejs, Spring-Boot, C, Data Structures ,Algo "</p>
          </div>                
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >          
          <div className="card">
          <img className="image" src={Emoji3}></img>
          <h4>data base</h4>
          <p>Mysql , Mongo-Db , Sql</p>
          </div>                
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

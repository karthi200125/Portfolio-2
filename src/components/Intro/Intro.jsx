import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/pika3.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import TrackVisibility from 'react-on-screen';
import github1 from '../../img/githubgif.gif'
import linkedin1 from '../../img/link.gif'
import instagram1 from '../../img/instagramgif.gif'
import twitter1 from '../../img/twittergif.gif'

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">                    
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <TypeAnimation
      sequence={[
        'Karthi Keyan',
        1000, 
        'Full stack developer', 
        2000, 
        'Web Designer',     
        1000,
        () => {
          console.log('Sequence completed'); 
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
          <span>
            Full Stack Developer with good experience in web designing
            and development
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={github1}alt=""className="i-icons1" />
          <img src={linkedin1} alt="" className="i-icons2"/>
          <img src={instagram1} alt=""className="i-icons3" />
          <img src={twitter1} alt=""className="i-icons4" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
      <TrackVisibility className="downupimage">            
          <img src={Vector1} alt="" />
      </TrackVisibility>
      <TrackVisibility className="leftrightimage">            
          <img src={Vector2} alt="" />
      </TrackVisibility>      
        <TrackVisibility className="updownimage">            
            <img className="pika"src={boy} alt="" />
        </TrackVisibility>
        
        {/* animation */}
        <TrackVisibility className="leftrightimage">            
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        </TrackVisibility>
        

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >          
          <FloatinDiv img={thumbup} text1="full stack" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

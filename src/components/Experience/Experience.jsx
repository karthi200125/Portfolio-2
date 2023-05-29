import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import html from '../../img/html5.png';
import css from '../../img/css.png';
import javascript from '../../img/javascript.png';
import react from '../../img/react.png';
import java from '../../img/java.png';
import bootstrap from '../../img/bootstrap.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Experience.css";
import RA from '../../img/arrow.png'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const swiperParams = {
    spaceBetween: 1,
    slidesPerView: 3,
    grabCursor: false,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="experience" id='experience'>
      <Swiper {...swiperParams} className="swiper">
        <div className="first">
          <SwiperSlide>
            <div className="achievement">
              <img src={html} alt="HTML" />
              <span>HTML</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="achievement">
              <img src={css} alt="CSS" />
              <span>CSS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="achievement">
              <img src={javascript} alt="JavaScript" />
              <span>JavaScript</span>
            </div>
          </SwiperSlide>
        </div>
        <div className="second">
          <SwiperSlide>
            <div className="achievement">
              <img src={java} alt="Java" />
              <span>Java</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="achievement">
              <img src={react} alt="React JS" />
              <span>React JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="achievement">
              <img src={bootstrap} alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="ra">
      Languages I Know
      <br/>
      Swipe <br/>
      <p> --> </p>  
      </div>    
    </div>
  );
};

export default Experience;

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ResumeBuilder from "../../img/Resume-builder.png";
import CC from "../../img/cc.png";
import port1 from "../../img/port-1.png";
import Ecommerce from "../../img/ecom.png";
import PizzaShop from "../../img/Pizza-shop.png";
import gym from "../../img/Gym.png";
import Snankegame from '../../img/snake-game.png'
import { themeContext } from "../../Context";


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{color: darkMode?'white': ''}}className="portfolio" id="portfolio">
      
      <span style={{color: darkMode?'white': ''}}><b>Projects</b></span>  
      <p>Click Projects to visit websites</p>    

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >        
        <SwiperSlide>
        <a href="https://karthi200125.github.io/Fitness-Website/">
        <div class="portcard">
           <img src={gym} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>Fitness Website</p>             
           </div>
        </div>
        </a>        
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://karthi200125.github.io/E-commerce-/">
          <div class="portcard">
           <img src={Ecommerce} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>E-Commerce Website</p>
           </div>
        </div>
          </a>        
        </SwiperSlide>

        <SwiperSlide>
        <a href=" ">
        <div class="portcard">
           <img src={port1} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>Portfolio</p>
           </div>
        </div>
        </a>        
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://karthi200125.github.io/currency-converter/">
        <div class="portcard">
           <img src={CC} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>Currenncy Converter</p>
           </div>
        </div>
        </a>        
        </SwiperSlide>


        <SwiperSlide>
        <a href="https://karthi200125.github.io/Pizza_Shop/">
        <div class="portcard">
           <img src={PizzaShop} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>Pizza SHop</p>
           </div>
        </div>
        </a>        
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://karthi200125.github.io/snakee/">
        <div class="portcard">
           <img src={Snankegame} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>snake Game</p>
           </div>
        </div>
        </a>        
        </SwiperSlide>


        <SwiperSlide>
        <a href="https://karthi200125.github.io/Resume_Builder/">
        <div class="portcard">
           <img src={ResumeBuilder} alt="Image" class="portcard-img"/>
           <div class="portcard-text">
             <p>Resume Builder</p>
           </div>
        </div>        
        </a>      
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;

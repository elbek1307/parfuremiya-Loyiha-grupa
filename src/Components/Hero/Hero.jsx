import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroi from "./img/heroi.jpg";
import hero11 from "./img/hero11.jpg";
import herro2 from "./img/herro2.jpg";
const Slider = SliderPackage.default || SliderPackage
function Hero() {
  const {t, i18n} = useTranslation();
   const settings = {
    dots: true,
    speed: 800,         
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
  };
  return (
    <div className="hero">
      <div className="container">
        <Slider {...settings}>
          
          <div>
            <div className="hero-info">
              <div className="hero-left">
                <h6 className="hero-titles">{t("hero.hero-titles")} - 1</h6>
                <h1 className="hero-title">{t("hero.hero-title")} 1</h1>
                <p className="hero-text">{t("hero.hero-text")}</p> 
                <button className="hero-btn">{t("hero.hero-btn")}</button>
              </div>
          
              <div className="hero-right">
                <img src="/img/heroi.jpg" alt="rasm" />
              </div>
            </div>
          </div>

          <div>
            <div className="hero-info">
             <img src="/img/hero11.jpg" alt="rasm" />
            </div>
          </div>

        
          <div>
            <div className="hero-info">
             <img src="/img/herro2.jpg" alt="rasm" />
            </div>
          </div>

        </Slider>
      </div>
    </div>
       
  )
}

export default Hero
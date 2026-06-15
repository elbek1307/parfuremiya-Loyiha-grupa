import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Rasmlar
import heroi from "./img/heroi.jpg";
import hero11 from "./img/hero11.jpg";
import herro2 from "./img/herro2.jpg";

const Slider = SliderPackage.default || SliderPackage;

function Hero() {
  const { t } = useTranslation();
  
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
          
          {/* 1-Slayd (Xuddi rasmda ko'rsatilganidek) */}
          <div>
            <div className="hero-info">
              <div className="hero-left">
                <h6 className="hero-sub-subtitle">{t("hero.hero-titles")}</h6>
                <h1 className="hero-title">{t("hero.hero-title")}</h1>
                <p className="hero-text">{t("hero.hero-text")}</p> 
                <button className="hero-btn">{t("hero.hero-btn")}</button>
              </div>
          
              <div 
                className="hero-right hero-bg-img" 
                style={{ backgroundImage: `url(${heroi})` }}
              ></div>
            </div>
          </div>

          {/* 2-Slayd (Faqat to'liq rasm) */}
          <div>
            <div className="hero-info-full">
             <img className="hero-full-img" src={hero11} alt="rasm" />
            </div>
          </div>

          {/* 3-Slayd (Faqat to'liq rasm) */}
          <div>
            <div className="hero-info-full">
             <img className="hero-full-img" src={herro2} alt="rasm" />
            </div>
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Hero;
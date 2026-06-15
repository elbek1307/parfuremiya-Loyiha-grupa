import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react';
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaVk, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
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
          <div>
            <div className="hero-slide-item first-slide">
              
             
              <div 
                className="hero-absolute-bg" 
                style={{ backgroundImage: `url(${heroi})` }}
              ></div>
              <div className="hero-left-content">
                <h6 className="hero-sub-subtitle">{t("hero.hero-titles") || "LEANGROUP - тубы и этикетка"}</h6>
                <h1 className="hero-title">{t("hero.hero-title") || "Ламинатные тубы"}</h1>
                <p className="hero-text">
                  {t("hero.hero-text") || "Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-It-Yourself)."}
                </p> 
                <button className="hero-btn">{t("hero.hero-btn") || "Каталог"}</button>
              </div>

              <div className="hero-right-socials">
                <a href="https://vk.com" target="_blank" rel="noreferrer" className="social-icon">
                  <FaVk />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>

            </div>
          </div>
          <div>
            <div className="hero-slide-item">
              <img className="hero-full-width-img" src={hero11} alt="rasm" />
            </div>
          </div>
          <div>
            <div className="hero-slide-item">
              <img className="hero-full-width-img" src={herro2} alt="rasm" />
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default Hero;
import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const {t, i18n} = useTranslation();
   const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <h3>THIRD SLIDE</h3>
        </div>
        <div>
          <h3>FORTH SLIDE</h3>
        </div>
      </Slider>
    </div>
    </div>
    <div className="hero">
      <div className="container">
        <div className="hero-info">
          <div className="hero-left">
            <h6 className="hero-titles">{t("hero.hero-titles")}</h6>
            <h1 className="hero-title">{t("hero.hero-title")}</h1>
            <p className="hero-text">{t("hero.hero-title")}</p>
            <button className="hero-btn">{t("hero.hero-btn")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
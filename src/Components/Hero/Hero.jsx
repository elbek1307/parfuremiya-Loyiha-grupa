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
    speed: 800,         // Slayd yumshoq o'tishi uchun tezlik
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Har 3 soniyada avtomatik o'tadi
  };
  return (
    <div className="hero">
      <div className="container">
        <Slider {...settings}>
          
          <div>
            <div className="hero-info">
              {/* Chap tomondagi matnlar */}
              <div className="hero-left">
                <h6 className="hero-titles">{t("hero.hero-titles")} - 1</h6>
                <h1 className="hero-title">{t("hero.hero-title")} 1</h1>
                <p className="hero-text">{t("hero.hero-text")}</p> 
                <button className="hero-btn">{t("hero.hero-btn")}</button>
              </div>
              {/* O'ng tomondagi rasm */}
              <div className="hero-right">
                <img src="src/Components/Hero/img/heroi.jpg" alt="Slide 1" className="hero-img" />
              </div>
            </div>
          </div>

          {/* 2-SLAYD */}
          <div>
            <div className="hero-info">
              {/* Chap tomondagi matnlar */}
              <div className="hero-left">
                <h6 className="hero-titles">{t("hero.hero-titles")} - 2</h6>
                <h1 className="hero-title">{t("hero.hero-title")} 2</h1>
                <p className="hero-text">{t("hero.hero-text")}</p> 
                <button className="hero-btn">{t("hero.hero-btn")}</button>
              </div>
              {/* O'ng tomondagi rasm */}
              <div className="hero-right">
                <img src="rasm_manzili_2.jpg" alt="Slide 2" className="hero-img" />
              </div>
            </div>
          </div>

          {/* 3-SLAYD */}
          <div>
            <div className="hero-info">
              {/* Chap tomondagi matnlar */}
              <div className="hero-left">
                <h6 className="hero-titles">{t("hero.hero-titles")} - 3</h6>
                <h1 className="hero-title">{t("hero.hero-title")} 3</h1>
                <p className="hero-text">{t("hero.hero-text")}</p> 
                <button className="hero-btn">{t("hero.hero-btn")}</button>
              </div>
              {/* O'ng tomondagi rasm */}
              <div className="hero-right">
                <img src="rasm_manzili_3.jpg" alt="Slide 3" className="hero-img" />
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
       
  )
}

export default Hero
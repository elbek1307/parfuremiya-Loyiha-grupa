import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react';
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaVk, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import herro from "./img/herro.png";
import splat from "./img/splat.png";
import herroo from "./img/herroo.png";

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
  const slides = [
    { img: herro, id: "slide1" },
    { img: splat, id: "slide2" },
    { img: herroo, id: "slide3" }
  ];

  return (
    <div className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="hero-slide-item">
              
              <div className="container hero-flex-container">
                <div className="hero-left-content">
                  <h6 className="hero-sub-subtitle">
                    {t(`hero.${slide.id}.titles`)}
                  </h6>
                  <h1 className="hero-title">
                    {t(`hero.${slide.id}.title`)}
                  </h1>
                  <p className="hero-text">
                    {t(`hero.${slide.id}.text`)}
                  </p> 
                  <button className="hero-btn">
                    {t(`hero.${slide.id}.btn`)}
                  </button>
                </div>

                <div className="hero-right-image-container">
                  <img src={slide.img} alt="product design" className="hero-product-img" />
                </div>

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
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
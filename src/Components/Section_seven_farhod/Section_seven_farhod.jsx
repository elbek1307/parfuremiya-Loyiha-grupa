import React from 'react';
import { useTranslation } from 'react-i18next';


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";


import img1 from "./seven.jpg";
import img2 from "./seven (2).jpg";
import img3 from "./seven (3).jpg";


import "./Section_seven_farhod.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const Section_seven_farhod = () => {
  const { t, i18n } = useTranslation();


  const newsTitles = t("news", { returnObjects: true });

 
  const newsImages = [img1, img2, img3];


  const newsData = Array.isArray(newsTitles) ? newsTitles.map((item, index) => ({
    ...item,

    img: newsImages[index] || img1 
  })) : [];

  return (
    <div className="news-container" id='news_cont'>
      <h2 
        className="news-title" 
        dangerouslySetInnerHTML={{ __html: t("news_section.title") }} 
      />

      <Swiper
        className="news-swiper"
        modules={[FreeMode, Scrollbar]}
        freeMode={true}
        slidesPerView={3}
        spaceBetween={30}
        resistanceRatio={0}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 16 },
          600: { slidesPerView: 2.2, spaceBetween: 24 },
          992: { 
            slidesPerView: 3, 
            spaceBetween: 30, 
            freeMode: false, 
            allowTouchMove: false, 
            scrollbar: false 
          },
        }}
      >
       
        {newsData.map((item) => (
          <SwiperSlide key={item.id} className="news-card">
            <div className="news-img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <span className="news-date">{item.date}</span>
            <h3 className="news-card-title">{item.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="news-footer-btn-wrapper">
        <button className="news-footer-btn">{t("news_section.button")}</button>
      </div>
    </div>
  );
};

export default Section_seven_farhod;
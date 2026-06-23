import React from 'react'
import "./Nash.css"

import nash1 from "./nash1.png"
import nash2 from "./nash2.png"
import nash3 from "./nash3.png"
import nash4 from "./nash4.png"
import nash5 from "./nash5.png"
import { useTranslation } from 'react-i18next'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

export const Nash = () => {

  const {t, i18n} = useTranslation()

  return (
   <>
   <section className="nash" id='nash_products'>
    <div className="container">
        <h2 className="nash_title">{t("nash.title")} <span>{t("nash.title_span")}</span></h2>

        <Swiper
          className="nash_buttons_swiper"
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              freeMode: false,
              allowTouchMove: false,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide className="nash_buttons_slide">
            <button className="nash_btn nash_btn--1">{t("nash.btn1")}</button>
          </SwiperSlide>
          <SwiperSlide className="nash_buttons_slide">
            <button className="nash_btn nash_btn--2">{t("nash.btn2")}</button>
          </SwiperSlide>
          <SwiperSlide className="nash_buttons_slide">
            <button className="nash_btn nash_btn--3">{t("nash.btn3")}</button>
          </SwiperSlide>
        </Swiper>

        <Swiper
          className="nash_img_swiper"
          modules={[FreeMode]}
          freeMode={true}
          spaceBetween={40}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 1.6, spaceBetween: 16 },
            480: { slidesPerView: 2.3, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          <SwiperSlide className="nash_img_item">
            <img src={nash1} alt="shapun" />
          </SwiperSlide>
          <SwiperSlide className="nash_img_item">
            <img src={nash2} alt="shampun" />
          </SwiperSlide>
          <SwiperSlide className="nash_img_item">
            <img src={nash3} alt="shampun" />
          </SwiperSlide>
          <SwiperSlide className="nash_img_item">
            <img src={nash4} alt="shampun" />
          </SwiperSlide>
          <SwiperSlide className="nash_img_item">
            <img src={nash5} alt="shampun" />
          </SwiperSlide>
        </Swiper>

        <button className="nash_bottom_btn">{t("nash.bottom_btn")}</button>
    </div>
   </section>
   </>


  )
}
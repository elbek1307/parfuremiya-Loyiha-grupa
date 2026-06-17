import React from 'react'
import "./Nash.css"

import nash1 from "./nash1.png"
import nash2 from "./nash2.png"
import nash3 from "./nash3.png"
import nash4 from "./nash4.png"
import nash5 from "./nash5.png"
import { useTranslation } from 'react-i18next'

export const Nash = () => {

  const {t, i18n} = useTranslation()

  return (
   <>
   <section className="nash" id='nash_products'>
    <div className="container">
        <h2 className="nash_title">{t("nash.title")} <span>{t("nash.title_span")}</span></h2>
        <div className="nash_buttons">
            <button className="nash_btn nash_btn--1">{t("nash.btn1")}</button>
            <button className="nash_btn nash_btn--2">{t("nash.btn2")}</button>
            <button className="nash_btn nash_btn--3">{t("nash.btn3")}</button>
        </div>
        <ul className="nash_img_list">
          <li className="nash_img_item"><img src={nash1} alt="shapun" /></li>
          <li className="nash_img_item"><img src={nash2} alt="shampun" /></li>
          <li className="nash_img_item"><img src={nash3} alt="shampun" /></li>
          <li className="nash_img_item"><img src={nash4} alt="shampun" /></li>
          <li className="nash_img_item"><img src={nash5} alt="shampun" /></li>
        </ul>
        <button className="nash_bottom_btn">{t("nash.bottom_btn")}</button>
    </div>
   </section>
   </>

  
  )
}
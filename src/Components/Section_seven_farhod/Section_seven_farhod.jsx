import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Section_seven_farhod.css";

const Section_seven_farhod = () => {
  const { t } = useTranslation();

  const newsData = [
    {
      id: 1,
      date: "28.01.2022",
      title: '"ЛеанГрупп" серебряный призер EcoVadis!',
      img: "src/Components/Seaction_six_farhod/img/seven.jpg"
    },
    {
      id: 2,
      date: "21.01.2022",
      title: '"ЛеанГрупп" на выставке ПРОДЭКСПО-2022!',
      img: "src/Components/Seaction_six_farhod/img/seven (2).jpg"
    },
    {
      id: 3,
      date: "16.12.2021",
      title: 'Туба, как вид упаковки',
      img: "src/Components/Seaction_six_farhod/img/seven (3).jpg "
    }
  ];

  return (
    <div className="news-container" id='news_cont'>
      <h2 className="news-title">{t("news_section.title")}</h2>

      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <span className="news-date">{item.date}</span>
            <h3 className="news-card-title">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="news-footer-btn-wrapper">
        <button className="news-footer-btn">{t("news_section.button")}</button>
      </div>
    </div>
  );
};

export default Section_seven_farhod;
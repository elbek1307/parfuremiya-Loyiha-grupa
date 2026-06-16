import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SectionTwo.css";

// Rasmlaringiz (istagancha ko'paytirishingiz mumkin)
import two1 from "./image/two1.png";
import two2 from "./image/two2.png";
import two3 from "./image/two3.png";
import two4 from "./image/two4.png";
import two5 from "./image/two5.png";

function SectionTwo() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bu yerga yangi rasmlarni import qilib qo'shib ketaverasiz:
  const certificates = [
    two1, two2, two3, two4, two5, // Birinchi beshlik
    two1, two2, two3, two4, two5  // Rasmlarni ko'paytirish uchun nusxalari (yoki yangilari)
  ];

  // Ekranda bir vaqtning o'zida nechta rasm ko'rinishini aniqlaymiz
  // Katta ekranda 5 ta bo'lgani uchun qolgan siljish qadamlarini hisoblaydi
  const slidesToShow = 5; 
  const maxIndex = certificates.length - slidesToShow;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Pastdagi nuqtachalar soni (Ko'p rasm bo'lsa chalkashmaslik uchun har 2 taga bitta nuqta qilsa ham bo'ladi)
  const totalDots = Math.ceil(certificates.length / 2);

  return (
    <div className="section-two" id="sectionTwo">
      <div className="section-two-container">
        
        {/* Sarlavha qismi */}
        <h2 className="section-two-title">
          {t("sectionTwo.title_main")}{" "}
          <span className="section-two-highlight">{t("sectionTwo.title_brand")}</span>
        </h2>

        {/* Karusel tizimi */}
        <div className="section-two-carousel-wrapper">
          
          {/* Chap tugma */}
          <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous">
            &#8249;
          </button>

          {/* Rasmlar oynasi */}
          <div className="carousel-track-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {certificates.map((cert, index) => (
                <div className="carousel-slide" key={index}>
                  <img src={cert} alt={`Certificate ${index + 1}`} className="cert-img" />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow next" onClick={handleNext} aria-label="Next">
            &#8250;
          </button>

        </div>
        <div className="carousel-dots">
          {[...Array(totalDots)].map((_, index) => {
            const targetIndex = Math.min(index * 2, maxIndex);
            const isActive = currentIndex === targetIndex || (currentIndex % 2 === 0 && currentIndex === index * 2) || (index === totalDots - 1 && currentIndex === maxIndex);
            
            return (
              <span
                key={index}
                className={`dot ${isActive ? "active" : ""}`}
                onClick={() => setCurrentIndex(targetIndex)}
              ></span>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default SectionTwo;
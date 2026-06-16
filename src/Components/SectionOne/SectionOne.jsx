import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SectionOne.css';

const SectionOne = () => {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // LeanGroup ishlab chiqarish jarayoniga oid video IDsi
  const videoId = "3S_fT7H6Ew0"; 

  return (
    <section className="section-one" id="sectionOne">
      <div className="section-one-container">
        
        {/* Sarlavha qismi */}
        <h2 className="section-one-title">
          {t('about.title_main')} <span className="section-one-brand">{t('about.title_brand')}</span>
        </h2>

        {/* Asosiy blok (Video va Matn) */}
        <div className="section-one-grid">
          
          {/* Video / Poster blok */}
          <div className="section-one-video-wrapper">
            {!isVideoPlaying ? (
              <div className="section-one-poster" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://img.youtube.com/vi/3S_fT7H6Ew0/maxresdefault.jpg" 
                  alt="LeanGroup Production Poster" 
                  className="section-one-img"
                />
                {/* Skrinshotingizdagi to'q sariq rangli aylanma Play tugmasi */}
                <div className="section-one-play-btn">
                  <div className="section-one-triangle"></div>
                </div>
              </div>
            ) : (
              <iframe
                className="section-one-iframe"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="LeanGroup Corporate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Matnli blok */}
          <div className="section-one-text-wrapper">
            <p className="section-one-p">{t('about.p1')}</p>
            <p className="section-one-p">{t('about.p2')}</p>
            <p className="section-one-p">{t('about.p3')}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SectionOne;
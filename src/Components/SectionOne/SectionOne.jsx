import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionOne.css';

const SectionOne = () => {
  const { t } = useTranslation();
  
  // Yangi yuborgan videongizning ID kodi joylashtirildi
  const videoId = "Hbi13dX902c"; 

  return (
    <section className="section-one" id="sectionOne">
      <div className="section-one-container">
        <h2 className="section-one-title">
          {t('about.title_main')} <span className="section-one-brand">{t('about.title_brand')}</span>
        </h2>
        <div className="section-one-grid">
          
          <div className="section-one-video-wrapper">
            {/* Saytni ochganda birdaniga pleyer turadi va YouTubega o'tib ketmaydi */}
            <iframe
              className="section-one-iframe"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="LeanGroup Corporate Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

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
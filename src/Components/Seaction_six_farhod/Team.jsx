import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "./Team.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";


import team1 from "./img/1.jpg";
import team2 from "./img/2.jpg";
import team3 from "./img/3.jpg";
import team4 from "./img/4.jpg";
import team5 from "./img/5.jpg";

const Team = () => {
  const { t } = useTranslation();
  const teamMembers = t("team", { returnObjects: true });

  
  const teamImages = [team1, team2, team3, team4, team5];

  return (
    <div className="team-container" id='team-cont'>
      <h2 
        className="team-title" 
        dangerouslySetInnerHTML={{ __html: t("team_section.title") }} 
      />

      <Swiper
        className="team-swiper"
        modules={[FreeMode, Scrollbar]}
        freeMode={true}
        slidesPerView={5}
        spaceBetween={25}
        resistanceRatio={0}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: { slidesPerView: 1.4, spaceBetween: 16 },
          480: { slidesPerView: 2.2, spaceBetween: 20 },
          768: { slidesPerView: 3.2, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1200: { 
            slidesPerView: 5, 
            spaceBetween: 25, 
            freeMode: false, 
            allowTouchMove: false, 
            scrollbar: false 
          },
        }}
      >
        {Array.isArray(teamMembers) && teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="team-card">
            <div className="image-wrapper">
             
              <img src={teamImages[index]} alt={member.name} />
            </div>
            
            <span className="member-name">{member.name}</span>
            <p className="member-position">{member.position}</p>
            
            <div className="member-contacts">
              <div className="phone-number">{member.phone}</div>
              {member.email && (
                <a href={`mailto:${member.email}`} className="member-email">
                  {member.email}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="team-footer-btn-wrapper">
        <button className="team-footer-btn">{t("team_section.button")}</button>
      </div>
    </div>
  );
};

export default Team;
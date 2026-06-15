import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Seaction_six_farhod.css";

const Section_news_farhod = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { name: "Voynich Darya", position: t("team.0.position"), phone: "+375 (17) 270-53-77 (317)", email: "" },
    { name: "Misko Yekaterina", position: t("team.1.position"), phone: "+375 (17) 270-53-77 (115), +375 29 112-73-48", email: "k.melnichenko@leangroup.by" }
  ];

  return (
    <div className="team-container">
      <h2 className="team-title">{t("team_section.title")}</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-wrapper">
              <img src={`src/Components/Seaction_six_farhod/img/team${index + 1}.jpg`} alt={member.name} />
            </div>
            <span className="member-name">{member.name}</span>
            <p className="member-position">{member.position}</p>
            <div className="member-contacts">
              <div className="phone-number">{member.phone}</div>
              {member.email && (
                <a href={`mailto:${member.email}`} className="member-email">{member.email}</a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="team-footer-btn-wrapper">
        <button className="team-footer-btn">{t("team_section.button")}</button>
      </div>
    </div>
  );
};

export default Section_news_farhod;
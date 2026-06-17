import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Seaction_six_farhod.css";

const Seaction_six_farhod = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { name: t("team.0.name"), position: t("team.0.position"), phone: t("team.0.phone"), email: t("team.0.email") },
    { name: t("team.1.name"), position: t("team.1.position"), phone: t("team.1.phone"), email: t("team.1.email") },
    { name: t("team.2.name"), position: t("team.2.position"), phone: t("team.2.phone"), email: t("team.2.email") },
    { name: t("team.3.name"), position: t("team.3.position"), phone: t("team.3.phone"), email: t("team.3.email") },
    { name: t("team.4.name"), position: t("team.4.position"), phone: t("team.4.phone"), email: t("team.4.email") }
  ];

  return (
    <div className="team-container" id='team-cont'>
      <h2 className="team-title">{t("team_section.title")}</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-wrapper">
              <img src={`src/Components/Seaction_six_farhod/img/${index + 1}.jpg`} alt={member.name} />
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

export default Seaction_six_farhod;
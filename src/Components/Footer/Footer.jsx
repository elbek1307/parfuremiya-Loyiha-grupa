import React from "react";
import { useTranslation } from "react-i18next";
import { FaVk, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import logo from "./logo.svg";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer" id="footer_contact">
      <div className="container">

       
        <div className="footer_top">
          <img src={logo} alt="LeanGroup" className="footer_logo" />
          <div className="footer_social">
            <a href="https://vk.com/login" className="footer_icon" target="blank"><FaVk /></a>
            <a href="https://www.facebook.com/" className="footer_icon" target="blank"><FaFacebookF /></a>
            <a href="https://www.linkedin.com" className="footer_icon" target="blank"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer_divider" />

    
        <div className="footer_middle">

          <div className="footer_col">
            <h4 className="footer_title">{t("footer.products")}</h4>
            <ul className="footer_list">
              <li><a href="#" className="footer_link">{t("footer.laminate")}</a></li>
              <li><a href="#" className="footer_link">{t("footer.extrusion")}</a></li>
              <li><a href="#" className="footer_link">{t("footer.other")}</a></li>
            </ul>
          </div>

      
          <div className="footer_col">
            <h4 className="footer_title">{t("footer.company")}</h4>
            <ul className="footer_list">
              <li><a href="#" className="footer_link">{t("footer.about")}</a></li>
              <li><a href="#" className="footer_link">{t("footer.team")}</a></li>
              <li><a href="#" className="footer_link">{t("footer.certificates")}</a></li>
            </ul>
          </div>

       
          <div className="footer_col">
            <h4 className="footer_title">{t("footer.sections")}</h4>
            <ul className="footer_list">
              <li><a href="#" className="footer_link">{t("footer.contacts")}</a></li>
              <li><a href="#" className="footer_link">{t("footer.news")}</a></li>
              <li><a href="#" className="footer_link">{t("footer.vacancies")}</a></li>
            </ul>
          </div>

          <div className="footer_contacts">

            <div className="footer_contact_group">
              <h4 className="footer_contact_city">{t("footer.belarus")}</h4>
              <a href="tel:+375172705377" className="footer_phone">+375 (17) 270 53 77</a>
              <a href="tel:+375172705378" className="footer_phone">+375 (17) 270 53 78</a>
            </div>

            <div className="footer_contact_group">
              <h4 className="footer_contact_city">{t("footer.europe")}</h4>
              <a href="tel:+48731111044" className="footer_phone">+48 73 1111 044</a>
            </div>

            <div className="footer_contact_group">
              <h4 className="footer_contact_city">{t("footer.moscow")}</h4>
              <a href="tel:+74952807344" className="footer_phone">+7 (495) 280 73 44</a>
              <a href="tel:+74952807344" className="footer_phone">+7 (495) 280 73 44</a>
            </div>

            <div className="footer_contact_group">
              <h4 className="footer_contact_city">{t("footer.ekaterinburg")}</h4>
              <a href="tel:+73433468206" className="footer_phone">+7 (343) 346 82 06</a>
            </div>

          </div>
        </div>

        <div className="footer_divider" />

        
        <div className="footer_bottom">
          <span className="footer_copy">{t("footer.copy")}</span>
          <span className="footer_dev">{t("footer.dev")}</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
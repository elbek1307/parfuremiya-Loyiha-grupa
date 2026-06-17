import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.css";
import logo from "./logo.svg";



const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="nav">
      <div className="container">
        <img src={logo} alt={t("nav.logo_alt")} className="nav_logo" />

        <button
          className="nav_burger"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`nav_list${menuOpen ? " nav_list--open" : ""}`}>
          <li className="nav_item">
            <a href="#nash_products">
              <button
              className="nav_link"
              onClick={() => setSubmenuOpen((p) => !p)}
            >
              {t("nav.products")}
              <FiChevronDown
                size={16}
                className={`nav_chevron${submenuOpen ? " nav_chevron--open" : ""}`}
              />
            </button>

            <ul className={`nav_submenu${submenuOpen ? " nav_submenu--open" : ""}`}>
              <li>
                <a href="#nash_products" className="nav_sublink">
                  {t("nav.submenu.laminate_tubes")}
                </a>
              </li>
              <li>
                <a href="#extrusion" className="nav_sublink">
                  {t("nav.submenu.extrusion_tubes")}
                </a>
              </li>
              <li>
                <a href="#other" className="nav_sublink">
                  {t("nav.submenu.other_packaging")}
                </a>
              </li>
            </ul>
            </a>
          </li>

          <li className="nav_item">
            <a href="#sectionTwo" className="nav_link">
              {t("nav.certificates")}
            </a>
          </li>
          <li className="nav_item">
            <a href="#team-cont" className="nav_link">
              {t("nav.our_team")}
            </a>
          </li>
          <li className="nav_item">
            <a href="#sectionOne" className="nav_link">
              {t("nav.about")}
            </a>
          </li>
          <li className="nav_item">
            <a href="#news_cont" className="nav_link">
              {t("nav.news")}
            </a>
          </li>
          <li className="nav_item">
            <a href="#vacancies" className="nav_link">
              {t("nav.vacancies")}
            </a>
          </li>
          <li className="nav_item">
            <a href="#footer_contact" className="nav_link">
              {t("nav.contacts")}
            </a>
          </li>

          <li className="nav_item">
            <select
              className="nav_select nav_select--mobile"
              onChange={changeLanguage}
              defaultValue={i18n.language}
              aria-label="Select language"
            >
              <option value="en">{t("nav.lang.en")}</option>
              <option value="ru">{t("nav.lang.ru")}</option>
              <option value="uz">{t("nav.lang.uz")}</option>
            </select>
          </li>
        </ul>

        <select
          className="nav_select nav_select--desktop"
          onChange={changeLanguage}
          defaultValue={i18n.language}
          aria-label="Select language"
        >
          <option value="en">{t("nav.lang.en")}</option>
          <option value="ru">{t("nav.lang.ru")}</option>
          <option value="uz">{t("nav.lang.uz")}</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

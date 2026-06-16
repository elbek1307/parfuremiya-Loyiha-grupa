import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'
import two1 from "./image/two1.png";
import two2 from "./image/two2.png";
import two3 from "./image/two3.png";
import two4 from "./image/two4.png";
import two5 from "./image/two5.png";

function SectionTwo() {
    const {t} = useTranslation();
  return (
    <div className="sectionOne">
        <div className="container">
            <div className="sectionOne-wrapper"></div>
        </div>
    </div>
  )
}

export default SectionTwo
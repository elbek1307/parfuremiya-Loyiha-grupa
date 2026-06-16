import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'

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
import React, { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="hero">
      {/* Background milk wave on right */}
      <div className="hero-bg-wave"></div>

      {/* Social icons right edge */}
      <div className="social-icons">
        <div className="social-icon">VK</div>
        <div className="social-icon">f</div>
        <div className="social-icon">in</div>
      </div>

      {/* Left content - Text content */}
      <div className="hero-left">
        {/* Dropdown menu */}
        <div className="dropdown-menu">
          <div className="dropdown-header" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span className="dropdown-title">Laminat quvurlar</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          {dropdownOpen && (
            <ul className="dropdown-list">
              <li className="dropdown-item">Laminat quvurlar</li>
              <li className="dropdown-item active">Extrusion tubes</li>
              <li className="dropdown-item">Boshqa qadoqlash</li>
            </ul>
          )}
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle">LEANGROUP - tubes and labels</p>

        {/* Main title */}
        <h1 className="hero-title">Laminate tubes</h1>

        {/* Description */}
        <p className="hero-description">
          Used for the production of toothpastes.
          <br />
          Widely used in cosmetics segment, food industrial,
          <br />
          parapharmaceuticals, household chemicals and DIY (Do-It-Yourself).
        </p>

        {/* CTA Button */}
        <button className="hero-btn">Katalog</button>

        {/* Slider dots */}
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Right content - Background Image */}
      <div className="hero-right">
        
      </div>
    </div>
  )
}

export default Hero
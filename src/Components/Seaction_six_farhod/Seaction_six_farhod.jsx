import React from 'react';
import "./Seaction_six_farhod.css";

const Seaction_six_farhod = () => {
  // Rasmdan olingan barcha ma'lumotlar massivi (data)
  const data = [
    {
      id: 1,
      name: "Voynich Darya",
      position: "Sotuvlar bo'yicha direktor o'rinbosari",
      phone: ["+375 (17) 270-53-77 (317)"],
      email: "",
      img: "src/Components/Seaction_six_farhod/img/1.jpg" // Bu yerga rasm linkini qo'yasiz
    },
    {
      id: 2,
      name: "Misko Yekaterina",
      position: "Kuzatuv bo'limi boshlig'i",
      phone: ["+375 (17) 270-53-77 (115)", "+375 29 112-73-48"],
      email: "k.melnichenko@leangroup.by",
      img: "src/Components/Seaction_six_farhod/img/2.jpg"
    },
    {
      id: 3,
      name: "Dmitrochenko Dmitriy",
      position: "Chop etishdan oldingi tayyorgarlik bo'limi boshlig'i",
      phone: ["+375 (17) 270-53-77 (333)", "+375 29 360-32-26"],
      email: "dmitrochenko@leangroup.by",
      img: "src/Components/Seaction_six_farhod/img/3.jpg"
    },
    {
      id: 4,
      name: "Antux Yevgeniy",
      position: "Ta'minot bo'limi boshlig'i",
      phone: ["+375 (17) 270-53-77 (148)", "+375 44 764-16-28"],
      email: "j.antuh@leangroup.by",
      img: "src/Components/Seaction_six_farhod/img/4.jpg"
    },
    {
      id: 5,
      name: "Misnik Yelena",
      position: "Mijozlar bilan ishlash bo'yicha mutaxassis",
      phone: ["+375 (17) 270-53-77 (322)", "+375 29 329-34-03"],
      email: "e.misnik@leangroup.by",
      img: "src/Components/Seaction_six_farhod/img/5.jpg"
    }
  ];

  return (
    <div className="team-container">
      {/* Sarlavha qismi */}
      <h2 className="team-title">
        Bizning <span>jamoamiz</span>
      </h2>

      {/* Grid xodimlarni yonma-yon chiqarish uchun */}
      <div className="team-grid">
        {data.map((item) => (
          <div key={item.id} className="team-card">
            
            {/* Dumaloq rasm qismi */}
            <div className="image-wrapper">
              <img 
                src={item.img} 
                alt={item.name} 
              />
            </div>

            {/* Ism va Lavozim */}
            <h3 className="member-name">
              {item.name}
            </h3>
            <p className="member-position">
              {item.position}
            </p>

            {/* Telefon raqamlar va Email */}
            <div className="member-contacts">
              {item.phone.map((tel, idx) => (
                <p key={idx}>{tel}</p>
              ))}
              
              {item.email && (
                <a href={`mailto:${item.email}`} className="member-email">
                  {item.email}
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Seaction_six_farhod;
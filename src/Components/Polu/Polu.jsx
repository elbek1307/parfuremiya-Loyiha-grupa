import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiUser, FiPhone } from "react-icons/fi";
import axios from "axios";
import "./Polu.css";

const Polu = () => {
  const { t } = useTranslation();
  const [ism, setIsm] = useState("");
  const [nomer, setNomer] = useState("");
  const [comment, setComment] = useState("");

  const sendMessege = (event) => {
    event.preventDefault();

    const token = "8630844136:AAESFihnONhmYUb7zrX7Z24JY9xxHtMfd1Y";
    const chat_id = 8572947616;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageContent = `Ism: ${ism}\nNomer: ${nomer}\nIzoh: ${comment}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then(() => {
        alert("Xabaringiz muvaffaqiyatli yuborildi! ✅");
        setIsm("");
        setNomer("");
        setComment("");
      })
      .catch((err) => {
        console.error(err);
        alert("Xatolik yuz berdi! ❌");
      });
  };

  return (
    <section className="polu">
      <div className="container">
        <div className="polu_inner">

          <div className="polu_content">
            <h2 className="polu_title">
              {t("polu.title_1")} <span>{t("polu.title_2")}</span>
            </h2>
            <p className="polu_desc">{t("polu.desc")}</p>

            <form className="polu_form" onSubmit={sendMessege}>

              {/* Ism + Nomer yonma-yon */}
              <div className="polu_row">
                <div className="polu_input_wrap">
                  <FiUser className="polu_input_icon" />
                  <input
                    type="text"
                    className="polu_input"
                    placeholder={t("polu.name")}
                    value={ism}
                    onChange={(e) => setIsm(e.target.value)}
                    required
                  />
                </div>

                <div className="polu_input_wrap">
                  <FiPhone className="polu_input_icon" />
                  <input
                    type="tel"
                    className="polu_input"
                    placeholder={t("polu.phone")}
                    value={nomer}
                    onChange={(e) => setNomer(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Textarea */}
              <textarea
                className="polu_textarea"
                placeholder={t("polu.comment")}
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button type="submit" className="polu_btn">
                {t("polu.btn")}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Polu;
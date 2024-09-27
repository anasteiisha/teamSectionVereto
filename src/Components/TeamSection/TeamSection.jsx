import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

import "./_team-section.scss";

import teamMember1 from "../../img/team_member_1.png";
import teamMember2 from "../../img/team_member_2.png";
import teamMember3 from "../../img/team_member_3.png";
import dividerLeft from "../../img/divider-left.png";
import dividerRight from "../../img/divider-right.png";

const profilesText = {
  yana: {
    frirstStroke: "Дизайн — це не про роботу, це мій ",
    mainText:
      "спосіб життя. Я надихаюся кожним процесом, від ідеї до реалізації.",
    highlight:
      "Як казав Генрі Мур: Мистецтво — це спосіб бачити речі по-іншом.",
  },
  vlad: {
    frirstStroke: "Створюю вражаючі візуалізації.",
    mainText:
      "Працюю з будь-якими завданнями, від брендингу до створення унікальних графічних концепцій.",
    highlight: "Креативність — це наша сила.",
  },
  andrii: {
    frirstStroke: "Багатий досвід у створенні веб-рішень.",
    mainText:
      "Працюю над складними проектами і завжди в курсі нових технологій.",
    highlight: "Код — це мистецтво.",
  },
};

const TeamSection = () => {
  const [currentProfile, setCurrentProfile] = useState(profilesText.yana);
  const [key, setKey] = useState(0); //Ключ для перезапуску анімації

  useEffect(() => {
    //  Запуск анімації при монтуванні компонента
    setKey((prevKey) => prevKey + 1);
  }, []); // пустий масив залежностей для запуску при оновленні сторінки

  const updateText = (profile) => {
    setCurrentProfile(profilesText[profile]);
    const teamSection = document.querySelector(".team-section");
    teamSection.scrollIntoView({ behavior: "smooth" });

    // Перезапуск анімації
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <section className="team-section">
      <div className="container">
        <div className="section__content">
          <div className="section__block">
            <div className="team-section__animation">
              <img
                className="team-section__divider"
                src={dividerLeft}
                alt="divider-left"
              />
              <Typewriter
                key={key} //Ключ для перезапуску анімації
                words={["чим ми кращі"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                textStyle={{
                  fontSize: "1.6vw",
                  fontWeight: 500,
                  padding: "9px 16px",
                  margin: 0,
                  color: "#F8F8FF",
                }}
              />
              <img
                className="team-section__divider"
                src={dividerRight}
                alt="divider-right"
              />
            </div>

            <div className="section__content-first-stroke">
              <span>{currentProfile.frirstStroke}</span>
            </div>
          </div>
          {currentProfile.mainText}
          <span className="section__content-highlight">
            {currentProfile.highlight}
          </span>
        </div>
        <div className="section__profiles">
          <div
            id="yana-profile"
            className="section__profiles-profile"
            onClick={() => updateText("yana")}
          >
            <img
              src={teamMember1}
              alt="Яна Травка"
              className="profile__img profile__img--inactive"
            />
            <h3 className="profile__name" id="yana">
              ЯНА ТРАВКА
            </h3>
            <p className="profile__description">WEB DESIGNER</p>
          </div>
          <div
            id="vlad-profile"
            className="section__profiles-profile"
            onClick={() => updateText("vlad")}
          >
            <img
              src={teamMember2}
              alt="Владислав Марущенко"
              className="profile__img profile__img--inactive"
            />
            <h3 className="profile__name" id="vlad">
              ВЛАДИСЛАВ МАРУЩЕНКО
            </h3>
            <p className="profile__description">ГРАФІЧНИЙ ДИЗАЙНЕР</p>
          </div>
          <div
            id="andrii-profile"
            className="section__profiles-profile"
            onClick={() => updateText("andrii")}
          >
            <img
              src={teamMember3}
              alt="Андрій Дьомкін"
              className="profile__img profile__img--inactive"
            />
            <h3 className="profile__name" id="andrii">
              АНДРІЙ ДЬОМКІН
            </h3>
            <p className="profile__description">Full Stack Розробник</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

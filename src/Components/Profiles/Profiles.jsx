// src/Components/Profiles/Profiles.js
import React, { useState, useEffect } from "react";
import { typeText } from "./typingText";

const profilesText = {
  yana: `
      <div class="section__block" id="mainText">
        <span class="team-section__animation-text">
          <img class="team-section__divider" src="./img/divider-left.png" alt="divider-left" />
          <p class="section__icon" id="typingTextFirst"></p>
          <img class="team-section__divider" src="./img/divider-right.png" alt="divider-right" />
        </span>
        <div class="section__content-first-stroke">
          <span> Дизайн — это не просто работа, это мой </span>
        </div>
        <div>образ жизни, я вдохновляюсь каждым процессом, от идеи до реализации.</div>
        <span class="section__content-highlight">
          Как говорил Генри Мур: Искусство — это способ видеть вещи по-другому.
        </span>
        <div>Неважно, есть ли у вас идея, или нет — мой опыт позволяет генерировать, анализировать и создавать стильные и эффективные решения.</div>
      </div>`,

  vlad: `
      <div class="section__block" id="mainText">
        <span class="team-section__animation-text">
          <img class="team-section__divider" src="./img/divider-left.png" alt="divider-left" />
          <p class="section__icon" id="typingTextFirst"></p>
          <img class="team-section__divider" src="./img/divider-right.png" alt="divider-right" />
        </span>
        <div class="section__content-first-stroke">
          <span>  Создаю впечатляющие визуализации. </span>
        </div>
        <div>Работаю с любыми задачами, от брендинга до создания уникальных графических концепций.</div>
        <span class="section__content-highlight">Креативность — это наша сила.</span>
      </div>`,

  andrii: `
      <div class="section__block" id="mainText">
        <span class="team-section__animation-text">
          <img class="team-section__divider" src="./img/divider-left.png" alt="divider-left" />
          <p class="section__icon" id="typingTextFirst"></p>
          <img class="team-section__divider" src="./img/divider-right.png" alt="divider-right" />
        </span>
        <div class="section__content-first-stroke">
          <span> Обширный опыт в создании веб-решений. </span>
        </div>
        <div>Работаю над сложными проектами и всегда в курсе новых технологий.</div>
        <span class="section__content-highlight">Код — это искусство.</span>
      </div>`,
};

const Profiles = () => {
  const [selectedProfile, setSelectedProfile] = useState("yana");

  useEffect(() => {
    const typingElementFirst = document.getElementById("typingTextFirst");
    if (typingElementFirst) {
      typingElementFirst.innerHTML = ""; // Очищаем перед новым набором
      typeText("typingTextFirst", "Чем мы лучше?", 100); // Запуск анимации печати
    }
  }, [selectedProfile]);

  const updateText = (profile) => {
    setSelectedProfile(profile);
    const sectionContent = document.querySelector(".section__content");
    sectionContent.innerHTML = profilesText[profile];

    const teamSection = document.querySelector(".team-section");
    teamSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="section__profiles">
        <button id="yana" onClick={() => updateText("yana")}>
          Яна
        </button>
        <button id="vlad" onClick={() => updateText("vlad")}>
          Влад
        </button>
        <button id="andrii" onClick={() => updateText("andrii")}>
          Андрий
        </button>
      </div>
      <div
        className="section__content"
        dangerouslySetInnerHTML={{ __html: profilesText[selectedProfile] }}
      />
    </div>
  );
};

export default Profiles;

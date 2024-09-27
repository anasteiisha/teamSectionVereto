import React, { useState, useEffect } from "react";
import "../AboutSection/_about-section.scss";

const AboutSection = () => {
  const [typingTextSecond, setTypingTextSecond] = useState("");

  useEffect(() => {
    const typeText = (text, speed = 100) => {
      let index = 0;
      setTypingTextSecond("");

      function typeNextChar() {
        if (index < text.length) {
          setTypingTextSecond((prev) => prev + text.charAt(index));
          index++;
          setTimeout(typeNextChar, speed);
        }
      }

      typeNextChar();
    };

    typeText("в цифровому просторі", 100);
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-section__title">
          <h1 className="about-section__title-first-stroke">Які проєкти</h1>
          <div className="about-section__animationText">
            <img
              className="about-section__divider"
              src="./img/divider-left.png"
              alt="divider-left"
            />
            <p className="about-section__icon">{typingTextSecond}</p>
            <img
              className="about-section__divider"
              src="./img/divider-right.png"
              alt="divider-right"
            />
          </div>
        </div>
        <h2 className="about-section__title-second-stroke">
          реалізовує Vereto?
        </h2>
        <div className="about-section__stroke">
          <span className="about-section__animationText">
            <img
              className="about-section__divider"
              src="./img/divider-left.png"
              alt="divider-left"
            />
            <p className="about-section__stroke-number">1</p>
            <img
              className="about-section__divider"
              src="./img/divider-right.png"
              alt="divider-right"
            />
          </span>
          <div className="about-section__stroke-menu">
            <p className="about-section__stroke-name">Web дизайн</p>
            <img src="./img/plus.png" alt="plus" />
          </div>
        </div>
        <div className="about-section__stroke">
          <span className="about-section__animationText">
            <img
              className="about-section__divider"
              src="./img/divider-left.png"
              alt="divider-left"
            />
            <p className="about-section__stroke-number">2</p>
            <img
              className="about-section__divider"
              src="./img/divider-right.png"
              alt="divider-right"
            />
          </span>
          <div className="about-section__stroke-menu">
            <p className="about-section__stroke-name">Ux/UI Дизайн</p>
            <img src="./img/plus.png" alt="plus" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

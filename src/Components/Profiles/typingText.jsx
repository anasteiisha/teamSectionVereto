export function typeText(elementId, text, speed = 100) {
  const typingElement = document.getElementById(elementId);

  if (!typingElement) return; // Проверка, существует ли элемент

  let index = 0;
  typingElement.textContent = ""; // Очищаем перед набором

  function typeNextChar() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, speed);
    }
  }

  typeNextChar();
}

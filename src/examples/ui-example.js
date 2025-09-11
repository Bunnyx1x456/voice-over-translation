import { VOTServiceSelect } from "../index.js";

/**
 * Приклад використання UI компонентів
 */

// Функція для створення та відображення компонентів вибору сервісів
function createServiceSelectExamples() {
  console.log("=== Створення прикладів UI компонентів ===");

  // Створюємо контейнер для прикладів
  const container = document.createElement("div");
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: Arial, sans-serif;
  `;
  container.innerHTML = "<h3>VOT Service Select Examples</h3>";

  // Приклад компонента вибору сервісу перекладу
  const translationSelect = document.createElement("vot-service-select");
  translationSelect.type = "translation";
  translationSelect.label = "Translation Service";

  // Приклад компонента вибору сервісу визначення мови
  const detectSelect = document.createElement("vot-service-select");
  detectSelect.type = "detect";
  detectSelect.label = "Language Detection Service";

  // Приклад компонента вибору TTS сервісу
  const ttsSelect = document.createElement("vot-service-select");
  ttsSelect.type = "tts";
  ttsSelect.label = "Text-to-Speech Service";

  // Додаємо обробники подій
  translationSelect.addEventListener("service-change", (event) => {
    console.log("Translation service changed:", event.detail);
  });

  detectSelect.addEventListener("service-change", (event) => {
    console.log("Detection service changed:", event.detail);
  });

  ttsSelect.addEventListener("service-change", (event) => {
    console.log("TTS service changed:", event.detail);
  });

  // Додаємо компоненти до контейнера
  container.appendChild(translationSelect);
  container.appendChild(detectSelect);
  container.appendChild(ttsSelect);

  // Кнопка для закриття
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close Examples";
  closeButton.style.cssText = `
    margin-top: 15px;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
  closeButton.onclick = () => {
    document.body.removeChild(container);
  };

  container.appendChild(closeButton);

  // Додаємо контейнер до сторінки
  document.body.appendChild(container);

  console.log("UI компоненти створено та додано до сторінки");
}

// Функція для тестування UI компонентів
function testUIComponents() {
  console.log("=== Тестування UI компонентів ===");

  try {
    // Перевіряємо чи підтримуються кастомні елементи
    if (customElements.get("vot-service-select")) {
      console.log("VOT Service Select component registered successfully");
      createServiceSelectExamples();
    } else {
      console.log("VOT Service Select component not registered");

      // Реєструємо компонент вручну якщо потрібно
      import("../ui/components/serviceSelect.js")
        .then(() => {
          console.log("Component imported and registered");
          createServiceSelectExamples();
        })
        .catch((error) => {
          console.error("Failed to import component:", error);
        });
    }
  } catch (error) {
    console.error("Error testing UI components:", error);
  }
}

// Функція для створення простого інтерфейсу тестування
function createTestInterface() {
  console.log("=== Створення інтерфейсу тестування ===");

  // Створюємо кнопку для запуску тестів
  const testButton = document.createElement("button");
  testButton.textContent = "Show VOT Service Select Examples";
  testButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-family: Arial, sans-serif;
    box-shadow: 0 2px 8px rgba(0,0,0.2);
    z-index: 9999;
  `;

  testButton.onclick = () => {
    testUIComponents();
  };

  // Додаємо кнопку до сторінки
  document.body.appendChild(testButton);

  console.log("Test interface created");
}

// Експортуємо функції для використання
export { createServiceSelectExamples, testUIComponents, createTestInterface };

// Автоматичне створення інтерфейсу тестування при імпорті
// createTestInterface();

export default {
  createServiceSelectExamples,
  testUIComponents,
  createTestInterface,
};

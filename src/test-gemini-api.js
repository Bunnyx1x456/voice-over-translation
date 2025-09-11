/**
 * Тестовий файл для перевірки функціоналу Gemini API
 */

import { VOTApiKeyInput } from "./ui/components/apiKeyInput.js";
// Імпортуємо необхідні модулі
import { translate } from "./utils/translateApis.js";

// Функція для тестування перекладу
async function testGeminiTranslation() {
  console.log("=== Тестування перекладу з Gemini API ===");

  try {
    // Тестові тексти
    const testCases = [
      {
        text: "Hello, how are you today?",
        from: "en",
        to: "uk",
      },
      {
        text: "Привіт, як справи сьогодні?",
        from: "uk",
        to: "en",
      },
      {
        text: "This is a test of the Google Gemini translation API.",
        from: "en",
        to: "ru",
      },
    ];

    console.log("Починаємо тестування перекладу...");

    // Тестуємо кожен випадок
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      console.log(`\n--- Тест ${i + 1} ---`);
      console.log(`Оригінал (${testCase.from}): ${testCase.text}`);

      // Виконуємо переклад
      const translated = await translate(
        testCase.text,
        testCase.from,
        testCase.to,
      );
      console.log(`Переклад (${testCase.to}): ${translated}`);

      // Пауза між запитами
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    console.log("\n✅ Тестування перекладу завершено успішно!");
  } catch (error) {
    console.error("❌ Помилка під час тестування перекладу:", error);
  }
}

// Функція для створення тестового інтерфейсу
function createTestUI() {
  console.log("=== Створення тестового інтерфейсу ===");

  // Створюємо контейнер
  const container = document.createElement("div");
  container.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: Arial, sans-serif;
    min-width: 400px;
  `;
  container.innerHTML = `
    <h2 style="margin-top: 0; color: #333;">Gemini API Test</h2>
    <p style="color: #666;">Тестування функціоналу перекладу з Google Gemini</p>
  `;

  // Додаємо компонент введення API ключа
  const apiKeyInput = document.createElement("vot-api-key-input");
  apiKeyInput.service = "gemini";
  apiKeyInput.label = "Google Gemini API Key";
  apiKeyInput.placeholder = "Введіть ваш API ключ...";

  container.appendChild(apiKeyInput);

  // Додаємо кнопку тестування
  const testButton = document.createElement("button");
  testButton.textContent = "Запустити тест перекладу";
  testButton.style.cssText = `
    margin-top: 20px;
    padding: 12px 24px;
    background: #4285f4;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
  `;

  testButton.onclick = async () => {
    try {
      testButton.disabled = true;
      testButton.textContent = "Триває тестування...";
      testButton.style.background = "#ccc";

      await testGeminiTranslation();

      testButton.disabled = false;
      testButton.textContent = "Запустити тест перекладу";
      testButton.style.background = "#4285f4";
    } catch (error) {
      console.error("Помилка під час тестування:", error);
      alert("Помилка: " + error.message);

      testButton.disabled = false;
      testButton.textContent = "Запустити тест перекладу";
      testButton.style.background = "#4285f4";
    }
  };

  container.appendChild(testButton);

  // Додаємо кнопку закриття
  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #999;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  closeButton.onclick = () => {
    document.body.removeChild(container);
  };

  container.appendChild(closeButton);

  // Додаємо контейнер до сторінки
  document.body.appendChild(container);

  console.log("Тестовий інтерфейс створено");
}

// Функція для запуску всього тесту
async function runFullTest() {
  console.log("🚀 Запуск повного тесту функціоналу Gemini API\n");

  try {
    // Створюємо тестовий інтерфейс
    createTestUI();

    console.log("\n✅ Повний тест завершено! Інтерфейс доступний на сторінці.");
  } catch (error) {
    console.error("❌ Помилка під час повного тесту:", error);
  }
}

// Експортуємо функції
export { testGeminiTranslation, createTestUI, runFullTest };

// Автоматичний запуск при імпорті (для тестування)
// runFullTest().catch(console.error);

export default {
  testGeminiTranslation,
  createTestUI,
  runFullTest,
};

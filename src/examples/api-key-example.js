import { VOTApiKeyInput } from "../index.js";

/**
 * Приклад використання компонента введення API ключа
 */

// Функція для створення та відображення компонента введення API ключа
function createApiKeyInputExample() {
  console.log("=== Створення прикладу компонента введення API ключа ===");

  // Створюємо контейнер для прикладу
  const container = document.createElement("div");
  container.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: Arial, sans-serif;
    max-width: 400px;
  `;
  container.innerHTML = "<h3>API Key Input Examples</h3>";

  // Створюємо компонент введення API ключа для Gemini
  const geminiApiKeyInput = document.createElement("vot-api-key-input");
  geminiApiKeyInput.service = "gemini";
  geminiApiKeyInput.label = "Gemini API Key";
  geminiApiKeyInput.placeholder = "Enter your Gemini API key...";

  // Додаємо обробники подій
  geminiApiKeyInput.addEventListener("api-key-saved", (event) => {
    console.log("Gemini API key saved:", event.detail);
    alert(
      `Gemini API key saved successfully! Service: ${event.detail.service}`,
    );
  });

  geminiApiKeyInput.addEventListener("api-key-cleared", (event) => {
    console.log("Gemini API key cleared:", event.detail);
    alert(`Gemini API key cleared! Service: ${event.detail.service}`);
  });

  // Додаємо компонент до контейнера
  container.appendChild(geminiApiKeyInput);

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

  console.log("API key input component created and added to page");
}

// Функція для тестування компонента API ключа
function testApiKeyComponent() {
  console.log("=== Тестування компонента API ключа ===");

  try {
    // Перевіряємо чи зареєстрований компонент
    if (customElements.get("vot-api-key-input")) {
      console.log("VOT API Key Input component registered successfully");
      createApiKeyInputExample();
    } else {
      console.log("VOT API Key Input component not registered");

      // Реєструємо компонент вручну якщо потрібно
      import("../ui/components/apiKeyInput.js")
        .then(() => {
          console.log("API Key Input component imported and registered");
          createApiKeyInputExample();
        })
        .catch((error) => {
          console.error("Failed to import API Key Input component:", error);
        });
    }
  } catch (error) {
    console.error("Error testing API key component:", error);
  }
}

// Функція для створення простого інтерфейсу тестування
function createApiKeyTestInterface() {
  console.log("=== Створення інтерфейсу тестування API ключів ===");

  // Створюємо кнопку для запуску тестів
  const testButton = document.createElement("button");
  testButton.textContent = "Show API Key Input Examples";
  testButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
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
    testApiKeyComponent();
  };

  // Додаємо кнопку до сторінки
  document.body.appendChild(testButton);

  console.log("API Key test interface created");
}

// Функція для демонстрації інтеграції API ключа з перекладом
async function demonstrateTranslationWithApiKey() {
  console.log("=== Демонстрація перекладу з API ключем ===");

  try {
    // Спробуємо отримати поточний API ключ
    const storageModule = await import("../utils/storage.js");
    const votStorage = storageModule.votStorage;

    const geminiApiKey = await votStorage.get("geminiApiKey", "");

    if (geminiApiKey && geminiApiKey.trim() !== "") {
      console.log("Gemini API key found, testing translation...");

      // Імпортуємо функцію перекладу
      const { translate } = await import("../utils/translateApis.js");

      // Тестовий переклад
      const testText = "Hello, this is a test translation using Gemini API.";
      const translatedText = await translate(testText, "en", "uk");

      console.log("Original text:", testText);
      console.log("Translated text:", translatedText);

      alert(
        `Translation test successful!\n\nOriginal: ${testText}\nTranslated: ${translatedText}`,
      );
    } else {
      console.log("No Gemini API key found");
      alert("Please enter your Gemini API key first!");
    }
  } catch (error) {
    console.error("Error in translation demonstration:", error);
    alert("Error during translation test: " + error.message);
  }
}

// Експортуємо функції для використання
export {
  createApiKeyInputExample,
  testApiKeyComponent,
  createApiKeyTestInterface,
  demonstrateTranslationWithApiKey,
};

// Автоматичне створення інтерфейсу тестування при імпорті
// createApiKeyTestInterface();

export default {
  createApiKeyInputExample,
  testApiKeyComponent,
  createApiKeyTestInterface,
  demonstrateTranslationWithApiKey,
};

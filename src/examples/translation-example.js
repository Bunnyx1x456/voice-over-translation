import { detect, translate } from "../index.js";

/**
 * Приклад використання функціоналу перекладу
 */

// Базовий приклад перекладу
async function basicTranslationExample() {
  try {
    console.log("=== Базовий приклад перекладу ===");

    // Перекладаємо простий текст
    const translatedText = await translate(
      "Hello, how are you today?",
      "en",
      "uk",
    );
    console.log("Перекладений текст:", translatedText);

    console.log("Базовий переклад завершено");
  } catch (error) {
    console.error("Помилка базового перекладу:", error);
  }
}

// Приклад перекладу масиву текстів
async function batchTranslationExample() {
  try {
    console.log("=== Приклад пакетного перекладу ===");

    const texts = [
      "Good morning!",
      "How is the weather today?",
      "See you later!",
      "Thank you very much.",
    ];

    const translatedTexts = await translate(texts, "en", "ru");
    console.log("Перекладені тексти:", translatedTexts);

    console.log("Пакетний переклад завершено");
  } catch (error) {
    console.error("Помилка пакетного перекладу:", error);
  }
}

// Приклад визначення мови
async function languageDetectionExample() {
  try {
    console.log("=== Приклад визначення мови ===");

    const texts = [
      "Hello, this is English text.",
      "Привіт, це український текст.",
      "Bonjour, ceci est du texte français.",
      "Hola, este es texto en español.",
    ];

    for (const text of texts) {
      const detectedLang = await detect(text);
      console.log(`Текст: "${text}" -> Визначена мова: ${detectedLang}`);
    }

    console.log("Визначення мови завершено");
  } catch (error) {
    console.error("Помилка визначення мови:", error);
  }
}

// Приклад з автоматичним визначенням мови
async function autoDetectTranslationExample() {
  try {
    console.log("=== Приклад перекладу з автоматичним визначенням мови ===");

    const text =
      "This is an English text that will be automatically detected and translated to Ukrainian.";

    // Спочатку визначаємо мову
    const detectedLang = await detect(text);
    console.log("Визначена мова:", detectedLang);

    // Потім перекладаємо
    const translatedText = await translate(text, detectedLang, "uk");
    console.log("Перекладений текст:", translatedText);

    console.log("Переклад з автоматичним визначенням мови завершено");
  } catch (error) {
    console.error("Помилка перекладу з автоматичним визначенням мови:", error);
  }
}

// Приклад роботи з різними мовами
async function multilingualExample() {
  try {
    console.log("=== Приклад роботи з різними мовами ===");

    const translations = [
      { text: "Hello", from: "en", to: "uk" },
      { text: "Привіт", from: "uk", to: "en" },
      { text: "Bonjour", from: "fr", to: "ru" },
      { text: "Guten Tag", from: "de", to: "es" },
    ];

    for (const { text, from, to } of translations) {
      const result = await translate(text, from, to);
      console.log(`${text} (${from}) -> ${result} (${to})`);
    }

    console.log("Багатомовний приклад завершено");
  } catch (error) {
    console.error("Помилка багатомовного прикладу:", error);
  }
}

// Функція для тестування всіх можливостей перекладу
async function runAllTranslationExamples() {
  console.log("Запуск всіх прикладів перекладу...\n");

  await basicTranslationExample();
  console.log("\n");

  await batchTranslationExample();
  console.log("\n");

  await languageDetectionExample();
  console.log("\n");

  await autoDetectTranslationExample();
  console.log("\n");

  await multilingualExample();
  console.log("\n");

  console.log("Всі приклади перекладу завершено!");
}

// Експортуємо функції для використання
export {
  basicTranslationExample,
  batchTranslationExample,
  languageDetectionExample,
  autoDetectTranslationExample,
  multilingualExample,
  runAllTranslationExamples,
};

// Автоматичний запуск при імпорті (для тестування)
// runAllTranslationExamples().catch(console.error);

export default {
  basicTranslationExample,
  batchTranslationExample,
  languageDetectionExample,
  autoDetectTranslationExample,
  multilingualExample,
  runAllTranslationExamples,
};

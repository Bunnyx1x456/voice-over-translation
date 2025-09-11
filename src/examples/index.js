/**
 * Voice Over Translation - Приклади використання
 *
 * Цей файл демонструє різні способи використання нових функцій VOT
 */

// Імпортуємо всі компоненти
import {
  DetectService,
  detect,
  getTTSSettings,
  // Утиліти TTS
  synthesizeSpeech,
  synthesizeSpeechStream,
  // Типи
  TranslateService,
  TTSService,
  TTSSettings,
  // Утиліти перекладу
  translate,
  VOTServiceSelect,
  // Основні класи
  VOTTTSHandler,
  VOTVideoManager,
} from "../index.js";
import {
  createApiKeyInputExample,
  createApiKeyTestInterface,
  demonstrateTranslationWithApiKey,
  testApiKeyComponent,
} from "./api-key-example.js";

import {
  autoDetectTranslationExample,
  basicTranslationExample,
  batchTranslationExample,
  languageDetectionExample,
  multilingualExample,
  runAllExamples as runAllTranslationExamples,
} from "./translation-example.js";
// Імпортуємо приклади
import {
  advancedTTSExample,
  basicTTSExample,
  playbackControlExample,
  runAllExamples as runAllTTSExamples,
  streamTTSExample,
} from "./tts-example.js";
import {
  createServiceSelectExamples,
  createTestInterface,
  testUIComponents,
} from "./ui-example.js";

/**
 * Демонстрація інтеграції TTS та перекладу
 */
async function integratedExample() {
  console.log("=== Інтегрований приклад: переклад + TTS ===");

  try {
    // Створюємо TTS handler
    const ttsHandler = new VOTTTSHandler();

    // Текст для перекладу
    const originalText = "Hello, welcome to our video translation service!";
    console.log("Оригінальний текст:", originalText);

    // Перекладаємо текст
    const translatedText = await translate(originalText, "en", "uk");
    console.log("Перекладений текст:", translatedText);

    // Відтворюємо перекладений текст
    await ttsHandler.speakText(translatedText, "uk");

    console.log("Інтегрований приклад завершено");

    // Очищуємо ресурси
    await ttsHandler.destroy();
  } catch (error) {
    console.error("Помилка інтегрованого прикладу:", error);
  }
}

/**
 * Демонстрація роботи з різними сервісами
 */
async function serviceSelectionExample() {
  console.log("=== Приклад роботи з різними сервісами ===");

  try {
    // Показуємо доступні сервіси перекладу
    console.log("Доступні сервіси перекладу: yandexbrowser, msedge, gemini");

    // Показуємо доступні сервіси визначення мови
    console.log(
      "Доступні сервіси визначення мови: yandexbrowser, msedge, rust-server",
    );

    // Показуємо доступні TTS сервіси
    console.log("Доступні TTS сервіси: edge-tts, browser-speech, custom");

    // Приклад використання Gemini для перекладу
    console.log("Використання Gemini для перекладу...");
    const geminiTranslation = await translate(
      "This text will be translated using Google Gemini AI.",
      "en",
      "ru",
    );
    console.log("Переклад через Gemini:", geminiTranslation);

    console.log("Приклад роботи з сервісами завершено");
  } catch (error) {
    console.error("Помилка прикладу роботи з сервісами:", error);
  }
}

/**
 * Комплексний приклад з усіма функціями
 */
async function comprehensiveExample() {
  console.log("=== Комплексний приклад з усіма функціями ===");

  try {
    // 1. Переклад
    console.log("\n1. Тестування перекладу:");
    await basicTranslationExample();

    // 2. TTS
    console.log("\n2. Тестування TTS:");
    await basicTTSExample();

    // 3. Інтеграція
    console.log("\n3. Інтеграція перекладу та TTS:");
    await integratedExample();

    // 4. Робота з сервісами
    console.log("\n4. Робота з різними сервісами:");
    await serviceSelectionExample();

    console.log("\nКомплексний приклад завершено!");
  } catch (error) {
    console.error("Помилка комплексного прикладу:", error);
  }
}

/**
 * Функція для запуску всіх прикладів
 */
async function runAllExamples() {
  console.log("🚀 Запуск всіх прикладів Voice Over Translation\n");

  // Запускаємо комплексний приклад
  await comprehensiveExample();

  console.log("\n✅ Всі приклади завершено успішно!");
}

/**
 * Експорт усіх функцій та компонентів
 */
export {
  // Основні класи
  VOTTTSHandler,
  VOTVideoManager,
  VOTServiceSelect,
  // Утиліти перекладу
  translate,
  detect,
  // Утиліти TTS
  synthesizeSpeech,
  synthesizeSpeechStream,
  getTTSSettings,
  // Типи
  TranslateService,
  DetectService,
  TTSService,
  TTSSettings,
  // Приклади TTS
  basicTTSExample,
  advancedTTSExample,
  streamTTSExample,
  playbackControlExample,
  runAllTTSExamples,
  // Приклади перекладу
  basicTranslationExample,
  batchTranslationExample,
  languageDetectionExample,
  autoDetectTranslationExample,
  multilingualExample,
  runAllTranslationExamples,
  // Приклади UI
  createServiceSelectExamples,
  testUIComponents,
  createTestInterface,
  // Комплексні приклади
  integratedExample,
  serviceSelectionExample,
  comprehensiveExample,
  runAllExamples,
};

// Автоматичний запуск при імпорті (для тестування)
// runAllExamples().catch(console.error);

export default {
  // Основні класи
  VOTTTSHandler,
  VOTVideoManager,
  VOTServiceSelect,

  // Утиліти перекладу
  translate,
  detect,

  // Утиліти TTS
  synthesizeSpeech,
  synthesizeSpeechStream,
  getTTSSettings,

  // Типи
  TranslateService,
  DetectService,
  TTSService,
  TTSSettings,

  // Приклади
  basicTTSExample,
  advancedTTSExample,
  streamTTSExample,
  playbackControlExample,
  runAllTTSExamples,
  basicTranslationExample,
  batchTranslationExample,
  languageDetectionExample,
  autoDetectTranslationExample,
  multilingualExample,
  runAllTranslationExamples,
  createServiceSelectExamples,
  testUIComponents,
  createTestInterface,
  integratedExample,
  serviceSelectionExample,
  comprehensiveExample,
  runAllExamples,
};

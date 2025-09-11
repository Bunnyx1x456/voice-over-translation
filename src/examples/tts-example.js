import { getTTSSettings, synthesizeSpeech, VOTTTSHandler } from "../index.js";

/**
 * Приклад використання TTS функціоналу
 */

// Створення TTS handler
const ttsHandler = new VOTTTSHandler();

// Базовий приклад синтезу мовлення
async function basicTTSExample() {
  try {
    console.log("=== Базовий приклад TTS ===");

    // Синтезуємо простий текст
    await ttsHandler.speakText(
      "Hello, this is a test of text-to-speech functionality.",
    );

    console.log("Базовий синтез завершено");
  } catch (error) {
    console.error("Помилка базового синтезу:", error);
  }
}

// Приклад з налаштуваннями
async function advancedTTSExample() {
  try {
    console.log("=== Розширений приклад TTS ===");

    // Отримуємо поточні налаштування
    const settings = await getTTSSettings();
    console.log("Поточні налаштування:", settings);

    // Синтезуємо текст з кастомними налаштуваннями
    await ttsHandler.speakText(
      "Це приклад українського тексту з кастомними налаштуваннями.",
      "uk",
    );

    console.log("Розширений синтез завершено");
  } catch (error) {
    console.error("Помилка розширеного синтезу:", error);
  }
}

// Приклад з потоковою передачею
async function streamTTSExample() {
  try {
    console.log("=== Приклад потокового TTS ===");

    // Синтезуємо текст з потоковою передачею
    await ttsHandler.speakTextStream(
      "This is a streaming text-to-speech example. You can hear the audio as it is generated.",
      "en",
    );

    console.log("Потоковий синтез завершено");
  } catch (error) {
    console.error("Помилка потокового синтезу:", error);
  }
}

// Приклад управління відтворенням
async function playbackControlExample() {
  try {
    console.log("=== Приклад управління відтворенням ===");

    // Зупиняємо попереднє відтворення
    await ttsHandler.stop();

    // Відтворюємо новий текст
    ttsHandler.speakText("First message");

    // Через 2 секунди зупиняємо і відтворюємо інший текст
    setTimeout(async () => {
      await ttsHandler.stop();
      await ttsHandler.speakText("Second message after interruption");
    }, 2000);

    console.log("Управління відтворенням продемонстровано");
  } catch (error) {
    console.error("Помилка управління відтворенням:", error);
  }
}

// Функція для тестування всіх можливостей
async function runAllExamples() {
  console.log("Запуск всіх прикладів TTS...\n");

  await basicTTSExample();
  console.log("\n");

  await advancedTTSExample();
  console.log("\n");

  await streamTTSExample();
  console.log("\n");

  await playbackControlExample();
  console.log("\n");

  console.log("Всі приклади завершено!");

  // Очищуємо ресурси
  await ttsHandler.destroy();
}

// Експортуємо функції для використання
export {
  basicTTSExample,
  advancedTTSExample,
  streamTTSExample,
  playbackControlExample,
  runAllExamples,
};

// Автоматичний запуск при імпорті (для тестування)
// runAllExamples().catch(console.error);

export default {
  basicTTSExample,
  advancedTTSExample,
  streamTTSExample,
  playbackControlExample,
  runAllExamples,
};

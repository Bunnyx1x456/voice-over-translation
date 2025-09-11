# Інтеграція нових функцій VOT з Tampermonkey

## Огляд

Цей документ пояснює, як інтегрувати нові функції Voice Over Translation (переклад з Google Gemini, TTS з Microsoft Edge) у ваш існуючий Tampermonkey скрипт.

## Оновлення існуючого скрипта

### 1. Оновлення метаданих скрипта

Додайте нові `@require` директиви до метаданих вашого скрипта:

```javascript
// ==UserScript==
// @name         Voice Over Translation
// @namespace    https://github.com/ilyhalight/voice-over-translation
// @version      1.5.4
// @description  Adds a Yandex Browser video translation to other browsers
// @author       Toil
// @match        *://*/*
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.getResourceURL
// @grant        GM_addStyle
// @connect      api.browser.yandex.ru
// @connect      translate.toil.cc
// @connect      detect-v2.toil.kim
// @connect      m3u8.toil.cc
// @connect      vot.toil.cc
// @connect      api.cognitive.microsofttranslator.com
// @connect      api.cognitive.microsoft.com
// @connect      translate.googleapis.com
// @connect      www.googleapis.com
// @connect      api.deepl.com
// @connect      api.deepl-free.com
// @connect      api-free.deepl.com
// @connect      www2.deepl.com
// @connect      generativelanguage.googleapis.com  // Для Gemini API
// @require      https://cdn.jsdelivr.net/npm/@google/genai@latest/dist/browser.min.js
// @require      https://cdn.jsdelivr.net/npm/edge-tts-universal@latest/dist/browser.min.js
// ==/UserScript==
```

### 2. Додавання нових функцій

Створіть новий файл або додайте цей код до вашого існуючого скрипта:

```javascript
(function() {
    'use strict';

    // Функція для отримання Gemini API ключа зі сховища
    async function getGeminiApiKey() {
        try {
            // Спробуємо отримати з GM сховища
            let apiKey = await GM.getValue('geminiApiKey', '');
            
            // Якщо немає в GM, спробуємо з localStorage
            if (!apiKey) {
                apiKey = localStorage.getItem('vot_gemini_api_key') || '';
            }
            
            return apiKey;
        } catch (error) {
            console.error('[VOT] Error getting Gemini API key:', error);
            return '';
        }
    }

    // Функція для збереження Gemini API ключа
    async function saveGeminiApiKey(apiKey) {
        try {
            await GM.setValue('geminiApiKey', apiKey);
            localStorage.setItem('vot_gemini_api_key', apiKey);
        } catch (error) {
            console.error('[VOT] Error saving Gemini API key:', error);
        }
    }

    // Функція для перекладу з Google Gemini
    async function translateWithGemini(text, targetLang = 'uk') {
        try {
            const apiKey = await getGeminiApiKey();
            
            if (!apiKey) {
                console.warn('[VOT] Gemini API key not found');
                // Повертаємо оригінальний текст якщо немає ключа
                return text;
            }

            // Використовуємо Google Generative AI
            const genAI = new google.generativelanguage.v1beta.GenerativeService({
                apiKey: apiKey,
            });

            const model = 'models/gemini-2.5-flash-lite';
            
            const request = {
                model: model,
                contents: [{
                    role: 'user',
                    parts: [{
                        text: `Translate the following text to ${targetLang}. Return only the translated text without any additional comments or explanations:\n\n${text}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                }
            };

            const response = await genAI.models.generateContent(request);
            const result = response[0].candidates[0].content.parts[0].text;
            
            return result.trim();
        } catch (error) {
            console.error('[VOT] Error translating with Gemini:', error);
            return text; // Повертаємо оригінальний текст при помилці
        }
    }

    // Функція для синтезу мовлення з Edge TTS
    async function speakWithEdgeTTS(text, lang = 'en') {
        try {
            // Використовуємо edge-tts-universal
            const tts = new EdgeTTS({
                voice: `${lang}-${lang.toUpperCase()}Neural`,
                rate: 0,
                volume: 0,
                pitch: 0,
            });

            // Отримуємо аудіо як ArrayBuffer
            const audioBuffer = await tts.toArrayBuffer(text);
            
            // Відтворюємо аудіо (вам потрібно реалізувати власний плеєр)
            console.log('[VOT] Audio generated, length:', audioBuffer.byteLength);
            
            return audioBuffer;
        } catch (error) {
            console.error('[VOT] Error speaking with Edge TTS:', error);
            throw error;
        }
    }

    // Функція для створення GUI для введення API ключа
    function createApiKeyGui() {
        // Створюємо кнопку налаштувань
        const settingsButton = document.createElement('button');
        settingsButton.textContent = 'VOT Settings';
        settingsButton.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 8px 16px;
            background: #4285f4;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            z-index: 10000;
            font-family: Arial, sans-serif;
        `;
        
        settingsButton.onclick = showSettingsModal;
        document.body.appendChild(settingsButton);
    }

    // Функція для показу модального вікна налаштувань
    function showSettingsModal() {
        // Створюємо модальне вікно
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10001;
            font-family: Arial, sans-serif;
            min-width: 400px;
        `;
        
        modal.innerHTML = `
            <h2>Voice Over Translation Settings</h2>
            <div style="margin: 20px 0;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">
                    Google Gemini API Key:
                </label>
                <input type="password" id="geminiApiKey" placeholder="Enter your Gemini API key" 
                       style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                <p style="font-size: 12px; color: #666; margin-top: 4px;">
                    Get your API key from <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
                </p>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button id="cancelSettings" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">
                    Cancel
                </button>
                <button id="saveSettings" style="padding: 8px 16px; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Save
                </button>
            </div>
        `;
        
        // Додаємо overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
        `;
        
        overlay.onclick = () => {
            document.body.removeChild(overlay);
            document.body.removeChild(modal);
        };
        
        // Додаємо обробники подій
        modal.querySelector('#saveSettings').onclick = async () => {
            const apiKey = modal.querySelector('#geminiApiKey').value;
            await saveGeminiApiKey(apiKey);
            alert('Settings saved successfully!');
            
            document.body.removeChild(overlay);
            document.body.removeChild(modal);
        };
        
        modal.querySelector('#cancelSettings').onclick = () => {
            document.body.removeChild(overlay);
            document.body.removeChild(modal);
        };
        
        // Завантажуємо поточний API ключ
        getGeminiApiKey().then(apiKey => {
            if (apiKey) {
                modal.querySelector('#geminiApiKey').value = '*'.repeat(Math.min(apiKey.length, 20));
            }
        });
        
        document.body.appendChild(overlay);
        document.body.appendChild(modal);
    }

    // Інтеграція з існуючим функціоналом VOT
    function integrateWithVOT() {
        // Додаємо нові опції до меню VOT
        const originalInit = window.VOT?.init || function() {};
        window.VOT = window.VOT || {};
        window.VOT.init = function() {
            originalInit();
            
            // Додаємо кнопку налаштувань
            createApiKeyGui();
            
            // Додаємо нові методи до VOT API
            window.VOT.translateWithGemini = translateWithGemini;
            window.VOT.speakWithEdgeTTS = speakWithEdgeTTS;
        };
        
        // Якщо VOT вже ініціалізований
        if (window.VOT?.initialized) {
            createApiKeyGui();
            window.VOT.translateWithGemini = translateWithGemini;
            window.VOT.speakWithEdgeTTS = speakWithEdgeTTS;
        }
    }

    // Приклад використання нових функцій
    async function exampleUsage() {
        console.log('=== Приклад використання нових функцій VOT ===');
        
        // Переклад з Google Gemini
        const originalText = 'Hello, this is a test of the new Gemini translation feature.';
        console.log('Оригінальний текст:', originalText);
        
        const translatedText = await translateWithGemini(originalText, 'uk');
        console.log('Перекладений текст:', translatedText);
        
        // Синтез мовлення з Edge TTS
        try {
            await speakWithEdgeTTS('Привіт, це тест синтезу мовлення.', 'uk');
            console.log('Синтез мовлення завершено');
        } catch (error) {
            console.error('Помилка синтезу мовлення:', error);
        }
    }

    // Запускаємо інтеграцію
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', integrateWithVOT);
    } else {
        integrateWithVOT();
    }

    // Експортуємо функції для глобального використання
    window.VOT_Gemini_Translate = translateWithGemini;
    window.VOT_Edge_TTS_Speak = speakWithEdgeTTS;
    window.VOT_Show_Settings = showSettingsModal;

    console.log('[VOT] New features integrated with Tampermonkey script');

})();
```

## Використання нових функцій

### 1. Введення API ключа

Після встановлення скрипта ви побачите кнопку "VOT Settings" у верхньому правому куті сторінки. Натисніть її, щоб відкрити налаштування.

### 2. Переклад з Google Gemini

```javascript
// Використання в консолі браузера
VOT_Gemini_Translate('Hello world', 'uk').then(result => {
    console.log('Переклад:', result);
});

// Або через VOT API
VOT.translateWithGemini('Hello world', 'uk').then(result => {
    console.log('Переклад:', result);
});
```

### 3. Синтез мовлення з Edge TTS

```javascript
// Використання в консолі браузера
VOT_Edge_TTS_Speak('Привіт, світ!', 'uk').then(audioBuffer => {
    console.log('Аудіо згенеровано, розмір:', audioBuffer.byteLength);
});
```

## Налаштування сервісів

### Вибір сервісу перекладу

Ви можете вибрати сервіс перекладу в налаштуваннях VOT:

```javascript
// Встановлення Gemini як основного сервісу перекладу
GM.setValue('translationService', 'gemini');
```

### Вибір TTS сервісу

```javascript
// Встановлення Edge TTS як основного TTS сервісу
GM.setValue('ttsService', 'edge-tts');
```

## Усунення несправностей

### Поширені проблеми:

1. **"Gemini API key not found"**
   - Переконайтесь, що ви ввели API ключ у налаштуваннях
   - Перевірте правильність API ключа
   - Перезавантажте сторінку після збереження ключа

2. **Проблеми з CORS**
   - Додайте `@connect generativelanguage.googleapis.com` до метаданих скрипта
   - Переконайтесь, що ваш Tampermonkey дозволяє з'єднання

3. **Помилки з AudioContext**
   - Переконайтесь, що браузер підтримує Web Audio API
   - Перевірте налаштування безпеки браузера

## Приклад повного інтегрованого скрипта

```javascript
// ==UserScript==
// @name         Voice Over Translation Extended
// @namespace    https://github.com/ilyhalight/voice-over-translation
// @version      1.5.4
// @description  Extended version with Gemini and Edge TTS support
// @author       Your Name
// @match        *://youtube.com/*
// @match        *://*.youtube.com/*
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @connect      generativelanguage.googleapis.com
// @require      https://cdn.jsdelivr.net/npm/@google/genai@latest/dist/browser.min.js
// @require      https://cdn.jsdelivr.net/npm/edge-tts-universal@latest/dist/browser.min.js
// ==/UserScript==

(function() {
    'use strict';

    console.log('[VOT Extended] Script loaded');

    // Ваш існуючий код VOT...

    // Додавання нових функцій...
    
})();
```

## Оновлення

Щоб отримати оновлення:
1. Переконайтесь, що у вас остання версія скрипта
2. Оновіть `@require` посилання до останніх версій
3. Перезавантажте сторінку

## Підтримка

Якщо у вас виникли проблеми:
1. Перевірте консоль браузера (F12) на наявність помилок
2. Переконайтесь, що всі необхідні бібліотеки завантажені
3. Створіть issue на GitHub репозиторії проекту

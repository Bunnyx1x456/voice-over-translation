# Voice Over Translation - Нові функції

## Огляд

Цей документ описує нові функції, додані до проекту Voice Over Translation:
- Підтримка Google Gemini AI для перекладу
- Інтеграція Microsoft Edge TTS для синтезу мовлення
- Компоненти вибору сервісів
- Розширена система конфігурації

## Нові можливості

### 1. Підтримка Google Gemini AI

Додано підтримку моделі `models/gemini-2.5-flash-lite` для перекладу тексту.

#### Використання:
```javascript
import { translate } from './utils/translateApis.js';

// Переклад тексту
const translatedText = await translate('Hello world', 'en', 'uk');

// Переклад масиву текстів
const translatedArray = await translate(['Text 1', 'Text 2'], 'en', 'ru');
```

#### Налаштування API ключа:
Користувач може ввести свій API ключ через GUI компонент в налаштуваннях розширення. Ключ зберігається в LocalStorage браузера.

Для отримання API ключа:
1. Перейдіть на [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Створіть новий API ключ
3. Введіть ключ у налаштуваннях розширення

Компонент введення API ключа:
```html
<vot-api-key-input service="gemini" label="Gemini API Key"></vot-api-key-input>
```

### 2. Microsoft Edge TTS

Інтегровано підтримку Microsoft Edge Text-to-Speech з підтримкою SSML.

#### Основні функції:
- Потокова передача аудіо
- Підтримка SSML для тонкого налаштування
- Кросплатформність
- Отримання метаданих про межі слів

#### Використання:
```javascript
import { synthesizeSpeech, VOTTTSHandler } from './index.js';

// Простий синтез
const result = await synthesizeSpeech({
  text: 'Привіт, світ!',
  voice: 'uk-UA-PolinaNeural',
  rate: 1.0,
  volume: 1.0,
  pitch: 1.0
});

// Використання TTS Handler
const ttsHandler = new VOTTTSHandler();
await ttsHandler.speakText('Hello, this is a test.');
```

### 3. Компоненти вибору сервісів

Додано кастомний Web Component `vot-service-select` для вибору сервісів.

#### Типи сервісів:
- `translation` - сервіси перекладу (yandexbrowser, msedge, gemini)
- `detect` - сервіси визначення мови (yandexbrowser, msedge, rust-server)
- `tts` - сервіси синтезу мовлення (edge-tts, browser-speech, custom)

#### Використання:
```html
<vot-service-select type="translation" label="Translation Service"></vot-service-select>
<vot-service-select type="detect" label="Language Detection"></vot-service-select>
<vot-service-select type="tts" label="Text-to-Speech"></vot-service-select>
```

### 4. Розширена система конфігурації

Додано нові параметри зберігання для TTS налаштувань.

#### Нові налаштування:
```javascript
{
  ttsSettings: {
    voice: 'en-US-JennyNeural',
    rate: 1.0,
    volume: 1.0,
    pitch: 1.0,
    service: 'edge-tts'
  }
}
```

## Структура файлів

```
src/
├── core/
│   ├── ttsHandler.ts          # TTS обробник
│   └── videoManager.ts        # Менеджер відео з TTS
├── ui/
│   └── components/
│       ├── serviceSelect.js   # Компонент вибору сервісів
│       └── index.js           # Експорт UI компонентів
├── utils/
│   ├── tts.ts                 # Утиліти TTS
│   └── translateApis.ts       # Утиліти перекладу з Gemini
├── types/
│   ├── translateApis.ts       # Типи для сервісів
│   └── storage.ts             # Розширені типи зберігання
├── examples/                  # Приклади використання
│   ├── tts-example.js
│   ├── translation-example.js
│   ├── ui-example.js
│   └── index.js
└── index.ts                   # Головний експорт
```

## Приклади використання

### Базовий приклад TTS:
```javascript
import { VOTTTSHandler } from './index.js';

const ttsHandler = new VOTTTSHandler();
await ttsHandler.speakText('Привіт, це тест синтезу мовлення!', 'uk');
```

### Приклад перекладу з Gemini:
```javascript
import { translate } from './utils/translateApis.js';

const result = await translate('Hello, how are you?', 'en', 'uk');
console.log(result); // 'Привіт, як справи?'
```

### Інтегрований приклад:
```javascript
import { translate } from './utils/translateApis.js';
import { VOTTTSHandler } from './index.js';

async function translateAndSpeak(text, fromLang, toLang) {
  const ttsHandler = new VOTTTSHandler();
  
  // Перекладаємо текст
  const translatedText = await translate(text, fromLang, toLang);
  
  // Відтворюємо переклад
  await ttsHandler.speakText(translatedText, toLang);
  
  // Очищуємо ресурси
  await ttsHandler.destroy();
}

translateAndSpeak('Hello world', 'en', 'uk');
```

## Налаштування

### API ключі:
1. **Google Gemini**: Встановіть `GEMINI_API_KEY` в змінні середовища або `window.GEMINI_API_KEY`
2. **Microsoft Edge TTS**: Працює без додаткових налаштувань

### Конфігурація сервісів:
Налаштування зберігаються в локальному сховищі браузера та автоматично завантажуються при запуску.

## Технічні деталі

### Підтримка SSML:
Edge TTS підтримує SSML для тонкого налаштування мовлення:
- Зміна висоти тону
- Регулювання швидкості
- Керування гучністю
- Додавання пауз
- Керування вимовою

### Потокова передача:
Підтримується потокова передача аудіо для реального часу відтворення.

### Кросплатформність:
Рішення працює в будь-якому JavaScript-середовищі (Node.js, браузери).

## Тестування

### Запуск прикладів:
```javascript
import { runAllExamples } from './examples/index.js';
runAllExamples();
```

### Тестування UI компонентів:
```javascript
import { createTestInterface } from './examples/ui-example.js';
createTestInterface();
```

## Майбутні покращення

- Додавання більше TTS сервісів
- Підтримка більше мов для Gemini
- Розширені налаштування SSML
- Інтеграція з іншими API перекладу
- Покращення UI компонентів

## Вирішення проблем

### Загальні помилки:

1. **"Gemini API key not found"**:
   - Встановіть `GEMINI_API_KEY` зміну середовища
   - Або встановіть `window.GEMINI_API_KEY` в браузері

2. **"AudioContext not available"**:
   - Переконайтесь, що браузер підтримує Web Audio API
   - Перевірте налаштування безпеки браузера

3. **Проблеми з CORS**:
   - Використовуйте проксі-сервери для обходу обмежень
   - Налаштуйте CORS на сервері

## Ліцензія

MIT License - див. основний файл LICENSE для деталей.

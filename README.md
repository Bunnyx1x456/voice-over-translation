# Voice Over Translation — UA & Global Free Open-Source Edition

Форк проєкту ilyhalight/voice-over-translation із повною підтримкою **української мови (`uk`)** та 29+ мов світу, де **ASR/STT, машинний переклад (MT) та синтез мовлення (TTS) працюють на 100% безкоштовно** без платних ключів чи облікових записів.

### Ключові особливості цього форку
- **Повна підтримка української мови (`uk`) за замовчуванням**: безкоштовний переклад і багатоголосе озвучування відео українською та ще 29 мовами світу (`uk`, `en`, `pl`, `de`, `fr`, `es`, `it`, `pt`, `cs`, `sk`, `bg`, `ro`, `hu`, `nl`, `sv`, `da`, `fi`, `no`, `el`, `tr`, `zh`, `ja`, `ko`, `ar`, `kk`, `hi`, `id`, `vi`, `th`, `he`).
- **Мовна політика**: російська мова (`ru`) повністю вилучена зі списку цільових мов перекладу, озвучування та субтитрів (залишена лише як мова вхідного відео для перекладу з російськомовних відео українською або іншими мовами).
- **Двосторонній безкоштовний TTS (Google Chrome <-> Microsoft Edge)**: використовує `Web Speech API` (`speechSynthesis`) та мережевий синтез Google Chrome TTS і Microsoft Edge Neural TTS (`OstapNeural`, `PolinaNeural` та ін.) із двостороннім fallback.
- **Збереження кількох голосів (Multi-Voice) та Lip-Sync**: автоматичний розподіл реплік між чоловічими та жіночими голосами й синхронізація швидкості мовлення з таймкодами фраз у відео (`startMs`..`durationMs`) та Smart Auto-Volume Ducking.
- **Повна сумісність із Google Chrome та Microsoft Edge (MV3 Extension + Userscript)**: у MS Edge використовується вбудований нейронний синтез (`uk-UA-OstapNeural`, `uk-UA-PolinaNeural`), а в Google Chrome працює фоновий сервіс-воркер (`background.js` + `declarativeNetRequest`) із паралельним синтезом через Google Translate RPC `batchexecute` (`jQ1olc`), `translate_tts` та Edge `api.msedgeservices.com`, синхронним розблокуванням `AudioContext` при кліку, захистом черги реплік (`cueBusy`) і резервним відтворенням `data:audio/mpeg;base64`.
- **Природний темп мовлення Lip-Sync (`1.0x–1.25x`)**: м'яке підлаштування швидкості мовлення під реальний інтервал між фразами без зайвого прискорення.

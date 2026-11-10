const mineflayer = require('mineflayer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// خادم الويب الأساسي لمنع منصة Render من النوم
app.get('/', (req, res) => {
    res.send('البوت يعمل بنجاح 24/7 على منصة Render!');
});

app.listen(PORT, () => {
    console.log(`خادم الويب يعمل بنجاح على المنفذ ${PORT}`);
});

// إعدادات الاتصال المباشرة بسيرفرك
function createBot() {
    const bot = mineflayer.createBot({
        host: 'Amr4k.aternos.me',   // رابط سيرفرك الصحيح
        username: 'Aternos_247_Bot', // اسم البوت داخل اللعبة
        version: false               // تم تعيينها false لتجنب أخطاء كتابة النسخة بشكل خاطئ وتترك للبوت قراءتها تلقائياً عند تشغيل السيرفر
    });

    bot.on('spawn', () => {
        console.log('🎉 ممتاز! تم دخول البوت إلى سيرفر Amr4k بنجاح!');
    });

    bot.on('end', () => {
        console.log('انقطع الاتصال بالسيرفر! تجري محاولة إعادة الدخول بعد 30 ثانية...');
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => {
        console.log('حدث خطأ أثناء الاتصال:', err.message);
    });
}

// تشغيل البوت تلقائياً
createBot();

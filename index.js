const mineflayer = require('mineflayer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// خادم الويب لإبقاء المنصة تعمل 24 ساعة دون نوم
app.get('/', (req, res) => {
    res.send('البوت يعمل بنجاح 24/7 على منصة Render!');
});

app.listen(PORT, () => {
    console.log(`خادم الويب يعمل بنجاح على المنفذ ${PORT}`);
});

// إعدادات البوت والاتصال بسيرفر اتيرنوس
function createBot() {
    const bot = mineflayer.createBot({
        host: 'ضع_رابط_سيرفرك_هنا.aternos.me', // استبدله برابط سيرفر اتيرنوس الخاص بك
        port: 25565,                         // غيّر الرقم إذا كان البورت لديك مختلفاً
        username: 'Aternos_247_Bot',         // اسم البوت داخل السيرفر
        version: false                       // يكتشف نسخة السيرفر تلقائياً
    });

    bot.on('spawn', () => {
        console.log('🎉 مبروك! تم دخول البوت إلى السيرفر بنجاح!');
    });

    bot.on('end', () => {
        console.log('انقطع الاتصال بالسيرفر! تجري محاولة إعادة الدخول بعد 30 ثانية...');
        setTimeout(createBot, 30000); // يعيد المحاولة تلقائياً إذا انطفأ السيرفر أو طُرد البوت
    });

    bot.on('error', (err) => {
        console.log('حدث خطأ أثناء الاتصال:', err.message);
    });
}

// تشغيل البوت
createBot();

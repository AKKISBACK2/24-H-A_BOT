const mineflayer = require('mineflayer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// خادم الويب الأساسي لمنع منصة Render من النوم
app.get('/', (req, res) => {
    res.send('البوت مستيقظ ويعمل بنجاح 24/7!');
});

app.listen(PORT, () => {
    console.log(`خادم الويب يعمل بنجاح على المنفذ ${PORT}`);
});

// إعدادات اتصال البوت الذكية والمقاومة للحظر
function createBot() {
    console.log('جاري محاولة الاتصال بسيرفر اتيرنوس الآن...');
    
    const bot = mineflayer.createBot({
        host: 'Amr4k.aternos.me',    // رابط السيرفر
        port: 53768,                 // رقم البورت (تأكد أنه البورت الحالي في اتيرنوس)
        username: 'Aternos_247',     // اسم البوت
        skipValidation: true,        // تخطي التحقق من الحسابات الرسمية
        checkTimeoutInterval: 60000  // زيادة مهلة الانتظار لمنع السقوط
    });

    bot.on('spawn', () => {
        console.log('🎉🎉🎉 مبروك! البوت نجح في الدخول إلى السيرفر واستقر بالداخل!');
    });

    bot.on('end', (reason) => {
        console.log(`انقطع الاتصال بسبب: ${reason}. إعادة المحاولة بعد 10 ثوانٍ...`);
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log('فشل الاتصال مؤقتاً، جاري إعادة المحاولة تلقائياً بعد 10 ثوانٍ...');
        setTimeout(createBot, 10000);
    });
}

// بدء تشغيل محاولات البوت
createBot();

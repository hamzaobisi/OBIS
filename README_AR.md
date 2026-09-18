# OBISI | العبيسي — الإصدار 2

هذا مشروع تطبيق Android وليس موقعاً. التطبيق مصمم ليُوزع كـ APK مباشرة.

## الوظائف
- عرض المنتجات والأسعار والتصنيفات والبحث.
- زر واتساب: +963967472881.
- إدارة المنتجات من داخل التطبيق بعد تسجيل دخول الإدارة.
- Firestore لتخزين المنتجات.
- Firebase Storage للصور (واجهة رفع الصور تحتاج استكمال ربط picker في نسخة لاحقة).
- Firebase Cloud Messaging للإشعارات.
- Cloud Function ترسل إشعاراً تلقائياً عند إنشاء منتج جديد فعال.

## قبل البناء
1. أنشئ مشروع Firebase.
2. أضف Android App بالمعرّف: `com.obisi.store`.
3. نزّل `google-services.json` وضعه داخل `app/`.
4. فعّل Authentication > Email/Password وأنشئ حساب الإدارة.
5. فعّل Firestore وStorage وCloud Messaging.
6. انشر `firestore.rules` و`storage.rules`.
7. من مجلد `functions` نفّذ تثبيت الحزم ثم نشر Cloud Functions من Firebase CLI.

## GitHub Actions
ارفع المشروع إلى مستودع GitHub، ثم ضع `google-services.json` داخل `app/` (ولا ترفعه إلى مستودع عام؛ الأفضل استخدام Secret/ملف آمن في CI). من Actions شغّل **Build OBISI APK** وسيظهر APK كـ Artifact.

> ملاحظة: هذا الإصدار هو أساس v2 ويحتاج إعداد Firebase الفعلي حتى يعمل التخزين والإشعارات. لا يوجد APK جاهز داخل الملف قبل وضع إعداد Firebase الخاص بك.

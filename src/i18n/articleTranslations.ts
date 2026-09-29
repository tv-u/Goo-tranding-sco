import { Article, ArticleTranslation, KeyFact, TimelineEntry, FAQItem } from '../types';

// Pre-compiled multi-language translations for articles across supported languages
export const DEEP_ARTICLE_TRANSLATIONS: Record<string, Record<string, Partial<ArticleTranslation>>> = {
  'iter-fusion-magnetic-plasma-confinement-milestone': {
    hi: {
      title: 'ITER ने फ्रांस के काडाराश में हासिल किया ऐतिहासिक प्लाज्मा कन्फाइनमेंट मील का पत्थर',
      summary: 'ITER अंतरराष्ट्रीय कंसोर्टियम ने 150 मिलियन डिग्री सेल्सियस पर 1,200 सेकंड तक स्थिर चुंबकीय प्लाज्मा रोककर स्वच्छ असीमित परमाणु संलयन ऊर्जा की दिशा में ऐतिहासिक सफलता हासिल की।',
      why_trending: 'ग्लोबल साइंटिफिक रिपोर्ट्स और न्यूक्लियर एजेंसी वेरिफिकेशन के बाद विश्व स्तर पर सर्च वॉल्यूम में 284% की रिकॉर्ड उछाल देखी गई।',
      background: 'दशकों से परमाणु संलयन का लक्ष्य पृथ्वी पर सूर्य के तारों जैसी ऊर्जा का निर्माण करना रहा है। 35 सदस्य देशों (यूरोपीय संघ, अमेरिका, भारत, जापान, चीन, दक्षिण कोरिया, रूस) द्वारा समर्थित ITER दुनिया का सबसे बड़ा चुंबकीय संलयन भौतिकी प्रयोग है।',
      what_happened: 'इंजीनियरों ने 15 मेगा-एम्पीयर से अधिक करंट के साथ सुपरकंडक्टिंग मैग्नेट को सक्रिय किया और बिना किसी रुकावट के लगातार 1,200 सेकंड तक प्लाज्मा को नियंत्रित रखा।',
      why_it_matters: 'परमाणु विखंडन (Fission) के विपरीत, संलयन (Fusion) में न तो कोई खतरनाक रेडियोधर्मी कचरा बनता है और न ही मेल्टडाउन का कोई जोखिम होता है। केवल एक ग्राम ईंधन 8 टन तेल के बराबर ऊर्जा पैदा करता है।',
      global_impact: 'यह मील का पत्थर वैश्विक जलवायु लक्ष्यों और शून्य-कार्बन बेसलोड बिजली उत्पादन की समयसीमा को तेज करता है।',
      key_facts: [
        { fact: 'प्लाज्मा का तापमान 150 मिलियन डिग्री सेल्सियस तक पहुंचा (सूर्य के केंद्र से 10 गुना अधिक गर्म)।', citation: 'ITER आधिकारिक प्रेस विज्ञप्ति 2026', verified: true },
        { fact: 'सुपरकंडक्टिंग चुंबकीय क्षेत्र 13 टेस्ला था, जो एक विमानवाहक पोत को उठाने जितना शक्तिशाली है।', citation: 'काडाराश तकनीकी जर्नल', verified: true },
        { fact: 'थर्मल सिमुलेशन में शुद्ध ऊर्जा प्रवर्धन लक्ष्य Q ≥ 10 मान्य हुआ।', citation: 'नेचर एनर्जी ग्राउंडिंग', verified: true },
        { fact: 'बिना किसी राजनयिक बाधा के 35 देशों ने इस प्रोजेक्ट में सहयोग किया।', citation: 'अंतर्राष्ट्रीय परमाणु ऊर्जा एजेंसी (IAEA)', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'सुपरकंडक्टिंग कॉइल को -269°C (4 केल्विन) तक ठंडा किया गया।', impact: 'क्रायोस्टेट ने चुंबकीय स्थिरता स्थापित की।' },
        { time: '11:40 UTC', event: 'ड्यूटेरियम-ट्रिटियम गैस गोली इंजेक्शन अनुक्रम शुरू हुआ।', impact: 'रेडियो फ्रीक्वेंसी एंटेना ने 50MW हीटिंग पावर दी।' },
        { time: '13:00 UTC', event: 'प्लाज्मा कन्फाइनमेंट ने 1,200 सेकंड का स्थिर संतुलन हासिल किया।', impact: 'सेंसरों ने 100% स्थिरता की पुष्टि की।' },
        { time: '14:30 UTC', event: 'IAEA रजिस्ट्री को स्वतंत्र नैदानिक डेटा जारी किया गया।', impact: 'वैश्विक वैज्ञानिक और ऊर्जा बाजारों ने प्रतिक्रिया दी।' },
      ],
      faq: [
        {
          question: 'क्या इसका मतलब है कि संलयन बिजली अब सीधे घरों में मिलने लगेगी?',
          answer: 'तुरंत नहीं। ITER एक अनुसंधान सुविधा है जो शुद्ध ऊर्जा सीमा साबित करने के लिए बनाई गई है। 2030 के दशक में DEMO प्रोटोटाइप रिएक्टर के साथ वाणिज्यिक बिजली उत्पादन शुरू होगा।',
        },
        {
          question: 'क्या पारंपरिक परमाणु रिएक्टरों की तुलना में संलयन सुरक्षित है?',
          answer: 'हाँ, बिल्कुल। संलयन के लिए निरंतर ईंधन की आवश्यकता होती है। यदि कोई व्यवधान आता है, तो प्लाज्मा कुछ मिलीसेकंड में अपने आप ठंडा होकर बंद हो जाता है। मेल्टडाउन असंभव है।',
        },
        {
          question: 'आज ITER की सर्च वेलोसिटी में 284% का उछाल क्यों आया?',
          answer: 'सत्यापित 1,200 सेकंड की अवधि ने यह सिद्ध कर दिया कि चुंबकीय बोतलें संलयन की ज्वाला को लंबे समय तक सुरक्षित और स्थिर रख सकती हैं।',
        },
      ],
    },
    ur: {
      title: 'آئی ٹی ای آر نے فرانس میں مقناطیسی پلازما کنفائنمنٹ کا تاریخی سنگ میل عبور کر لیا',
      summary: 'عالمی سائنسی کنسورشیم نے 150 ملین ڈگری پر 1200 سیکنڈ تک فیوژن پلازما کو بغیر کسی خلل کے قابو میں رکھ کر صاف اور لامحدود توانائی کی جانب بڑی کامیابی حاصل کی۔',
      why_trending: 'سائنسی رپورٹس کے اجرا کے بعد سرچ والیوم میں 284 فیصد کا غیر معمولی اضافہ دیکھا گیا۔',
      background: 'ایٹمی فیوژن کا مقصد زمین پر سورج جیسی توانائی پیدا کرنا ہے۔ 35 ممالک کے اشتراک سے چلنے والا یہ دنیا کا سب سے بڑا سائنسی تجربہ ہے۔',
      what_happened: 'سپر کنڈکٹنگ مقناطیس نے پلازما کو مستحکم رکھا اور 1200 سیکنڈ تک کامیابی سے کنٹرول کیا۔',
      why_it_matters: 'نیوکلیئر فیوژن روایتی ایٹمی توانائی سے بالکل محفوظ ہے اور کوئی خطرناک فضلہ پیدا نہیں کرتا۔',
      global_impact: 'یہ دنیا کو ماحولیاتی آلودگی سے پاک توانائی کی فراہمی میں مدد دے گا۔',
      key_facts: [
        { fact: 'پلازما کا درجہ حرارت 150 ملین ڈگری سینٹی گریڈ تک پہنچ گیا۔', citation: 'آئی ٹی ای آر سرکاری اعلامیہ', verified: true },
        { fact: 'پیدا ہونے والا مقناطیسی میدان 13 ٹیسلا تھا۔', citation: 'سائنسی رپورٹ', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'سپر کنڈکٹنگ کوائلز کو ٹھنڈا کیا گیا۔', impact: 'مقناطیسی استحکام حاصل ہوا۔' },
        { time: '13:00 UTC', event: '1200 سیکنڈ کا مسلسل پلازما کنٹرول مکمل ہوا۔', impact: '100 فیصد استحکام ریکارڈ کیا گیا۔' },
      ],
      faq: [
        {
          question: 'کیا یہ بجلی اب عوام کے لیے دستیاب ہے؟',
          answer: 'ابھی نہیں، یہ تجرباتی مرحلہ ہے، تجارتی پیداوار 2030 کے بعد شروع ہوگی۔',
        },
        {
          question: 'کیا یہ فیوژن توانائی محفوظ ہے؟',
          answer: 'جی ہاں، اس میں کسی دھماکے یا تابکاری کے اخراج کا کوئی خطرہ نہیں ہے۔',
        },
      ],
    },
    bn: {
      title: 'ITER ফ্রান্সে ঐতিহাসিক চৌম্বকীয় প্লাজমা সীমাবদ্ধতার মাইলফলক অর্জন করেছে',
      summary: 'আন্তর্জাতিক কনসোর্টিয়াম ITER ফ্রান্সে ১৫০ মিলিয়ন ডিগ্রি সেলসিয়াসে ১,২০০ সেকেন্ড ধরে স্থিতিশীল প্লাজমা নিয়ন্ত্রণ করে সীমাহীন পরিচ্ছন্ন শক্তির ক্ষেত্রে যুগান্তকারী সাফল্য অর্জন করেছে।',
      why_trending: 'বৈজ্ঞানিক প্রমাণ নিশ্চিতকরণের পর বিশ্বব্যাপী অনুসন্ধান তীব্র গতিতে বৃদ্ধি পেয়েছে।',
      background: 'দশক ধরে পৃথিবীতে সূর্যের মতো শক্তি উৎপাদনের চেষ্টা চলছে। ৩৫টি দেশের অর্থায়নে পরিচালিত ITER বিশ্বের বৃহত্তম ফিউশন প্রকল্প।',
      what_happened: 'সুপারকন্ডাক্টিং চুম্বক সফলভাবে অত্যন্ত উচ্চ তাপমাত্রার প্লাজমাকে অবিচ্ছিন্নভাবে নিয়ন্ত্রণ করেছে।',
      why_it_matters: 'পারমাণবিক ফিশনের বিপরীতে ফিউশনে কোনো দীর্ঘস্থায়ী বিষাক্ত তেজস্ক্রিয় বর্জ্য তৈরি হয় না।',
      global_impact: 'এটি বিশ্বব্যাপী শূন্য-কার্বন বিদ্যুৎ উৎপাদনের রূপরেখাকে ত্বরান্বিত করবে।',
      key_facts: [
        { fact: 'প্লাজমার তাপমাত্রা সূর্যের কেন্দ্রের চেয়ে ১০ গুণ বেশি উত্তপ্ত ছিল।', citation: 'ITER প্রেস বিজ্ঞপ্তি', verified: true },
        { fact: '১৩ টেসলা শক্তিশালী চৌম্বকীয় ক্ষেত্র তৈরি হয়েছিল।', citation: 'বিজ্ঞান গবেষণা জার্নাল', verified: true },
      ],
      timeline: [
        { time: '০৮:১৫ UTC', event: 'চৌম্বকীয় কয়েল শীতলীকরণ সম্পন্ন।', impact: 'ক্রায়োস্ট্যাট স্থায়িত্ব অর্জন।' },
        { time: '১৩:০০ UTC', event: '১,২০০ সেকেন্ড অবিচ্ছিন্ন নিয়ন্ত্রণ সম্পন্ন।', impact: 'পূর্ণ স্থিতিশীলতা নিশ্চিত।' },
      ],
      faq: [
        {
          question: 'ফিউশন শক্তি কি প্রচলিত চুল্লির চেয়ে নিরাপদ?',
          answer: 'হ্যাঁ, এতে কোনো গলন বা তেজস্ক্রিয় বিস্ফোরণের ঝুঁকি নেই।',
        },
      ],
    },
    es: {
      title: 'ITER Logra Histórico Hito de Confinamiento de Plasma Magnético en Cadarache',
      summary: 'El consorcio internacional ITER confirmó un avance crucial al sostener plasma a más de 150 millones de grados Celsius durante 1.200 segundos en equilibrio magnético continuo.',
      why_trending: 'Pico de búsquedas mundiales impulsado por la validación del Organismo Internacional de Energía Atómica.',
      background: 'La energía de fusión busca replicar las reacciones del núcleo solar en la Tierra. ITER reúne a 35 naciones socias.',
      what_happened: 'Ingenieros lograron confinar plasma de deuterio-tritio sin inestabilidades térmicas en el reactor tokamak más grande del mundo.',
      why_it_matters: 'Proporciona una hoja de ruta verificable para la energía de fusión limpia comercial sin residuos de larga vida.',
      global_impact: 'Acelera la inversión de capital hacia reactores comerciales y soluciones de energía base descarbonizada.',
      key_facts: [
        { fact: 'Temperatura del plasma superior a 150 millones de °C (10 veces más caliente que el Sol).', citation: 'Comunicado Oficial ITER', verified: true },
        { fact: 'Campo magnético generado de 13 Tesla con electroimanes superconductores.', citation: 'Revista Técnica Cadarache', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'Pre-enfriamiento superconductor completado a 4 Kelvin.', impact: 'Estabilización criogénica.' },
        { time: '13:00 UTC', event: 'Equilibrio sostenido de plasma durante 1.200 segundos.', impact: '100% estabilidad confirmada.' },
      ],
      faq: [
        {
          question: '¿Es la fusión nuclear segura comparada con la fisión?',
          answer: 'Totalmente. No puede producirse una reacción en cadena descontrolada; ante cualquier corte el plasma se extingue en milisegundos.',
        },
      ],
    },
    fr: {
      title: 'L\'ITER Franchit une Étape Historique de Confinement du Plasma à Cadarache',
      summary: 'Le consortium international ITER valide le maintien en régime stationnaire d\'un plasma de fusion à 150 millions de degrés pendant plus de 1 200 secondes.',
      why_trending: 'Couverture médiatique mondiale massive après la confirmation par l\'AIEA des données physiques de Cadarache.',
      background: 'La fusion nucléaire vise à reproduire l\'énergie du Soleil sur Terre sans déchet de haute activité.',
      what_happened: 'Les aimants supraconducteurs ont maintenu le plasma sans instabilités magnétiques majeures.',
      why_it_matters: 'Prouve la faisabilité d\'une source d\'énergie décarbonée illimitée pour le siècle à venir.',
      global_impact: 'Fournit aux politiques énergétiques mondiales une perspective concrète d\'électricité décarbonée permanente.',
      key_facts: [
        { fact: 'Température du plasma dépassant 150 millions de degrés Celsius.', citation: 'Communiqué Officiel ITER', verified: true },
        { fact: 'Champ magnétique supraconducteur atteignant 13 Tesla.', citation: 'Rapport Physique Cadarache', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'Refroidissement des bobines à 4 Kelvin achevé.', impact: 'Stabilité du cryostat.' },
        { time: '13:00 UTC', event: 'Confinement maintenu à 1 200 secondes.', impact: 'Validation des objectifs expérimentaux.' },
      ],
      faq: [
        {
          question: 'La fusion est-elle sûre ?',
          answer: 'Oui, tout arrêt de confinement éteint instantanément la réaction sans aucun risque d\'accident majeur.',
        },
      ],
    },
    de: {
      title: 'ITER Erzielt Historischen Meilenstein beim Magnetischen Plasma-Einschluss in Cadarache',
      summary: 'Das internationale Großforschungsprojekt ITER hat über 1.200 Sekunden lang ein 150 Millionen Grad heißes Fusionsplasma stabil eingeschlossen – ein entscheidender Durchbruch für saubere Energie.',
      why_trending: 'Weltweite Spitzenwerte bei Suchanfragen nach Bestätigung durch die Internationale Atomenergie-Organisation.',
      background: 'Kernfusion zielt darauf ab, die Energiequelle der Sonne auf der Erde nachzubilden. 35 Staaten kooperieren bei ITER.',
      what_happened: 'Supraleitende Magnete hielten das Deuterium-Tritium-Plasma ohne schädliche Randinstabilitäten stabil im Gleichgewicht.',
      why_it_matters: 'Im Gegensatz zur Kernspaltung gibt es keine langlebigen radioaktiven Abfälle und kein Risiko einer Kernschmelze.',
      global_impact: 'Beschleunigt den Übergang zu CO2-neutraler Grundlastenergie für globale Stromnetze.',
      key_facts: [
        { fact: 'Plasmatemperatur über 150 Millionen Grad Celsius (10-mal heißer als das Sonneninnere).', citation: 'ITER Presseerklärung 2026', verified: true },
        { fact: 'Supraleitendes Magnetfeld erreichte 13 Tesla Feldstärke.', citation: 'Physikalisches Institut Cadarache', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'Vorkühlung der Spulen auf 4 Kelvin abgeschlossen.', impact: 'Kryostat stabilisiert Magnetfeld.' },
        { time: '13:00 UTC', event: 'Gleichgewichtszustand von 1.200 Sekunden erreicht.', impact: 'Sensoren melden 100% Stabilität.' },
      ],
      faq: [
        {
          question: 'Ist Kernfusion sicher?',
          answer: 'Ja, bei jeder Störung bricht die Reaktion in Millisekunden harmlos zusammen. Es gibt keine Kettenreaktion.',
        },
      ],
    },
    pt: {
      title: 'ITER Alcança Marco Histórico de Confinamento Magnético de Plasma em Cadarache',
      summary: 'O consórcio internacional ITER sustentou com sucesso plasma a mais de 150 milhões de graus Celsius por 1.200 segundos estáveis, aproximando a energia de fusão limpa da realidade.',
      why_trending: 'Salto de buscas científicas globais após auditoria da AIEA confirmando os dados de estabilidade.',
      background: 'A fusão nuclear busca replicar a energia das estrelas de forma limpa e abundante.',
      what_happened: 'Bobinas magnéticas supercondutoras mantiveram o plasma sem turbulências destrutivas.',
      why_it_matters: 'Elimina o risco de acidentes severos e não gera resíduos radioativos de longa duração.',
      global_impact: 'Fornece um horizonte tecnológico viável para energia de base zero emissões.',
      key_facts: [
        { fact: 'Temperatura excedeu 150 milhões de °C.', citation: 'Boletim Oficial ITER', verified: true },
        { fact: 'Campo magnético supercondutor de 13 Tesla.', citation: 'Registro AIEA', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'Resfriamento a 4 Kelvin concluído.', impact: 'Equilíbrio criogênico.' },
        { time: '13:00 UTC', event: 'Confinamento de 1.200 segundos consolidado.', impact: 'Estabilidade integral.' },
      ],
      faq: [
        {
          question: 'A fusão nuclear é segura?',
          answer: 'Sim, qualquer anomalia encerra o processo instantaneamente sem riscos.',
        },
      ],
    },
    ar: {
      title: 'إنجاز تاريخي لحبس البلازما المغناطيسية في مفاعل ITER بفرنسا',
      summary: 'حقق تحالف ITER الدولي إنجازاً تاريخياً بعد الحفاظ على بلازما الاندماج عند 150 مليون درجة مئوية لمدة 1200 ثانية متواصلة، مقرباً عصر الطاقة النظيفة غير المحدودة.',
      why_trending: 'قفزة في مؤشرات البحث العالمية عقب مصادقة الوكالة الدولية للطاقة الذرية على النتائج.',
      background: 'يهدف الاندماج النووي إلى محاكاة طاقة الشمس على الأرض بأمان تام وبدون نفايات مشعة.',
      what_happened: 'نجح المهندسون في ضبط البلازما بواسطة مغناطيسات فائقة التوصيل دون اضطرابات حرارية.',
      why_it_matters: 'لا وجود لأي خطر انصهار، ويوفر طاقة هائلة ونظيفة تفوق النفط بآلاف المرات.',
      global_impact: 'يعزز الخطط العالمية للوصول إلى طاقة كهربائية خالية تماماً من انبعاثات الكربون.',
      key_facts: [
        { fact: 'حرارة البلازما تخطت 150 مليون درجة مئوية (أشد من قلب الشمس بعشر مرات).', citation: 'بيان ITER الرسمي', verified: true },
        { fact: 'قوة المجال المغناطيسي بلغت 13 تسلا.', citation: 'المجلة التقنية', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'اكتمل تبريد الملفات إلى 4 كلفن.', impact: 'استقرار مغناطيسي فائق.' },
        { time: '13:00 UTC', event: 'تحقيق استقرار مستمر لمدة 1200 ثانية.', impact: 'تأكيد النجاح بنسبة 100%.' },
      ],
      faq: [
        {
          question: 'هل طاقة الاندماج آمنة مقارنة بالانشطار التقليدي؟',
          answer: 'نعم تماماً، لا يمكن حدوث تفاعل متسلسل، وإذا حدث أي طارئ تخمد البلازما فوراً في أجزاء من الثانية.',
        },
      ],
    },
    ja: {
      title: 'ITER 核融合磁気プラズマ閉じ込め 歴史的マイルストーンを南仏で達成',
      summary: '国際核融合エネルギー機構（ITER）は1億5000万度の超高温重水素プラズマを1,200秒間にわたり安定して閉じ込めることに成功し、クリーンな無尽蔵エネルギー実現への確固たる前進を記録しました。',
      why_trending: '国際原子力機関（IAEA）による検証完了の発表に伴い、世界各国の検索トラフィックが284%急増。',
      background: '核融合は太陽の中心で起きている反応を地上で再現する究極のエネルギー技術であり、日本を含む35カ国が共同参画しています。',
      what_happened: '超電導コイルによる強力な磁場制御により、プラズマ乱流を完璧に抑制した状態で定常運転を維持しました。',
      why_it_matters: 'ウラン等の核分裂と異なり、高レベル放射性廃棄物を排出せず、暴走事故のリスクも物理的に皆無です。',
      global_impact: '脱炭素ベースロード電源の実現計画を大きく前倒しする画期的な成果です。',
      key_facts: [
        { fact: 'プラズマ温度は太陽中心部の10倍となる1億5000万度を記録。', citation: 'ITER公式プレスリリース', verified: true },
        { fact: '13テスラの超強力磁場を安定生成。', citation: 'カダラッシュ物理学報', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: '超電導コイルを絶対温度4K（-269℃）まで冷却完了。', impact: '磁気閉じ込め系の安定化。' },
        { time: '13:00 UTC', event: '1,200秒の定常プラズマ維持を達成。', impact: '実証目標の完全達成。' },
      ],
      faq: [
        {
          question: '核融合発電は安全ですか？',
          answer: 'はい。燃料供給が停止するとプラズマはミリ秒単位で自然消滅するため、炉心溶融のリスクはありません。',
        },
      ],
    },
    ko: {
      title: 'ITER 프랑스 카다라슈에서 역사적인 초고온 플라스마 자기 밀폐 마일스톤 달성',
      summary: '국제핵융합실험로(ITER)가 1억 5천만 도 초고온 플라스마를 1,200초 동안 안정적으로 제어하며 상용 청정 핵융합 에너지의 실현 가능성을 입증했습니다.',
      why_trending: 'IAEA 검증 발표 이후 전 세계 검색량이 284% 급증하며 과학계와 에너지 시장의 이목 집중.',
      background: '핵융합은 인공태양 기술로, 한국을 포함한 35개국이 협력하는 인류 최대 규모의 물리 실험입니다.',
      what_happened: '초전도 자석 시스템을 통해 플라스마 난류와 경계면 불안정성을 완벽하게 억제했습니다.',
      why_it_matters: '핵분열과 달리 고준위 방사성 폐기물이 발생하지 않으며 폭발 위험이 전혀 없습니다.',
      global_impact: '글로벌 무탄소 에너지 로드맵의 상용화 시점을 획기적으로 앞당길 전환점입니다.',
      key_facts: [
        { fact: '플라스마 온도가 태양 중심부의 10배인 1억 5천만 도에 도달.', citation: 'ITER 공식 발표', verified: true },
        { fact: '초전도 자석이 13테슬라의 초강력 자기장 형성.', citation: '카다라슈 기술 보고서', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: '초전도 코일 4K 극저온 냉각 완료.', impact: '자기 안정화 달성.' },
        { time: '13:00 UTC', event: '1,200초 연속 플라스마 밀폐 성공.', impact: '100% 성능 지표 달성.' },
      ],
      faq: [
        {
          question: '핵융합 에너지는 원자력 발전보다 안전한가요?',
          answer: '네. 이상 발생 시 플라스마가 즉시 꺼지므로 멜트다운이나 연쇄 폭발이 원천적으로 불가능합니다.',
        },
      ],
    },
    zh: {
      title: 'ITER 国际热核聚变实验堆在法国取得等离子体长时间磁约束历史性突破',
      summary: 'ITER 国际联合团队在 1.5 亿度超高温下成功维持稳定的氘氚等离子体磁约束达 1,200 秒，标志着商用清洁聚变能源迈出关键一步。',
      why_trending: '国际原子能机构核实物理数据后，全球科技和能源圈搜索热度猛增 284%。',
      background: '核聚变旨在在地球上模拟太阳发光发热原理，由包括中国在内的 35 个国家共同出资建造。',
      what_happened: '工程师利用大型超导磁体精确控制等离子体电流，克服了边缘湍流等世界级工程难题。',
      why_it_matters: '聚变反应无长寿命放射性废物，没有堆芯熔毁危险，1克燃料相当于8吨石油的能量。',
      global_impact: '为全球气候峰会和零碳基荷电力提供了明确的工程落地时间表。',
      key_facts: [
        { fact: '等离子体中心温度突破 1.5 亿摄氏度，为太阳中心的 10 倍。', citation: 'ITER 官方公报', verified: true },
        { fact: '超导磁体产生高达 13 特斯拉的强大磁场。', citation: '物理实验技术期刊', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: '超导线圈冷却至 4 开尔文（-269℃）。', impact: '低温恒温器磁场稳定。' },
        { time: '13:00 UTC', event: '实现 1,200 秒平稳稳态等离子体约束。', impact: '各项技术指标全面达标。' },
      ],
      faq: [
        {
          question: '核聚变发电与传统核电相比是否安全？',
          answer: '绝对安全。聚变需要持续补充燃料，发生任何异常反应会在数毫秒内自行熄灭，不存在切尔诺贝利式事故风险。',
        },
      ],
    },
    ru: {
      title: 'ITER достиг исторического рубежа магнитного удержания плазмы в Кадараше',
      summary: 'Международный консорциум ИТЭР подтвердил удержание дейтерий-тритиевой плазмы при температуре 150 млн °C в течение 1200 секунд, приблизив эпоху чистой термоядерной энергии.',
      why_trending: 'Всплеск поискового интереса на 284% после официального подтверждения МАГАТЭ.',
      background: 'Термоядерный синтез призван воссоздать энергию звезд на Земле. В проекте ИТЭР участвуют 35 стран, включая Россию.',
      what_happened: 'Сверхпроводящие магниты удержали высокоплотную плазму без разрушительных неустойчивостей.',
      why_it_matters: 'В отличие от деления, синтез не оставляет долгоживущих радиоактивных отходов и исключает риск аварии с расплавом.',
      global_impact: 'Дает человечеству подтвержденную технологическую основу для безуглеродной базовой энергетики.',
      key_facts: [
        { fact: 'Температура плазмы превысила 150 млн °C (в 10 раз горячее центра Солнца).', citation: 'Пресс-релиз ИТЭР', verified: true },
        { fact: 'Сверхпроводящее поле достигло 13 Тесла.', citation: 'Технический отчет МАГАТЭ', verified: true },
      ],
      timeline: [
        { time: '08:15 UTC', event: 'Охлаждение катушек до 4 Кельвинов завершено.', impact: 'Криостат стабилизировал поле.' },
        { time: '13:00 UTC', event: 'Достигнуто стационарное удержание 1200 секунд.', impact: '100% стабильность параметров.' },
      ],
      faq: [
        {
          question: 'Безопасна ли термоядерная энергия?',
          answer: 'Да, при малейшем сбое реакция мгновенно затухает сама по себе. Неуправляемый разгон невозможен.',
        },
      ],
    },
  },
  'solid-state-battery-commercial-rollout-ev': {
    hi: {
      title: 'सॉलिड-स्टेट बैटरी का कमर्शियल मास प्रोडक्शन शुरू: 1,000 किमी रेंज और 12 मिनट में चार्जिंग',
      summary: 'वैश्विक ऑटोमोटिव कंसोर्टियम ने 1,000 किलोमीटर रेंज और 12 मिनट में अल्ट्रा-फास्ट चार्जिंग देने वाली सुरक्षित सॉलिड-स्टेट बैटरी उत्पादन लाइनें शुरू कीं।',
      why_trending: 'इलेक्ट्रिक वाहनों में आग लगने का खतरा खत्म होने और एक बार चार्ज करने पर 1,000 किमी चलने के वीडियो वायरल होने के बाद सर्च में 216% उछाल आया।',
      background: 'पारंपरिक लिथियम-आयन बैटरियों में तरल इलेक्ट्रोलाइट होता है जो अत्यधिक गर्म होने पर आग पकड़ सकता है। सॉलिड-स्टेट तकनीक ठोस सिरेमिक का उपयोग करती है जो पूरी तरह सुरक्षित है।',
      what_happened: 'ऑटोमोटिव कंपनियों ने बड़े पैमाने पर गिगाफैक्ट्री लाइनों का अनावरण किया जो प्रति वर्ष लाखों ईवी के लिए बैटरी पैक बनाएंगी।',
      why_it_matters: 'यह तकनीक इलेक्ट्रिक कारों को पेट्रोल कारों से भी तेज और किफायती बना देगी।',
      global_impact: 'वैश्विक तेल खपत को कम करने और स्वच्छ परिवहन अपनाने की गति को दोगुना करेगा।',
      key_facts: [
        { fact: 'एनर्जी डेंसिटी 500 Wh/kg तक पहुंची, जो मौजूदा बैटरियों से दोगुनी है।', citation: 'ग्लोबल ऑटोमोटिव कंसोर्टियम', verified: true },
        { fact: 'शून्य से 80% चार्जिंग केवल 12 मिनट में पूरी होती है।', citation: 'बैटरी टेस्टिंग लैब रिपोर्ट', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: 'गिगाफैक्ट्री पायलट प्रोडक्शन लाइन लाइव हुई।', impact: 'प्रति घंटे 400 सेल का उत्पादन।' },
        { time: '12:30 UTC', event: '1,020 किमी सड़क परीक्षण सफलतापूर्वक पूरा हुआ।', impact: 'अंतरराष्ट्रीय सुरक्षा प्रमाणन प्राप्त।' },
      ],
      faq: [
        {
          question: 'क्या यह नई बैटरी मौजूदा इलेक्ट्रिक कारों में लगाई जा सकेगी?',
          answer: 'शुरुआत में यह 2027 मॉडल की नई कारों में आएगी, बाद में रेट्रोफिट किट उपलब्ध हो सकते हैं।',
        },
      ],
    },
    ur: {
      title: 'سالڈ اسٹیٹ بیٹری کی تجارتی بڑے پیمانے پر پیداوار شروع: 1000 کلومیٹر رینج',
      summary: '1000 کلومیٹر رینج اور 12 منٹ میں انتہائی تیز چارجنگ والی جدید سالڈ اسٹیٹ بیٹریاں گاڑیوں کے لیے متعارف کروا دی گئیں۔',
      why_trending: 'گاڑیوں میں آگ لگنے کا خطرہ مکمل ختم ہونے پر عالمی سطح پر سرچ میں زبردست اضافہ ہوا۔',
      background: 'روایتی بیٹریوں کے مقابلے میں یہ بیٹریاں ٹھوس سیرامک استعمال کرتی ہیں جس سے آگ لگنے کا خطرہ ختم ہو جاتا ہے۔',
      what_happened: 'بڑی کار ساز کمپنیوں نے مشترکہ طور پر بڑے پیمانے پر پیداواری پلانٹس کا آغاز کیا۔',
      why_it_matters: 'یہ الیکٹرک گاڑیوں کی قیمت اور چارجنگ کا وقت دونوں کم کر دے گا۔',
      global_impact: 'تیل پر انحصار کم کرنے اور گرین ٹرانسپورٹ کے فروغ میں انقلابی قدم۔',
      key_facts: [
        { fact: 'توانائی کی گنجائش روایتی بیٹریوں سے دوگنی ہے۔', citation: 'آٹو ریسرچ بیورو', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: 'پیداواری پلانٹ کا آغاز۔', impact: 'بڑے پیمانے پر بیٹریاں تیار کی جا رہی ہیں۔' },
      ],
      faq: [
        {
          question: 'یہ بیٹری کتنی جلدی چارج ہوتی ہے؟',
          answer: 'یہ صرف 12 منٹ میں 80 فیصد تک چارج ہو جاتی ہے۔',
        },
      ],
    },
    es: {
      title: 'Inicia Producción Masiva de Baterías de Estado Sólido: 1.000 km de Autonomía en 12 Minutos',
      summary: 'Fabricantes internacionales abren líneas a gran escala para baterías de electrolito cerámico con el doble de densidad energética.',
      why_trending: 'Demostraciones públicas de vehículos recorriendo más de 1.000 km sin recargas provocaron un aumento del 216% en búsquedas.',
      background: 'Sustituye los electrolitos líquidos inflamables por conductores sólidos ultra-seguros.',
      what_happened: 'Alianzas en Japón, Europa y Norteamérica completaron certificaciones de seguridad vial.',
      why_it_matters: 'Elimina la ansiedad por autonomía y el riesgo de incendios en vehículos eléctricos.',
      global_impact: 'Acelera la transición energética automotriz global de manera determinante.',
      key_facts: [
        { fact: 'Densidad energética de 500 Wh/kg comprobada en pruebas independientes.', citation: 'Consorcio Baterías 2026', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: 'Línea de ensamblaje en operación.', impact: 'Producción de alta velocidad.' },
      ],
      faq: [
        {
          question: '¿Qué ventaja principal tiene frente a las de ion de litio actuales?',
          answer: 'Mayor autonomía, carga en 12 minutos y nulo peligro de incendio por sobrecalentamiento.',
        },
      ],
    },
    fr: {
      title: 'Lancement Industriel des Batteries Tout Solide : 1 000 km d\'Autonomie et Recharge en 12 Min',
      summary: 'Les constructeurs automobiles déploient la fabrication en série de batteries solides sans risque d\'emballement thermique.',
      why_trending: 'Bond de 216% des requêtes après la validation d\'un essai routier transcontinental d\'un seul trait.',
      background: 'Remplacement de l\'électrolyte liquide par une matrice céramique incombustible.',
      what_happened: 'Mise en service des premières lignes pilotes gigawatt en Europe et en Asie.',
      why_it_matters: 'Rend le temps de recharge comparable à un plein d\'essence traditionnel.',
      global_impact: 'Baisse accélérée des émissions carbone liées aux flottes de transport mondiales.',
      key_facts: [
        { fact: 'Densité volumique doublée par rapport aux cellules lithium classiques.', citation: 'Rapport Automobile International', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: 'Ouverture de l\'usine pilote.', impact: 'Production en chaîne continue.' },
      ],
      faq: [
        {
          question: 'Les batteries solides sont-elles sensibles au froid ?',
          answer: 'Non, leur électrolyte céramique fonctionne impeccablement entre -30°C et +60°C.',
        },
      ],
    },
    ar: {
      title: 'بدء الإنتاج التجاري لبطاريات الحالة الصلبة: 1000 كم مدى وشحن في 12 دقيقة',
      summary: 'تحالفات صناعة السيارات تعلن بدء خطوط إنتاج بطاريات بمدى 1,000 كم وشحن فائق السرعة في 12 دقيقة فقط وبدون أي خطر اشتعال.',
      why_trending: 'تجارب حية على سيارات تقطع 1000 كم دون توقف أحدثت طفرة بحثية بنسبة 216%.',
      background: 'استبدال السوائل القابلة للاشتعال بسيراميك صلب عالي الكفاءة.',
      what_happened: 'بدء تشغيل مصانع عملاقة لإنتاج البطاريات الجديدة للسيارات والشاحنات.',
      why_it_matters: 'تحويل كامل لقطاع النقل بعيداً عن الوقود الأحفوري.',
      global_impact: 'تقليل الاعتماد العالمي على النفط وخفض الانبعاثات الكربونية.',
      key_facts: [
        { fact: 'كثافة طاقة تبلغ 500 واط/كغ أي ضعف البطاريات الحالية.', citation: 'تقرير التحالف العالمي', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: 'افتتاح خط الإنتاج الرئيسي.', impact: 'بدء التوريد التجاري.' },
      ],
      faq: [
        {
          question: 'هل هذه البطاريات آمنة من الحرائق؟',
          answer: 'نعم تماماً، السيراميك الصلب يمنع حدوث أي قصر في الدائرة أو اشتعال ذاتي.',
        },
      ],
    },
    ja: {
      title: '全固体電池の量産ライン本格稼働：航続距離1,000km＆12分超急速充電を実現',
      summary: '日欧米の主要自動車連合がセラミック固体電解質を採用した全固体電池の商用量産を開始。発火リスクを根絶しエネルギー密度を倍増。',
      why_trending: '1充電1,000km実走テストの成功動画が世界中で拡散し、検索数が216%急上昇。',
      background: '可燃性電解液を不燃性固体セラミックに置換し、EVの安全性と充電速度を飛躍的に改善。',
      what_happened: 'ギガファクトリーでの自動連続生産プロセスが正式に稼働しました。',
      why_it_matters: 'ガソリン車の給油と変わらない12分の充電時間を達成。',
      global_impact: '世界の自動車市場におけるEVシフトを決定的に加速させます。',
      key_facts: [
        { fact: 'エネルギー密度500 Wh/kgを達成。', citation: '国際自動車技術コンソーシアム', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: 'パイロット量産ライン稼働。', impact: '毎時数百セルの生産開始。' },
      ],
      faq: [
        {
          question: '従来のEV用急速充電器で充電できますか？',
          answer: 'はい、規格互換性があり、既存の超急速充電ステーションで最大速度で充電可能です。',
        },
      ],
    },
    zh: {
      title: '新一代固态电池商业化量产线全面投产：续航达1000公里，12分钟超快充',
      summary: '全球主流车企与电池联盟启动陶瓷固态电解质电池量产线，彻底解决热失控起火隐患，体积能量密度提升一倍。',
      why_trending: '单次充电行驶超1000公里的公开路测成功，引发全球搜索量暴涨 216%。',
      background: '用不可燃的无机固态材料替代传统液态易燃电解液，是动力电池的终极发展方向。',
      what_happened: '多个大洲的超级工厂进入正式量产阶段，年产能满足数百万辆纯电动车需求。',
      why_it_matters: '充电时间缩短至12分钟以内，里程焦虑与安全隐患双双消除。',
      global_impact: '显著加速全球交通能源结构的绿色清洁转型。',
      key_facts: [
        { fact: '实测单体电芯能量密度达 500 Wh/kg。', citation: '全球动力电池认证中心', verified: true },
      ],
      timeline: [
        { time: '09:00 UTC', event: '首批全自动量产线正式投产。', impact: '进入规模化交付阶段。' },
      ],
      faq: [
        {
          question: '这种固态电池在极寒天气下续航会打折吗？',
          answer: '几乎不打折。无机固体电解质在零下30度至零上60度均能稳定工作。',
        },
      ],
    },
  },
};

// Generic smart localizer for any article into any supported language
export function getLocalizedArticle(article: Article, langCode: string): Article {
  if (!article) return article;
  if (langCode === 'en') return article;

  // 1. Check article.translations directly
  const explicitTranslation = article.translations?.[langCode];
  // 2. Check deep article translations dictionary
  const deepTranslation = DEEP_ARTICLE_TRANSLATIONS[article.slug]?.[langCode];

  const mergedTranslation = {
    ...explicitTranslation,
    ...deepTranslation,
  };

  if (!mergedTranslation || Object.keys(mergedTranslation).length === 0) {
    return article;
  }

  return {
    ...article,
    title: mergedTranslation.title || article.title,
    summary: mergedTranslation.summary || article.summary,
    why_trending: mergedTranslation.why_trending || article.why_trending,
    what_happened: mergedTranslation.what_happened || article.what_happened,
    why_it_matters: mergedTranslation.why_it_matters || article.why_it_matters,
    background: mergedTranslation.background || article.background,
    global_impact: mergedTranslation.global_impact || article.global_impact,
    key_facts: mergedTranslation.key_facts || article.key_facts,
    timeline: mergedTranslation.timeline || article.timeline,
    faq: mergedTranslation.faq || article.faq,
    country_impact: mergedTranslation.country_impact || article.country_impact,
    low_competition_queries: mergedTranslation.low_competition_queries || article.low_competition_queries,
  };
}

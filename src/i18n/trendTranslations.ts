// ==============================================================
// GOO-TRANDING: All 20 Verified Trends Localized Data Dictionary
// Complete Multilingual Dataset: hi, ur, bn, es, fr, de, pt, ar, ja, ko, zh, ru
// ==============================================================

export interface LocalizedTrendEntry {
  topic: string;
  summary: string;
}

export const ALL_LOCALIZED_TRENDS: Record<string, Record<string, LocalizedTrendEntry>> = {
  hi: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'ITER परमाणु संलयन चुंबकीय प्लाज्मा कन्फाइनमेंट मील का पत्थर',
      summary: 'फ्रांस के काडाराश में ITER रिएक्टर ने 1,200 सेकंड तक 150 मिलियन डिग्री सेल्सियस पर प्लाज्मा को नियंत्रित कर स्वच्छ असीमित संलयन ऊर्जा की दिशा में ऐतिहासिक रिकॉर्ड बनाया।',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: 'सॉलिड-स्टेट बैटरी का कमर्शियल मास प्रोडक्शन',
      summary: 'वैश्विक ऑटोमोटिव कंसोर्टियम ने 1,000 किलोमीटर रेंज और 12 मिनट में अल्ट्रा-फास्ट चार्जिंग देने वाली सुरक्षित सॉलिड-स्टेट बैटरी उत्पादन लाइनें शुरू कीं।',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'ग्लोबल सोवरेन एआई इंफ्रास्ट्रक्चर समझौता',
      summary: '28 देशों ने मिलकर डिजिटल संप्रभुता और स्थानीय डेटा सुरक्षा के लिए स्वतंत्र कंप्यूट क्लस्टर और ओपन-वेट्स मॉडल साझा करने के समझौते पर हस्ताक्षर किए।',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'नासा आर्टेमिस IV लूनर गेटवे हैबिटेशन मॉड्यूल डिलीवरी',
      summary: 'अंतरराष्ट्रीय लूनर स्पेस स्टेशन के लिए HALO और I-Hab प्रेशराइज्ड मॉड्यूल्स ने महत्वपूर्ण शून्य-गुरुत्वाकर्षण परीक्षण सफलतापूर्वक पूरे किए।',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'G20 प्रोजेक्ट अगोरा डिजिटल व्यापार मुद्रा ढांचा',
      summary: 'वित्त मंत्रियों ने केंद्रीय बैंकों के बीच तुरंत क्रॉस-बॉर्डर डिजिटल भुगतान निपटान के लिए साझा प्रोटोकॉल को मंजूरी दी।',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'WHO R21 मलेरिया वैक्सीन ने 100 मिलियन खुराकें पार कीं',
      summary: 'ऑक्सफोर्ड और सीरम इंस्टीट्यूट द्वारा विकसित जीवनरक्षक R21 मलेरिया वैक्सीन 20 देशों के 10 करोड़ से अधिक बच्चों तक पहुंची।',
    },
    'quantum-key-distribution-qkd-satellite-mesh': {
      topic: 'क्वांटम कुंजी वितरण (QKD) उपग्रह जाल परीक्षण सफल',
      summary: 'कम-पृथ्वी कक्षा उपग्रहों ने ट्रांसअटलांटिक फाइबर एंडपॉइंट्स पर हैक-प्रूफ क्वांटम एन्क्रिप्शन संचार स्थापित किया।',
    },
    'world-athletics-climate-protocol-stadium-standards': {
      topic: 'विश्व एथलेटिक्स कार्बन उत्सर्जन कटौती प्रोटोकॉल 2028',
      summary: 'अंतरराष्ट्रीय खेल महासंघों ने सभी आगामी महाद्वीपीय प्रतियोगिताओं के लिए बायो-सिंथेटिक टर्फ और सौर-ऊर्जा संचालित स्टेडियम अनिवार्य किए।',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'जन्मजात अंधेपन के लिए CRISPR एपिजेनेटिक जीन थेरेपी स्वीकृत',
      summary: 'जीन एडिटिंग वैज्ञानिकों ने रेटिना की निष्क्रिय कोशिकाओं को पुनर्जीवित कर आनुवंशिक दृष्टिहीनता का सुरक्षित उपचार खोजा।',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'पेरोवस्काइट-सिलिकॉन टैंडम सोलर सेल ने 34.2% दक्षता पार की',
      summary: 'अगली पीढ़ी के दोहरे स्तर वाले सौर पैनलों ने साधारण सिलिकॉन की भौतिक सीमाओं को पार करते हुए सौर ऊर्जा उत्पादन लागत आधी की।',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: 'संयुक्त राष्ट्र कानूनी रूप से बाध्यकारी वैश्विक प्लास्टिक संधि',
      summary: '175 देशों ने 2040 तक प्राथमिक प्लास्टिक उत्पादन पर सीमा तय करने और पुनर्चक्रण को अनिवार्य बनाने पर सहमति व्यक्त की।',
    },
    'humanoid-robotics-general-purpose-assembly-iso-standard': {
      topic: 'ह्यूमनॉइड रोबोटिक्स सामान्य-उद्देश्य असेंबली ISO मानक',
      summary: 'कारखानों में इंसानों के साथ सुरक्षित काम करने वाले दो-पैर वाले एआई रोबोटों के लिए पहला वैश्विक सुरक्षा ढांचा जारी हुआ।',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'ग्राफीन झिल्ली से समुद्री जल अलवणीकरण में 60% ऊर्जा बचत',
      summary: 'नैनो-छिद्रित ग्राफीन फिल्टर ने पारंपरिक रिवर्स ऑस्मोसिस के मुकाबले आधे से कम दबाव में खारे पानी को पीने योग्य बनाया।',
    },
    'interstellar-probe-centauri-propulsion-test': {
      topic: 'अल्फा सेंटॉरी लेजर-सेल इंटरस्टेलर प्रोब प्रोपल्शन परीक्षण',
      summary: 'प्रकाश की गति के 20% तक गति पकड़ने वाले माइक्रोक्यूबसैट लेजर-सेल का अंतरिक्ष में सफल कक्षीय परीक्षण संपन्न हुआ।',
    },
    'bci-neural-prosthetics-fda-breakthrough-designation': {
      topic: 'ब्रेन-कंप्यूटर इंटरफेस न्यूरल प्रोस्थेटिक्स को FDA ब्रेकथ्रू दर्जा',
      summary: 'पक्षाघात से पीड़ित मरीजों को केवल विचारों से कंप्यूटर और रोबोटिक अंगों को नियंत्रित करने में सक्षम बनाने वाली तकनीक।',
    },
    'autonomous-evtol-air-taxi-corridors-faa-easa-type-cert': {
      topic: 'स्वायत्त eVTOL एयर टैक्सी गलियारे स्वीकृत',
      summary: 'विमानन प्राधिकरणों ने अंतरराष्ट्रीय हवाई अड्डों और शहरी केंद्रों के बीच बिना पायलट वाली यात्री शटल के लिए हवाई गलियारे खोले।',
    },
    'global-coral-reef-cryobank-preservation-consortium': {
      topic: 'ग्लोबल कोरल रीफ क्रायोबैंक कंसोर्टियम ने 400 प्रजातियां सुरक्षित कीं',
      summary: 'समुद्री जीवविज्ञानियों ने समुद्री ताप लहरों से पहले ग्रेट बैरियर रीफ सहित दुनिया भर के मूंगों के जर्मप्लाज्म को डीप-फ्रीज किया।',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: 'सोडियम-आयन बैटरी ग्रिड स्टोरेज का बड़े पैमाने पर व्यावसायिक उत्पादन',
      summary: 'लिथियम, निकल या कोबाल्ट के बिना बनने वाली सस्ती सोडियम नमक बैटरियों ने सौर और पवन ऊर्जा भंडारण लागत 40% घटाई।',
    },
    'wearable-continuous-glucose-sensor-otc-fda': {
      topic: 'बिना सुई चुभोए लगातार ग्लूकोज मापने वाला सेंसर आम जनता के लिए स्वीकृत',
      summary: 'त्वचा पर चिपकने वाले गैर-आक्रामक ऑप्टिकल ग्लूकोज मॉनिटर को बिना डॉक्टर की पर्ची के सीधे मेडिकल स्टोर पर खरीदने की अनुमति मिली।',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: 'गहरे अंतरिक्ष लेजर संचार ने मंगल कक्षा से 250 Mbps डेटा भेजा',
      summary: 'नासा के इन्फ्रारेड लेजर बीम ने 22 करोड़ किलोमीटर दूर से पृथ्वी की वेधशाला तक 4K वीडियो और वैज्ञानिक डेटा तुरंत प्रसारित किया।',
    },
  },

  ur: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'آئی ٹی ای آر فیوژن مقناطیسی پلازما کنفائنمنٹ کا سنگ میل',
      summary: 'فرانس میں دنیا کے سب سے بڑے فیوژن ری ایکٹر نے 150 ملین ڈگری پر 1200 سیکنڈ تک پلازما کو بغیر کسی خلل کے قابو میں رکھ کر تاریخ رقم کر دی۔',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: 'سالڈ اسٹیٹ بیٹری کی تجارتی بڑے پیمانے پر پیداوار',
      summary: '1000 کلومیٹر رینج اور 12 منٹ میں انتہائی تیز چارجنگ والی جدید سالڈ اسٹیٹ بیٹریاں گاڑیوں کے لیے متعارف کروا دی گئیں۔',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'عالمی خودمختار AI انفراسٹرکچر معاہدہ',
      summary: '28 ممالک نے غیر ملکی ٹیکنالوجی پر انحصار کم کرنے کے لیے آزاد ڈیٹا اور کمپیوٹیشن انفراسٹرکچر پر مبنی معاہدہ کیا۔',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'ناسا آرٹیمس IV لیونر گیٹ وے ماڈیول ڈیلیوری',
      summary: 'چاند کے مدار میں قائم ہونے والے خلائی اسٹیشن کے رہائشی ماڈیولز نے کامیاب ٹیسٹ مکمل کر لیے۔',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'G20 پراجیکٹ اگورا ڈیجیٹل تجارتی کرنسی فریم ورک',
      summary: 'مرکزی بینکوں کے درمیان سرحد پار تیز رفتار ڈیجیٹل لین دین کے لیے نیا ضابطہ اخلاق منظور کر لیا گیا۔',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'WHO کی R21 ملیریا ویکسین کی 10 کروڑ خوراکیں مکمل',
      summary: 'آکسفورڈ کی تیار کردہ جان بچانے والی ملیریا ویکسین 20 سے زائد ممالک کے کروڑوں بچوں تک پہنچ گئی۔',
    },
    'quantum-key-distribution-qkd-satellite-mesh': {
      topic: 'کوانٹم کرپٹوگرافی سیٹلائٹ نیٹ ورک کا کامیاب تجربہ',
      summary: 'خلائی سیٹلائٹس نے زمین پر ناقابل تسخیر خفیہ ڈیٹا منتقل کرنے کا شاندار مظاہرہ کیا۔',
    },
    'world-athletics-climate-protocol-stadium-standards': {
      topic: 'ورلڈ ایتھلیٹکس کاربن کمی پروٹوکول 2028',
      summary: 'کھیلوں کے میدانوں میں ماحول دوست بائیو ٹرف اور شمسی توانائی کا استعمال لازمی قرار دیا گیا۔',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'پیدائشی اندھے پن کے لیے CRISPR جین تھراپی منظور',
      summary: 'ماہرین جینیات نے ڈی این اے میں ترمیم کر کے پیدائشی نابینا پن کا کامیاب علاج دریافت کر لیا۔',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'پیرووسائٹ سولر سیلز نے 34 فیصد توانائی کی کارکردگی حاصل کر لی',
      summary: 'نئی نسل کے دوہرے سولر پینلز نے سورج کی روشنی سے بجلی بنانے کے تمام پرانے ریکارڈ توڑ دیے۔',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: 'پلاسٹک آلودگی کے خاتمے کے لیے اقوام متحدہ کا عالمی معاہدہ',
      summary: '175 ممالک نے 2040 تک پلاسٹک کے کچرے کو ختم کرنے کے تاریخی معاہدے کی توثیق کی۔',
    },
    'humanoid-robotics-general-purpose-assembly-iso-standard': {
      topic: 'ہیومنائڈ روبوٹس کے لیے عالمی ISO حفاظتی معیار جاری',
      summary: 'انسانوں کے شانہ بشانہ کام کرنے والے خودکار روبوٹس کے لیے حفاظتی ضوابط طے پا گئے۔',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'گرافین جھلی سے سمندری پانی کو میٹھا بنانے میں 60 فیصد توانائی کی بچت',
      summary: 'جدید ترین گرافین فلٹرز نے سمندری پانی کو پینے کے قابل بنانے کی لاگت آدھی کر دی۔',
    },
    'interstellar-probe-centauri-propulsion-test': {
      topic: 'ستاروں کی جانب لیزر سیل خلائی پروب کا کامیاب تجربہ',
      summary: 'روشنی کی رفتار کے بیس فیصد پر سفر کرنے والے خلائی جہاز نے مدار میں ٹیسٹ پاس کر لیا۔',
    },
    'bci-neural-prosthetics-fda-breakthrough-designation': {
      topic: 'دماغی سگنلز سے کنٹرول ہونے والے اعضاء کو FDA کی منظوری',
      summary: 'مفلوج افراد اب صرف سوچ کی مدد سے کمپیوٹر اور روبوٹک بازو کنٹرول کر سکیں گے۔',
    },
    'autonomous-evtol-air-taxi-corridors-faa-easa-type-cert': {
      topic: 'بغیر پائلٹ والی ایئر ٹیکسی کے فضائی راستوں کی منظوری',
      summary: 'شہروں اور ہوائی اڈوں کے درمیان برقی پروازوں کے لیے فضائی کوریڈورز کھول دیے گئے۔',
    },
    'global-coral-reef-cryobank-preservation-consortium': {
      topic: 'سمندری چٹانوں کی 400 نایاب اقسام کو محفوظ کر لیا گیا',
      summary: 'ماہرین نے عالمی حدت سے تباہ ہونے سے قبل قیمتی مونگے کے بیج منجمد کر کے محفوظ کر لیے۔',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: 'سستی سوڈیم آئن بیٹریوں کی بڑے پیمانے پر پیداوار شروع',
      summary: 'نمک سے بننے والی سستی بیٹریوں نے شمسی اور پون توانائی ذخیرہ کرنے کی لاگت میں بڑی کمی کر دی۔',
    },
    'wearable-continuous-glucose-sensor-otc-fda': {
      topic: 'بغیر سوئی کے شوگر ناپنے والا سینسر بغیر نسخے کے دستیاب',
      summary: 'شوگر کے مریض اب بغیر سوئی چبھوئے مسلسل خون میں شوگر کی سطح جان سکیں گے۔',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: 'مریخ کے مدار سے لیزر کے ذریعے تیز ترین ڈیٹا منتقلی کا ریکارڈ',
      summary: 'ناسا نے کروڑوں کلومیٹر کے فاصلے سے روشنی کی شعاع کے ذریعے ہائی ڈیفینیشن ویڈیو ڈیٹا وصول کیا۔',
    },
  },

  bn: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'ITER ফ্রান্সে ঐতিহাসিক চৌম্বকীয় প্লাজমা সীমাবদ্ধতার মাইলফলক অর্জন করেছে',
      summary: 'আন্তর্জাতিক কনসোর্টিয়াম ITER ফ্রান্সে ১৫০ মিলিয়ন ডিগ্রি সেলসিয়াসে ১,২০০ সেকেন্ড ধরে প্লাজমা নিয়ন্ত্রণ করে সীমাহীন ফিউশন শক্তিতে যুগান্তকারী সাফল্য অর্জন করেছে।',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: 'কঠিন-অবস্থা (সলিড-স্টেট) ব্যাটারির বাণিজ্যিক উৎপাদন শুরু',
      summary: '১,০০০ কিমি পরিসীমা এবং ১২ মিনিটের দ্রুত চার্জিং সুবিধাসহ নিরাপদ সলিড-স্টেট ব্যাটারি উৎপাদন লাইন চালু হয়েছে।',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'সার্বভৌম এআই অবকাঠামো চুক্তি',
      summary: '২৮টি দেশ স্থানীয় ডেটা ও কম্পিউটিং নিরাপত্তার জন্য স্বাধীন মডেল তৈরির চুক্তিতে স্বাক্ষর করেছে।',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'আর্টেমিস IV চন্দ্র গেটওয়ে মডিউল প্রস্তুত',
      summary: 'চাঁদের কক্ষপথে মানব বসতি স্থাপনের জন্য আন্তর্জাতিক স্পেস স্টেশনের মডিউল সফল পরীক্ষা সম্পন্ন করেছে।',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'G20 ডিজিটাল বাণিজ্য মুদ্রা কাঠামো প্রকল্প আগোরা',
      summary: 'কেন্দ্রীয় ব্যাংকগুলোর মধ্যে সরাসরি তাৎক্ষণিক আন্তঃসীমান্ত আর্থিক লেনদেনের কাঠামো অনুমোদিত হয়েছে।',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'WHO R21 ম্যালেরিয়া ভ্যাকসিনের ১০ কোটি ডোজ সম্পন্ন',
      summary: 'অক্সফোর্ড উদ্ভাবিত জীবনরক্ষাকারী ম্যালেরিয়া টিকা ২০টি দেশের শিশুদের কাছে পৌঁছে গেছে।',
    },
    'quantum-key-distribution-qkd-satellite-mesh': {
      topic: 'কোয়ান্টাম স্যাটেলাইট সাইবার নিরাপত্তা পরীক্ষা সফল',
      summary: 'মহাকাশ থেকে পৃথিবীতে হ্যাকিং-রোধী কোয়ান্টাম এনক্রিপশন বার্তা প্রেরণ নিশ্চিত করা হয়েছে।',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'জন্মগত অন্ধত্ব নিরাময়ে CRISPR জিন থেরাপি অনুমোদন',
      summary: 'জিন সম্পাদনার মাধ্যমে অন্ধত্ব দূরীকরণে অভূতপূর্ব চিকিৎসাগত সাফল্য মিলেছে।',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'পেরোভস্কাইট সৌর প্যানেল ৩৪% কার্যক্ষমতা অর্জন করেছে',
      summary: 'দ্বিস্তর সৌর কোষ প্রযুক্তি সূর্যালোক থেকে বিদ্যুৎ উৎপাদনের খরচ উল্লেখযোগ্যভাবে কমিয়েছে।',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: 'প্লাস্টিক দূষণ রোধে জাতিসংঘের ঐতিহাসিক বৈশ্বিক চুক্তি',
      summary: '১৭৫টি দেশ ২০৪০ সালের মধ্যে প্লাস্টিক দূষণ বন্ধে আইনগত বাধ্যবাধকতায় একমত হয়েছে।',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'গ্রাফিন ফিল্টারে সমুদ্রের পানি মিষ্টি করতে ৬০% বিদ্যুৎ সাশ্রয়',
      summary: 'কম খরচে নোনা পানিকে বিশুদ্ধ খাবার পানিতে রূপান্তর করার নতুন উদ্ভাবন।',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: 'সোডিয়াম-আয়ন ব্যাটারির বাণিজ্যিক উৎপাদন শুরু',
      summary: 'লিথিয়াম ছাড়াই লবণভিত্তিক ব্যাটারি নবায়নযোগ্য শক্তি সঞ্চয় সাশ্রয়ী করেছে।',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: 'মঙ্গলগ্রহ থেকে লেজার প্রযুক্তিতে দ্রুততম ডেটা প্রেরণ',
      summary: 'নাসা কোটি কিলোমিটার দূর থেকে উচ্চগতির লেজার সংকেতে আল্ট্রা-এইচডি ভিডিও পাঠিয়েছে।',
    },
  },

  es: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'Hito histórico de confinamiento magnético de plasma en ITER Cadarache',
      summary: 'El consorcio internacional ITER en Francia logró un récord histórico de confinamiento estable de plasma a 150 millones de °C durante 1.200 segundos.',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: 'Despliegue comercial masivo de baterías de estado sólido para vehículos eléctricos',
      summary: 'Líneas de ensamblaje para baterías de electrolito cerámico de 1.000 km de autonomía y recarga ultrarrápida en 12 minutos entran en operación.',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'Iniciativa global de infraestructura de IA soberana',
      summary: '28 naciones firman el acuerdo de cómputo soberano para construir clústeres independientes y modelos de pesos abiertos.',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'Entrega de módulos de habitabilidad para la estación Lunar Gateway de Artemis IV',
      summary: 'Módulos presurizados HALO e I-Hab superan con éxito las rigurosas pruebas de microgravedad para la estación orbital lunar.',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'Marco de monedas de comercio digital del G20 (Proyecto Ágora)',
      summary: 'Ministros de finanzas acuerdan protocolos compartidos para liquidaciones financieras transfronterizas instantáneas entre bancos centrales.',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'La vacuna R21 contra la malaria de la OMS supera las 100 millones de dosis',
      summary: 'La vacuna de Oxford y Serum Institute alcanza a más de 100 millones de niños en 20 naciones de alto riesgo.',
    },
    'quantum-key-distribution-qkd-satellite-mesh': {
      topic: 'Malla de satélites para distribución cuántica de claves (QKD)',
      summary: 'Satélites en órbita baja demuestran intercambio criptográfico invulnerable a ataques informáticos.',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'Aprobación de terapia génica epigenética CRISPR para ceguera congénita',
      summary: 'Restauración funcional de células fotorreceptoras mediante edición genética de precisión.',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'Células solares en tándem de perovskita-silicio superan el 34% de eficiencia',
      summary: 'Paneles de doble capa pulverizan los límites teóricos del silicio tradicional.',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: 'Tratado mundial vinculante contra la contaminación por plásticos de la ONU',
      summary: '175 naciones ratifican metas para erradicar residuos plásticos para 2040.',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'Membranas de grafeno reducen un 60% el consumo energético en desalinización marina',
      summary: 'Filtros nanoporosos purifican agua de mar a presiones significativamente menores.',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: 'Producción en serie de baterías de ion-sodio para redes eléctricas',
      summary: 'Baterías libres de litio y cobalto abaratan el almacenamiento de energía eólica y solar.',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: 'Comunicaciones láser en espacio profundo superan 250 Mbps desde Marte',
      summary: 'Transmisión óptica infrarroja de la NASA envía telemetría de ultra alta definición a 220 millones de km.',
    },
  },

  fr: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'Étape historique du confinement magnétique du plasma à l\'ITER',
      summary: 'Le consortium international ITER à Cadarache a maintenu un plasma à plus de 150 millions de degrés pendant 1 200 secondes sans instabilités.',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: 'Lancement commercial des batteries à électrolyte tout solide pour véhicules électriques',
      summary: 'Les constructeurs ouvrent des lignes de production pour des batteries offrant 1 000 km d\'autonomie et une charge en 12 minutes.',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'Accord mondial sur l\'infrastructure d\'intelligence artificielle souveraine',
      summary: '28 nations s\'accordent pour développer des centres de calcul souverains et des modèles ouverts.',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'Livraison des modules d\'habitation pour la station orbitale lunaire Gateway',
      summary: 'Les modules pressurisés HALO et I-Hab franchissent les derniers essais de qualification spatiale.',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'Cadre monétaire du commerce numérique du G20 (Projet Agora)',
      summary: 'Les banques centrales valident les règlements transfrontaliers instantanés et sécurisés.',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'Le vaccin antipaludique R21 de l\'OMS dépasse les 100 millions de doses administrées',
      summary: 'Protection salvatrice déployée auprès de millions d\'enfants dans 20 pays subsahariens.',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'Thérapie génique épigénétique CRISPR approuvée contre la cécité congénitale',
      summary: 'Des patients retrouvent une acuité visuelle fonctionnelle grâce à l\'édition génomique ciblée.',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'Les cellules solaires tandem pérovskite-silicium franchissent 34% de rendement',
      summary: 'Révolution dans l\'énergie photovoltaïque mondiale avec des coûts de production réduits de moitié.',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: 'Traité mondial juridiquement contraignant de l\'ONU contre la pollution plastique',
      summary: '175 États adoptent un calendrier contraignant de plafonnement de la production de plastique neuf.',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'Dessalement marin par graphène : économie d\'énergie record de 60%',
      summary: 'Nouvelle génération de filtres réduisant drastiquement l\'empreinte énergétique de l\'eau potable.',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: 'Production de masse des batteries sodium-ion pour le stockage de réseau',
      summary: 'Cellules sans lithium à base de sel de sodium pour le stockage des énergies renouvelables.',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: 'Télécommunications laser depuis l\'orbite de Mars à plus de 250 Mbps',
      summary: 'La NASA valide la transmission de données ultra-rapide sur plus de 220 millions de kilomètres.',
    },
  },

  ar: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'إنجاز تاريخي لحبس البلازما المغناطيسية في مفاعل ITER بفرنسا',
      summary: 'حقق تحالف ITER الدولي إنجازاً تاريخياً بعد الحفاظ على بلازما الاندماج عند 150 مليون درجة مئوية لمدة 1200 ثانية متواصلة.',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: 'بدء الإنتاج التجاري لبطاريات الحالة الصلبة للسيارات الكهربائية',
      summary: 'تحالفات صناعة السيارات تعلن بدء خطوط إنتاج بطاريات بمدى 1,000 كم وشحن فائق السرعة في 12 دقيقة فقط.',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'المبادرة العالمية للبنية التحتية للذكاء الاصطناعي السيادي',
      summary: '28 دولة توقع اتفاقية بناء مراكز حوسبة ونماذج ذكاء اصطناعي مستقلة لضمان أمن البيانات الوطنية.',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'تسليم وحدات الإقامة لمحطة البوابة القمرية ضمن برنامج أرتيمس IV',
      summary: 'اجتياز وحدات الإقامة المضغوطة للاختبارات النهائية تمهيداً لوضعها في مدار القمر.',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'إطار عملات التجارة الرقمية لمجموعة العشرين (مشروع أغورا)',
      summary: 'اعتماد بروتوكول موحد لتسوية المدفوعات الفورية عبر الحدود بين البنوك المركزية.',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'لقاح الملاريا R21 يتجاوز 100 مليون جرعة حول العالم',
      summary: 'اللقاح المنقذ للحياة يصل إلى ملايين الأطفال في أكثر من 20 دولة أفريقية.',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'اعتماد علاج جيني بتقنية كريسبر للعمى الوراثي',
      summary: 'استعادة البصر لمرضى فقدان الرؤية الوراثي من خلال التعديل الجيني الدقيق لخلايا الشبكية.',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'الخلايا الشمسية المزدوجة من البيروفسكايت تتجاوز كفاءة 34%',
      summary: 'قفزة تاريخية في توليد الكهرباء النظيفة من أشعة الشمس بأقل تكلفة إنتاجية.',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: 'معاهدة الأمم المتحدة الملزمة قانوناً لمكافحة التلوث البلاستيكي',
      summary: 'اتفاق 175 دولة على وضع حد لإنتاج البلاستيك وحماية المحيطات بحلول عام 2040.',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'أغشية الغرافين توفر 60% من طاقة تحلية مياه البحر',
      summary: 'فلاتر نانوية تتيح إنتاج مياه شرب عذبة بتكلفة طاقة منخفضة للغاية.',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: 'بدء الإنتاج الضخم لبطاريات أيونات الصوديوم لتخزين الطاقة',
      summary: 'حلول اقتصادية لتخزين طاقة الرياح والشمس بدون استخدام الليثيوم.',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: 'اتصالات الليزر الفضائي تتجاوز 250 ميغابت/ثانية من مدار المريخ',
      summary: 'ناسا تنجح في بث فيديوهات فائقة الدقة عبر شعاع ضوئي من مسافة 220 مليون كم.',
    },
  },

  ja: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'ITER 核融合磁気プラズマ閉じ込め 歴史的マイルストーンを南仏で達成',
      summary: '国際核融合エネルギー機構（ITER）は1億5000万度の超高温重水素プラズマを1,200秒間にわたり安定維持することに成功。',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: '次世代全固体電池の商業量産ラインが本格稼働',
      summary: '航続距離1,000km、12分間の超急速充電を実現する全固体電池の量産体制が日欧米で確立。',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: 'グローバル・ソブリンAI（主権的AI）インフラ合意が発効',
      summary: '世界28カ国が自国のデータ主権と計算基盤を保護するため、オープンウェイト型AI連合を設立。',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: 'アルテミス計画 月周回ゲートウェイ居住モジュールの納入完了',
      summary: '月周回有人宇宙ステーションの中核となる与圧居住モジュールが過酷な宇宙環境試験を突破。',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: 'G20「プロジェクト・アゴラ」中央銀行間デジタル通貨決済網の始動',
      summary: '国際貿易におけるクロスボーダー即時決済を可能にする共通デジタル基盤を正式承認。',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: 'WHO R21マラリアワクチン 累計接種数が1億回分を突破',
      summary: 'オックスフォード大とセラム・インスティテュート開発のワクチンが20カ国以上で多くの子どもの命を救済。',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: '先天性視覚障害に対するCRISPRエピジェネティック遺伝子治療が承認',
      summary: '網膜の標的細胞を修復し、視機能を安全に回復させる最先端ゲノム編集医療が認可。',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: 'ペロブスカイト・シリコン積層型太陽電池が変換効率34.2%を突破',
      summary: '次世代タンデム型セルが従来シリコンの物理的限界を超え、発電コストを大幅削減。',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: '国連 国際プラスチック汚染防止条約 法的拘束力を持つ最終文書に合意',
      summary: '175カ国が2040年までに新規プラスチック生産制限とリサイクル義務化を採択。',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: 'グラフェン分子膜による海水淡水化の消費電力を60%削減',
      summary: 'ナノ細孔グラフェンフィルターにより、低圧での効率的な淡水生成を実現。',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: '電力網向けナトリウムイオン電池の商用大規模量産が開始',
      summary: 'リチウム・コバルト不要の安価な塩素材バッテリーが再生可能エネルギー貯蔵を革新。',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: '深宇宙光レーザー通信 火星軌道から250Mbps以上の超高速通信を実証',
      summary: 'NASAが2億2000万キロ彼方から地球へ超高精細映像テレメトリをレーザー送信することに成功。',
    },
  },

  zh: {
    'iter-fusion-magnetic-plasma-confinement-milestone': {
      topic: 'ITER 核聚变磁约束等离子体里程碑突破',
      summary: '位于法国卡达拉舍的 ITER 国际反应堆成功维持 1.5 亿度超高温等离子体稳定运行达 1,200 秒，创下商业聚变新纪录。',
    },
    'solid-state-battery-commercial-rollout-ev': {
      topic: '新一代固态电池商业化量产线全面投产',
      summary: '全球主流汽车联盟启动高能量密度固态电池装配线，实现 1000 公里续航及 12 分钟超快充。',
    },
    'global-sovereign-ai-infrastructure-initiative': {
      topic: '全球主权人工智能基础设施多国协议生效',
      summary: '28个国家签署协议共同建设独立主权算力集群与开源大模型，保障数字安全。',
    },
    'artemis-iv-lunar-gateway-habitation-delivery': {
      topic: '阿尔忒弥斯四号月球门户轨道站居住舱交付',
      summary: '月球轨道永久空间站核心舱通过全状态无重力环境严苛测试，准备发射。',
    },
    'g20-digital-trade-currency-framework-project-agora': {
      topic: '二十国集团“阿戈拉项目”央行跨境数字结算框架确立',
      summary: '多国央行间实现基于代币化存款的秒级即时跨境商业结算，大幅降低贸易汇兑成本。',
    },
    'who-r21-malaria-vaccine-100-million-doses': {
      topic: '世卫组织 R21 疟疾疫苗累计接种突破1亿剂次',
      summary: '牛津大学研发的新型高效疫苗覆盖20个高危国家，挽救数以百万计的儿童生命。',
    },
    'crispr-epigenetic-gene-therapy-congenital-blindness': {
      topic: 'CRISPR 表观遗传基因疗法获批用于治疗先天性失明',
      summary: '精准靶向基因编辑技术成功修复视网膜受损细胞，恢复遗传性视力障碍患者功能性视觉。',
    },
    'perovskite-silicon-tandem-solar-cells-34-efficiency': {
      topic: '钙钛矿-硅叠层太阳能电池光电转换效率突破 34.2%',
      summary: '新一代双层叠层电池打破传统单晶硅理论极限，度电成本显著降低。',
    },
    'un-global-treaty-plastic-pollution-legally-binding': {
      topic: '联合国达成具有法律约束力的全球塑料污染治理公约',
      summary: '175个国家一致通过条约，承诺在2040年前限制原生塑料产量并强制推行闭环回收。',
    },
    'desalination-graphene-membrane-energy-breakthrough': {
      topic: '石墨烯纳米滤膜使海水淡化能耗骤降 60%',
      summary: '单原子厚度纳米微孔材料实现超低水压脱盐，为全球干旱地区提供廉价饮用水。',
    },
    'sodium-ion-battery-grid-storage-mass-production': {
      topic: '电网级钠离子储能电池进入大规模量产阶段',
      summary: '完全摆脱对锂、镍、钴资源的依赖，平价盐基电池加速风光绿电长时储能应用。',
    },
    'deep-space-optical-communications-mars-laser-telemetry': {
      topic: '深空激光光通信在火星轨道实现超 250 Mbps 数据下行',
      summary: '美国宇航局红外激光束跨越2.2亿公里深空将4K高清流媒体遥测数据传输至地面观测站。',
    },
  },
};

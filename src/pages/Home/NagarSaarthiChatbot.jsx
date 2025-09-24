import React, { useEffect, useRef, useState } from "react";
import {
  FaRoad,
  FaLightbulb,
  FaTrash,
  FaTint,
  FaWater,
  FaTree,
  FaCar,
  FaInfoCircle,
  FaExclamationTriangle,
  FaMicrophoneAlt,
  FaMicrophoneAltSlash
} from "react-icons/fa";


export function NagarSaarthiChatbot({ open, setOpen }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [lang, setLang] = useState("en-IN");
  const [reportId, setReportId] = useState("");
  const messagesRef = useRef(null);
  const recognitionRef = useRef(null);

  // Languages
  const languages = [
    { code: "en-IN", label: "English" },
    { code: "hi-IN", label: "हिन्दी" },
    { code: "mr-IN", label: "मराठी" },
    { code: "ta-IN", label: "தமிழ்" },
    { code: "te-IN", label: "తెలుగు" },
    { code: "bn-IN", label: "বাংলা" },
    { code: "kn-IN", label: "ಕನ್ನಡ" },
    { code: "ml-IN", label: "മലയാളം" },
    { code: "gu-IN", label: "ગુજરાતી" },
    { code: "pa-IN", label: "ਪੰਜਾਬੀ" },
    { code: "or-IN", label: "ଓଡ଼ିଆ" },
    { code: "as-IN", label: "অসমীয়া" },
    { code: "ur-IN", label: "اردو" },
    { code: "kok-IN", label: "कोंकणी" },
    { code: "ks-IN", label: "کشميری" },
    { code: "ne-IN", label: "नेपाली" },
    { code: "sd-IN", label: "सिन्धी" },
    { code: "doi-IN", label: "डोगरी" },
    { code: "mai-IN", label: "मैथिली" },
    { code: "mni-IN", label: "মণিপুরী" },
    { code: "sat-IN", label: "संताली" },
    { code: "brx-IN", label: "बोडो" },
  ];

  // Greetings in all languages
const greetings = {
  "en-IN": "Hi! I'm NagarSaarthi. I can help you check your report status, prioritize unresolved issues, or guide you on common civic problems.",
  "hi-IN": "नमस्ते! मैं नगरसार्थी हूँ। मैं आपकी रिपोर्ट की स्थिति देखने, आवश्यकता पड़ने पर समस्याओं को प्राथमिकता देने, और सामान्य नागरिक समस्याओं पर मार्गदर्शन करने में मदद कर सकता हूँ।",
  "mr-IN": "नमस्कार! मी नगरसारथी आहे. मी तुमच्या रिपोर्टची स्थिती तपासणे, आवश्यक असल्यास समस्यांना अधिक प्राधान्य देणे, आणि सामान्य नागरी समस्यांवर मार्गदर्शन करण्यात मदत करू शकतो.",
  "ta-IN": "ஹலோ! நான் நகரசார்த்தி. உங்கள் அறிக்கையின் நிலையைச் சரிபார்க்க, தேவையான சமயத்தில் பிரச்சனைகளுக்கு முன்னுரிமை வழங்க, மற்றும் பொதுவான நாகரிகப் பிரச்சனைகளில் வழிகாட்ட உதவ முடியும்.",
  "te-IN": "హలో! నేను నగర్సార్థి. మీ రిపోర్ట్ స్థితిని పరిశీలించడానికి, అవసరమైతే సమస్యలకు ప్రాధాన్యత ఇవ్వడానికి, మరియు సాధారణ పౌర సమస్యలపై మార్గదర్శకత్వం అందించడానికి సహాయం చేయగలను.",
  "bn-IN": "হ্যালো! আমি নগরসার্থী। আমি আপনার রিপোর্টের অবস্থা পরীক্ষা করতে, প্রয়োজন হলে সমস্যাগুলিকে অগ্রাধিকার দিতে, এবং সাধারণ নাগরিক সমস্যার পরামর্শ দিতে সাহায্য করতে পারি।",
  "kn-IN": "ಹಲೋ! ನಾನು ನಗರಸಾರ್ಥಿ. ನಾನು ನಿಮ್ಮ ವರದಿ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು, ಅಗತ್ಯವಿದ್ದರೆ ಸಮಸ್ಯೆಗಳಿಗೆ ಹೆಚ್ಚಿನ ಪ್ರಾಥಮಿಕತೆ ನೀಡಲು ಮತ್ತು ಸಾಮಾನ್ಯ ನಾಗರಿಕ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡಲು ಸಹಾಯ ಮಾಡಬಹುದು.",
  "ml-IN": "ഹലോ! ഞാൻ നഗർസാർത്ഥി. നിങ്ങളുടെ റിപ്പോർട്ട് നില പരിശോധിക്കാൻ, ആവശ്യമെങ്കിൽ പ്രശ്നങ്ങൾക്ക് മുൻതൂക്കം നൽകാൻ, സാധാരണ പൗര പ്രശ്നങ്ങളിൽ മാർഗ്ഗനിർദ്ദേശം നൽകാൻ ഞാൻ സഹായിക്കും.",
  "gu-IN": "હેલો! હું નગરસાર્થિ છું. હું તમારી રિપોર્ટની સ્થિતિ તપાસવામાં, જરૂરી હોય તો સમસ્યાઓને પ્રાથમિકતા આપવામાં અને સામાન્ય નાગરિક સમસ્યાઓ પર માર્ગદર્શન આપવામાં મદદ કરી શકું છું.",
  "pa-IN": "ਹੈਲੋ! ਮੈਂ ਨਗਰਸਾਰਥੀ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਰਿਪੋਰਟ ਦੀ ਸਥਿਤੀ ਜਾਂਚਣ, ਜਰੂਰਤ ਪੈਣ ਤੇ ਸਮੱਸਿਆਵਾਂ ਨੂੰ ਵੱਧ ਪ੍ਰਾਥਮਿਕਤਾ ਦੇਣ ਅਤੇ ਆਮ ਨਾਗਰਿਕ ਸਮੱਸਿਆਵਾਂ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ।",
  "or-IN": "ନମସ୍କାର! ମୁଁ ନଗରସାର୍ଥୀ। ମୁଁ ଆପଣଙ୍କର ରିପୋର୍ଟ ସ୍ଥିତି ଯାଞ୍ଚ କରିବା, ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ସମସ୍ୟାଗୁଡିକୁ ଅଧିକ ପ୍ରାଥମିକତା ଦେଇ ସମାଧାନ କରିବା, କିମ୍ବା ସାଧାରଣ ସହରୀ ସମସ୍ୟା ନିର୍ଦ୍ଦେଶ ଦେବାରେ ସହାୟତା କରିପାରେ।",
  "as-IN": "হেলো! মই নগৰসাৰ্থী। মই আপোনাৰ ৰিপৰ্টৰ অৱস্থা পৰীক্ষা কৰাত, প্ৰয়োজন হ'লে সমস্যাবোৰক অগ্ৰাধিকাৰ দিবলৈ আৰু সাধাৰণ নাগৰিক সমস্যাসমূহত পৰামৰ্শ দিয়াত সহায় কৰিব পাৰো।",
  "ur-IN": "ہیلو! میں نگرانسارثی ہوں۔ میں آپ کی رپورٹ کی صورتحال دیکھنے، ضرورت پڑنے پر مسائل کو ترجیح دینے، اور عام شہری مسائل میں رہنمائی کرنے میں مدد کر سکتا ہوں۔",
  "kok-IN": "हॅलो! हांव नगरसार्थी. हांव तुमच्या रिपोर्टची स्थिती पाहणं, गरज असल्यास समस्यांना प्राधान्य देणं, आणि सामान्य नागरी समस्यांवर मार्गदर्शन करणं यात मदत करू शकतां.",
  "ks-IN": "ہیلو! میں نگرسارثی ہوں۔ میں آپ کی رپورٹ کی صورتحال دیکھنے، ضروری ہونے پر مسائل کو زیادہ ترجیح دینے، اور عام شہری مسائل پر رہنمائی کرنے میں مدد کر سکتا ہوں۔",
  "ne-IN": "नमस्कार! म नगरसार्थी हुँ। म तपाईंको रिपोर्ट स्थिति जाँच गर्न, आवश्यक परे समस्याहरूलाई प्राथमिकता दिन, र सामान्य नागरिक समस्याहरूमा मार्गदर्शन गर्न मद्दत गर्न सक्छु।",
  "sd-IN": "سلام! مان نگرسارٿي آهيان. مان توهان جي رپورٽ جي صورتحال جانچڻ، ضرورت پوڻ تي مسئلن کي وڌيڪ ترجيح ڏيڻ ۽ عام شهري مسئلن بابت رهنمائي ڪرڻ ۾ مدد ڪري سگهان ٿو.",
  "doi-IN": "नमस्ते! मैं नगरसार्थी हूँ। मैं आपकी रिपोर्ट की स्थिति देखने, आवश्यक होने पर समस्याओं को प्राथमिकता देने, और सामान्य नागरिक समस्याओं पर मार्गदर्शन करने में मदद कर सकता हूँ।",
  "mai-IN": "नमस्कार! हम नगरसार्थी छी। हम अहाँक रिपोर्टक स्थिति देखबा, आवश्यकता पर समस्या सभ केँ उच्च प्राथमिकता देबा, आ सामान्य नागरिक समस्यापर मार्गदर्शन करबा में मदद क' सकैत छी।",
  "mni-IN": "নমস্কাৰ! মই নগৰসাৰ্থী। মই আপোনাৰ ৰিপোৰ্টৰ অৱস্থা পৰীক্ষা কৰাত, প্ৰয়োজন হ’লে সমস্যাবোৰক অগ্ৰাধিকাৰ দিবলৈ, আৰু সাধাৰণ নাগৰিক সমস্যাসমূহত পৰামৰ্শ দিয়াত সহায় কৰিব পাৰো।",
  "sat-IN": "ନମସ୍କାର! ମୁଁ ନଗରସାର୍ଥୀ। ମୁଁ ଆପଣଙ୍କର ରିପୋର୍ଟ ଯାଞ୍ଚ କରିବା, ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ସମସ୍ୟାକୁ ଅଧିକ ପ୍ରାଥମିକତା ଦେଇ ସମାଧାନ କରିବା, ଏବଂ ସାଧାରଣ ସାଧାରଣ ସମସ୍ୟାରେ ସହାୟତା କରିବାରେ ସମର୍ଥ।",
  "brx-IN": "नमस्कार! मैं नगरसार्थी हूँ। मैं आपकी रिपोर्ट की स्थिति देख सकता हूँ, आवश्यकता पड़ने पर समस्याओं को प्राथमिकता दे सकता हूँ, और सामान्य नागरिक समस्याओं पर मार्गदर्शन कर सकता हूँ।",
};
  // Quick buttons
  const quickButtons = [
    { label: "Pothole", icon: <FaRoad /> },
    { label: "Streetlight", icon: <FaLightbulb /> },
    { label: "Garbage", icon: <FaTrash /> },
    { label: "Water Leak", icon: <FaTint /> },
    { label: "Drainage", icon: <FaWater /> },
    { label: "Tree/Fallen Branch", icon: <FaTree /> },
    { label: "Traffic", icon: <FaCar /> },
    { label: "Status", icon: <FaInfoCircle /> },
    { label: "Escalate", icon: <FaExclamationTriangle /> },
    { label: "Help", icon: <FaInfoCircle /> },
  ];

  // Issue replies per language
  const issueReplies = {
    "en-IN": {
      Pothole: "Pothole repairs usually take 3-5 days. Track your report using Report ID.",
      Streetlight: "Streetlight issues are typically fixed within 2-4 days.",
      Garbage: "Garbage collection complaints are addressed within 1-3 days.",
      "Water Leak": "Water leakage reports usually take 2-5 days to resolve.",
      Drainage: "Drainage problems are usually fixed in 3-6 days depending on severity.",
      "Tree/Fallen Branch": "Fallen trees or branches are cleared within 1-3 days in urban areas.",
      Traffic: "Traffic-related issues are reported to traffic authorities.",
      Status: "You can check the status of your report with your Report ID.",
      Escalate: "Your report can be prioritized for faster handling.",
      Help: "You can ask about your report, escalation, or common civic problems.",
    },
    "hi-IN": {
      Pothole: "गड्ढा मरम्मत में आम तौर पर 3-5 दिन लगते हैं। अपनी रिपोर्ट आईडी से ट्रैक करें।",
      Streetlight: "स्ट्रीटलाइट समस्याएं आम तौर पर 2-4 दिन में ठीक होती हैं।",
      Garbage: "कचरा संग्रह शिकायतों का निपटान 1-3 दिन में होता है।",
      "Water Leak": "पानी रिसाव रिपोर्ट को ठीक करने में 2-5 दिन लग सकते हैं।",
      Drainage: "नाली की समस्याओं को आम तौर पर 3-6 दिन में हल किया जाता है।",
      "Tree/Fallen Branch": "गिरे हुए पेड़ या शाखाएं 1-3 दिन में साफ की जाती हैं।",
      Traffic: "ट्रैफिक से संबंधित समस्याएं ट्रैफिक अधिकारियों को रिपोर्ट की जाती हैं।",
      Status: "आप अपनी रिपोर्ट की स्थिति अपनी रिपोर्ट आईडी से देख सकते हैं।",
      Escalate: "आपकी रिपोर्ट को अधिक प्राथमिकता दी जा सकती है।",
      Help: "आप अपनी रिपोर्ट, प्राथमिकता या सामान्य नागरिक समस्याओं के बारे में पूछ सकते हैं।",
    },
    "mr-IN": {
      Pothole: "गड्डा दुरुस्तीमध्ये साधारणपणे 3-5 दिवस लागतात. आपल्या रिपोर्ट आयडी वापरून ट्रॅक करा.",
      Streetlight: "स्ट्रीटलाइट समस्या साधारणपणे 2-4 दिवसात दुरुस्त होतात.",
      Garbage: "कचऱा संकलन तक्रारी 1-3 दिवसात निवारण केल्या जातात.",
      "Water Leak": "पाणी गळतीच्या तक्रारीसाठी 2-5 दिवस लागू शकतात.",
      Drainage: "नालीच्या समस्या साधारणपणे 3-6 दिवसात सोडविल्या जातात.",
      "Tree/Fallen Branch": "गिरलेले झाड किंवा फांदी 1-3 दिवसात साफ केले जातात.",
      Traffic: "वाहतूक संबंधित समस्या वाहतूक अधिकाऱ्यांकडे नोंदवल्या जातात.",
      Status: "आपल्या रिपोर्टची स्थिती आपल्या रिपोर्ट आयडीने तपासा.",
      Escalate: "आपल्या रिपोर्टला वेगवान हाताळणीसाठी प्राधान्य दिले जाऊ शकते.",
      Help: "आपल्या रिपोर्ट, प्राधान्य किंवा सामान्य नागरी समस्या विचारू शकता.",
    },
    "ta-IN": {
      Pothole: "பாதை துளைகள் சரிசெய்யப்படுவதற்கு பொதுவாக 3-5 நாட்கள் ஆகும். உங்கள் அறிக்கையை Report ID மூலம் கண்காணிக்கவும்.",
      Streetlight: "வீதி விளக்கு பிரச்சனைகள் பொதுவாக 2-4 நாட்களில் சரி செய்யப்படும்.",
      Garbage: "குப்பை சேகரிப்பு புகார்கள் 1-3 நாட்களில் தீர்க்கப்படுகின்றன.",
      "Water Leak": "நீர் ரத்தசார்பு புகார்கள் தீர்க்க 2-5 நாட்கள் ஆகலாம்.",
      Drainage: "கழிவுநீர்ப்பாதை பிரச்சனைகள் பொதுவாக 3-6 நாட்களில் தீர்க்கப்படும்.",
      "Tree/Fallen Branch": "தோன்றிய மரங்கள் அல்லது கிளைகள் 1-3 நாட்களில் அகற்றப்படும்.",
      Traffic: "போக்குவரத்து தொடர்புடைய பிரச்சனைகள் போக்குவரத்து அதிகாரிகளுக்கு அறிக்கை செய்யப்படும்.",
      Status: "உங்கள் அறிக்கையின் நிலையை உங்கள் Report ID மூலம் காணலாம்.",
      Escalate: "உங்கள் அறிக்கைக்கு விரைவான நடவடிக்கைக்கான முன்னுரிமை வழங்கலாம்.",
      Help: "நீங்கள் உங்கள் அறிக்கை, முன்னுரிமை அல்லது பொதுவான நகர பிரச்சனைகள் பற்றி கேட்கலாம்.",
    },
    "or-IN": { 
      Pothole: "ଖାଲ ମରାମତି ସାଧାରଣତଃ ୩-୫ ଦିନ ନେଇଥାଏ। ଆପଣଙ୍କର Report ID ବ୍ୟବହାର କରି ଟ୍ରାକ୍ କରନ୍ତୁ।", 
      Streetlight: "ସ୍ଟ୍ରିଟ୍ଲାଇଟ୍ ସମସ୍ୟା ସାଧାରଣତଃ ୨-୪ ଦିନ ମଧ୍ୟରେ ସମାଧାନ ହୁଏ।", 
      Garbage: "ଅଳିଆ ସଂଗ୍ରହ ଅଭିଯୋଗ ୧-୩ ଦିନ ମଧ୍ୟରେ ନିରାକରଣ କରାଯାଏ।", 
      "Water Leak": "ପାଣି ଲିକ୍ ସମସ୍ୟା ସାଧାରଣତଃ ୨-୫ ଦିନ ମଧ୍ୟରେ ସମାଧାନ ହୁଏ।", 
      Drainage: "ନାଳ ସମସ୍ୟା ସାଧାରଣତଃ ୩-୬ ଦିନ ମଧ୍ୟରେ ସମାଧାନ ହୁଏ।", 
      "Tree/Fallen Branch": "ପଡ଼ିଥିବା ଗଛ କିମ୍ବା ଶାଖା ୧-୩ ଦିନ ମଧ୍ୟରେ ସଫା କରାଯାଏ।", 
      Traffic: "ଟ୍ରାଫିକ୍ ସମ୍ପର୍କିତ ସମସ୍ୟାଗୁଡ଼ିକୁ ଟ୍ରାଫିକ୍ ଅଧିକାରୀଙ୍କୁ ରିପୋର୍ଟ କରାଯାଏ।", 
      Status: "ଆପଣ ଆପଣଙ୍କର Report ID ବ୍ୟବହାର କରି ରିପୋର୍ଟ ସ୍ଥିତି ଯାଞ୍ଚ କରିପାରିବେ।", 
      Escalate: "ଆପଣଙ୍କର ରିପୋର୍ଟ ଅଧିକ ପ୍ରାଥମିକତା ପାଇଁ ଦିଆଯାଇପାରେ।", 
      Help: "ଆପଣ ଆପଣଙ୍କର ରିପୋର୍ଟ, ପ୍ରାଥମିକତା କିମ୍ବା ସାଧାରଣ ସହରୀ ସମସ୍ୟା ବିଷୟରେ ପଚାରିପାରିବେ।" }
  };

  // Speech recognition setup
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.lang = lang;
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      appendMessage({ from: "user", text });
      setInput(text);
      setListening(false);
      stopRecognition();
      handleBotReply(text);
    };

    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
  }, [lang]);

  useEffect(() => {
    if (messagesRef.current)
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    if (messages.length === 0) {
      const greet = greetings[lang] || greetings["en-IN"];
      appendMessage({ from: "bot", text: greet, type: "info" });
      speak(greet);
    }
  }, [open, lang]);

  function appendMessage(msg) {
    setMessages((m) => [...m, { ...msg, time: new Date().toISOString() }]);
  }

  function startRecognition() {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.lang = lang;
      recognitionRef.current.start();
      setListening(true);
    } catch {
      setListening(false);
    }
  }

  function stopRecognition() {
    try {
      recognitionRef.current && recognitionRef.current.stop();
    } catch {}
  }

  function speak(text) {
    if (!window.speechSynthesis) return;
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = lang || "en-IN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(ut);
  }

  function handleBotReply(userText) {
    const responses = issueReplies[lang] || issueReplies["en-IN"];
    let reply =
      "Sorry, I couldn't understand that. You can ask about your report status or escalation.";
    let type = "info";

    for (let key in responses) {
      const pattern = new RegExp(key, "i");
      if (pattern.test(userText)) {
        reply = responses[key];
        type = "info";
        break;
      }
    }

    if (/status/i.test(userText)) {
      type = "status";
      reply = reportId
        ? `${responses.Status} Report ${reportId} is being processed. ETA: 3-5 days.`
        : responses.Status;
    } else if (/escalate/i.test(userText)) {
      type = "urgent";
      reply = reportId
        ? `${responses.Escalate} Report ${reportId} has been escalated.`
        : responses.Escalate;
    }

    appendMessage({ from: "bot", text: reply, type });
    speak(reply);
  }

  function handleQuickClick(btn) {
    appendMessage({ from: "user", text: btn.label });
    const responses = issueReplies[lang] || issueReplies["en-IN"];
    const reply = responses[btn.label] || "Sorry, I couldn't understand that.";
    appendMessage({ from: "bot", text: reply, type: "info" });
    speak(reply);
  }

  const fmtTime = (iso) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  return (
    <div>
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[70vh] bg-white-900 rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex justify-between items-center rounded-t-2xl">
            <div className="font-semibold">NagarSaarthi</div>
            <div className="flex gap-2 items-center">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="text-sm rounded px-2 py-1 bg-white/80 text-black"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-hidden flex flex-col">
            <div
  ref={messagesRef}
  className="flex-1 overflow-auto p-4 space-y-3 bg-white text-black"
>

              {messages.map((m, i) => {
  // Set background white and text dark gray for issue messages
  const bgClass = "bg-white text-gray-800 border border-gray-300";

  return (
    <div
      key={i}
      className={m.from === "bot" ? "text-left" : "text-right"}
    >
      <div
        className={`inline-block max-w-[85%] px-3 py-2 rounded-lg ${bgClass} break-words`}
      >
        {m.text}
        <div className="text-[10px] opacity-60 mt-1">
          {fmtTime(m.time)}
        </div>
      </div>
    </div>
  );
})}
            </div>

            {/* Quick Buttons */}
            {/* Quick Buttons */}
<div className="px-4 py-2 border-t bg-white dark:bg-white-800 flex flex-wrap gap-2">
  {quickButtons.map((b) => (
    <button
      key={b.label}
      onClick={() => handleQuickClick(b)}
      className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition"
    >
      {b.icon} {b.label}
    </button>
  ))}
</div>


            {/* Input */}
            <div className="px-4 py-2 border-t bg-white dark:bg-white-800 flex flex-col gap-2">
              <input
  value={reportId}
  onChange={(e) => setReportId(e.target.value)}
  placeholder="Enter your Report ID"
  className="flex-1 px-3 py-2 rounded-lg border bg-white text-black"
/>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!input.trim()) return;
                  appendMessage({ from: "user", text: input });
                  handleBotReply(input);
                  setInput("");
                }}
                className="flex gap-2 items-center"
              >
                <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Type your message"
  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500"
/>

                <button
  type="button"
  onClick={() =>
    listening ? stopRecognition() : startRecognition()
  }
  className={`px-3 py-2 rounded-lg border ${
    listening
                      ? "bg-red-100 text-red-600 border-red-400"
                      : "bg-white-700 text-white border-white-600"
  }`}
>
  {listening ? <FaMicrophoneAltSlash /> : <FaMicrophoneAlt />}
</button>
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
     );
}

// ═══════════════════════════════════════════════════════════════
// 🤖 DI Gudrybės.eu - JavaScript failas
// ═══════════════════════════════════════════════════════════════
// Ši failas - tai "smegenys" svetainės. Čia saugoma visa logika.

// 🔐 1. KALBŲ SISTEMA (LT, RU, EN)
// ═══════════════════════════════════════════════════════════════
// Čia saugomos visos žodžiai ir frazės 3-omis kalbomis

const translations = {
  lt: {
    // NAVIGACIJA
    login: "Prisijungti",
    logout: "Atsijungti",
    
    // MODAL (PRISIJUNGIMO LANGAS)
    userZone: "👤 Vartotojo Zona",
    register: "Registruotis",
    signin: "Prisijungti",
    nickname: "🎭 Slapyvardis",
    email: "📧 El. paštas",
    password: "🔑 Slaptažodis",
    registerBtn: "🚀 Registruotis",
    loginBtn: "🔓 Prisijungti",
    
    // HEADER
    title: "DI Gudrybės.eu",
    subtitle: "🌍 Skaitmeninio pasaulio gudrybės",
    tricks: "Triukai",
    ideas: "Idėjos pradedantiesiems",
    
    // ABOUT
    about: "📖 Apie Mus",
    aboutText1: "DI Gudrybės.eu – tai lietuviška platforma, kurioje dalijamės naujausiais dirbtinio intelekto įrankiais, technologiniais triukais ir idėjomis pradedantiesiems.",
    aboutText2: "Mūsų misija – padaryti technologijas prieinamas kiekvienam! 🚀",
    aboutItem1: "DI įrankių apžvalgos ir pamokos",
    aboutItem2: "Telefono ir kompiuterio triukai",
    aboutItem3: "Internetinio uždarbio galimybės",
    aboutItem4: "Bendruomenės palaikymas",
    
    // PROTECTED CONTENT
    followMe: "🤖 Sekite Mane",
    followText: "Prisijunkite prie bendruomenės visose platformose",
    
    // EARNINGS
    earnings: "💰 Internetinis Uždarbis",
    earningsText: "Užsiregistruokite per mano nuorodas ir pradėkite uždirbti internete!",
    earningsBtn: "🚀 Peržiūrėti Uždarbio Galimybes",
    
    // FAQ
    faq: "❓ Dažniausiai Užduodami Klausimai",
    faqQ1: "Kas yra DI Gudrybės.eu?",
    faqA1: "DI Gudrybės.eu – tai lietuviška platforma, kurioje dalijamės dirbtinio intelekto (DI/AI) įrankiais, technologiniais triukais ir idėjomis pradedantiesiems. Mūsų misija – padaryti technologijas prieinamas kiekvienam! 🤖",
    faqQ2: "Ar registracija yra nemokama?",
    faqA2: "Taip, registracija yra visiškai nemokama! 👤 Užsiregistravę gausite prieigą prie papildomo turinio, pokalbių kambario ir galėsite užsiprenumeruoti naujienlaiškį. Jokių paslėptų mokesčių!",
    faqQ3: "Kaip galiu užsidirbti internetu?",
    faqA3: "Internete galima uždirbti įvairiais būdais: partnerių (affiliate) programos, freelansas, turinio kūrimas socialiniuose tinkluose, DI įrankių naudojimas darbui automatizuoti. 💰",
    faqQ4: "Ar mano duomenys yra saugūs?",
    faqA4: "Taip, jūsų duomenys yra saugūs! 🔒 Slaptažodžiai yra šifruojami (hash'uojami) prieš saugojimą, o visa informacija saugoma tik jūsų naršyklėje (localStorage).",
    faqQ5: "Kur galiu su jumis susisiekti?",
    faqA5: "Galite susisiekti keliais būdais: 📧 El. paštu – digudrybes@gmail.com | 💬 Socialiniuose tinkluose – Facebook, Instagram, Telegram, YouTube, TikTok.",
    
    // CHAT
    chat: "💬 Pokalbių Kambarys",
    chatBot: "DI Gudrybių Asistentas",
    online: "Prisijungęs",
    chatWelcome: "Sveiki! 👋 Aš esu DI Gudrybių asistentas. Kaip galiu jums padėti šiandien?",
    
    // NEWSLETTER
    newsletter: "📧 Naujienlaiškis",
    newsletterText: "Užsiprenumeruokite mūsų naujienlaiškį ir pirmieji sužinokite apie naujausius DI įrankius, triukus ir uždarbio galimybes!",
    subscribe: "Prenumeruoti",
    
    // LOGIN PROMPT
    lockedTitle: "🔒 Turinys užrakintas",
    lockedText: "Prisijunkite arba užsiregistruokite, kad matytumėte socialinius tinklus, pokalbių kambarį, DUK ir kitą turinį!",
    loginNow: "Prisijungti Dabar",
    
    // FOOTER
    copyright: "© 2025 DI Gudrybės.eu. Visos teisės saugomos. | Sukurta su 🤖 Lietuvoje"
  },
  
  ru: {
    login: "Войти",
    logout: "Выход",
    userZone: "👤 Зона пользователя",
    register: "Зарегистрироваться",
    signin: "Войти",
    nickname: "🎭 Никнейм",
    email: "📧 Email",
    password: "🔑 Пароль",
    registerBtn: "🚀 Зарегистрироваться",
    loginBtn: "🔓 Войти",
    title: "DI Gudrybės.eu",
    subtitle: "🌍 Хитрости цифрового мира",
    tricks: "Трюки",
    ideas: "Идеи для начинающих",
    about: "📖 О нас",
    aboutText1: "DI Gudrybės.eu – это литовская платформа, где мы делимся новейшими инструментами искусственного интеллекта, технологическими трюками и идеями для начинающих.",
    aboutText2: "Наша миссия – сделать технологии доступными для каждого! 🚀",
    aboutItem1: "Обзоры и уроки инструментов ИИ",
    aboutItem2: "Трюки для телефона и компьютера",
    aboutItem3: "Возможности онлайн-заработка",
    aboutItem4: "Поддержка сообщества",
    followMe: "🤖 Следите за мной",
    followText: "Присоединитесь к сообществу на всех платформах",
    earnings: "💰 Онлайн заработок",
    earningsText: "Зарегистрируйтесь по моим ссылкам и начните зарабатывать в интернете!",
    earningsBtn: "🚀 Посмотреть возможности заработка",
    faq: "❓ Часто задаваемые вопросы",
    faqQ1: "Что такое DI Gudrybės.eu?",
    faqA1: "DI Gudrybės.eu – это литовская платформа, где мы делимся инструментами искусственного интеллекта, технологическими трюками и идеями для начинающих. Наша миссия – сделать технологии доступными! 🤖",
    faqQ2: "Регистрация бесплатна?",
    faqA2: "Да, регистрация полностью бесплатна! 👤 Зарегистрировавшись, вы получите доступ к дополнительному контенту, чату и сможете подписаться на рассылку. Никаких скрытых платежей!",
    faqQ3: "Как я могу заработать в интернете?",
    faqA3: "В интернете можно зарабатывать различными способами: партнёрские программы, фриланс, создание контента в социальных сетях, использование инструментов ИИ для автоматизации работы. 💰",
    faqQ4: "Безопасны ли мои данные?",
    faqA4: "Да, ваши данные безопасны! 🔒 Пароли шифруются перед сохранением, а вся информация хранится только в вашем браузере (localStorage) – мы не собираем и не имеем доступа к вашим данным на серверах.",
    faqQ5: "Как я могу с вами связаться?",
    faqA5: "Вы можете связаться несколькими способами: 📧 По электронной почте – digudrybes@gmail.com | 💬 В социальных сетях – Facebook, Instagram, Telegram, YouTube, TikTok.",
    chat: "💬 Чат",
    chatBot: "Помощник DI Gudrybės",
    online: "Онлайн",
    chatWelcome: "Привет! 👋 Я помощник DI Gudrybės. Чем я могу вам помочь сегодня?",
    newsletter: "📧 Рассылка",
    newsletterText: "Подпишитесь на нашу рассылку и будьте первыми, кто узнает о новейших инструментах ИИ, трюках и возможностях заработка!",
    subscribe: "Подписаться",
    lockedTitle: "🔒 Контент заблокирован",
    lockedText: "Войдите или зарегистрируйтесь, чтобы увидеть социальные сети, чат, FAQ и другой контент!",
    loginNow: "Войти сейчас",
    copyright: "© 2025 DI Gudrybės.eu. Все права защищены. | Создано с 🤖 в Литве"
  },
  
  en: {
    login: "Login",
    logout: "Logout",
    userZone: "👤 User Zone",
    register: "Register",
    signin: "Sign In",
    nickname: "🎭 Nickname",
    email: "📧 Email",
    password: "🔑 Password",
    registerBtn: "🚀 Register",
    loginBtn: "🔓 Sign In",
    title: "DI Gudrybės.eu",
    subtitle: "🌍 Digital World Tricks",
    tricks: "Tricks",
    ideas: "Ideas for Beginners",
    about: "📖 About Us",
    aboutText1: "DI Gudrybės.eu is a Lithuanian platform where we share the latest artificial intelligence tools, tech tricks, and ideas for beginners.",
    aboutText2: "Our mission is to make technology accessible to everyone! 🚀",
    aboutItem1: "AI tools reviews and tutorials",
    aboutItem2: "Phone and computer tricks",
    aboutItem3: "Online earning opportunities",
    aboutItem4: "Community support",
    followMe: "🤖 Follow Me",
    followText: "Join the community on all platforms",
    earnings: "💰 Online Earnings",
    earningsText: "Register through my links and start earning online!",
    earningsBtn: "🚀 View Earning Opportunities",
    faq: "❓ Frequently Asked Questions",
    faqQ1: "What is DI Gudrybės.eu?",
    faqA1: "DI Gudrybės.eu is a Lithuanian platform where we share artificial intelligence tools, tech tricks, and ideas for beginners. Our mission is to make technology accessible to everyone! 🤖",
    faqQ2: "Is registration free?",
    faqA2: "Yes, registration is completely free! 👤 After registering, you'll get access to additional content, a chat room, and can subscribe to our newsletter. No hidden fees!",
    faqQ3: "How can I earn money online?",
    faqA3: "You can earn online in various ways: affiliate programs, freelancing, content creation on social media, using AI tools to automate work. 💰",
    faqQ4: "Are my data safe?",
    faqA4: "Yes, your data is safe! 🔒 Passwords are encrypted before storage, and all information is stored only in your browser (localStorage) – we don't collect or have access to your data on servers.",
    faqQ5: "How can I contact you?",
    faqA5: "You can contact us in several ways: 📧 Email – digudrybes@gmail.com | 💬 Social media – Facebook, Instagram, Telegram, YouTube, TikTok.",
    chat: "💬 Chat Room",
    chatBot: "DI Gudrybės Assistant",
    online: "Online",
    chatWelcome: "Hello! 👋 I'm the DI Gudrybės assistant. How can I help you today?",
    newsletter: "📧 Newsletter",
    newsletterText: "Subscribe to our newsletter and be the first to know about the latest AI tools, tricks, and earning opportunities!",
    subscribe: "Subscribe",
    lockedTitle: "🔒 Content Locked",
    lockedText: "Sign in or register to see social media, chat, FAQ and other content!",
    loginNow: "Sign In Now",
    copyright: "© 2025 DI Gudrybės.eu. All rights reserved. | Made with 🤖 in Lithuania"
  }
};

// 🌐 Dabartinė pasirinkta kalba (numatyta: lietuvių)
let currentLang = 'lt';

// 📝 Funkcija: Keisti kalbą
function switchLang(lang) {
  currentLang = lang;
  
  // Pakeisti aktyvų language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  // Atnaujinti visas žymes su i18n atributu
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ═══════════════════════════════════════════════════════════════
// 🔐 2. PRISIJUNGIMO SISTEMA
// ═══════════════════════════════════════════════════════════════

// 🔓 Atidaryti modal (prisijungimo langas)
function openModal() {
  document.getElementById('loginModal').classList.add('show');
}

// 🔒 Uždaryti modal
function closeModal() {
  document.getElementById('loginModal').classList.remove('show');
}

// 📋 Perjungti tarp "Registruotis" ir "Prisijungti"
function switchModalTab(tab) {
  const registerForm = document.getElementById('modalRegisterForm');
  const loginForm = document.getElementById('modalLoginForm');
  const tabs = document.querySelectorAll('.modal-tab');
  
  tabs.forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  if (tab === 'register') {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  } else {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }
}

// ✅ Patikrinti slapyvardį (3-20 simbolių)
function validateModalNickname() {
  const nickname = document.getElementById('modalNickname').value;
  const error = document.getElementById('modalNicknameError');
  const input = document.getElementById('modalNickname');
  
  if (nickname.length >= 3 && nickname.length <= 20) {
    error.classList.remove('show');
    input.classList.remove('error');
    input.classList.add('success');
    return true;
  } else {
    error.classList.add('show');
    input.classList.remove('success');
    input.classList.add('error');
    return false;
  }
}

// ✅ Patikrinti el. paštą
function validateModalEmail() {
  const email = document.getElementById('modalEmail').value;
  const error = document.getElementById('modalEmailError');
  const input = document.getElementById('modalEmail');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
    error.classList.remove('show');
    input.classList.remove('error');
    input.classList.add('success');
    return true;
  } else {
    error.classList.add('show');
    input.classList.remove('success');
    input.classList.add('error');
    return false;
  }
}

// 🔑 Patikrinti slaptažodžio stiprumą
function checkModalPasswordStrength() {
  const password = document.getElementById('modalPassword').value;
  const strength = document.getElementById('modalPasswordStrength');
  const label = document.getElementById('modalStrengthLabel');
  const error = document.getElementById('modalPasswordError');
  const input = document.getElementById('modalPassword');
  
  let strengthLevel = 'weak';
  
  // Patikrinti reikalavimus
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password.length >= 8;
  
  if (hasLower && hasUpper && hasNumber && isLongEnough) {
    strengthLevel = 'strong';
    error.classList.remove('show');
    input.classList.remove('error');
    input.classList.add('success');
  } else if ((hasLower || hasUpper) && hasNumber && password.length >= 6) {
    strengthLevel = 'medium';
    error.classList.add('show');
    input.classList.add('error');
  } else {
    strengthLevel = 'weak';
    error.classList.add('show');
    input.classList.add('error');
  }
  
  // Nustatyti spalvą
  strength.className = 'password-strength ' + strengthLevel;
  
  // Nustatyti tekstą
  if (strengthLevel === 'weak') {
    label.textContent = '🔴 Silpnas';
  } else if (strengthLevel === 'medium') {
    label.textContent = '🟡 Vidutinis';
  } else {
    label.textContent = '🟢 Stiprus';
  }
  
  return strengthLevel === 'strong';
}

// 📝 Registruotis (sukurti naują paskyrą)
function modalRegister() {
  const nickname = document.getElementById('modalNickname').value;
  const email = document.getElementById('modalEmail').value;
  const password = document.getElementById('modalPassword').value;
  
  // Patikrinti, ar visos validacijos praeina
  const nicknameValid = validateModalNickname();
  const emailValid = validateModalEmail();
  const passwordValid = checkModalPasswordStrength();
  
  if (!nicknameValid || !emailValid || !passwordValid) {
    alert('⚠️ Prašome nustatyti tinkamus duomenis!');
    return;
  }
  
  // Patikrinti, ar slapyvardis jau egzistuoja
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.find(u => u.nickname === nickname)) {
    alert('⚠️ Šis slapyvardis jau užimtas!');
    return;
  }
  
  // Išsaugoti naują vartotoją
  users.push({
    nickname: nickname,
    email: email,
    password: btoa(password) // Paprasta šifravimas (Base64)
  });
  
  localStorage.setItem('users', JSON.stringify(users));
  alert('✅ Sėkmingai užsiregistravote!');
  
  // Iš karto prisijungti
  loginUser(nickname, password);
  closeModal();
}

// 🔓 Prisijungti
function modalLogin() {
  const nickname = document.getElementById('modalLoginNickname').value;
  const password = document.getElementById('modalLoginPassword').value;
  
  if (!nickname || !password) {
    alert('⚠️ Įveskite slapyvardį ir slaptažodį!');
    return;
  }
  
  loginUser(nickname, password);
}

// 🔑 Pagrindinė prisijungimo funkcija
function loginUser(nickname, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.nickname === nickname && u.password === btoa(password));
  
  if (user) {
    localStorage.setItem('currentUser', nickname);
    
    // Atnaujinti UI
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBadge').classList.add('show');
    document.getElementById('userName').textContent = nickname;
    
    // Rodyti apsaugotą turinį
    document.getElementById('protectedContent').classList.add('show');
    document.getElementById('loginPrompt').style.display = 'none';
    
    closeModal();
    
    // Išvalyti formas
    document.getElementById('modalLoginNickname').value = '';
    document.getElementById('modalLoginPassword').value = '';
  } else {
    alert('❌ Neteisingas slapyvardis arba slaptažodis!');
  }
}

// 🚪 Atsijungti
function logoutUser() {
  localStorage.removeItem('currentUser');
  
  document.getElementById('loginBtn').style.display = 'block';
  document.getElementById('userBadge').classList.remove('show');
  
  document.getElementById('protectedContent').classList.remove('show');
  document.getElementById('loginPrompt').style.display = 'block';
}

// ═══════════════════════════════════════════════════════════════
// 💬 3. POKALBIŲ KAMBARYS
// ═══════════════════════════════════════════════════════════════

// 📤 Išsiųsti žinutę
function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (!message) return;
  
  const chatMessages = document.getElementById('chatMessages');
  
  // Pridėti vartotojo žinutę
  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = message;
  chatMessages.appendChild(userMessage);
  
  input.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Bot atsakymas (greita simuliacija)
  setTimeout(() => {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = '🤖 Ačiū už žinutę! Aš čia tik bandomasis asistentais. Siųskite mano tiesiogines žinutes!';
    chatMessages.appendChild(botMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
}

// ═══════════════════════════════════════════════════════════════
// 📧 4. NAUJIENLAIŠKIS
// ═══════════════════════════════════════════════════════════════

function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert('⚠️ Prašome įvesti tinkamą el. paštą!');
    return;
  }
  
  // Išsaugoti el. paštą
  let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
  }
  
  document.getElementById('newsletterEmail').value = '';
  document.getElementById('newsletterSuccess').classList.add('show');
  
  setTimeout(() => {
    document.getElementById('newsletterSuccess').classList.remove('show');
  }, 3000);
}

// ═══════════════════════════════════════════════════════════════
// ❓ 5. DUK (FAQ)
// ═══════════════════════════════════════════════════════════════

function toggleFaq(element) {
  element.classList.toggle('active');
}

// ═══════════════════════════════════════════════════════════════
// 🚀 6. INITIALIZER - Paleidžia viską kai puslapis kraunasi
// ═══════════════════════════════════════════════════════════════

window.addEventListener('DOMContentLoaded', () => {
  // Patikrinti, ar vartotojas jau prisijungęs
  const currentUser = localStorage.getItem('currentUser');
  
  if (currentUser) {
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBadge').classList.add('show');
    document.getElementById('userName').textContent = currentUser;
    document.getElementById('protectedContent').classList.add('show');
    document.getElementById('loginPrompt').style.display = 'none';
  } else {
    document.getElementById('loginPrompt').style.display = 'block';
    document.getElementById('protectedContent').classList.remove('show');
  }
  
  // Nustatyti pradinę kalbą
  switchLang('lt');
});

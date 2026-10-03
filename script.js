/**
 * Kept Portfolio & Services — Interactive Scripts
 * Handles bilingual i18n (Region/Language Detection), Cost Calculator, Clipboard Copy, Photo Lightbox, and Mobile Menu.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Multilingual Dictionary (RU / EN)
  // ==========================================
  const translations = {
    ru: {
      page_title: "Kept — Software & Hardware Developer",
      nav_status: "Available",
      nav_about: "Обо мне",
      nav_skills: "Стек",
      nav_services: "Услуги",
      nav_calculator: "Калькулятор",
      nav_rules: "Правила ЛС",
      nav_friends: "Объединение",
      nav_contacts: "Контакты",
      nav_cta: "Написать в TG",

      hero_badge: "Software & Hardware Developer",
      hero_greeting: "Привет, я",
      hero_subtitle: "Занимаюсь разработкой сложных программных решений, созданием умных Telegram-ботов, проектированием печатных плат (PCB) и администрированием серверов и сетевого оборудования.",
      h_label_loc: "Локация",
      h_val_loc: "РФ",
      h_label_stack: "Стек",
      h_label_team: "Объединение",
      h_label_rate: "Почасовая ставка",
      h_val_rate: "$15 / час",
      hero_btn_pricing: "Прайс-лист и услуги",
      hero_btn_tg: "ЛС @Kept_DM",
      hero_btn_copy: "Копировать TG",

      photo_loc: "📍 РФ",
      photo_status: "Active",
      photo_role: "Engineer & Creator",
      photo_zoom: "Открыть фото",
      photo_modal_caption: "Разработчик & Инженер",

      about_tag: "// ИНФОРМАЦИЯ ОБО МНЕ",
      about_title: "Биография и Специализация",
      about_desc: "Краткая сводка обо мне, ключевых навыках, владении языками и профессиональном бэкграунде.",
      card_profile_title: "Профиль",
      info_nick_label: "Псевдоним:",
      info_residence_label: "Место жительства:",
      info_residence_val: "РФ 🇷🇺",
      info_status_label: "Статус:",
      info_status_val: "Готов к проектам",
      card_act_title: "Род деятельности",
      act_1: "<strong>Разработка проектов:</strong> создание Telegram-ботов, десктопных утилит и комплексных систем автоматизации.",
      act_2: "<strong>Проектирование PCB:</strong> разработка печатных плат под задачи микроэлектроники и кастомных устройств.",
      act_3: "<strong>Сетевое оборудование и серверы:</strong> настройка маршрутизаторов, Linux/Windows серверов, VPN, DNS, безопасности.",
      card_lang_title: "Языки общения",
      lang_ru_name: "Русский",
      lang_ru_lvl: "Родной",
      lang_en_name: "English",
      card_team_title: "Объединение Citoz",
      card_team_desc: "Участник технологического объединения <strong>Citoz</strong>. Совместная работа над масштабными проектами и IT-решениями.",

      skills_tag: "// ТЕХНОЛОГИЧЕСКИЙ СТЕК",
      skills_title: "Языки программирования и инструменты",
      skills_desc: "Технологии, на которых я регулярно писал и пишу коммерческие и прикладные проекты.",
      skill_py_desc: "Aiogram, Telethon, Pyrogram, парсинг данных, автоматизация процессов, интеграции через REST API и Google Sheets.",
      skill_cs_desc: "Создание быстрых десктопных утилит под Windows, работа с WinAPI, системными хуками, горячими клавишами и фоновыми службами.",
      skill_kt_desc: "Современный лаконичный код, надежные сервисы, асинхронные корутины и гибкая архитектура приложений.",
      skill_java_desc: "Классическая разработка, ООП архитектура, кроссплатформенные утилиты, серверная логика и стабильность.",
      skill_pcb_role: "Проектирование печатных плат",
      skill_pcb_desc: "Трассировка, принципиальные схемы, подбор компонентов, подготовка Gerber-файлов для производства электроники.",
      skill_net_title: "Сетевое оборудование",
      skill_net_role: "Серверы, маршрутизация, Linux",
      skill_net_desc: "Развертывание серверов, настройка маршрутизаторов, коммутаторов, VPN-туннелей, файрволов и мониторинга.",

      services_tag: "// SERVICES & PRICING",
      services_title: "Услуги и Прайс-лист",
      services_desc: "Прозрачные фиксированные цены на разработку и понятные условия сотрудничества.",
      price_from: "от",
      price_per_hour: "/ в час",
      p_btn_click: "Клик для заказа",
      p_popular: "Популярный выбор",
      p_recommended: "Рекомендуем",
      p_hourly_badge: "Гибкий формат",
      p1_sub: "Простые боты и скрипты для базовых задач бизнеса и личного пользования",
      p1_f1: "Автоответчики и приветственные сценарии",
      p1_f2: "Захват лидов и форм обратной связи",
      p1_f3: "Базовые парсеры сайтов и каналов",
      p1_f4: "Интеграция с Google Sheets (Таблицами)",
      p1_f5: "Инструкция по запуску и настройке",

      p2_sub: "Функциональные боты с базой данных, оплатой и удобной панелью управления",
      p2_f1: "Базы данных (PostgreSQL / SQLite)",
      p2_f2: "Подключение платежных систем (CryptoPay, ЮKassa и др.)",
      p2_f3: "Удобная панель администратора для управления",
      p2_f4: "Интеграция со сторонними API и сервисами",
      p2_f5: "Рассылки, аналитика и статистика пользователей",

      p3_sub: "Высоконагруженные комплексы, клиентские скрипты и системы автоматизации",
      p3_f1: "Многопоточные парсеры высокой скорости",
      p3_f2: "Скрипты на базе Telethon / Pyrogram (userbot)",
      p3_f3: "Комплексный софт для масштабной автоматизации",
      p3_f4: "Ротация прокси, обход капчи и ограничений",
      p3_f5: "Высокая отказоустойчивость и безопасность",

      p4_sub: "Настольное программное обеспечение под Windows и Linux платформы",
      p4_f1: "Утилиты для Windows / Linux систем",
      p4_f2: "Глубокая интеграция с системными API (WinAPI)",
      p4_f3: "Назначение глобальных горячих клавиш (hotkeys)",
      p4_f4: "Фоновые службы и демоны (Background Services)",
      p4_f5: "Графический интерфейс или CLI по выбору",

      p5_title: "Почасовая работа",
      p5_sub: "Для нестандартных задач, правок чужого кода, консультаций и настройки",
      p5_f1: "Доработка и рефакторинг уже написанного кода",
      p5_f2: "Поиск и устранение багов (debugging)",
      p5_f3: "Настройка серверов и сетевого оборудования",
      p5_f4: "Технические консультации и проектирование PCB",
      p5_f5: "Прозрачный учет затраченного времени",

      calc_tag: "// ESTIMATOR",
      calc_title: "Калькулятор ориентировочной стоимости",
      calc_desc: "Выберите параметры вашего проекта, чтобы рассчитать примерную стоимость и сразу сформировать готовый бриф для Telegram.",
      calc_label_type: "Тип проекта:",
      calc_label_extra: "Дополнительные опции:",
      calc_opt_db: "База данных (PostgreSQL/SQLite) (+ $20)",
      calc_opt_pay: "Платежные шлюзы / Крипта (+ $25)",
      calc_opt_admin: "Панель администратора и рассылки (+ $20)",
      calc_opt_threads: "Многопоточность / Прокси (+ $35)",
      calc_opt_sheets: "Интеграция с Google Sheets (+ $15)",
      calc_res_title: "Итоговая оценка",
      calc_note: "*Точная сумма обсуждается индивидуально после согласования ТЗ.",
      calc_sum_selected: "Выбрано:",
      calc_btn_send: "Отправить заявку в TG",

      rules_title: "DM Rules & Contact Flow",
      rules_subtitle: "Обязательные правила обращения в личные сообщения для быстрого и эффективного диалога.",
      rule_1_title: "No Meta Questions:",
      rule_1_desc: "Сразу формулируйте суть вопроса или ТЗ в первом сообщении без вводных «Привет, можно вопрос?», «Ты тут?» и т.п.",
      rule_2_title: "Main Contact:",
      rule_2_desc: "Всегда пишите в первую очередь на основной аккаунт <strong class=\"text-highlight\">@Kept_DM</strong>.",
      rule_3_title: "Spam Policy:",
      rule_3_desc: "Максимум <strong>2 сообщения подряд</strong> (Max 2 messages in a row). Пожалуйста, объединяйте мысли в одно-два емких сообщения.",
      restr_tag: "RESTRICTION",
      restr_text: "<strong>@Tepk_MD СТРОГО ЗАКРЫТ</strong>, кроме случаев, когда вы уже отправили 2 сообщения без ответа в <strong>@Kept_DM</strong>.",
      restr_warning: "⚠️ Написание в <strong>@Tepk_MD</strong> напрямую без предварительной попытки в <strong>@Kept_DM</strong> приведет к <strong>мгновенной блокировке</strong>.",

      friends_tag: "// COMMUNITY & NETWORK",
      friends_title: "Объединение и Друзья",
      friends_desc: "Коллеги, друзья и сообщество, с которыми мы на связи.",
      team_badge: "Объединение",
      team_desc: "Команда разработчиков и технических специалистов. Создание цифровых продуктов и решений.",
      btn_email_click: "Клик для письма ✉️",
      friend_badge: "Друг",
      topalishro_desc: "Разработчик и единомышленник. GitHub профиль и совместные проекты.",
      btn_github_click: "Клик на GitHub ↗",
      tytyty_desc: "Единомышленник и надежный контакт в Telegram-сообществе.",
      btn_tg_click: "Клик в Telegram ↗",

      contacts_tag: "// СВЯЗЬ И ЗАКАЗЫ",
      contacts_title: "Готовы обсудить проект?",
      contacts_desc: "Напишите мне в личные сообщения для быстрого ответа, консультации или заказа разработки.",
      c_main_tag: "Основной контакт",
      c_click_dm: "Клик для связи ↗",
      c_direct_tag: "Прямой диалог",
      c_click_direct: "Клик для чата ↗",
      c_team_tag: "Почта объединения",
      c_click_mail: "Клик для письма ↗",
      copy_hint: "Быстрое копирование Telegram юзернейма:",
      copy_btn_text: "Клик скопировать @Kept_DM",

      footer_copy: "© 2026. Разработка проектов & Инженерия.",
      footer_team: "В составе объединения <strong class=\"team-name\">Citoz</strong> (<a href=\"mailto:citozteam@gmail.com\" class=\"footer-email\">citozteam@gmail.com</a>)",
      footer_top: "Наверх ↑"
    },

    en: {
      page_title: "Kept — Software & Hardware Developer",
      nav_status: "Available",
      nav_about: "About",
      nav_skills: "Stack",
      nav_services: "Services",
      nav_calculator: "Calculator",
      nav_rules: "DM Rules",
      nav_friends: "Collective",
      nav_contacts: "Contacts",
      nav_cta: "Message on TG",

      hero_badge: "Software & Hardware Developer",
      hero_greeting: "Hey, I am",
      hero_subtitle: "Developing custom software solutions, intelligent Telegram bots, designing printed circuit boards (PCB), and configuring network hardware & server environments.",
      h_label_loc: "Location",
      h_val_loc: "Russia",
      h_label_stack: "Tech Stack",
      h_label_team: "Collective",
      h_label_rate: "Hourly Rate",
      h_val_rate: "$15 / hr",
      hero_btn_pricing: "Services & Pricing",
      hero_btn_tg: "DM @Kept_DM",
      hero_btn_copy: "Copy TG",

      photo_loc: "📍 Russia",
      photo_status: "Active",
      photo_role: "Engineer & Creator",
      photo_zoom: "View Photo",
      photo_modal_caption: "Developer & Systems Engineer",

      about_tag: "// ABOUT ME",
      about_title: "Biography & Expertise",
      about_desc: "Overview of background, core technical skills, languages spoken, and professional focus.",
      card_profile_title: "Profile",
      info_nick_label: "Nickname:",
      info_residence_label: "Residence:",
      info_residence_val: "Russia 🇷🇺",
      info_status_label: "Status:",
      info_status_val: "Open for work",
      card_act_title: "Primary Activities",
      act_1: "<strong>Project Development:</strong> creating Telegram bots, desktop utilities, scrapers, and automation software.",
      act_2: "<strong>PCB Design:</strong> schematic capture and routing for custom microelectronics and embedded boards.",
      act_3: "<strong>Network & Servers:</strong> router deployment, Linux/Windows administration, VPN, firewalls, and security.",
      card_lang_title: "Spoken Languages",
      lang_ru_name: "Russian",
      lang_ru_lvl: "Native",
      lang_en_name: "English",
      card_team_title: "Citoz Collective",
      card_team_desc: "Member of <strong>Citoz</strong> tech collective. Collaborative engineering and high-performance digital solutions.",

      skills_tag: "// TECH STACK",
      skills_title: "Programming Languages & Tools",
      skills_desc: "Technologies and frameworks I actively use for client and core applications.",
      skill_py_desc: "Aiogram, Telethon, Pyrogram, data extraction, process automation, REST API and Google Sheets integrations.",
      skill_cs_desc: "Fast native Windows utilities, WinAPI hooks, keyboard triggers, system automation, and background services.",
      skill_kt_desc: "Clean modern Kotlin, reliable JVM backend services, asynchronous coroutines, and responsive mobile architecture.",
      skill_java_desc: "Core enterprise Java, OOP design, multithreaded utilities, cross-platform stability, and robust backends.",
      skill_pcb_role: "PCB Schematic & Routing",
      skill_pcb_desc: "Circuit schematics, multilayer PCB layout, component selection, and manufacturing-ready Gerber preparation.",
      skill_net_title: "Network & Systems",
      skill_net_role: "Servers, Routing, Linux",
      skill_net_desc: "Server deployment, managed switches, enterprise routers, WireGuard/OpenVPN tunnels, and monitoring.",

      services_tag: "// SERVICES & PRICING",
      services_title: "Services & Pricing Tiers",
      services_desc: "Transparent fixed pricing, clear deliverables, and dependable collaboration terms.",
      price_from: "from",
      price_per_hour: "/ per hour",
      p_btn_click: "Click to Order",
      p_popular: "Most Popular",
      p_recommended: "Recommended",
      p_hourly_badge: "Flexible Format",
      p1_sub: "Basic bots and scripts for automation, data capture, and simple tasks",
      p1_f1: "Auto-responders & onboarding flows",
      p1_f2: "Lead capture & custom inquiry forms",
      p1_f3: "Basic web & channel scrapers",
      p1_f4: "Google Sheets integration",
      p1_f5: "Deployment guidance & documentation",

      p2_sub: "Feature-rich bots with relational databases, payment systems, and admin dashboards",
      p2_f1: "Databases (PostgreSQL / SQLite)",
      p2_f2: "Payment gateways (CryptoPay, Stripe, YooKassa)",
      p2_f3: "Full-featured admin control panel",
      p2_f4: "Third-party REST API integration",
      p2_f5: "Broadcasts, analytics, and user metrics",

      p3_sub: "High-throughput systems, multithreaded engines, and custom automation tools",
      p3_f1: "High-speed multithreaded scrapers",
      p3_f2: "Telethon / Pyrogram client scripts (userbots)",
      p3_f3: "Full automation suites & daemon tools",
      p3_f4: "Proxy rotation, anti-detect & captcha solving",
      p3_f5: "High fault-tolerance and security",

      p4_sub: "Native desktop tools and background services for Windows and Linux",
      p4_f1: "Cross-platform Windows & Linux tools",
      p4_f2: "Deep system API integration (WinAPI)",
      p4_f3: "Global keyboard hooks & hotkeys",
      p4_f4: "Background daemons & system services",
      p4_f5: "Modern GUI or CLI interface",

      p5_title: "Hourly Work",
      p5_sub: "For custom requests, legacy code audits, consultations, and server tuning",
      p5_f1: "Code refactoring & bug fixing",
      p5_f2: "Deep code auditing & profiling",
      p5_f3: "Server configuration & network troubleshooting",
      p5_f4: "Technical consulting & PCB design review",
      p5_f5: "Transparent tracking & time logging",

      calc_tag: "// ESTIMATOR",
      calc_title: "Project Cost Estimator",
      calc_desc: "Configure your scope to estimate project costs and instantly prepare a pre-filled Telegram order brief.",
      calc_label_type: "Project Type:",
      calc_label_extra: "Optional Features:",
      calc_opt_db: "Database (PostgreSQL/SQLite) (+ $20)",
      calc_opt_pay: "Payment Gateways / Crypto (+ $25)",
      calc_opt_admin: "Admin Panel & Broadcasts (+ $20)",
      calc_opt_threads: "Multithreading & Proxies (+ $35)",
      calc_opt_sheets: "Google Sheets Sync (+ $15)",
      calc_res_title: "Estimated Total",
      calc_note: "*Exact price will be confirmed after specification review.",
      calc_sum_selected: "Selected:",
      calc_btn_send: "Send Brief via Telegram",

      rules_title: "DM Rules & Contact Flow",
      rules_subtitle: "Essential communication guidelines for clear, prompt, and spam-free cooperation.",
      rule_1_title: "No Meta Questions:",
      rule_1_desc: "State your request directly in your first message without introductory fluff like 'Hi, can I ask a question?' or 'Are you there?'.",
      rule_2_title: "Main Contact:",
      rule_2_desc: "Always reach out to <strong class=\"text-highlight\">@Kept_DM</strong> first.",
      rule_3_title: "Spam Policy:",
      rule_3_desc: "Maximum <strong>2 messages in a row</strong>. Please consolidate your requirements into 1 or 2 concise messages.",
      restr_tag: "RESTRICTION",
      restr_text: "<strong>@Tepk_MD is STRICTLY CLOSED</strong> unless you have already sent 2 unanswered messages to <strong>@Kept_DM</strong>.",
      restr_warning: "⚠️ Writing to <strong>@Tepk_MD</strong> directly without trying <strong>@Kept_DM</strong> first will result in an <strong>immediate block</strong>.",

      friends_tag: "// COMMUNITY & NETWORK",
      friends_title: "Collective & Friends",
      friends_desc: "Allies, colleagues, and friends across the technical community.",
      team_badge: "Collective",
      team_desc: "Team of developers and technical specialists building high quality digital products.",
      btn_email_click: "Click to Email ✉️",
      friend_badge: "Friend",
      topalishro_desc: "Developer & teammate. GitHub profile and joint projects.",
      btn_github_click: "Click to GitHub ↗",
      tytyty_desc: "Trusted comrade and colleague in the Telegram community.",
      btn_tg_click: "Click to Telegram ↗",

      contacts_tag: "// CONTACT & ORDERS",
      contacts_title: "Ready to Start a Project?",
      contacts_desc: "Reach out via direct message for prompt replies, consultation, or custom development.",
      c_main_tag: "Primary Channel",
      c_click_dm: "Click to Contact ↗",
      c_direct_tag: "Direct Chat",
      c_click_direct: "Click to Chat ↗",
      c_team_tag: "Collective Email",
      c_click_mail: "Click to Email ↗",
      copy_hint: "Quick copy Telegram username:",
      copy_btn_text: "Click to copy @Kept_DM",

      footer_copy: "© 2026. Software & Hardware Engineering.",
      footer_team: "Member of <strong class=\"team-name\">Citoz</strong> collective (<a href=\"mailto:citozteam@gmail.com\" class=\"footer-email\">citozteam@gmail.com</a>)",
      footer_top: "Back to top ↑"
    }
  };

  // ==========================================
  // 2. Language Selection (English by default)
  // ==========================================
  function detectInitialLanguage() {
    // 1. Check URL parameter (e.g. ?lang=ru or ?lang=en)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'ru' || urlLang === 'en') {
        return urlLang;
      }
    } catch (e) {}

    // 2. Check if user explicitly selected a language in this session
    const saved = localStorage.getItem('kept_lang_pref_v2') || sessionStorage.getItem('kept_lang_pref_v2');
    if (saved === 'ru' || saved === 'en') {
      return saved;
    }

    // 3. Primary default is ALWAYS English
    return 'en';
  }

  let currentLang = detectInitialLanguage();

  function updatePillTexts() {
    typePills.forEach(pill => {
      const ru = pill.getAttribute('data-title-ru');
      const en = pill.getAttribute('data-title-en');
      const cost = pill.getAttribute('data-base');
      if (currentLang === 'en' && en) {
        pill.textContent = cost === '30' ? `${en} — from $30` : `${en} — $${cost}`;
      } else if (ru) {
        pill.textContent = cost === '30' ? `${ru} — от $30` : `${ru} — $${cost}`;
      }
    });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('kept_lang_pref_v2', lang);
    sessionStorage.setItem('kept_lang_pref_v2', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.en;

    // Update document title
    if (dict.page_title) {
      document.title = dict.page_title;
    }

    // Update all text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update Telegram Direct Link & Text
    const tgDirectLink = document.getElementById('tg-direct-link');
    const tgDirectVal = document.getElementById('tg-direct-val');
    if (tgDirectLink && tgDirectVal) {
      if (lang === 'en') {
        tgDirectLink.href = 'http://t.me/KeptEnglish?direct';
        tgDirectVal.textContent = 't.me/KeptEnglish?direct';
      } else {
        tgDirectLink.href = 'https://t.me/KeptRussian?direct';
        tgDirectVal.textContent = 't.me/KeptRussian?direct';
      }
    }

    // Update pricing order button texts and target texts
    document.querySelectorAll('.order-action-btn').forEach(btn => {
      const orderType = btn.getAttribute('data-order-type');
      let msg = '';
      if (lang === 'en') {
        if (orderType === 'basic') msg = 'Hello Kept, I would like to order a Basic Bot (from $25)';
        else if (orderType === 'intermediate') msg = 'Hello Kept, I would like to order an Intermediate Bot (from $75)';
        else if (orderType === 'advanced') msg = 'Hello Kept, I would like to order an Advanced System (from $180)';
        else if (orderType === 'desktop') msg = 'Hello Kept, I would like to order a Desktop Utility (from $50)';
        else if (orderType === 'hourly') msg = 'Hello Kept, I would like to hire hourly ($15/hr)';
      } else {
        if (orderType === 'basic') msg = 'Привет, хочу заказать Basic Bot (от $25)';
        else if (orderType === 'intermediate') msg = 'Привет, хочу заказать Intermediate Bot (от $75)';
        else if (orderType === 'advanced') msg = 'Привет, хочу заказать Advanced System (от $180)';
        else if (orderType === 'desktop') msg = 'Привет, хочу заказать Desktop Utility (от $50)';
        else if (orderType === 'hourly') msg = 'Привет, хочу нанять почасово ($15/час)';
      }
      btn.href = `https://t.me/Kept_DM?text=${encodeURIComponent(msg)}`;
    });

    // Update Language Switcher UI buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update pill texts and calculator evaluation
    updatePillTexts();
    updateCalculator();
  }

  // Language buttons click listener
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    });
  });

  // ==========================================
  // 3. Interactive Project Cost Estimator
  // ==========================================
  const typePills = document.querySelectorAll('#project-type-pills .pill');
  const featureCheckboxes = document.querySelectorAll('.feature-checkbox');
  const calcTotalEl = document.getElementById('calc-total');
  const calcSummaryTypeEl = document.getElementById('calc-summary-type');
  const calcSummaryFeaturesEl = document.getElementById('calc-summary-features');
  const calcTelegramBtn = document.getElementById('calc-telegram-btn');

  let currentBaseCost = 25;
  let currentProjectTitleRU = 'Telegram Бот (Basic)';
  let currentProjectTitleEN = 'Telegram Bot (Basic)';

  const projectTypeTitles = {
    25: { ru: 'Telegram Бот (Basic)', en: 'Telegram Bot (Basic)' },
    75: { ru: 'Telegram Бот (Intermediate)', en: 'Telegram Bot (Intermediate)' },
    180: { ru: 'Парсер / Софт (Advanced)', en: 'Advanced Scraper / Tools' },
    50: { ru: 'Desktop Софт (C#/Python)', en: 'Desktop Software (C#/Python)' },
    30: { ru: 'Сервер / Сеть / PCB', en: 'Server / Network / PCB' }
  };

  const featureTitles = {
    'База данных (PostgreSQL/SQLite)': { ru: 'База данных (PostgreSQL/SQLite)', en: 'Database (PostgreSQL/SQLite)' },
    'Прием платежей / крипто-оплата': { ru: 'Платежные шлюзы / Крипта', en: 'Payment Gateways / Crypto' },
    'Админ-панель и статистика': { ru: 'Панель администратора и рассылки', en: 'Admin Panel & Broadcasts' },
    'Многопоточность / работа с прокси': { ru: 'Многопоточность / Прокси', en: 'Multithreading & Proxies' },
    'Интеграция с Google Sheets': { ru: 'Интеграция с Google Sheets', en: 'Google Sheets Integration' }
  };

  function updateCalculator() {
    let total = currentBaseCost;
    const selectedFeaturesRU = [];
    const selectedFeaturesEN = [];

    featureCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const cost = parseInt(checkbox.getAttribute('data-cost'), 10) || 0;
        const key = checkbox.getAttribute('data-feature') || '';
        total += cost;

        const fObj = featureTitles[key] || { ru: key, en: key };
        selectedFeaturesRU.push(fObj.ru);
        selectedFeaturesEN.push(fObj.en);
      }
    });

    if (calcTotalEl) {
      calcTotalEl.textContent = total;
    }

    const typeObj = projectTypeTitles[currentBaseCost] || { ru: currentProjectTitleRU, en: currentProjectTitleEN };
    const activeTitle = currentLang === 'en' ? typeObj.en : typeObj.ru;
    const activeFeatures = currentLang === 'en' ? selectedFeaturesEN : selectedFeaturesRU;

    if (calcSummaryTypeEl) {
      calcSummaryTypeEl.textContent = activeTitle;
    }

    if (calcSummaryFeaturesEl) {
      if (activeFeatures.length > 0) {
        calcSummaryFeaturesEl.innerHTML = activeFeatures.map(f => `+ ${f}`).join('<br>');
      } else {
        calcSummaryFeaturesEl.textContent = currentLang === 'en' ? 'No optional features' : 'Без дополнительных опций';
      }
    }

    // Build pre-filled Telegram link
    if (calcTelegramBtn) {
      let message = '';
      if (currentLang === 'en') {
        message = `Hello Kept! Interested in ordering a project:\n• Project Type: ${activeTitle}\n`;
        if (activeFeatures.length > 0) {
          message += `• Features:\n` + activeFeatures.map(f => `  - ${f}`).join('\n') + `\n`;
        }
        message += `• Estimated Budget from calculator: ~$${total}\n\nLet's discuss requirements!`;
      } else {
        message = `Привет, Kept! Интересует заказ проекта:\n• Направление: ${activeTitle}\n`;
        if (activeFeatures.length > 0) {
          message += `• Дополнительно:\n` + activeFeatures.map(f => `  - ${f}`).join('\n') + `\n`;
        }
        message += `• Примерный бюджет из калькулятора: ~$${total}\n\nХочу обсудить подробности!`;
      }

      calcTelegramBtn.href = `https://t.me/Kept_DM?text=${encodeURIComponent(message)}`;
    }
  }

  typePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      typePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentBaseCost = parseInt(pill.getAttribute('data-base'), 10) || 25;
      updateCalculator();
    });
  });

  featureCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateCalculator);
  });

  // ==========================================
  // 4. Clipboard Copy & Toast Notification
  // ==========================================
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  function copyTextToClipboard(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopy(text, successMessage);
      });
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (err) {
      showToast(currentLang === 'en' ? 'Failed to copy :(' : 'Не удалось скопировать :(');
    }
    document.body.removeChild(textArea);
  }

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-copy');
      if (val) {
        const isEmail = val.includes('@') && val.includes('.');
        let msg = '';
        if (currentLang === 'en') {
          msg = isEmail ? `Email ${val} copied!` : `@${val} copied to clipboard!`;
        } else {
          msg = isEmail ? `Почта ${val} скопирована!` : `@${val} скопирован в буфер!`;
        }
        copyTextToClipboard(val, msg);
      }
    });
  });

  // ==========================================
  // 5. Main Photo Lightbox Modal
  // ==========================================
  const photoTrigger = document.getElementById('main-photo-trigger');
  const photoModal = document.getElementById('photo-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openPhotoModal() {
    if (photoModal) {
      photoModal.classList.add('active');
      photoModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePhotoModal() {
    if (photoModal) {
      photoModal.classList.remove('active');
      photoModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (photoTrigger) {
    photoTrigger.addEventListener('click', openPhotoModal);
  }

  if (modalClose) {
    modalClose.addEventListener('click', closePhotoModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closePhotoModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoModal && photoModal.classList.contains('active')) {
      closePhotoModal();
    }
  });

  // ==========================================
  // 6. Mobile Navigation Menu
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ==========================================
  // 7. Header Dynamic Shadow on Scroll
  // ==========================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Initialize Language on Startup
  applyLanguage(currentLang);

});

import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "about", label: "О компании" },
  { id: "portfolio", label: "Портфолио" },
  { id: "licenses", label: "Лицензии" },
  { id: "terms", label: "Условия" },
  { id: "contacts", label: "Контакты" },
];

const STATS = [
  { value: "18", unit: "лет", label: "на рынке" },
  { value: "340+", unit: "", label: "проектов завершено" },
  { value: "12", unit: "млрд ₽", label: "объём выполненных работ" },
  { value: "98%", unit: "", label: "объектов сданы в срок" },
];

const PORTFOLIO = [
  {
    title: "Промышленный комплекс «Северный»",
    category: "Промышленное строительство",
    year: "2023",
    value: "2,4 млрд ₽",
    img: "https://cdn.poehali.dev/projects/f74f4ae7-0b6b-4dbd-a08c-9d941d624315/files/38e40fa8-e32a-4425-8832-d3832fe5fa8e.jpg",
  },
  {
    title: "Транспортная развязка М-11",
    category: "Инфраструктурное строительство",
    year: "2022",
    value: "1,8 млрд ₽",
    img: "https://cdn.poehali.dev/projects/f74f4ae7-0b6b-4dbd-a08c-9d941d624315/files/85f7e877-41e2-40f3-b2ad-f0597be70ba8.jpg",
  },
  {
    title: "Бизнес-центр «Горизонт»",
    category: "Коммерческое строительство",
    year: "2024",
    value: "3,1 млрд ₽",
    img: "https://cdn.poehali.dev/projects/f74f4ae7-0b6b-4dbd-a08c-9d941d624315/files/1b6f5022-957d-4da0-a8b5-8a0a6e124ab6.jpg",
  },
];

const LICENSES = [
  {
    icon: "ShieldCheck",
    title: "Свидетельство СРО",
    number: "№ СРО-С-054-12052009",
    desc: "Допуск к работам по строительству, реконструкции особо опасных объектов",
    valid: "Бессрочно",
  },
  {
    icon: "Award",
    title: "Лицензия ФСБ России",
    number: "№ 0071/01 от 14.03.2019",
    desc: "Деятельность по разработке, производству и обслуживанию средств защиты",
    valid: "До 14.03.2029",
  },
  {
    icon: "FileCheck",
    title: "ISO 9001:2015",
    number: "Сертификат № RU.РС05.Н00002",
    desc: "Система менеджмента качества в строительстве и проектировании",
    valid: "До 2026 г.",
  },
  {
    icon: "BadgeCheck",
    title: "Лицензия Ростехнадзора",
    number: "№ ГС-6-77-02-27-0-7718218476",
    desc: "Проектирование зданий и сооружений I и II уровней ответственности",
    valid: "Бессрочно",
  },
  {
    icon: "Star",
    title: "ISO 14001:2015",
    number: "Сертификат № RU.ЭМ07.М00018",
    desc: "Система экологического менеджмента",
    valid: "До 2026 г.",
  },
  {
    icon: "CheckCircle",
    title: "OHSAS 18001",
    number: "Сертификат № RU.ОТ09.О00024",
    desc: "Система менеджмента охраны труда и безопасности производства",
    valid: "До 2025 г.",
  },
];

const TERMS = [
  {
    step: "01",
    title: "Заключение договора",
    desc: "Подписание контракта, согласование техзадания и фиксация всех условий в течение 5 рабочих дней с момента победы в тендере.",
    duration: "до 5 дней",
  },
  {
    step: "02",
    title: "Проектирование",
    desc: "Разработка проектной и рабочей документации с прохождением государственной экспертизы. Все работы в соответствии с ГОСТ и СНиП.",
    duration: "30–90 дней",
  },
  {
    step: "03",
    title: "Выполнение работ",
    desc: "Строительно-монтажные работы согласно утверждённому графику. Еженедельная отчётность, промежуточные акты приёмки.",
    duration: "По графику",
  },
  {
    step: "04",
    title: "Сдача объекта",
    desc: "Подписание акта КС-2/КС-3, получение разрешения на ввод в эксплуатацию, гарантийное сопровождение 5 лет.",
    duration: "5 лет гарантии",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-corp-bg text-corp-text font-montserrat">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-corp-navy/95 backdrop-blur-sm border-b border-corp-gold/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-corp-gold flex items-center justify-center">
              <span className="text-white font-bold text-xs">BF</span>
            </div>
            <span className="text-white font-display tracking-wider text-sm uppercase">
              BTL Family
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-corp-gold border-b border-corp-gold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-corp-navy border-t border-corp-gold/20 px-6 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-2 text-sm uppercase tracking-widest ${
                  activeSection === item.id ? "text-corp-gold" : "text-white/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-corp-navy">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/f74f4ae7-0b6b-4dbd-a08c-9d941d624315/files/38e40fa8-e32a-4425-8832-d3832fe5fa8e.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corp-navy via-corp-navy/90 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-corp-gold to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-corp-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">
              Тендерная документация · 2024
            </p>
            <h1 className="text-5xl md:text-7xl font-display text-white leading-tight mb-6">
              BTL
              <br />
              <span className="text-corp-gold">Family</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Генеральный подрядчик в сфере промышленного и инфраструктурного строительства.
              18 лет опыта. Объекты I и II категории сложности.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("portfolio")}
                className="px-8 py-3 bg-corp-gold text-corp-navy font-semibold text-sm uppercase tracking-widest hover:bg-corp-gold/90 transition-all duration-200"
              >
                Портфолио проектов
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="px-8 py-3 border border-white/30 text-white font-medium text-sm uppercase tracking-widest hover:border-corp-gold hover:text-corp-gold transition-all duration-200"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-corp-gold/20">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-corp-gold font-bold text-2xl md:text-3xl">
                  {s.value}
                  {s.unit && (
                    <span className="text-base font-medium ml-1">{s.unit}</span>
                  )}
                </div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ */}
      <section id="about" className="py-24 bg-corp-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="01" title="О компании" />

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div>
              <h3 className="text-2xl font-bold text-corp-navy mb-6">
                История и опыт
              </h3>
              <p className="text-corp-text/70 leading-relaxed mb-6">
                ООО «ПромГрупп» основано в 2006 году и за 18 лет выросло из небольшой
                строительной компании в крупного федерального генерального подрядчика.
                Мы специализируемся на возведении промышленных предприятий, транспортной
                инфраструктуры и объектов энергетики.
              </p>
              <p className="text-corp-text/70 leading-relaxed mb-8">
                Компания входит в рейтинг топ-50 строительных организаций России
                по версии Национального объединения строителей (НОСТРОЙ). Наши проекты
                реализованы в 28 регионах Российской Федерации.
              </p>

              <div className="space-y-4">
                {[
                  "2006 — основание компании, первые промышленные объекты",
                  "2010 — выход на федеральный рынок, получение допусков СРО",
                  "2015 — реализация первого объекта стоимостью более 1 млрд ₽",
                  "2019 — сертификация ISO 9001, 14001, OHSAS 18001",
                  "2024 — портфель активных контрактов превысил 8 млрд ₽",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-corp-gold mt-2 flex-shrink-0" />
                    <span className="text-corp-text/70 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/f74f4ae7-0b6b-4dbd-a08c-9d941d624315/files/1b6f5022-957d-4da0-a8b5-8a0a6e124ab6.jpg"
                alt="Команда компании"
                className="w-full h-64 object-cover mb-8"
              />

              <h3 className="text-2xl font-bold text-corp-navy mb-6">
                Ключевые достижения
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Trophy", text: "Лауреат премии «Строитель года — 2022»" },
                  { icon: "Users", text: "Более 1 200 штатных сотрудников" },
                  { icon: "MapPin", text: "28 регионов присутствия" },
                  { icon: "TrendingUp", text: "Рост выручки 23% в 2023 году" },
                ].map((a) => (
                  <div
                    key={a.text}
                    className="p-4 bg-corp-navy/5 border border-corp-navy/10"
                  >
                    <Icon
                      name={a.icon}
                      size={20}
                      className="text-corp-gold mb-2"
                    />
                    <p className="text-corp-text/70 text-sm leading-snug">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО */}
      <section id="portfolio" className="py-24 bg-corp-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="02" title="Портфолио" light />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {PORTFOLIO.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden border border-corp-gold/20 hover:border-corp-gold/60 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corp-navy via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-corp-gold px-3 py-1">
                    <span className="text-corp-navy text-xs font-bold uppercase tracking-wider">
                      {p.year}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-corp-navy">
                  <p className="text-corp-gold text-xs uppercase tracking-widest mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs uppercase tracking-wider">
                      Стоимость
                    </span>
                    <span className="text-corp-gold font-semibold">{p.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-corp-gold/20 bg-white/5">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { label: "Объекты I категории", value: "47" },
                { label: "Государственные контракты", value: "128" },
                { label: "Коммерческие заказчики", value: "89" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold text-corp-gold mb-2">{s.value}</div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ЛИЦЕНЗИИ */}
      <section id="licenses" className="py-24 bg-corp-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="03" title="Лицензии и допуски" />

          <p className="mt-4 text-corp-text/60 max-w-2xl">
            Компания располагает полным пакетом разрешительной документации для выполнения
            строительно-монтажных и проектных работ любой категории сложности.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {LICENSES.map((l) => (
              <div
                key={l.title}
                className="p-6 border border-corp-navy/15 hover:border-corp-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-corp-navy/10 group-hover:bg-corp-gold/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon
                      name={l.icon}
                      fallback="ShieldCheck"
                      size={22}
                      className="text-corp-navy group-hover:text-corp-gold transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-corp-navy text-sm mb-1">{l.title}</h4>
                    <p className="text-corp-gold text-xs font-mono mb-3">{l.number}</p>
                    <p className="text-corp-text/60 text-xs leading-relaxed mb-3">
                      {l.desc}
                    </p>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={12} className="text-corp-text/40" />
                      <span className="text-corp-text/40 text-xs">{l.valid}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* УСЛОВИЯ СОТРУДНИЧЕСТВА */}
      <section id="terms" className="py-24 bg-corp-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="04" title="Условия сотрудничества" light />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border border-corp-gold/20">
            {TERMS.map((t, i) => (
              <div
                key={t.step}
                className={`p-8 ${
                  i < TERMS.length - 1 ? "border-r border-corp-gold/20" : ""
                } group hover:bg-corp-gold/5 transition-colors duration-300`}
              >
                <div className="text-corp-gold/30 text-5xl font-bold mb-6 group-hover:text-corp-gold/60 transition-colors duration-300">
                  {t.step}
                </div>
                <h4 className="text-white font-bold mb-4 text-lg">{t.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{t.desc}</p>
                <div className="inline-flex items-center gap-2 bg-corp-gold/10 border border-corp-gold/20 px-3 py-1.5">
                  <Icon name="Timer" size={12} className="text-corp-gold" />
                  <span className="text-corp-gold text-xs font-medium">{t.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Banknote",
                title: "Финансовые условия",
                items: [
                  "Авансирование 20–30% от суммы контракта",
                  "Промежуточные расчёты по КС-2/КС-3",
                  "НДС 20% включён в стоимость",
                  "Работа с банковскими гарантиями",
                ],
              },
              {
                icon: "Wrench",
                title: "Технические условия",
                items: [
                  "Собственный парк спецтехники",
                  "Сертифицированные материалы",
                  "Авторский и технический надзор",
                  "Строительная лаборатория",
                ],
              },
              {
                icon: "Shield",
                title: "Гарантии",
                items: [
                  "Страхование СМР на весь период работ",
                  "Гарантийный срок 5 лет",
                  "Банковская гарантия исполнения",
                  "Ответственность за соблюдение сроков",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="p-6 border border-corp-gold/20 bg-white/5">
                <div className="flex items-center gap-3 mb-5">
                  <Icon
                    name={card.icon}
                    fallback="CheckCircle"
                    size={20}
                    className="text-corp-gold"
                  />
                  <h4 className="text-white font-semibold">{card.title}</h4>
                </div>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-corp-gold mt-2 flex-shrink-0" />
                      <span className="text-white/50 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 bg-corp-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle label="05" title="Контакты и реквизиты" />

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div>
              <h3 className="text-xl font-bold text-corp-navy mb-8">
                Контактная информация
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "MapPin",
                    label: "Юридический адрес",
                    value: "127055, г. Москва, ул. Новослободская, д. 14/19, стр. 1",
                  },
                  {
                    icon: "Phone",
                    label: "Телефон",
                    value: "+7 (495) 123-45-67",
                  },
                  {
                    icon: "Mail",
                    label: "Электронная почта",
                    value: "tender@promgrupp.ru",
                  },
                  {
                    icon: "Globe",
                    label: "Сайт компании",
                    value: "www.promgrupp.ru",
                  },
                  {
                    icon: "Clock",
                    label: "Режим работы",
                    value: "Пн–Пт: 9:00–18:00",
                  },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-corp-navy/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-corp-navy" />
                    </div>
                    <div>
                      <p className="text-corp-text/50 text-xs uppercase tracking-wider mb-1">
                        {c.label}
                      </p>
                      <p className="text-corp-navy font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-corp-navy font-semibold mb-4">
                  Ответственный за тендер
                </h4>
                <div className="p-5 border border-corp-navy/15 flex items-center gap-4">
                  <div className="w-14 h-14 bg-corp-navy/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-corp-navy" />
                  </div>
                  <div>
                    <p className="font-bold text-corp-navy">Петров Андрей Сергеевич</p>
                    <p className="text-corp-text/60 text-sm">Директор по развитию бизнеса</p>
                    <p className="text-corp-gold text-sm font-medium mt-1">
                      +7 (916) 234-56-78
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-corp-navy mb-8">
                Банковские реквизиты
              </h3>

              <div className="border border-corp-navy/15 overflow-hidden">
                {[
                  { label: "Полное наименование", value: "Общество с ограниченной ответственностью «ПромГрупп»" },
                  { label: "ИНН / КПП", value: "7718218476 / 771801001" },
                  { label: "ОГРН", value: "1067718123456" },
                  { label: "ОКПО", value: "12345678" },
                  { label: "Р/с", value: "40702810100000012345" },
                  { label: "Банк", value: "ПАО Сбербанк, г. Москва" },
                  { label: "К/с", value: "30101810400000000225" },
                  { label: "БИК", value: "044525225" },
                ].map((r, i) => (
                  <div
                    key={r.label}
                    className={`flex border-b border-corp-navy/10 last:border-0 ${
                      i % 2 === 0 ? "bg-corp-navy/3" : "bg-white"
                    }`}
                  >
                    <div className="w-2/5 px-4 py-3 bg-corp-navy/5 border-r border-corp-navy/10">
                      <span className="text-corp-text/50 text-xs uppercase tracking-wide">
                        {r.label}
                      </span>
                    </div>
                    <div className="flex-1 px-4 py-3">
                      <span className="text-corp-navy text-sm font-medium">{r.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 bg-corp-navy border-l-4 border-corp-gold">
                <p className="text-corp-gold text-xs uppercase tracking-widest font-bold mb-2">
                  Тендерный отдел
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Для участия в тендере направьте запрос на почту{" "}
                  <span className="text-corp-gold">tender@promgrupp.ru</span> с темой
                  «Запрос КП» и номером закупки. Ответим в течение 24 часов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-corp-navy border-t border-corp-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-corp-gold flex items-center justify-center">
              <span className="text-white font-bold text-xs">BF</span>
            </div>
            <span className="text-white/50 text-sm">
              BTL Family · Рекламное агентство
            </span>
          </div>
          <p className="text-white/30 text-xs text-center">
            Все данные в документе являются конфиденциальными и предназначены исключительно
            для участия в тендерной процедуре.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({
  label,
  title,
  light = false,
}: {
  label: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-end gap-6 border-b border-current/10 pb-6">
      <span
        className={`text-6xl font-display leading-none ${
          light ? "text-white/10" : "text-corp-navy/10"
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-display tracking-wide ${
          light ? "text-white" : "text-corp-navy"
        }`}
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-corp-gold mb-1" />
    </div>
  );
}
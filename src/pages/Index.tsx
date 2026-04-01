import { Heart, Leaf, Sparkles, Users, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Подходит ли ферма для маленьких детей?",
      answer:
        "Абсолютно! Наша ферма рассчитана на детей от 3 лет. Все животные дружелюбны и привыкли к людям. Для малышей есть специальные безопасные зоны контакта с кроликами и ягнятами. Альпаки обожают детей — они очень мягкие и спокойные.",
    },
    {
      question: "Как записаться на экскурсию или школьную программу?",
      answer:
        "Записаться можно через форму на сайте или по телефону. Туристические группы принимаем ежедневно, школьные группы — по предварительной записи. Рекомендуем бронировать за 1–2 недели. Для школьных групп предусмотрены специальные условия и скидки.",
    },
    {
      question: "Что включает образовательная программа для школьников?",
      answer:
        "Программа длится 2–3 часа и включает: знакомство с альпаками и историей их одомашнивания, урок о редких породах коз и овец, кормление животных, мастер-класс по работе с альпачьей шерстью и интерактивную викторину. Программа согласована с образовательными стандартами.",
    },
    {
      question: "Можно ли покормить альпак и других животных?",
      answer:
        "Да! Кормление животных — любимая часть визита для наших гостей. Специальный корм для альпак, коз, овец и кроликов включён в стоимость билета. Наши сотрудники расскажут, как правильно и безопасно угостить каждого из питомцев.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f7ef] text-[#2d3a1e]">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/bb800458-46d9-4a50-ae95-0e798f814033.jpg)`,
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e6]/80 ring-1 ring-[#c17f3b]/30 backdrop-blur rounded-full">
            <Icon name="PawPrint" size={20} className="text-[#c17f3b]" />
            <span className="font-medium text-[#2d3a1e]">Ферма «Пушистые друзья»</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О ферме", "Животные", "Программы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-[#f5f0e6]/70 ring-1 ring-[#c17f3b]/20 backdrop-blur rounded-full hover:bg-[#f5f0e6]/90 transition-colors text-[#2d3a1e] text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-[#e07b3a] text-white hover:bg-[#c96d2e] rounded-full px-6 shadow-md">Записаться</Button>
          </div>
        </nav>

        {/* Cute Colorful Alpacas Row - removed */}
        <div className="hidden">
          {/* Alpaca 1 - Pink */}
          <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg translate-y-2">
            {/* Ears */}
            <ellipse cx="28" cy="18" rx="7" ry="11" fill="#f8b4c8" transform="rotate(-15 28 18)"/>
            <ellipse cx="28" cy="18" rx="4" ry="7" fill="#f48fb1" transform="rotate(-15 28 18)"/>
            <ellipse cx="62" cy="18" rx="7" ry="11" fill="#f8b4c8" transform="rotate(15 62 18)"/>
            <ellipse cx="62" cy="18" rx="4" ry="7" fill="#f48fb1" transform="rotate(15 62 18)"/>
            {/* Head */}
            <ellipse cx="45" cy="38" rx="22" ry="24" fill="#fce4ec"/>
            {/* Fluffy top */}
            <ellipse cx="38" cy="22" rx="10" ry="8" fill="#f8bbd0"/>
            <ellipse cx="45" cy="19" rx="11" ry="8" fill="#fce4ec"/>
            <ellipse cx="53" cy="22" rx="10" ry="8" fill="#f8bbd0"/>
            {/* Eyes */}
            <circle cx="37" cy="37" r="5" fill="white"/>
            <circle cx="53" cy="37" r="5" fill="white"/>
            <circle cx="38" cy="38" r="3" fill="#1a1a2e"/>
            <circle cx="54" cy="38" r="3" fill="#1a1a2e"/>
            <circle cx="39" cy="37" r="1" fill="white"/>
            <circle cx="55" cy="37" r="1" fill="white"/>
            {/* Blush */}
            <ellipse cx="32" cy="44" rx="6" ry="4" fill="#f48fb1" opacity="0.5"/>
            <ellipse cx="58" cy="44" rx="6" ry="4" fill="#f48fb1" opacity="0.5"/>
            {/* Nose */}
            <ellipse cx="45" cy="48" rx="6" ry="4" fill="#f48fb1"/>
            <circle cx="43" cy="48" r="1.5" fill="#c2185b"/>
            <circle cx="47" cy="48" r="1.5" fill="#c2185b"/>
            {/* Smile */}
            <path d="M40 52 Q45 56 50 52" stroke="#c2185b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            {/* Body */}
            <ellipse cx="45" cy="88" rx="28" ry="22" fill="#f8bbd0"/>
            {/* Neck */}
            <rect x="37" y="58" width="16" height="16" rx="8" fill="#fce4ec"/>
            {/* Legs */}
            <rect x="24" y="104" width="10" height="6" rx="3" fill="#f48fb1"/>
            <rect x="37" y="104" width="10" height="6" rx="3" fill="#f48fb1"/>
            <rect x="50" y="104" width="10" height="6" rx="3" fill="#f48fb1"/>
            <rect x="63" y="104" width="10" height="6" rx="3" fill="#f48fb1"/>
          </svg>

          {/* Alpaca 2 - Mint/Green (tall) */}
          <svg width="100" height="125" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            {/* Ears */}
            <ellipse cx="30" cy="20" rx="8" ry="13" fill="#a5d6a7" transform="rotate(-12 30 20)"/>
            <ellipse cx="30" cy="20" rx="5" ry="8" fill="#66bb6a" transform="rotate(-12 30 20)"/>
            <ellipse cx="70" cy="20" rx="8" ry="13" fill="#a5d6a7" transform="rotate(12 70 20)"/>
            <ellipse cx="70" cy="20" rx="5" ry="8" fill="#66bb6a" transform="rotate(12 70 20)"/>
            {/* Fluffy top */}
            <ellipse cx="40" cy="24" rx="13" ry="10" fill="#c8e6c9"/>
            <ellipse cx="50" cy="20" rx="14" ry="10" fill="#e8f5e9"/>
            <ellipse cx="62" cy="24" rx="13" ry="10" fill="#c8e6c9"/>
            {/* Head */}
            <ellipse cx="50" cy="44" rx="25" ry="27" fill="#e8f5e9"/>
            {/* Eyes */}
            <circle cx="40" cy="43" r="6" fill="white"/>
            <circle cx="60" cy="43" r="6" fill="white"/>
            <circle cx="41" cy="44" r="3.5" fill="#1a1a2e"/>
            <circle cx="61" cy="44" r="3.5" fill="#1a1a2e"/>
            <circle cx="42" cy="43" r="1.2" fill="white"/>
            <circle cx="62" cy="43" r="1.2" fill="white"/>
            {/* Blush */}
            <ellipse cx="33" cy="51" rx="7" ry="4.5" fill="#a5d6a7" opacity="0.6"/>
            <ellipse cx="67" cy="51" rx="7" ry="4.5" fill="#a5d6a7" opacity="0.6"/>
            {/* Nose */}
            <ellipse cx="50" cy="55" rx="7" ry="5" fill="#a5d6a7"/>
            <circle cx="47" cy="55" r="2" fill="#388e3c"/>
            <circle cx="53" cy="55" r="2" fill="#388e3c"/>
            {/* Smile */}
            <path d="M44 60 Q50 65 56 60" stroke="#388e3c" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            {/* Body */}
            <ellipse cx="50" cy="102" rx="32" ry="24" fill="#c8e6c9"/>
            {/* Neck */}
            <rect x="41" y="67" width="18" height="20" rx="9" fill="#e8f5e9"/>
            {/* Legs */}
            <rect x="26" y="118" width="11" height="7" rx="3.5" fill="#a5d6a7"/>
            <rect x="40" y="118" width="11" height="7" rx="3.5" fill="#a5d6a7"/>
            <rect x="54" y="118" width="11" height="7" rx="3.5" fill="#a5d6a7"/>
            <rect x="68" y="118" width="11" height="7" rx="3.5" fill="#a5d6a7"/>
          </svg>

          {/* Alpaca 3 - Lavender (center, biggest) */}
          <svg width="115" height="138" viewBox="0 0 115 138" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl -translate-y-2">
            {/* Ears */}
            <ellipse cx="34" cy="22" rx="9" ry="14" fill="#ce93d8" transform="rotate(-10 34 22)"/>
            <ellipse cx="34" cy="22" rx="6" ry="9" fill="#ab47bc" transform="rotate(-10 34 22)"/>
            <ellipse cx="81" cy="22" rx="9" ry="14" fill="#ce93d8" transform="rotate(10 81 22)"/>
            <ellipse cx="81" cy="22" rx="6" ry="9" fill="#ab47bc" transform="rotate(10 81 22)"/>
            {/* Fluffy top */}
            <ellipse cx="43" cy="27" rx="15" ry="12" fill="#e1bee7"/>
            <ellipse cx="57" cy="22" rx="17" ry="12" fill="#f3e5f5"/>
            <ellipse cx="72" cy="27" rx="15" ry="12" fill="#e1bee7"/>
            {/* Head */}
            <ellipse cx="57" cy="52" rx="29" ry="31" fill="#f3e5f5"/>
            {/* Eyes */}
            <circle cx="45" cy="50" r="7" fill="white"/>
            <circle cx="69" cy="50" r="7" fill="white"/>
            <circle cx="46" cy="51" r="4" fill="#1a1a2e"/>
            <circle cx="70" cy="51" r="4" fill="#1a1a2e"/>
            <circle cx="47" cy="50" r="1.5" fill="white"/>
            <circle cx="71" cy="50" r="1.5" fill="white"/>
            {/* Blush */}
            <ellipse cx="36" cy="60" rx="8" ry="5" fill="#ce93d8" opacity="0.55"/>
            <ellipse cx="78" cy="60" rx="8" ry="5" fill="#ce93d8" opacity="0.55"/>
            {/* Nose */}
            <ellipse cx="57" cy="65" rx="8" ry="6" fill="#ce93d8"/>
            <circle cx="53" cy="65" r="2.2" fill="#7b1fa2"/>
            <circle cx="61" cy="65" r="2.2" fill="#7b1fa2"/>
            {/* Smile */}
            <path d="M50 71 Q57 77 64 71" stroke="#7b1fa2" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Body */}
            <ellipse cx="57" cy="116" rx="37" ry="27" fill="#e1bee7"/>
            {/* Neck */}
            <rect x="46" y="79" width="22" height="24" rx="11" fill="#f3e5f5"/>
            {/* Legs */}
            <rect x="28" y="133" width="13" height="5" rx="2.5" fill="#ce93d8"/>
            <rect x="44" y="133" width="13" height="5" rx="2.5" fill="#ce93d8"/>
            <rect x="60" y="133" width="13" height="5" rx="2.5" fill="#ce93d8"/>
            <rect x="76" y="133" width="13" height="5" rx="2.5" fill="#ce93d8"/>
          </svg>

          {/* Alpaca 4 - Yellow/Peach */}
          <svg width="100" height="122" viewBox="0 0 100 122" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            {/* Ears */}
            <ellipse cx="30" cy="19" rx="8" ry="12" fill="#ffe082" transform="rotate(-13 30 19)"/>
            <ellipse cx="30" cy="19" rx="5" ry="7.5" fill="#ffd740" transform="rotate(-13 30 19)"/>
            <ellipse cx="70" cy="19" rx="8" ry="12" fill="#ffe082" transform="rotate(13 70 19)"/>
            <ellipse cx="70" cy="19" rx="5" ry="7.5" fill="#ffd740" transform="rotate(13 70 19)"/>
            {/* Fluffy top */}
            <ellipse cx="40" cy="23" rx="13" ry="10" fill="#fff9c4"/>
            <ellipse cx="50" cy="19" rx="14" ry="10" fill="#fffde7"/>
            <ellipse cx="61" cy="23" rx="13" ry="10" fill="#fff9c4"/>
            {/* Head */}
            <ellipse cx="50" cy="43" rx="26" ry="28" fill="#fffde7"/>
            {/* Eyes */}
            <circle cx="39" cy="42" r="6" fill="white"/>
            <circle cx="61" cy="42" r="6" fill="white"/>
            <circle cx="40" cy="43" r="3.5" fill="#1a1a2e"/>
            <circle cx="62" cy="43" r="3.5" fill="#1a1a2e"/>
            <circle cx="41" cy="42" r="1.2" fill="white"/>
            <circle cx="63" cy="42" r="1.2" fill="white"/>
            {/* Blush */}
            <ellipse cx="32" cy="50" rx="7" ry="4.5" fill="#ffcc80" opacity="0.65"/>
            <ellipse cx="68" cy="50" rx="7" ry="4.5" fill="#ffcc80" opacity="0.65"/>
            {/* Nose */}
            <ellipse cx="50" cy="54" rx="7" ry="5" fill="#ffe082"/>
            <circle cx="47" cy="54" r="2" fill="#f57f17"/>
            <circle cx="53" cy="54" r="2" fill="#f57f17"/>
            {/* Smile */}
            <path d="M44 59 Q50 65 56 59" stroke="#f57f17" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            {/* Body */}
            <ellipse cx="50" cy="100" rx="32" ry="23" fill="#fff9c4"/>
            {/* Neck */}
            <rect x="41" y="67" width="18" height="19" rx="9" fill="#fffde7"/>
            {/* Legs */}
            <rect x="26" y="115" width="11" height="7" rx="3.5" fill="#ffe082"/>
            <rect x="40" y="115" width="11" height="7" rx="3.5" fill="#ffe082"/>
            <rect x="54" y="115" width="11" height="7" rx="3.5" fill="#ffe082"/>
            <rect x="68" y="115" width="11" height="7" rx="3.5" fill="#ffe082"/>
          </svg>

          {/* Alpaca 5 - Sky Blue */}
          <svg width="88" height="108" viewBox="0 0 88 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg translate-y-3">
            {/* Ears */}
            <ellipse cx="26" cy="17" rx="7" ry="11" fill="#81d4fa" transform="rotate(-15 26 17)"/>
            <ellipse cx="26" cy="17" rx="4" ry="7" fill="#29b6f6" transform="rotate(-15 26 17)"/>
            <ellipse cx="62" cy="17" rx="7" ry="11" fill="#81d4fa" transform="rotate(15 62 17)"/>
            <ellipse cx="62" cy="17" rx="4" ry="7" fill="#29b6f6" transform="rotate(15 62 17)"/>
            {/* Fluffy top */}
            <ellipse cx="36" cy="21" rx="11" ry="9" fill="#b3e5fc"/>
            <ellipse cx="44" cy="17" rx="12" ry="9" fill="#e1f5fe"/>
            <ellipse cx="53" cy="21" rx="11" ry="9" fill="#b3e5fc"/>
            {/* Head */}
            <ellipse cx="44" cy="38" rx="22" ry="24" fill="#e1f5fe"/>
            {/* Eyes */}
            <circle cx="35" cy="37" r="5" fill="white"/>
            <circle cx="53" cy="37" r="5" fill="white"/>
            <circle cx="36" cy="38" r="3" fill="#1a1a2e"/>
            <circle cx="54" cy="38" r="3" fill="#1a1a2e"/>
            <circle cx="37" cy="37" r="1" fill="white"/>
            <circle cx="55" cy="37" r="1" fill="white"/>
            {/* Blush */}
            <ellipse cx="30" cy="44" rx="6" ry="4" fill="#81d4fa" opacity="0.6"/>
            <ellipse cx="58" cy="44" rx="6" ry="4" fill="#81d4fa" opacity="0.6"/>
            {/* Nose */}
            <ellipse cx="44" cy="48" rx="6" ry="4" fill="#81d4fa"/>
            <circle cx="41.5" cy="48" r="1.5" fill="#0277bd"/>
            <circle cx="46.5" cy="48" r="1.5" fill="#0277bd"/>
            {/* Smile */}
            <path d="M38 52 Q44 57 50 52" stroke="#0277bd" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            {/* Body */}
            <ellipse cx="44" cy="86" rx="28" ry="22" fill="#b3e5fc"/>
            {/* Neck */}
            <rect x="36" y="58" width="16" height="16" rx="8" fill="#e1f5fe"/>
            {/* Legs */}
            <rect x="23" y="101" width="10" height="7" rx="3" fill="#81d4fa"/>
            <rect x="36" y="101" width="10" height="7" rx="3" fill="#81d4fa"/>
            <rect x="49" y="101" width="10" height="7" rx="3" fill="#81d4fa"/>
            <rect x="62" y="101" width="10" height="7" rx="3" fill="#81d4fa"/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center pb-28">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-[#f5f0e6]/80 ring-1 ring-[#c17f3b]/30 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-[#2d3a1e]">✨ Жемчужина Золотого Кольца · Суздаль</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance text-white drop-shadow-lg">Познакомьтесь с альпаками.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty drop-shadow">
            Живая ферма с альпаками, редкими породами коз, овец и кроликов — идеальное место для семейного отдыха и школьных экскурсий с образовательной программой.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-[#e07b3a] text-white hover:bg-[#c96d2e] rounded-full px-8 py-4 text-lg shadow-lg">
              Записаться на экскурсию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-[#f5f0e6]/70 ring-1 ring-[#c17f3b]/30 backdrop-blur border-0 text-[#2d3a1e] hover:bg-[#f5f0e6]/90 rounded-full px-8 py-4 text-lg"
            >
              Узнать о программах для школ
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e6]/80 ring-1 ring-[#c17f3b]/30 backdrop-blur rounded-full">
            <Heart className="w-4 h-4 text-[#e07b3a]" />
            <span className="text-sm font-medium text-[#2d3a1e]">Безопасно для детей · Животные живут в любви и заботе</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6 bg-[#f5f7ef]">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#2d3a1e]">Наша ферма</h2>
            <p className="text-lg text-[#5a6e3a] max-w-2xl mx-auto">Открытая экоферма в сердце Суздаля — там, где начинается настоящее знакомство с природой</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Alpacas */}
            <div className="rounded-2xl bg-white ring-1 ring-[#b8d4a0]/60 shadow-sm overflow-hidden text-center flex flex-col hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/b7a546d4-4512-4f2d-b096-24ce9db403c6.jpg"
                  alt="Альпаки"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col items-center flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#fff3e6] ring-1 ring-[#e07b3a]/30 mb-6">
                  <Sparkles className="w-6 h-6 text-[#e07b3a]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#2d3a1e]">Главные звёзды — альпаки</h3>
                <p className="text-[#5a6e3a] leading-relaxed">Пушистые и добрые, они обожают общение и с удовольствием едят с руки.</p>
              </div>
            </div>

            {/* Rare breeds */}
            <div className="rounded-2xl bg-white ring-1 ring-[#b8d4a0]/60 shadow-sm overflow-hidden text-center flex flex-col hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/f83949a8-4e32-4797-b1b6-62350800a4fb.jpg"
                  alt="Редкие породы"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col items-center flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#fff3e6] ring-1 ring-[#e07b3a]/30 mb-6">
                  <Icon name="Star" size={24} className="text-[#e07b3a]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#2d3a1e]">Редкие породы</h3>
                <p className="text-[#5a6e3a] leading-relaxed">Козы, овцы и кролики — уникальные породы, которых не встретишь в обычном зоопарке.</p>
              </div>
            </div>

            {/* School programs */}
            <div className="rounded-2xl bg-white ring-1 ring-[#b8d4a0]/60 shadow-sm overflow-hidden text-center flex flex-col hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/4d4e8a26-7f11-48b9-a6b8-f8fcd565b0ea.jpg"
                  alt="Школьные программы"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col items-center flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#fff3e6] ring-1 ring-[#e07b3a]/30 mb-6">
                  <Users className="w-6 h-6 text-[#e07b3a]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#2d3a1e]">Школьные программы</h3>
                <p className="text-[#5a6e3a] leading-relaxed">Образовательные экскурсии с интерактивными уроками о животноводстве и природе.</p>
              </div>
            </div>

            {/* Eco farm */}
            <div className="rounded-2xl bg-white ring-1 ring-[#b8d4a0]/60 shadow-sm overflow-hidden text-center flex flex-col hover:shadow-md transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/87ac07fc-7f26-4374-82e8-ac3ac8e5cfbb.jpg"
                  alt="Экоферма"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col items-center flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#fff3e6] ring-1 ring-[#e07b3a]/30 mb-6">
                  <Leaf className="w-6 h-6 text-[#e07b3a]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#2d3a1e]">Экоферма</h3>
                <p className="text-[#5a6e3a] leading-relaxed">Мы бережём природу и воспитываем любовь к животным у каждого гостя.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6 bg-[#fdf5ec]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-[#e8c99a]/60 shadow-sm p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-[#2d3a1e]">Ваш день на ферме</h2>
              <p className="text-xl text-[#5a6e3a] max-w-3xl mx-auto text-pretty">
                Каждый визит — это маленькое путешествие в мир живой природы.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/72a1c30d-b46b-4fa6-b137-c069ce0c0712.jpg"
                    alt="Встреча с альпаками"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-[#e07b3a]/60 mb-3">01.</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2d3a1e]">Встреча с альпаками</h3>
                  <p className="text-[#5a6e3a] leading-relaxed text-sm">
                    Знакомство с нашими главными звёздами — пушистыми альпаками. Наш гид расскажет об их характере, истории и особенностях ухода.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/97ef6775-967c-4a5c-8a29-9096d4e30013.jpg"
                    alt="Кормление животных"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-[#e07b3a]/60 mb-3">02.</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2d3a1e]">Кормление животных</h3>
                  <p className="text-[#5a6e3a] leading-relaxed text-sm">
                    Угостите альпак, редких коз и овец специальным кормом прямо с ладони. Незабываемые эмоции гарантированы — особенно для детей!
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/95dd0775-ace4-4304-b876-338cbb8f7fd0.jpg"
                    alt="Обучение и мастер-класс"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-[#e07b3a]/60 mb-3">03.</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2d3a1e]">Обучение и мастер-класс</h3>
                  <p className="text-[#5a6e3a] leading-relaxed text-sm">
                    Узнайте о стрижке альпак, их уникальной шерсти и о том, как живут редкие породы. Для школьников — интерактивный урок с викториной.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/e17bd248-466c-4624-bacc-38d188337b11.jpg"
                    alt="Прогулка по ферме"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-[#e07b3a]/60 mb-3">04.</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2d3a1e]">Прогулка по ферме</h3>
                  <p className="text-[#5a6e3a] leading-relaxed text-sm">
                    Свободная прогулка по территории, фотографии с любимцами и уютная зона отдыха с горячими напитками для родителей и педагогов.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#e07b3a] text-white hover:bg-[#c96d2e] rounded-full px-12 py-4 text-lg font-semibold shadow-md"
              >
                Записаться на экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6 bg-[#f5f7ef]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-[#b8d4a0]/60 shadow-sm p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-[#2d3a1e]">
                  Частые вопросы
                </h2>
                <p className="text-xl text-[#5a6e3a] leading-relaxed text-pretty">
                  Всё, что нужно знать перед визитом на нашу ферму — от возраста гостей до записи школьных групп.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-[#eef5e6] transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4 text-[#2d3a1e]">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-[#e07b3a]" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-[#e07b3a]" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-[#5a6e3a] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6 bg-[#fdf5ec]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-[#e8c99a]/60 shadow-sm p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-[#2d3a1e]">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#2d3a1e]">Записаться на экскурсию</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#2d3a1e]">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-[#b8d4a0] focus:ring-2 focus:ring-[#6aaa40] focus:border-transparent bg-white text-[#2d3a1e]"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#2d3a1e]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-[#b8d4a0] focus:ring-2 focus:ring-[#6aaa40] focus:border-transparent bg-white text-[#2d3a1e]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium mb-2 text-[#2d3a1e]">
                      Тип визита
                    </label>
                    <select
                      id="type"
                      className="w-full px-4 py-3 rounded-lg border border-[#b8d4a0] focus:ring-2 focus:ring-[#6aaa40] focus:border-transparent bg-white text-[#2d3a1e]"
                    >
                      <option value="">Выберите тип...</option>
                      <option value="tourist">Туристическая экскурсия</option>
                      <option value="school">Школьная группа</option>
                      <option value="family">Семейный визит</option>
                      <option value="corp">Корпоративный отдых</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#2d3a1e]">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#b8d4a0] focus:ring-2 focus:ring-[#6aaa40] focus:border-transparent resize-none bg-white text-[#2d3a1e]"
                      placeholder="Количество гостей, желаемая дата, вопросы..."
                    />
                  </div>
                  <Button className="w-full bg-[#e07b3a] text-white hover:bg-[#c96d2e] rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-[#5a6e3a] leading-relaxed text-pretty">
                    Принимаем туристов ежедневно, школьные группы — по предварительной записи. Мы ответим в течение одного рабочего дня и поможем организовать незабываемый визит.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#d4edbc] flex-shrink-0">
                        <Users className="w-5 h-5 text-[#3d7a2a]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-[#2d3a1e]">Школьным группам</h4>
                        <p className="text-[#5a6e3a] text-sm">Специальные тарифы, методические материалы, согласование с программой обучения. Группы до 30 человек.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#ffe8d0] flex-shrink-0">
                        <Heart className="w-5 h-5 text-[#e07b3a]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-[#2d3a1e]">Семьям с детьми</h4>
                        <p className="text-[#5a6e3a] text-sm">Безопасные зоны контакта, кормление животных, фотосессия с альпаками — всё включено в билет.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#f5f7ef] ring-1 ring-[#b8d4a0]/50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#d4edbc] flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#3d7a2a]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-[#2d3a1e]">Быстрый ответ</h4>
                        <p className="text-[#5a6e3a] text-sm">Отвечаем на заявки в течение 1 рабочего дня. Также можно написать в мессенджер.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6 bg-[#e8f0d8]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-[#b8d4a0]/60 shadow-sm p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="PawPrint" size={24} className="text-[#e07b3a]" />
                  <span className="text-xl font-semibold text-[#2d3a1e]">Альпака Ферма</span>
                </div>
                <p className="text-[#5a6e3a] leading-relaxed text-pretty">
                  Живая ферма альпак и редких пород животных — уникальное место для семейного отдыха и образовательных программ для школьников. Приходите, мы ждём!
                </p>
              </div>

              {/* Expedition Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#2d3a1e]">ФЕРМА</h3>
                <ul className="space-y-3">
                  {["О нас", "Наши животные", "Цены", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#5a6e3a] hover:text-[#2d3a1e] transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#2d3a1e]">ПРОГРАММЫ</h3>
                <ul className="space-y-3">
                  {["Туристам", "Школьным группам", "Семьям", "Корпоративный отдых"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#5a6e3a] hover:text-[#2d3a1e] transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#2d3a1e]">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Частые вопросы", "Как добраться", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#5a6e3a] hover:text-[#2d3a1e] transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-[#b8d4a0]/50 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4 text-[#2d3a1e]">Новости фермы и акции</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-[#f5f7ef] ring-1 ring-[#b8d4a0] border-0 text-[#2d3a1e] placeholder:text-[#5a6e3a]/60 focus:ring-2 focus:ring-[#6aaa40] focus:outline-none"
                  />
                  <Button className="bg-[#e07b3a] text-white hover:bg-[#c96d2e] rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-[#b8d4a0]/50 pt-8">
              <p className="text-[#5a6e3a] text-sm text-center">© 2026 Альпака Ферма · Суздаль · Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
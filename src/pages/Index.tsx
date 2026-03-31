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
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/c4f8ad74-6370-4946-ba9b-2f2ef3af9c4e/files/2ce1ac57-9dca-46ef-8b79-6272450e696f.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="PawPrint" size={20} />
            <span className="font-medium text-balance">Альпака Ферма</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О ферме", "Животные", "Программы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Экскурсии и образовательные программы для школ</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Познакомьтесь с альпаками.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Живая ферма с альпаками, редкими породами коз, овец и кроликов — идеальное место для семейного отдыха и школьных экскурсий с образовательной программой.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Записаться на экскурсию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о программах для школ
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Безопасно для детей · Животные живут в любви и заботе</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Alpacas */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Главные звёзды — альпаки</h3>
              <p className="text-white/80 leading-relaxed">Пушистые и добрые, они обожают общение и с удовольствием едят с руки.</p>
            </div>

            {/* Rare breeds */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Star" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Редкие породы</h3>
              <p className="text-white/80 leading-relaxed">Козы, овцы и кролики — уникальные породы, которых не встретишь в обычном зоопарке.</p>
            </div>

            {/* School programs */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Школьные программы</h3>
              <p className="text-white/80 leading-relaxed">Образовательные экскурсии с интерактивными уроками о животноводстве и природе.</p>
            </div>

            {/* Eco farm */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экоферма</h3>
              <p className="text-white/80 leading-relaxed">Мы бережём природу и воспитываем любовь к животным у каждого гостя.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш день на ферме</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Каждый визит — это маленькое путешествие в мир живой природы.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Встреча с альпаками</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Знакомство с нашими главными звёздами — пушистыми альпаками. Наш гид расскажет об их характере, истории и особенностях ухода.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Кормление животных</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Угостите альпак, редких коз и овец специальным кормом прямо с ладони. Незабываемые эмоции гарантированы — особенно для детей!
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Обучение и мастер-класс</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Узнайте о стрижке альпак, их уникальной шерсти и о том, как живут редкие породы. Для школьников — интерактивный урок с викториной.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Прогулка по ферме</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Свободная прогулка по территории, фотографии с любимцами и уютная зона отдыха с горячими напитками для родителей и педагогов.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Записаться на экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед визитом на нашу ферму — от возраста гостей до записи школьных групп.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
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
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Записаться на экскурсию</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium mb-2">
                      Тип визита
                    </label>
                    <select
                      id="type"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    >
                      <option value="">Выберите тип...</option>
                      <option value="tourist">Туристическая экскурсия</option>
                      <option value="school">Школьная группа</option>
                      <option value="family">Семейный визит</option>
                      <option value="corp">Корпоративный отдых</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Количество гостей, желаемая дата, вопросы..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Принимаем туристов ежедневно, школьные группы — по предварительной записи. Мы ответим в течение одного рабочего дня и поможем организовать незабываемый визит.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 flex-shrink-0">
                        <Users className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Школьным группам</h4>
                        <p className="text-gray-600 text-sm">Специальные тарифы, методические материалы, согласование с программой обучения. Группы до 30 человек.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 flex-shrink-0">
                        <Heart className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Семьям с детьми</h4>
                        <p className="text-gray-600 text-sm">Безопасные зоны контакта, кормление животных, фотосессия с альпаками — всё включено в билет.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 flex-shrink-0">
                        <Mail className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Быстрый ответ</h4>
                        <p className="text-gray-600 text-sm">Отвечаем на заявки в течение 1 рабочего дня. Также можно написать в мессенджер.</p>
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
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="PawPrint" size={24} />
                  <span className="text-xl font-semibold">Альпака Ферма</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Живая ферма альпак и редких пород животных — уникальное место для семейного отдыха и образовательных программ для школьников. Приходите, мы ждём!
                </p>
              </div>

              {/* Expedition Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ФЕРМА</h3>
                <ul className="space-y-3">
                  {["О нас", "Наши животные", "Цены", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОГРАММЫ</h3>
                <ul className="space-y-3">
                  {["Туристам", "Школьным группам", "Семьям", "Корпоративный отдых"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Частые вопросы", "Как добраться", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости фермы и акции</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Альпака Ферма · Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index

import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Где учиться",
      content: (
        <div id="education">
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Стать инженером по автоматизации можно через университет, колледж или онлайн-курсы. Главное — практика
            с реальным оборудованием и знание стандартов промышленной автоматизации.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 text-gray-200 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
              <div>
                <span className="text-red-400 font-semibold">ВУЗ (4–6 лет)</span> — специальности: «Автоматизация
                технологических процессов», «Мехатроника», «Электроэнергетика». Дают глубокую базу, открывают
                путь к крупным заводам.
              </div>
            </div>
            <div className="flex items-start gap-3 text-gray-200 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
              <div>
                <span className="text-red-400 font-semibold">Колледж (3–4 года)</span> — быстрый вход в профессию,
                специальности «Монтажник» или «Техник по автоматизации». Можно совмещать с работой.
              </div>
            </div>
            <div className="flex items-start gap-3 text-gray-200 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
              <div>
                <span className="text-red-400 font-semibold">Онлайн-курсы (6–18 мес.)</span> — Stepik, Coursera,
                учебные центры Siemens и ABB. Подходят для переобучения и повышения квалификации.
              </div>
            </div>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="text-red-400 font-semibold text-sm mb-1">Совет</div>
            <div className="text-gray-300 text-sm">Параллельно с учёбой сдайте сертификат Siemens TIA Portal или
              Allen-Bradley — это +20–30% к зарплате при трудоустройстве.</div>
          </div>
        </div>
      ),
    },
    {
      title: "Где работать",
      content: (
        <div id="work">
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Инженеры по автоматизации нужны везде, где есть производство. Крупнейшие работодатели —
            нефтегазовые компании, автозаводы, энергетика и системные интеграторы.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {[
              { company: "Газпром / Роснефть", type: "Нефтегаз", salary: "от ₽250к" },
              { company: "АВТОВАЗ / КамАЗ", type: "Автопром", salary: "от ₽180к" },
              { company: "Росатом / ФСК ЕЭС", type: "Энергетика", salary: "от ₽220к" },
              { company: "Системные интеграторы", type: "АСУ ТП", salary: "от ₽160к" },
              { company: "Фармацевтика (Р-Фарм, Биокад)", type: "Фарма", salary: "от ₽200к" },
              { company: "Пищевые заводы", type: "Пищепром", salary: "от ₽120к" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-red-500/20 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <div className="text-white font-semibold text-sm">{item.company}</div>
                  <div className="text-gray-400 text-xs">{item.type}</div>
                </div>
                <div className="text-red-400 font-bold text-sm font-orbitron">{item.salary}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Карьерный путь",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Карьера инженера по автоматизации строится по чёткой лестнице. Каждый шаг — это новые
            проекты, ответственность и значительный рост дохода.
          </p>
          <div className="space-y-4">
            {[
              { step: "01", title: "Стажёр / Техник", desc: "Монтаж, тестирование, поддержка — учитесь у опытных коллег", time: "0–1 год" },
              { step: "02", title: "Инженер АСУ ТП", desc: "Самостоятельное программирование ПЛК, работа на объектах", time: "1–3 года" },
              { step: "03", title: "Старший инженер", desc: "Проектирование систем, согласование с заказчиком, обучение команды", time: "3–7 лет" },
              { step: "04", title: "Главный специалист / ГИП", desc: "Руководство проектами, архитектура сложных систем, до ₽400к+", time: "7+ лет" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-red-500 font-bold text-2xl font-orbitron w-10 shrink-0">{item.step}</div>
                <div className="flex-1 bg-gray-900 border border-red-500/20 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.time}</div>
                  </div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">Обучение, работа и карьера</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Всё, что нужно знать о пути в профессию: где учиться, у каких работодателей работать
            и как расти по карьерной лестнице.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

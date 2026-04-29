const stats = [
  { value: "120 000+", label: "инженеров по автоматизации в России", icon: "👷" },
  { value: "18 000+", label: "открытых вакансий прямо сейчас", icon: "📋" },
  { value: "47%", label: "рост числа вакансий за 2023–2024 год", icon: "📈" },
  { value: "₽380к", label: "максимальная зарплата ведущего специалиста", icon: "💰" },
]

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-orbitron">
            Профессия в цифрах
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Инженер по автоматизации — одна из самых востребованных технических специальностей в России
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-red-500/20 rounded-2xl p-8 text-center hover:border-red-500/50 transition-colors glow-border"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-red-500 font-orbitron mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6 font-orbitron">Что делает инженер?</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Инженер по автоматизации — это специалист, который заставляет заводы, нефтепроводы,
                электростанции и пищевые производства работать <span className="text-red-400 font-semibold">без постоянного участия человека</span>.
              </p>
              <p>
                Он проектирует и программирует системы управления, подключает датчики и исполнительные
                механизмы, настраивает диспетчерские панели и обеспечивает надёжную работу оборудования 24/7.
              </p>
              <p>
                По сути, это <span className="text-red-400 font-semibold">мозг современного производства</span> — без таких специалистов
                промышленность встала бы.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-orbitron">Рост вакансий по годам</h3>
            {[
              { year: "2021", count: 8200, bar: 45 },
              { year: "2022", count: 10400, bar: 57 },
              { year: "2023", count: 14100, bar: 77 },
              { year: "2024", count: 18300, bar: 100 },
            ].map((item) => (
              <div key={item.year} className="flex items-center gap-4">
                <div className="w-12 text-gray-400 text-sm font-semibold">{item.year}</div>
                <div className="flex-1 bg-gray-900 rounded-full h-8 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-700 to-red-500 h-full rounded-full flex items-center justify-end pr-3"
                    style={{ width: `${item.bar}%` }}
                  >
                    <span className="text-white text-xs font-bold">{item.count.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-gray-500 text-xs text-right">* количество вакансий на HH.ru</p>
          </div>
        </div>
      </div>
    </section>
  )
}

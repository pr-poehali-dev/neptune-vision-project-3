export function InfographicSlide() {
  const salaryLevels = [
    { label: "Стажёр", value: 60, max: 380 },
    { label: "Младший", value: 110, max: 380 },
    { label: "Специалист", value: 180, max: 380 },
    { label: "Старший", value: 260, max: 380 },
    { label: "Ведущий", value: 380, max: 380 },
  ]

  const skills = [
    { name: "ПЛК (Siemens/AB)", pct: 95 },
    { name: "SCADA / HMI", pct: 85 },
    { name: "Промсети", pct: 80 },
    { name: "Схемотехника", pct: 75 },
  ]

  const career = [
    { step: "Колледж / ВУЗ", sub: "3–6 лет" },
    { step: "Стажировка", sub: "0–1 год" },
    { step: "Инженер АСУ ТП", sub: "1–4 года" },
    { step: "Ведущий / ГИП", sub: "7+ лет" },
  ]

  const employers = [
    { name: "Газпром / Роснефть", tag: "Нефтегаз", color: "border-red-500" },
    { name: "Росатом / ФСК ЕЭС", tag: "Энергетика", color: "border-orange-500" },
    { name: "АВТОВАЗ / КамАЗ", tag: "Автопром", color: "border-yellow-500" },
    { name: "Системные интеграторы", tag: "АСУ ТП", color: "border-green-500" },
  ]

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center p-4"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h1
            className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Инженер по{" "}
            <span className="text-red-500">Автоматизации</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Профессия · Зарплата · Обучение · Карьера
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-3">

          {/* KPI row — top */}
          <div className="col-span-12 grid grid-cols-4 gap-3">
            {[
              { value: "₽250к", sub: "средняя зарплата / мес" },
              { value: "18 000+", sub: "вакансий прямо сейчас" },
              { value: "+47%", sub: "рост вакансий за год" },
              { value: "2 года", sub: "до первой работы" },
            ].map((kpi, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-red-500/30 rounded-xl p-4 text-center"
              >
                <div
                  className="text-2xl md:text-3xl font-black text-red-500"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {kpi.value}
                </div>
                <div className="text-gray-400 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Salary chart */}
          <div className="col-span-12 md:col-span-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-xs text-red-500 uppercase tracking-widest mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Зарплата по опыту
            </div>
            <div className="space-y-2">
              {salaryLevels.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-20 text-xs text-gray-400 text-right shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.label}
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-full h-6 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-800 to-red-500 flex items-center justify-end pr-2"
                      style={{ width: `${(item.value / item.max) * 100}%` }}
                    >
                      <span className="text-white text-xs font-bold" style={{ fontFamily: "Orbitron, sans-serif" }}>
                        ₽{item.value}к
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="col-span-12 md:col-span-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-xs text-red-500 uppercase tracking-widest mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Ключевые навыки
            </div>
            <div className="space-y-3">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="text-gray-300">{s.name}</span>
                    <span className="text-red-400 font-bold">{s.pct}%</span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-700 to-red-400 h-2 rounded-full"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-800">
              <div className="text-xs text-gray-500 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Также нужны:</div>
              <div className="flex flex-wrap gap-1">
                {["AutoCAD", "Modbus", "Python", "SIL/Safety", "ПУЭ"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded border border-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Career path */}
          <div className="col-span-12 md:col-span-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-xs text-red-500 uppercase tracking-widest mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Путь в профессию
            </div>
            <div className="space-y-2">
              {career.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-black shrink-0" style={{ fontFamily: "Orbitron, sans-serif" }}>
                      {i + 1}
                    </div>
                    {i < career.length - 1 && <div className="w-px h-4 bg-red-500/30" />}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{c.step}</div>
                    <div className="text-gray-500 text-xs">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-800">
              <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Где учиться:</div>
              <div className="space-y-1 text-xs text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                <div>🎓 ВУЗ — «Автоматизация ТП», «Мехатроника»</div>
                <div>📚 Курсы — Siemens TIA, учебные центры ABB</div>
                <div>🏭 Колледж — Техник по автоматизации</div>
              </div>
            </div>
          </div>

          {/* Employers */}
          <div className="col-span-12 md:col-span-6 bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-xs text-red-500 uppercase tracking-widest mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Крупнейшие работодатели
            </div>
            <div className="grid grid-cols-2 gap-2">
              {employers.map((e, i) => (
                <div
                  key={i}
                  className={`border ${e.color} bg-black/40 rounded-lg p-3`}
                >
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{e.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{e.tag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="col-span-12 md:col-span-6 bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-xs text-red-500 uppercase tracking-widest mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Зарплата по регионам
            </div>
            <div className="space-y-2">
              {[
                { name: "Тюмень / ХМАО", range: "₽220–450к", w: 100 },
                { name: "Москва", range: "₽200–400к", w: 90 },
                { name: "Санкт-Петербург", range: "₽180–320к", w: 78 },
                { name: "Татарстан", range: "₽160–280к", w: 65 },
                { name: "Регионы", range: "₽90–180к", w: 42 },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-32 text-xs text-gray-400 shrink-0 text-right" style={{ fontFamily: "Inter, sans-serif" }}>
                    {r.name}
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-full h-5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-900 to-red-500 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${r.w}%` }}
                    >
                      <span className="text-white text-xs" style={{ fontFamily: "Orbitron, sans-serif" }}>{r.range}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer tag */}
        <div className="text-center mt-4 text-gray-600 text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
          Инженер по автоматизации · Профессия будущего · 2025
        </div>
      </div>
    </div>
  )
}

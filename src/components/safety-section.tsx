const regions = [
  { name: "Москва и МО", salary: "₽200–400к", demand: 95, color: "bg-red-500" },
  { name: "Санкт-Петербург", salary: "₽180–320к", demand: 85, color: "bg-red-500" },
  { name: "Тюмень / ХМАО", salary: "₽220–450к", demand: 90, color: "bg-red-500" },
  { name: "Татарстан", salary: "₽160–280к", demand: 75, color: "bg-red-600" },
  { name: "Екатеринбург", salary: "₽150–260к", demand: 70, color: "bg-red-600" },
  { name: "Регионы", salary: "₽90–180к", demand: 55, color: "bg-red-800" },
]

const tools = [
  { name: "Siemens TIA Portal", category: "ПЛК", level: 95 },
  { name: "Allen-Bradley Studio 5000", category: "ПЛК", level: 70 },
  { name: "WinCC / SCADA", category: "Визуализация", level: 85 },
  { name: "AutoCAD Electrical", category: "Проектирование", level: 75 },
  { name: "Modbus / Profinet", category: "Сети", level: 80 },
  { name: "Python / Lua (скрипты)", category: "Программирование", level: 50 },
]

export function SafetySection() {
  return (
    <section className="py-24 px-6 bg-black" id="safety">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Рынок труда
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Зарплаты по регионам и рейтинг востребованных инструментов среди работодателей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Regions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Зарплата по регионам</h3>
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-36 shrink-0">
                    <div className="text-white text-sm font-semibold">{region.name}</div>
                    <div className="text-red-400 text-xs font-orbitron">{region.salary}</div>
                  </div>
                  <div className="flex-1 bg-gray-900 rounded-full h-6 overflow-hidden">
                    <div
                      className={`${region.color} h-full rounded-full flex items-center justify-end pr-2`}
                      style={{ width: `${region.demand}%` }}
                    >
                      <span className="text-white text-xs font-bold">{region.demand}%</span>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-gray-500 text-xs text-right">* индекс спроса (100 = максимум)</p>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Востребованные инструменты</h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <span className="text-white font-semibold text-sm">{tool.name}</span>
                      <span className="ml-2 text-gray-500 text-xs bg-gray-800 px-2 py-0.5 rounded">{tool.category}</span>
                    </div>
                    <span className="text-red-400 font-bold text-sm font-orbitron">{tool.level}%</span>
                  </div>
                  <div className="bg-gray-900 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-700 to-red-400 h-full rounded-full"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-gray-500 text-xs text-right">* % вакансий, упоминающих инструмент</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

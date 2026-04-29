import { Card, CardContent } from "@/components/ui/card"

const salaryData = [
  { level: "Стажёр", salary: 60, color: "bg-red-900", years: "0–1 год" },
  { level: "Младший", salary: 110, color: "bg-red-700", years: "1–2 года" },
  { level: "Специалист", salary: 180, color: "bg-red-600", years: "2–4 года" },
  { level: "Старший", salary: 260, color: "bg-red-500", years: "4–7 лет" },
  { level: "Ведущий", salary: 380, color: "bg-red-400", years: "7+ лет" },
]

const industries = [
  { name: "Нефть и газ", premium: "+40%", icon: "🛢️" },
  { name: "Автомобилестроение", premium: "+25%", icon: "🚗" },
  { name: "Фармацевтика", premium: "+30%", icon: "💊" },
  { name: "Пищевая промышленность", premium: "+15%", icon: "🏭" },
  { name: "Энергетика", premium: "+35%", icon: "⚡" },
  { name: "Металлургия", premium: "+20%", icon: "⚙️" },
]

export function TechnologySection() {
  const maxSalary = Math.max(...salaryData.map((d) => d.salary))

  return (
    <section className="py-24 px-6 bg-black" id="salary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Зарплата</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Реальные цифры по уровням опыта — от стажёра до ведущего инженера
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bar chart */}
          <div className="space-y-4">
            {salaryData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-28 text-right">
                  <div className="text-white font-semibold text-sm">{item.level}</div>
                  <div className="text-gray-500 text-xs">{item.years}</div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-full h-10 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full flex items-center justify-end pr-4 transition-all duration-1000`}
                    style={{ width: `${(item.salary / maxSalary) * 100}%` }}
                  >
                    <span className="text-white font-bold text-sm font-orbitron">₽{item.salary}к</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-gray-500 text-xs mt-4 text-right">* медианные значения, руб./мес.</p>
          </div>

          {/* Industry premiums */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Надбавки по отраслям</h3>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <Card key={index} className="bg-gray-900 border-red-500/20 hover:border-red-500/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <div className="text-white font-semibold text-sm mb-1">{industry.name}</div>
                    <div className="text-red-400 font-bold text-xl font-orbitron">{industry.premium}</div>
                    <div className="text-gray-500 text-xs">к базовой ставке</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

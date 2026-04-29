import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Программирование ПЛК",
    description: "Разработка программ для промышленных контроллеров Siemens, Allen-Bradley, ОВЕН. Основа профессии.",
    icon: "cpu",
    badge: "Ключевой навык",
  },
  {
    title: "Электрика и схемотехника",
    description: "Чтение и разработка принципиальных схем, подключение оборудования, монтаж шкафов управления.",
    icon: "zap",
    badge: "База",
  },
  {
    title: "SCADA и HMI",
    description: "Разработка систем диспетчеризации и операторских панелей: WinCC, FactoryTalk, MasterSCADA.",
    icon: "monitor",
    badge: "Визуализация",
  },
  {
    title: "Промышленные сети",
    description: "Настройка Profibus, Profinet, Modbus, EtherNet/IP. Интеграция оборудования в единую сеть.",
    icon: "network",
    badge: "Интеграция",
  },
  {
    title: "Пуско-наладочные работы",
    description: "Запуск оборудования на объекте, отладка программ, калибровка датчиков и исполнительных механизмов.",
    icon: "settings",
    badge: "На объекте",
  },
  {
    title: "Промышленная безопасность",
    description: "Знание норм ПУЭ, ПТЭ, охрана труда. Работа с системами аварийной остановки (SIL/ATEX).",
    icon: "shield",
    badge: "Сертификат",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-orbitron">Ключевые навыки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что должен уметь инженер по автоматизации, чтобы стать востребованным специалистом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "cpu" && "🖥️"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "monitor" && "📊"}
                    {feature.icon === "network" && "🔗"}
                    {feature.icon === "settings" && "⚙️"}
                    {feature.icon === "shield" && "🛡️"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

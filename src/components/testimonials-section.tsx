import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Воронов",
    role: "Ведущий инженер АСУ ТП, Лукойл",
    initials: "АВ",
    content:
      "Начинал с зарплаты 65к на заводе. Через 5 лет получаю 320к в нефтянке. Профессия реально растёт — заводы автоматизируются и хороших специалистов не хватает.",
  },
  {
    name: "Дмитрий Харченко",
    role: "Инженер АСУ ТП, системный интегратор",
    initials: "ДХ",
    content:
      "После колледжа пошёл на курсы Siemens, через полгода взяли на работу. Сейчас объезжаю объекты по всей России — интересно и платят командировочные сверху.",
  },
  {
    name: "Мария Синицына",
    role: "SCADA-разработчик, Росатом",
    initials: "МС",
    content:
      "Казалось, это сугубо мужская профессия. Но на деле — программирование, проектирование, аналитика. Сейчас веду проекты на АЭС и зарабатываю больше большинства айтишников.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Говорят специалисты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальный опыт людей, которые уже работают инженерами по автоматизации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="text-red-500 text-4xl mb-4">"</div>
                <p className="text-card-foreground mb-6 leading-relaxed text-base">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

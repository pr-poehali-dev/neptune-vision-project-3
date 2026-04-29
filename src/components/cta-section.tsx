import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-orbitron text-balance">
            Готов стать инженером?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Профессия инженера по автоматизации — стабильная, высокооплачиваемая и нужная стране.
            Начни путь в профессию уже сегодня.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-red-500 font-orbitron">₽250к</div>
              <div className="text-sm text-muted-foreground">средняя зарплата</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-red-500 font-orbitron">18 000+</div>
              <div className="text-sm text-muted-foreground">вакансий сейчас</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-red-500 font-orbitron">2 года</div>
              <div className="text-sm text-muted-foreground">до первой работы</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Найти курсы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Смотреть вакансии
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

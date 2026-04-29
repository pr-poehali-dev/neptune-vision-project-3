import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Нужно ли высшее образование?",
      answer:
        "Не обязательно. Многие успешные специалисты начинали с колледжа или курсов. Работодатели смотрят прежде всего на практические навыки: умение программировать ПЛК, читать схемы, работать на объекте. Диплом ВУЗа даёт конкурентное преимущество в крупных госкорпорациях.",
    },
    {
      question: "Сколько времени занимает освоение профессии с нуля?",
      answer:
        "При наличии технической базы (электрика, IT) — 6–12 месяцев до первой работы. С нуля через колледж — 3–4 года. Онлайн-курсы + самостоятельная практика на симуляторах — от 1 года до первого трудоустройства.",
    },
    {
      question: "Нужно ли знать программирование?",
      answer:
        "Да, но это не классическое IT-программирование. Промышленные контроллеры программируются на языках стандарта МЭК 61131-3: Ladder Diagram (визуальные схемы), Structured Text (похож на Pascal), Function Block. Освоить их значительно проще, чем Python или Java.",
    },
    {
      question: "Это опасная работа?",
      answer:
        "Есть риски при работе с высоким напряжением и на объектах повышенной опасности (нефтезаводы, АЭС), но они регулируются строгими нормами охраны труда. Большую часть времени инженер работает в офисе или на пуско-наладке — это не шахта и не стройка.",
    },
    {
      question: "Можно ли работать удалённо?",
      answer:
        "Частично. SCADA-разработчики и программисты ПЛК могут работать удалённо при разработке и симуляции. Но пуско-наладочные работы всегда требуют присутствия на объекте. Многие специалисты работают в гибридном формате: офис + командировки.",
    },
    {
      question: "Какие перспективы у профессии?",
      answer:
        "Отличные. Промышленность активно роботизируется, Индустрия 4.0 только набирает обороты в России. Спрос растёт быстрее, чем выпускают специалистов — это значит стабильную занятость и рост зарплат в ближайшие 10–15 лет.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на главные вопросы о профессии инженера по автоматизации
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

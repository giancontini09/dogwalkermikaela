import { MessageCircle, ClipboardList, CalendarCheck, Camera, ArrowRight } from "lucide-react";

const steps = [
  {
    n: "1",
    color: "accent" as const,
    icon: MessageCircle,
    title: "Você entra em contato pelo WhatsApp",
    text: "Vamos conversar sobre você e seu cachorro.",
  },
  {
    n: "2",
    color: "primary" as const,
    icon: ClipboardList,
    title: "Entendemos a rotina do seu pet",
    text: "Avaliamos necessidades, comportamento e preferências.",
  },
  {
    n: "3",
    color: "accent" as const,
    icon: CalendarCheck,
    title: "Agendamos os passeios",
    text: "Dias e horários combinados de acordo com sua rotina.",
  },
  {
    n: "4",
    color: "primary" as const,
    icon: Camera,
    title: "Você acompanha tudo com segurança",
    text: "Recebe relatórios e fotos de cada passeio.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-primary md:text-4xl">
            Como <span className="text-accent">funciona</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full text-white ${
                    s.color === "accent" ? "bg-accent" : "bg-primary"
                  }`}
                >
                  <s.icon size={26} />
                </div>
                <span
                  className={`absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                    s.color === "accent" ? "bg-primary" : "bg-accent"
                  }`}
                >
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-[Poppins] text-sm font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute right-[-18px] top-6 hidden text-accent/60 md:block"
                  size={22}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

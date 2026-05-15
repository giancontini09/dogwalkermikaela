import { Clock, Frown, ShieldAlert } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Você não tem tempo",
    text: "Falta tempo suficiente para passear com ele todos os dias.",
  },
  {
    icon: Frown,
    title: "Cachorro entediado",
    text: "Seu cachorro fica ansioso ou com energia acumulada.",
  },
  {
    icon: ShieldAlert,
    title: "Insegurança",
    text: "Você se preocupa com a segurança e com quem está cuidando dele.",
  },
];

export function Problem() {
  return (
    <section className="bg-muted/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-md">
            <h2 className="font-[Poppins] text-3xl font-bold leading-tight text-primary md:text-4xl">
              A rotina corrida não pode atrapalhar o{" "}
              <span className="text-accent">bem-estar</span> do seu pet
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Falta de tempo, compromissos e imprevistos acontecem. Mas o seu cachorro precisa de
              exercícios, estímulos e atenção todos os dias.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {items.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`px-5 py-4 ${
                  i > 0 ? "sm:border-l sm:border-border" : ""
                } ${i > 0 ? "border-t sm:border-t-0" : ""} border-border`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <h3 className="mt-3 font-[Poppins] text-sm font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

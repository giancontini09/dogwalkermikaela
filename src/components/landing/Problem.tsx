import { Clock, Frown, ShieldAlert } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Sem tempo no dia a dia",
    text: "Trabalho, compromissos e o cachorro fica horas esperando para sair.",
  },
  {
    icon: Frown,
    title: "Cachorro entediado",
    text: "Energia acumulada vira ansiedade, latido e até comportamento destrutivo.",
  },
  {
    icon: ShieldAlert,
    title: "Insegurança com desconhecidos",
    text: "Você quer alguém de confiança, do bairro, que cuide de verdade do seu pet.",
  },
];

export function Problem() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-foreground md:text-4xl">
            A rotina é corrida e quem sente é o seu cachorro
          </h2>
          <p className="mt-4 text-muted-foreground">
            Se você se identifica com alguma dessas situações, esse serviço é pra você.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-[Poppins] text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Activity, Users, Zap, Repeat } from "lucide-react";

const list = [
  { icon: Activity, title: "Mais saúde", text: "Movimento regular previne obesidade e problemas articulares." },
  { icon: Users, title: "Socialização", text: "Convivência saudável com pessoas, sons e outros cães." },
  { icon: Zap, title: "Gasta energia", text: "Menos ansiedade, menos latido, menos estrago em casa." },
  { icon: Repeat, title: "Rotina previsível", text: "Cachorro com rotina é cachorro mais equilibrado." },
];

export function Benefits() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-foreground md:text-4xl">
            O que muda na vida do seu cachorro
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {list.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-[Poppins] text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

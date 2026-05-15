import { Activity, Smile, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

const list = [
  { icon: Activity, title: "Mais saúde e qualidade de vida" },
  { icon: Smile, title: "Cachorro mais calmo e equilibrado" },
  { icon: ShieldCheck, title: "Segurança com um profissional capacitado" },
  { icon: HeartHandshake, title: "Mais tranquilidade no seu dia a dia" },
  { icon: Sparkles, title: "Estímulos físicos e mentais todos os dias" },
];

export function Benefits() {
  return (
    <section className="bg-muted/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-primary md:text-4xl">
            Benefícios para o <span className="text-accent">seu cachorro</span> e{" "}
            <span className="text-accent">para você</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {list.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full text-accent">
                <Icon size={36} strokeWidth={1.5} />
              </div>
              <p className="mt-3 max-w-[10rem] text-xs font-medium text-foreground">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

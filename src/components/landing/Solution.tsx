import { PawPrint, MapPin, ClipboardList, Camera } from "lucide-react";

const cards = [
  {
    icon: PawPrint,
    color: "primary" as const,
    title: "Passeios individuais",
    text: "Seu cachorro recebe atenção total do início ao fim.",
  },
  {
    icon: MapPin,
    color: "accent" as const,
    title: "Região Higienópolis",
    text: "Atendimento em Higienópolis e bairros próximos.",
  },
  {
    icon: ClipboardList,
    color: "primary" as const,
    title: "Rotina com responsabilidade",
    text: "Respeito ao ritmo, necessidades e comportamento do seu pet.",
  },
  {
    icon: Camera,
    color: "accent" as const,
    title: "Relatórios do passeio",
    text: "Você recebe fotos e informações de como foi o passeio.",
  },
];

export function Solution() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-primary md:text-4xl">
            Passeios personalizados com foco em{" "}
            <span className="text-accent">segurança e bem-estar</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text, color }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white ${
                  color === "primary" ? "bg-primary" : "bg-accent"
                }`}
              >
                <Icon size={24} />
              </div>
              <h3 className="mt-5 font-[Poppins] text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

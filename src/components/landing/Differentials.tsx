import { Home, Heart, Eye, MessageCircle } from "lucide-react";

const items = [
  { icon: Home, title: "Morador da região", text: "Conheço cada rua e praça de Higienópolis." },
  { icon: Heart, title: "Experiência com cães", text: "De filhotes a idosos, de pequenos a grandes portes." },
  { icon: Eye, title: "Atenção total", text: "Poucos cães por passeio, foco em quem está comigo." },
  { icon: MessageCircle, title: "Comunicação direta", text: "Resposta rápida no WhatsApp, antes e depois do passeio." },
];

export function Differentials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-foreground md:text-4xl">
            Por que escolher esse dog walker?
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 font-[Poppins] text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Users, CalendarClock, FileText, MapPin } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Individuais ou em duplas",
    text: "Cachorros compatíveis passeiam juntos. Se o seu prefere sozinho, sem problema.",
  },
  {
    icon: CalendarClock,
    title: "Horário flexível",
    text: "Combinamos a melhor janela do dia para a rotina do seu pet e a sua.",
  },
  {
    icon: FileText,
    title: "Relatório pós-passeio",
    text: "Você recebe foto, trajeto e como ele se comportou. Tranquilidade total.",
  },
  {
    icon: MapPin,
    title: "Só Higienópolis",
    text: "Atendimento focado no bairro — chego rápido e conheço a região.",
  },
];

export function Solution() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-foreground md:text-4xl">
            Um serviço pensado para o seu pet
          </h2>
          <p className="mt-4 text-muted-foreground">
            Atenção genuína, segurança e rotina. Sem improviso.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
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

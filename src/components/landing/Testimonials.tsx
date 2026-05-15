import { Quote, User } from "lucide-react";

const items = [
  {
    name: "Juliana M.",
    role: "Mãe do Thor",
    text: "Excelente profissional! Meu cachorro voltou dos passeios sempre feliz e mais calmo. Me dá muita tranquilidade saber que está em boas mãos.",
  },
  {
    name: "Rafael S.",
    role: "Pai da Bela",
    text: "Super atenciosa, carinhosa e responsável. Recomendo de olhos fechados para quem busca alguém de confiança.",
  },
  {
    name: "Camila T.",
    role: "Mãe do Bento e da Mel",
    text: "O cuidado e o carinho fazem toda a diferença. Meus dois dogs adoram os passeios e eu adoro os relatórios com fotos!",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-primary md:text-4xl">
            O que os <span className="text-accent">clientes dizem</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-3xl bg-card p-6 shadow-sm">
              <Quote className="text-primary/40" size={26} />
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User size={18} />
                </span>
                <div>
                  <p className="font-[Poppins] text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

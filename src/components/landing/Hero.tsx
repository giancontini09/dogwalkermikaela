import { MessageCircle, ShieldCheck, PawPrint } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary">
            <PawPrint size={14} /> DOG WALKER EM HIGIENÓPOLIS
          </span>
          <h1 className="mt-5 font-[Poppins] text-4xl font-bold leading-[1.05] text-primary md:text-5xl lg:text-6xl">
            Passeios seguros
            <br />
            e <span className="text-foreground">cheios de carinho</span>
            <br />
            <span className="text-foreground">para o seu cachorro</span>
            <br />
            <span className="text-foreground">em Higienópolis</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Mais que passeios, ofereço cuidado profissional, atenção individual e bem-estar para o
            seu melhor amigo.
          </p>
          <div className="mt-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:opacity-90"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck size={16} className="text-primary" />
            Atendimento em Higienópolis e bairros próximos
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-44 w-44 rounded-full bg-accent/30 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-primary/10 to-accent/25 shadow-xl">
            <div className="flex h-full w-full items-center justify-center">
              <PawPrint className="text-primary/50" size={140} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

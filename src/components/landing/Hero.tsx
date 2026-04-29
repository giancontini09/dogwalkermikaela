import { MessageCircle, MapPin, PawPrint } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <MapPin size={14} /> Atendimento exclusivo em Higienópolis
          </span>
          <h1 className="mt-4 font-[Poppins] text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Passeios seguros e <span className="text-primary">felizes</span> para o seu cachorro
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Cuido do seu melhor amigo como se fosse meu. Atenção total, rotina pensada para ele e
            tranquilidade pra você — direto no bairro Higienópolis.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:opacity-90"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-3xl bg-muted shadow-xl">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <PawPrint className="text-primary/50" size={120} />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-background p-4 shadow-lg sm:block">
            <p className="text-xs font-medium text-muted-foreground">Passeios desde</p>
            <p className="font-[Poppins] text-2xl font-bold text-primary">30 min</p>
          </div>
        </div>
      </div>
    </section>
  );
}

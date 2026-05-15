import { MessageCircle, Heart, PawPrint } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function FinalCTA() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-8 shadow-lg md:px-10">
          <PawPrint className="absolute -left-2 top-2 text-accent-foreground/20" size={56} />
          <Heart
            className="absolute -right-2 -bottom-2 text-accent-foreground/20"
            size={72}
            fill="currentColor"
          />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <p className="font-[Poppins] text-lg font-semibold text-accent-foreground md:text-xl">
                Quer garantir passeios seguros e cheios de carinho para o seu cachorro?
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-semibold text-primary shadow-md transition hover:opacity-95"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
              <span className="text-xs text-accent-foreground/90">
                Resposta rápida e atendimento personalizado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

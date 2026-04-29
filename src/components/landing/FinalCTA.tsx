import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function FinalCTA() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary px-6 py-14 text-center shadow-xl md:px-12 md:py-20">
          <h2 className="font-[Poppins] text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Vamos combinar o primeiro passeio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Resposta rápida no WhatsApp. Sem compromisso, sem enrolação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition hover:opacity-90"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}

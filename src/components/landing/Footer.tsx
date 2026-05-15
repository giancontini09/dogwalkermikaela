import { PawPrint, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "./whatsapp";

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-secondary text-primary-foreground">
      <PawPrint
        className="pointer-events-none absolute -right-6 top-6 text-primary-foreground/10"
        size={140}
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <PawPrint size={20} />
              </span>
              <span className="leading-tight">
                <span className="block font-[Poppins] text-sm font-semibold">
                  Passeios <span className="text-accent">com Cuidado</span>
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.2em] text-primary-foreground/70">
                  DOG WALKER
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Passeios profissionais para cães em Higienópolis e bairros próximos, com amor,
              responsabilidade e muito cuidado.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[Poppins] text-base font-semibold text-accent">Atendimento</h3>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Higienópolis e bairros próximos
            </p>
            <p className="mt-4 text-sm font-semibold">Bairros atendidos:</p>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Santa Cecília, Consolação, Perdizes, Pacaembu, Bela Vista, Sumaré e região.
            </p>
          </div>

          <div>
            <h3 className="font-[Poppins] text-base font-semibold text-accent">Contato</h3>
            <ul className="mt-3 space-y-3 text-sm text-primary-foreground/90">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Phone size={16} /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail size={16} /> contato@passeioscomcuidado.com.br
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                  <Instagram size={16} /> @passeioscomcuidado
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-end md:items-end md:text-right">
            <PawPrint className="text-accent" size={48} />
            <p className="mt-3 max-w-[180px] font-[Poppins] text-sm font-semibold">
              Seu cachorro merece o melhor passeio!
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Passeios com Cuidado. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

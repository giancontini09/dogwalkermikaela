import { MapPin, Phone, PawPrint } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "./whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint size={18} />
          </span>
          <span className="font-[Poppins] font-semibold text-foreground">
            Dog Walker Higienópolis
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} /> Higienópolis, São Paulo
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Phone size={14} /> {WHATSAPP_DISPLAY}
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

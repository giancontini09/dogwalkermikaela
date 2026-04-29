import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/40 transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}

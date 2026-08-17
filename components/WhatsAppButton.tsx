import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="focus-ring fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-dorado text-negro shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
    </a>
  );
}

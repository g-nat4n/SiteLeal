import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/links";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-fab fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card"
    >
      <MessageCircle />
    </a>
  );
}

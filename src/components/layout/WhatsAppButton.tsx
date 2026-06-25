import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, BUSINESS } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${BUSINESS.name} on WhatsApp`}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-[#25D366] text-white
        font-display font-700 text-sm
        px-4 py-3 rounded-full
        shadow-lg
        transition-transform duration-200
        hover:-translate-y-1
        animate-float
      "
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
}
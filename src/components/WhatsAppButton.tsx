import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FIRM } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I would like to know more about your CA services."
  );
  const href = `https://wa.me/${FIRM.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20b858] transition-all duration-200 hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full">
        <MessageCircle className="w-6 h-6 fill-white" />
      </span>
      <span className="hidden group-hover:inline pr-4 text-sm font-medium whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}

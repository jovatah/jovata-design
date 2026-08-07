"use client";

import { MessageCircle } from "lucide-react";

const phone = "2349154234177";
const message =
  " Hello Jovata, I'd like to discuss an interior design project and explore how we can work together.";

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jovata on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-black/5 bg-white px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.03]"
    >
      <span className="absolute bottom-full right-0 mb-3 hidden w-[260px] rounded-sm bg-[#171717] px-4 py-3 text-[12px] leading-5 text-white shadow-lg group-hover:block">
        Let&apos;s discuss your project.
      </span>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
        <MessageCircle size={20} strokeWidth={2} />
      </span>

      <span className="hidden text-[13px] font-medium tracking-[0.08em] text-[#171717] sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}


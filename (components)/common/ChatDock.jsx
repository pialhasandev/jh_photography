"use client";

import { useState } from "react";
import { FaWhatsapp, FaFacebookMessenger, FaComments } from "react-icons/fa";

export default function ChatDock() {
  const [open, setOpen] = useState(false);

  const phone = "8801318424303";
  const message = encodeURIComponent(
    "Hi 👋 I want to book a photography session."
  );

  return (
    <div className="fixed bottom-25 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      {open && (
        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          className="
            flex items-center gap-2
            bg-green-500 text-white
            px-4 py-3 rounded-full
            shadow-lg
            backdrop-blur-md
            hover:scale-105 transition
          "
        >
          <FaWhatsapp />
          <span className="text-sm">WhatsApp</span>
        </a>
      )}

      {/* Messenger Button */}
      {open && (
        <a
          href="https://www.facebook.com/messages/t/2184630298429412"
          target="_blank"
          className="
            flex items-center gap-2
            bg-blue-600 text-white
            px-4 py-3 rounded-full
            shadow-lg
            backdrop-blur-md
            hover:scale-105 transition
          "
        >
          <FaFacebookMessenger />
          <span className="text-sm">Messenger</span>
        </a>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center justify-center
          h-14 w-14 rounded-full
          bg-green-500 text-white
          shadow-xl
          hover:scale-110 active:scale-95
          transition
          relative
        "
      >
        <FaComments size={22} />

        {/* Tooltip */}
        {!open && (
          <span className="
            absolute right-16
            bg-green-500 text-white text-xs
            px-3 py-1 rounded-md
            whitespace-nowrap
            animate-pulse
          ">
            Chat with us 👋
          </span>
        )}
      </button>
    </div>
  );
}
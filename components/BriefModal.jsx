"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import BriefChat from "./BriefChat.jsx";

const BriefModalContext = createContext(null);

export function BriefModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Закрытие по ESC
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // Блокировка скролла страницы
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <BriefModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <BriefModalOverlay onClose={close} />}
    </BriefModalContext.Provider>
  );
}

export function useBriefModal() {
  const ctx = useContext(BriefModalContext);
  if (!ctx) throw new Error("useBriefModal must be used inside BriefModalProvider");
  return ctx;
}

function BriefModalOverlay({ onClose }) {
  const overlayRef = useRef(null);

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
    >
      <div className="relative w-full max-w-lg">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute -top-11 right-0 inline-grid size-9 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-slate-400 transition hover:border-white/24 hover:text-white"
        >
          <X size={18} />
        </button>
        <BriefChat />
      </div>
    </div>
  );
}

// Кнопка-триггер — переиспользуется на всех страницах услуг.
// className и children можно переопределить через пропсы.
export function BriefModalTrigger({ label = "Обсудить проект", className, children }) {
  const { open } = useBriefModal();

  const defaultClass =
    "inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px";

  return (
    <button type="button" onClick={open} className={className ?? defaultClass}>
      {children ?? label}
    </button>
  );
}

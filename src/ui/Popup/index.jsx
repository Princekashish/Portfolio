import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

export function PopupModal({ open, onOpenChange, title, className, children }) {
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement;
      const id = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
      const onKey = (e) => {
        if (e.key === "Escape") onOpenChange(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        window.removeEventListener("keydown", onKey);
        window.clearTimeout(id);
      };
    } else {
      lastFocusedRef.current?.focus();
    }
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      aria-hidden={false}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 "
      onClick={(e) => {
        // Close when clicking on the overlay
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-zinc-900" />

      {/* Centered dialog */}
      <div className="relative z-50 flex h-screen items-center justify-center p-4 ">
        <div
          className={` rounded-3xl border border-white/10 h-[80vh] bg-background p-6 shadow-lg bg-[#292929] ${className}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground text-pretty">
              {title}
            </h2>
            <button
              ref={closeBtnRef}
              onClick={() => onOpenChange(false)}
              className="rounded-full border p-1 text-sm text-foreground/80 hover:bg-foreground/10 "
              aria-label="Close"
            >
              <X/>
            </button>
          </div>
          <div className="text-sm leading-6 text-foreground/90">{children}</div>
        </div>
      </div>
    </div>
  );
}

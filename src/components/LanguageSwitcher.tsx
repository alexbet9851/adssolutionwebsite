"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type LanguageSwitcherProps = {
  current: string;
  alternatives: Array<{ label: string; href: string }>;
  ariaLabel: string;
};

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LanguageSwitcher({
  current,
  alternatives,
  ariaLabel,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 font-rubik text-lg font-normal text-[#1a1a1a] transition-colors hover:bg-neutral-50"
      >
        <span>{current}</span>
        <ChevronDownIcon className="text-neutral-500" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-40 min-w-[88px] overflow-hidden rounded-xl border border-black/5 bg-white py-1 shadow-xl"
        >
          {alternatives.map((item) => (
            <li key={item.href} role="option" aria-selected={false}>
              <Link
                href={item.href}
                className="block px-4 py-2 font-rubik text-lg text-[#1a1a1a] transition-colors hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

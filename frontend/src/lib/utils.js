import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Renders "**text**" segments as bold for quick scanning.
export function withBold(text) {
  return text.split('**').map((part, i) =>
    i % 2 ? <strong key={i} style={{ color: '#222', fontWeight: 600 }}>{part}</strong> : part
  );
}

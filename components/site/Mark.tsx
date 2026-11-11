export function Mark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect
        x="20"
        y="20"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <rect
        x="20"
        y="20"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        transform="rotate(45 32 32)"
      />
    </svg>
  );
}

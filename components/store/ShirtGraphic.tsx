export function ShirtGraphic({
  body,
  collar,
  pocket = false,
  stripe = false,
  className = "",
  delay = "0s",
}: {
  body: string;
  collar: string;
  pocket?: boolean;
  stripe?: boolean;
  className?: string;
  delay?: string;
}) {
  return (
    <svg
      className={`tee ${className}`}
      style={{ animationDelay: delay }}
      viewBox="0 0 220 250"
      aria-hidden="true"
    >
      <ellipse className="tee-shadow" cx="110" cy="236" rx="64" ry="8" fill="rgba(21, 35, 59, 0.14)" />
      <g className="tee-body">
        <path
          fill={body}
          stroke="rgba(21, 35, 59, 0.18)"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M86 54
             C86 54 98 78 110 80
             C122 78 134 54 134 54
             L168 78
             L154 108
             L134 90
             L134 208
             Q110 224 86 208
             L86 90
             L66 108
             L52 78
             Z"
        />
        <path
          d="M96 58 Q110 82 124 58"
          fill="none"
          stroke={collar}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path d="M110 82 V206" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        {stripe ? <rect x="74" y="124" width="72" height="9" fill={collar} /> : null}
        {pocket ? <rect x="122" y="104" width="22" height="26" rx="2" fill={collar} /> : null}
      </g>
    </svg>
  );
}

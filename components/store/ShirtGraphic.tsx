function inkFor(hex: string) {
  const value = hex.replace("#", "");
  const n = Number.parseInt(value.length === 3 ? value.split("").map((c) => c + c).join("") : value, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.64 ? "#121418" : "#f6f7f9";
}

export function ShirtGraphic({
  body,
  accent,
  number,
  className = "",
}: {
  body: string;
  accent: string;
  number: string;
  className?: string;
}) {
  const ink = inkFor(body);
  const id = `jersey-${number}-${body.replace("#", "")}-${accent.replace("#", "")}`;

  return (
    <svg className={`tee ${className}`} viewBox="0 0 280 320" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-cloth`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.42" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      <ellipse className="tee-shadow" cx="140" cy="302" rx="78" ry="9" fill="rgba(0,0,0,0.45)" />
      <g className="tee-body">
        <path fill={accent} d="M86 104 L42 124 L30 164 L74 176 L96 128 Z" />
        <path fill={accent} d="M194 104 L238 124 L250 164 L206 176 L184 128 Z" />
        <path fill={body} d="M78 118 L46 132 L40 158 L78 168 Z" />
        <path fill={body} d="M202 118 L234 132 L240 158 L202 168 Z" />
        <path
          fill={body}
          d="M96 86 Q140 114 184 86 L196 118 L196 262 Q140 286 84 262 L84 118 Z"
        />
        <path fill={`url(#${id}-cloth)`} d="M96 86 Q140 114 184 86 L196 118 L196 262 Q140 286 84 262 L84 118 Z" />
        <path fill={accent} d="M88 208 H104 L100 258 L88 262 Z" />
        <path fill={accent} d="M192 208 H176 L180 258 L192 262 Z" />
        <path fill={accent} d="M98 78 L140 108 L118 70 Z" />
        <path fill={accent} d="M182 78 L140 108 L162 70 Z" />
        <path d="M114 90 Q140 112 166 90" fill="none" stroke={ink} strokeWidth="11" strokeLinecap="round" />
        <path d="M120 94 Q140 110 160 94" fill="none" stroke={body} strokeWidth="4" strokeLinecap="round" />
        <rect x="104" y="122" width="72" height="15" rx="2" fill={accent} />
        <text
          x="140"
          y="133"
          textAnchor="middle"
          fill={inkFor(accent)}
          fontFamily="Syne, Arial Black, sans-serif"
          fontSize="8"
          fontWeight="700"
          letterSpacing="1.8"
        >
          HALYARD
        </text>
        <text
          x="140"
          y="186"
          textAnchor="middle"
          fill={ink}
          fontFamily="Syne, Arial Black, sans-serif"
          fontSize="44"
          fontWeight="800"
        >
          {number}
        </text>
        <g transform="translate(124 228)">
          <rect width="8" height="8" fill={ink} />
          <rect x="8" width="8" height="8" fill={accent} />
          <rect y="8" width="8" height="8" fill={accent} />
          <rect x="8" y="8" width="8" height="8" fill={ink} />
        </g>
      </g>
    </svg>
  );
}

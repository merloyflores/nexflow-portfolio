/**
 * Portada ilustrada para cada artículo del blog — sin fotos de stock, con el
 * mismo lenguaje visual (orbes de glow + líneas finas) que ya usamos en la
 * vitrina de proyectos. Cada `kind` es un motivo abstracto ligado al tema
 * del artículo, no un ícono literal.
 */

export type CoverKind = 'web' | 'automation' | 'data' | 'signals' | 'audit';

const PALETTE: Record<CoverKind, { glow: string; line: string }> = {
  web: { glow: '#38BDF8', line: '#7DD3FC' },
  automation: { glow: '#F97316', line: '#FDBA74' },
  data: { glow: '#A78BFA', line: '#C4B5FD' },
  signals: { glow: '#34D399', line: '#6EE7B7' },
  audit: { glow: '#38BDF8', line: '#7DD3FC' },
};

function Motif({ kind, line }: { kind: CoverKind; line: string }) {
  switch (kind) {
    // Ventana de navegador con una etiqueta de precio — "cuánto cuesta un sitio"
    case 'web':
      return (
        <g stroke={line} strokeWidth="1.5" fill="none" opacity="0.9">
          <rect x="120" y="60" width="260" height="170" rx="10" />
          <line x1="120" y1="94" x2="380" y2="94" />
          <circle cx="140" cy="77" r="3" fill={line} stroke="none" />
          <circle cx="153" cy="77" r="3" fill={line} stroke="none" />
          <circle cx="166" cy="77" r="3" fill={line} stroke="none" />
          <rect x="145" y="115" width="130" height="10" rx="5" opacity="0.6" />
          <rect x="145" y="135" width="90" height="10" rx="5" opacity="0.4" />
          <path d="M300 150 h55 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-55 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10 Z" />
          <text
            x="327"
            y="180"
            textAnchor="middle"
            fontSize="18"
            fill={line}
            stroke="none"
            fontWeight="600"
          >
            $
          </text>
        </g>
      );
    // Documentos conectados por flechas — flujo automatizado de facturas
    case 'automation':
      return (
        <g stroke={line} strokeWidth="1.5" fill="none" opacity="0.9">
          <rect x="95" y="80" width="80" height="100" rx="8" />
          <line x1="112" y1="105" x2="158" y2="105" opacity="0.6" />
          <line x1="112" y1="120" x2="150" y2="120" opacity="0.4" />
          <line x1="112" y1="135" x2="158" y2="135" opacity="0.6" />
          <path
            d="M190 130 h40"
            markerEnd="url(#arrow)"
            strokeDasharray="4 4"
          />
          <circle cx="255" cy="130" r="34" />
          <path d="M241 130 a14 14 0 1 1 28 0 a14 14 0 1 1 -28 0" opacity="0.5" />
          <path
            d="M300 130 h40"
            markerEnd="url(#arrow)"
            strokeDasharray="4 4"
          />
          <rect x="345" y="80" width="80" height="100" rx="8" />
          <path d="M365 130 l10 12 20 -24" strokeWidth="2" />
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill={line} stroke="none" />
            </marker>
          </defs>
        </g>
      );
    // Panel de barras — Power BI / datos
    case 'data':
      return (
        <g stroke={line} strokeWidth="1.5" fill="none" opacity="0.9">
          <rect x="110" y="70" width="280" height="150" rx="10" />
          <line x1="110" y1="100" x2="390" y2="100" opacity="0.4" />
          <rect x="135" y="150" width="24" height="45" rx="3" opacity="0.5" fill={line} stroke="none" />
          <rect x="175" y="125" width="24" height="70" rx="3" opacity="0.7" fill={line} stroke="none" />
          <rect x="215" y="105" width="24" height="90" rx="3" fill={line} stroke="none" />
          <rect x="255" y="135" width="24" height="60" rx="3" opacity="0.6" fill={line} stroke="none" />
          <path d="M300 175 l20 -25 20 15 25 -35" strokeWidth="2" />
          <circle cx="365" cy="130" r="4" fill={line} stroke="none" />
        </g>
      );
    // Ondas concéntricas tipo radar — señales de que tu negocio necesita algo
    case 'signals':
      return (
        <g stroke={line} strokeWidth="1.5" fill="none" opacity="0.9">
          <circle cx="250" cy="145" r="18" fill={line} stroke="none" />
          <circle cx="250" cy="145" r="45" opacity="0.6" />
          <circle cx="250" cy="145" r="72" opacity="0.4" />
          <circle cx="250" cy="145" r="99" opacity="0.2" />
          <path d="M250 60 v25 M250 205 v25 M165 145 h25 M335 145 h25" opacity="0.5" />
        </g>
      );
    // Checklist con lupa — auditoría técnica
    case 'audit':
      return (
        <g stroke={line} strokeWidth="1.5" fill="none" opacity="0.9">
          <rect x="130" y="65" width="180" height="160" rx="10" />
          <path d="M155 100 l8 8 14 -16" strokeWidth="2" />
          <line x1="185" y1="104" x2="270" y2="104" opacity="0.6" />
          <path d="M155 140 l8 8 14 -16" strokeWidth="2" />
          <line x1="185" y1="144" x2="270" y2="144" opacity="0.6" />
          <path d="M155 180 l8 8 14 -16" strokeWidth="2" />
          <line x1="185" y1="184" x2="250" y2="184" opacity="0.4" />
          <circle cx="330" cy="175" r="30" />
          <line x1="351" y1="196" x2="375" y2="220" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    default:
      return null;
  }
}

export function CoverArt({
  kind,
  className = '',
}: {
  kind: CoverKind;
  className?: string;
}) {
  const { glow, line } = PALETTE[kind];
  const gradientId = `cover-gradient-${kind}`;

  return (
    <svg
      viewBox="0 0 500 290"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="25%" r="85%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.28" />
          <stop offset="55%" stopColor={glow} stopOpacity="0.08" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="500" height="290" fill="#0b1220" />
      <rect width="500" height="290" fill={`url(#${gradientId})`} />
      <Motif kind={kind} line={line} />
    </svg>
  );
}

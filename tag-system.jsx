// TAG Vacation Club — Design System
// Tokens, icons, and primitive components shared across all screens.

const TAG = {
  // Brand colors
  teal: '#0B6E6E',
  tealDark: '#084F4F',
  tealLight: '#E6F1F1',
  gold: '#D4A24C',
  goldLight: '#F5E9D1',
  coral: '#FF6B5B',
  coralDark: '#E5523F',

  // Surfaces
  bg: '#FAF7F2',
  bgWarm: '#F2EDE3',
  card: '#FFFFFF',
  ink: '#0F1B1B',
  inkSoft: '#2B3838',
  muted: '#6B7575',
  hairline: 'rgba(15,27,27,0.08)',

  // States
  success: '#2E9E6E',
  warn: '#E6A23C',
  err: '#E5484D',

  // Dark
  dBg: '#0A1414',
  dCard: '#0F1F1F',
  dInk: '#F2EDE3',
  dMuted: '#8A9595',
  dHairline: 'rgba(255,255,255,0.08)',

  // Type
  display: '"Plus Jakarta Sans", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
};

// ─────────────────────────────────────────────────────────────
// Icons — Lucide-style, 1.5px stroke, rounded caps
// ─────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20, color = 'currentColor', stroke = 1.5, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

const I = {
  home: <><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>,
  gift: <><rect x="3" y="8" width="18" height="13" rx="1"/><path d="M3 12h18M12 8v13"/><path d="M12 8c-2 0-4-1-4-3a2 2 0 014-1 2 2 0 014 1c0 2-2 3-4 3z"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
  bell: <><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></>,
  chevR: <path d="M9 6l6 6-6 6"/>,
  chevL: <path d="M15 6l-6 6 6 6"/>,
  chevD: <path d="M6 9l6 6 6-6"/>,
  star: <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 7-1z"/>,
  pin: <><path d="M12 22s-7-8-7-13a7 7 0 0114 0c0 5-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
  bed: <><path d="M3 18V6M21 18v-5a3 3 0 00-3-3H8"/><path d="M3 13h18"/><circle cx="6.5" cy="10" r="1.5"/></>,
  pool: <><path d="M2 18c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M2 22c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M6 16V5a2 2 0 014 0M14 16V5a2 2 0 014 0"/></>,
  wifi: <><path d="M2 9a15 15 0 0120 0"/><path d="M5 13a10 10 0 0114 0"/><path d="M8.5 16.5a5 5 0 017 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></>,
  spa: <><path d="M12 22c-3-4-3-9 0-13 3 4 3 9 0 13z"/><path d="M12 22c-4 0-7-3-9-7 4 0 7 3 9 7zM12 22c4 0 7-3 9-7-4 0-7 3-9 7z"/></>,
  fork: <><path d="M7 2v6a2 2 0 002 2M11 2v8"/><path d="M9 10v12M16 2v20M19 2c0 4-3 6-3 8h3"/></>,
  car: <><path d="M5 17V11l2-5h10l2 5v6"/><path d="M3 17h18v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></>,
  users: <><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M17 4a3.5 3.5 0 010 7M22 21c0-3-2-5-5-5.5"/></>,
  download: <><path d="M12 3v13M6 11l6 6 6-6"/><path d="M4 21h16"/></>,
  upload: <><path d="M12 21V8M6 13l6-6 6 6"/><path d="M4 3h16"/></>,
  qr: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v7M14 18v3M17 21h4"/></>,
  shield: <><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></>,
  card: <><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20M6 16h3"/></>,
  wallet: <><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 14h2"/></>,
  doc: <><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v5h5M9 14h6M9 17h4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  arrowR: <><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></>,
  check: <path d="M5 12l5 5L20 7"/>,
  x: <path d="M6 6l12 12M18 6L6 18"/>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  fingerprint: <><path d="M6 10a6 6 0 0112 0c0 4-1 8-3 11"/><path d="M9 12c0-2 1.5-3 3-3s3 1 3 3c0 3-1 7-3 9"/><path d="M12 8v3c0 4 0 7-2 11"/></>,
  faceid: <><path d="M3 8V5a2 2 0 012-2h3M16 3h3a2 2 0 012 2v3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3"/><circle cx="9" cy="10" r="0.6" fill="currentColor"/><circle cx="15" cy="10" r="0.6" fill="currentColor"/><path d="M12 9v4l-1.5 1.5M9 16c1 1 5 1 6 0"/></>,
  sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2"/></>,
  refresh: <><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/><path d="M3 21v-5h5"/></>,
  filter: <path d="M3 5h18l-7 9v6l-4-2v-4L3 5z"/>,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1"/></>,
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  heart: <path d="M12 21s-8-5-8-11a5 5 0 019-3 5 5 0 019 3c0 6-8 11-8 11z"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  camera: <><path d="M3 8h4l2-3h6l2 3h4v12H3z"/><circle cx="12" cy="13" r="4"/></>,
  ekit: <><path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></>,
  chat: <path d="M21 12a8 8 0 01-12 7l-5 1 1-5a8 8 0 1116-3z"/>,
};

// ─────────────────────────────────────────────────────────────
// Image placeholder — gradient "photo" with hint label
// ─────────────────────────────────────────────────────────────
const photos = {
  goa:    { g: 'linear-gradient(160deg, #FFB088 0%, #FF6B5B 45%, #5B7CBE 100%)', label: 'GOA · BEACH' },
  shimla: { g: 'linear-gradient(180deg, #5C8FA8 0%, #8AB5C7 45%, #D4DDE0 100%)', label: 'SHIMLA · HILLS' },
  agra:   { g: 'linear-gradient(165deg, #E8C988 0%, #C9956B 50%, #6E4A2E 100%)', label: 'AGRA · HERITAGE' },
  manali: { g: 'linear-gradient(180deg, #6B98BE 0%, #B0C9D4 60%, #F2EDE3 100%)', label: 'MANALI · SNOW' },
  kerala: { g: 'linear-gradient(170deg, #4A7A4A 0%, #6FA86F 50%, #C9D9A8 100%)', label: 'KERALA · BACKWATERS' },
  udaipur:{ g: 'linear-gradient(165deg, #D4A24C 0%, #8B6B8E 60%, #2F3D5E 100%)', label: 'UDAIPUR · LAKES' },
  jaipur: { g: 'linear-gradient(170deg, #E5826C 0%, #C96442 45%, #6E2A1E 100%)', label: 'JAIPUR · PINK CITY' },
  resort: { g: 'linear-gradient(180deg, #0B6E6E 0%, #4A9C9C 60%, #D4A24C 100%)', label: 'TAG · RESORT' },
};

function Photo({ kind = 'goa', height = 160, radius = 16, overlay = true, children, style = {}, label = true }) {
  const p = photos[kind] || photos.goa;
  return (
    <div style={{
      height, borderRadius: radius, background: p.g, position: 'relative',
      overflow: 'hidden', flexShrink: 0, ...style,
    }}>
      {/* subtle stripe texture so it reads as photo placeholder */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.08,
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 9px)',
      }} />
      {overlay && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
        }} />
      )}
      {label && (
        <div style={{
          position: 'absolute', top: 10, left: 12,
          fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
          fontSize: 9, letterSpacing: 1.2, color: 'rgba(255,255,255,0.85)',
          textTransform: 'uppercase',
        }}>{p.label}</div>
      )}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Primitives
// ─────────────────────────────────────────────────────────────
function Pill({ children, color = TAG.teal, bg, dark, style = {} }) {
  const _bg = bg ?? (dark ? 'rgba(255,255,255,0.08)' : color + '14');
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 10px', borderRadius: 999, background: _bg,
      color, fontFamily: TAG.body, fontSize: 11, fontWeight: 600,
      letterSpacing: 0.2, ...style,
    }}>{children}</span>
  );
}

function Button({ children, variant = 'primary', size = 'md', icon, full, style = {}, onClick }) {
  const styles = {
    primary: { bg: TAG.coral, fg: '#fff', sh: '0 6px 18px rgba(255,107,91,0.32)' },
    teal:    { bg: TAG.teal, fg: '#fff', sh: '0 6px 18px rgba(11,110,110,0.28)' },
    gold:    { bg: TAG.gold, fg: '#1B1408', sh: '0 6px 18px rgba(212,162,76,0.30)' },
    outline: { bg: 'transparent', fg: TAG.teal, sh: 'none', border: '1.5px solid ' + TAG.teal },
    ghost:   { bg: TAG.tealLight, fg: TAG.teal, sh: 'none' },
    dark:    { bg: TAG.ink, fg: '#fff', sh: '0 6px 18px rgba(15,27,27,0.18)' },
  }[variant];
  const sz = size === 'sm' ? { h: 36, fs: 13, px: 14 } : size === 'lg' ? { h: 56, fs: 16, px: 22 } : { h: 48, fs: 14, px: 18 };
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      height: sz.h, padding: `0 ${sz.px}px`, borderRadius: 12,
      background: styles.bg, color: styles.fg, border: styles.border || 'none',
      boxShadow: styles.sh, fontFamily: TAG.display, fontWeight: 600, fontSize: sz.fs,
      letterSpacing: -0.1, width: full ? '100%' : undefined, cursor: 'pointer',
      transition: 'transform .15s', ...style,
    }}>
      {icon}{children}
    </button>
  );
}

function Card({ children, style = {}, padding = 16, dark }) {
  return (
    <div style={{
      background: dark ? TAG.dCard : TAG.card,
      borderRadius: 20, padding,
      boxShadow: dark ? '0 1px 0 rgba(255,255,255,0.04)' : '0 1px 2px rgba(15,27,27,0.04), 0 8px 24px rgba(15,27,27,0.04)',
      border: dark ? '1px solid ' + TAG.dHairline : '1px solid ' + TAG.hairline,
      ...style,
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// Phone shell (matches 390x844 brief; iOS chrome via IOSStatusBar)
// ─────────────────────────────────────────────────────────────
function Phone({ children, dark, scroll = true, style = {}, hideStatus = false, time = '9:41' }) {
  return (
    <div style={{
      width: 390, height: 844, position: 'relative',
      background: dark ? TAG.dBg : TAG.bg,
      fontFamily: TAG.body,
      color: dark ? TAG.dInk : TAG.ink,
      overflow: 'hidden',
      ...style,
    }}>
      {!hideStatus && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, pointerEvents: 'none' }}>
          <IOSStatusBar dark={dark} time={time} />
        </div>
      )}
      <div style={{
        height: '100%', overflow: scroll ? 'auto' : 'hidden',
        scrollbarWidth: 'none',
      }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Bottom tab bar — floating with blur
// ─────────────────────────────────────────────────────────────
function TabBar({ active = 'home', dark, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: I.home },
    { id: 'book', label: 'Book', icon: I.search },
    { id: 'trips', label: 'Trips', icon: I.calendar },
    { id: 'offers', label: 'Offers', icon: I.gift },
    { id: 'profile', label: 'Profile', icon: I.user },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 18, left: 16, right: 16, height: 64,
      borderRadius: 28, zIndex: 40,
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      background: dark ? 'rgba(15,31,31,0.78)' : 'rgba(255,255,255,0.78)',
      boxShadow: '0 8px 28px rgba(15,27,27,0.12), 0 1px 0 rgba(255,255,255,0.5) inset',
      border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '0 8px',
    }}>
      {tabs.map(t => {
        const a = t.id === active;
        const c = a ? TAG.teal : (dark ? TAG.dMuted : TAG.muted);
        return (
          <div key={t.id} onClick={() => onChange?.(t.id)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '6px 10px', borderRadius: 18, cursor: 'pointer',
            background: a ? (dark ? 'rgba(11,110,110,0.18)' : TAG.tealLight) : 'transparent',
          }}>
            <Icon d={t.icon} size={22} color={c} stroke={a ? 2 : 1.7} />
            <div style={{ fontSize: 10, fontWeight: a ? 700 : 500, color: c, fontFamily: TAG.display, letterSpacing: 0.2 }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// AI Concierge floating bubble
// ─────────────────────────────────────────────────────────────
function Concierge({ dark, bottom = 96 }) {
  return (
    <div style={{
      position: 'absolute', bottom, right: 18, zIndex: 39,
      width: 56, height: 56, borderRadius: 28,
      background: 'linear-gradient(135deg, ' + TAG.teal + ' 0%, ' + TAG.gold + ' 100%)',
      boxShadow: '0 10px 24px rgba(11,110,110,0.35), 0 0 0 4px rgba(212,162,76,0.18)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: -8, borderRadius: 32,
        border: '2px solid ' + TAG.gold, opacity: 0.4,
        animation: 'tagPulse 2.2s ease-out infinite',
      }} />
      <Icon d={I.sparkle} size={22} color="#fff" stroke={2} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TAG Logo
// ─────────────────────────────────────────────────────────────
function TagLogo({ size = 32, dark, mono }) {
  const gold = mono ? (dark ? '#fff' : TAG.ink) : TAG.gold;
  const teal = mono ? (dark ? '#fff' : TAG.ink) : TAG.teal;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: size, height: size, borderRadius: size * 0.28,
        background: dark ? 'rgba(255,255,255,0.06)' : '#0F1B1B',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          fontFamily: TAG.display, fontWeight: 800, fontSize: size * 0.42,
          color: gold, letterSpacing: -0.5, lineHeight: 1,
        }}>TAG</div>
        <div style={{
          position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
          width: size * 0.5, height: 1, background: gold, opacity: 0.6,
        }} />
      </div>
    </div>
  );
}

// global keyframes
if (typeof document !== 'undefined' && !document.getElementById('tag-kf')) {
  const s = document.createElement('style');
  s.id = 'tag-kf';
  s.textContent = `
    @keyframes tagPulse { 0%{transform:scale(0.95);opacity:0.6} 70%{transform:scale(1.25);opacity:0} 100%{opacity:0} }
    @keyframes tagShimmer { 0%{background-position:-200px 0} 100%{background-position:200px 0} }
    @keyframes tagFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
    @keyframes tagConfetti { 0%{transform:translateY(0) rotate(0);opacity:1} 100%{transform:translateY(120px) rotate(360deg);opacity:0} }
    @keyframes tagCheck { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
    @keyframes tagFadeUp { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
    .tag-skel{background:linear-gradient(90deg,#E8E2D6 0%,#F5EFE3 50%,#E8E2D6 100%);background-size:400px 100%;animation:tagShimmer 1.4s linear infinite;border-radius:8px}
  `;
  document.head.appendChild(s);
}

Object.assign(window, {
  TAG, Icon, I, Photo, Pill, Button, Card, Phone, TabBar, Concierge, TagLogo, photos,
});

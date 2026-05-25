// Interactive prototype + Design system overview card

// ─────────────────────────────────────────────────────────────
// Interactive prototype — links the core flow with state + animation
// Splash → Onboarding → Login → Dashboard → BookSearch → BookList →
// ResortDetail → BookSummary → BookConfirm → (loop back to Dashboard)
// ─────────────────────────────────────────────────────────────
function TagPrototype() {
  const flow = [
    'splash', 'onboarding1', 'onboarding2', 'onboarding3',
    'login', 'dashboard', 'bookSearch', 'bookList',
    'resortDetail', 'bookSummary', 'bookConfirm',
  ];
  const [step, setStep] = React.useState(0);
  const [dir, setDir] = React.useState(1);

  // auto-progress splash → first onboarding
  React.useEffect(() => {
    if (step === 0) {
      const t = setTimeout(() => { setDir(1); setStep(1); }, 2400);
      return () => clearTimeout(t);
    }
  }, [step]);

  const go = (d) => {
    if (d > 0 && step < flow.length - 1) { setDir(1); setStep(step + 1); }
    else if (d < 0 && step > 0) { setDir(-1); setStep(step - 1); }
    else if (d > 0) { setDir(1); setStep(0); } // loop
  };

  const cur = flow[step];
  const screen = (() => {
    if (cur === 'splash') return <ScreenSplash />;
    if (cur === 'onboarding1') return <ScreenOnboarding slide={1} />;
    if (cur === 'onboarding2') return <ScreenOnboarding slide={2} />;
    if (cur === 'onboarding3') return <ScreenOnboarding slide={3} />;
    if (cur === 'login') return <ScreenLogin />;
    if (cur === 'dashboard') return <ScreenDashboard />;
    if (cur === 'bookSearch') return <ScreenBookSearch />;
    if (cur === 'bookList') return <ScreenBookList />;
    if (cur === 'resortDetail') return <ScreenResortDetail />;
    if (cur === 'bookSummary') return <ScreenBookSummary />;
    if (cur === 'bookConfirm') return <ScreenBookConfirm />;
    return null;
  })();

  return (
    <div style={{ width: 390, height: 844, position: 'relative', overflow: 'hidden', background: '#000' }}>
      <div key={step} style={{
        width: '100%', height: '100%',
        animation: 'tagFadeUp 0.35s cubic-bezier(.2,.7,.3,1)',
      }}>
        {screen}
      </div>

      {/* tap zones — left third = back, right third = forward.
          middle is normal interaction surface for screens, but here we layer thin invisible nav. */}
      <div onClick={() => go(-1)} style={{
        position: 'absolute', left: 0, top: 70, bottom: 70, width: 50, zIndex: 100, cursor: 'pointer',
      }} />
      <div onClick={() => go(1)} style={{
        position: 'absolute', right: 0, top: 70, bottom: 70, width: 50, zIndex: 100, cursor: 'pointer',
      }} />

      {/* Step indicator overlay */}
      <div style={{
        position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
        zIndex: 200, display: 'flex', alignItems: 'center', gap: 6,
        padding: '5px 10px', borderRadius: 999,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
        fontFamily: 'ui-monospace, Menlo', fontSize: 9,
        color: 'rgba(255,255,255,0.9)', letterSpacing: 0.8,
        pointerEvents: 'none',
      }}>
        <div style={{ width: 5, height: 5, borderRadius: 3, background: TAG.gold, animation: 'tagPulse 2s ease-out infinite' }} />
        {String(step + 1).padStart(2, '0')} / {flow.length} · {cur.toUpperCase()}
      </div>

      {/* On-card hint at first load */}
      {step <= 1 && (
        <div style={{
          position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
          zIndex: 200, padding: '6px 12px', borderRadius: 999,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          color: '#fff', fontFamily: TAG.display, fontWeight: 600, fontSize: 11,
          pointerEvents: 'none', animation: 'tagFloat 2.5s ease-in-out infinite',
        }}>Tap edges to navigate →</div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESIGN SYSTEM CARD (oversized poster, lives in its own DCSection)
// ─────────────────────────────────────────────────────────────
function DesignSystemPoster() {
  const swatches = [
    { name: 'Deep Teal', hex: '#0B6E6E', role: 'Primary · trust', c: TAG.teal, fg: '#fff' },
    { name: 'Teal Dark', hex: '#084F4F', role: 'Hover · gradient', c: TAG.tealDark, fg: '#fff' },
    { name: 'Accent Gold', hex: '#D4A24C', role: 'Premium · highlight', c: TAG.gold, fg: '#1B1408' },
    { name: 'Coral CTA', hex: '#FF6B5B', role: 'Book · action', c: TAG.coral, fg: '#fff' },
    { name: 'Off-white', hex: '#FAF7F2', role: 'Background', c: TAG.bg, fg: TAG.ink, border: true },
    { name: 'Ink', hex: '#0F1B1B', role: 'Body text', c: TAG.ink, fg: '#fff' },
    { name: 'Success', hex: '#2E9E6E', role: 'Confirmed', c: TAG.success, fg: '#fff' },
    { name: 'Warning', hex: '#E6A23C', role: 'Pending', c: TAG.warn, fg: '#fff' },
    { name: 'Error', hex: '#E5484D', role: 'Cancelled', c: TAG.err, fg: '#fff' },
  ];

  return (
    <div style={{
      width: 1240, height: 880, background: TAG.bg,
      padding: 56, fontFamily: TAG.body, color: TAG.ink, position: 'relative',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <div style={{ fontFamily: 'ui-monospace, Menlo', fontSize: 11, color: TAG.gold, letterSpacing: 3, textTransform: 'uppercase' }}>v1.0 · Foundation</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 52, color: TAG.ink, letterSpacing: -1.4, lineHeight: 1, marginTop: 6 }}>
            TAG <span style={{ color: TAG.teal }}>Design System</span>
          </div>
          <div style={{ fontFamily: TAG.body, fontSize: 15, color: TAG.muted, marginTop: 8 }}>
            Tokens, components, and motion for the Vacation Club mobile app. Built warm, premium, member-first.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 18, background: '#1B1408',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            <span style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 26, color: TAG.gold, letterSpacing: -0.8 }}>TAG</span>
            <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', width: 28, height: 1.5, background: TAG.gold }} />
          </div>
          <div>
            <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 16, color: TAG.ink }}>Vacation Club</div>
            <div style={{ fontFamily: TAG.body, fontSize: 12, color: TAG.muted, fontStyle: 'italic' }}>Your Holidays. Your Way.</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
        {/* Left column — colors + components */}
        <div>
          <SectionLabel n="01" title="Color Palette" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 24 }}>
            {swatches.map((s, i) => (
              <div key={i} style={{
                borderRadius: 16, overflow: 'hidden', background: s.c,
                border: s.border ? '1px solid ' + TAG.hairline : 'none',
                height: 100, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: s.fg }}>{s.name}</div>
                <div>
                  <div style={{ fontFamily: 'ui-monospace, Menlo', fontSize: 11, color: s.fg, opacity: 0.85, letterSpacing: 0.4 }}>{s.hex}</div>
                  <div style={{ fontFamily: TAG.body, fontSize: 11, color: s.fg, opacity: 0.7 }}>{s.role}</div>
                </div>
              </div>
            ))}
          </div>

          <SectionLabel n="02" title="Components" />
          <div style={{ background: '#fff', borderRadius: 18, padding: 20, border: '1px solid ' + TAG.hairline }}>
            {/* Buttons row */}
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
              <Button variant="primary" size="md">Book a stay</Button>
              <Button variant="teal" size="md">Continue</Button>
              <Button variant="gold" size="md">Avail offer</Button>
              <Button variant="outline" size="md">Secondary</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>

            {/* Pills row */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
              <Pill color={TAG.success}>● Active</Pill>
              <Pill color={TAG.warn}>● Pending</Pill>
              <Pill color={TAG.err}>● Cancelled</Pill>
              <Pill color={TAG.gold} bg={TAG.goldLight}>★ Member exclusive</Pill>
              <Pill color={TAG.teal}>Co-applicant</Pill>
            </div>

            {/* Card + Skeleton */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Card padding={12} style={{ background: TAG.bg }}>
                <div style={{ fontSize: 10, color: TAG.muted, letterSpacing: 0.4, fontFamily: TAG.display, fontWeight: 600 }}>CARD · ELEVATION-2</div>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, marginTop: 4 }}>Surface card</div>
                <div style={{ fontSize: 12, color: TAG.muted, marginTop: 2 }}>20px radius · soft shadow</div>
              </Card>
              <div style={{ background: '#fff', borderRadius: 18, padding: 12, border: '1px solid ' + TAG.hairline }}>
                <div style={{ fontSize: 10, color: TAG.muted, letterSpacing: 0.4, fontFamily: TAG.display, fontWeight: 600, marginBottom: 8 }}>SKELETON LOADER</div>
                <div className="tag-skel" style={{ height: 8, width: '70%', marginBottom: 6 }} />
                <div className="tag-skel" style={{ height: 8, width: '90%', marginBottom: 6 }} />
                <div className="tag-skel" style={{ height: 8, width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right column — type, spacing, motion */}
        <div>
          <SectionLabel n="03" title="Typography" />
          <div style={{ background: '#fff', borderRadius: 18, padding: 20, border: '1px solid ' + TAG.hairline, marginBottom: 24 }}>
            <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 32, letterSpacing: -0.8, lineHeight: 1.05 }}>Plus Jakarta Sans</div>
            <div style={{ fontSize: 11, color: TAG.muted, fontFamily: 'ui-monospace, Menlo', marginTop: 2 }}>Display · headings · CTAs</div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 16, paddingTop: 14, borderTop: '1px solid ' + TAG.hairline }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 32, color: TAG.ink, letterSpacing: -0.7 }}>Aa</div>
              <div>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>Display / 32 / Bold</div>
                <div style={{ fontSize: 11, color: TAG.muted }}>Hero titles · letter-spacing −0.6</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 12 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 22, color: TAG.ink, letterSpacing: -0.4 }}>Aa</div>
              <div>
                <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14 }}>Title / 22 / SemiBold</div>
                <div style={{ fontSize: 11, color: TAG.muted }}>Section headers · screen titles</div>
              </div>
            </div>

            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid ' + TAG.hairline }}>
              <div style={{ fontFamily: TAG.body, fontWeight: 500, fontSize: 24 }}>Inter</div>
              <div style={{ fontSize: 11, color: TAG.muted, fontFamily: 'ui-monospace, Menlo', marginTop: 2 }}>Body · labels · numbers</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 12 }}>
                <div style={{ fontFamily: TAG.body, fontWeight: 400, fontSize: 22 }}>Aa</div>
                <div>
                  <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14 }}>Body / 15 / Regular</div>
                  <div style={{ fontSize: 11, color: TAG.muted }}>Default reading text · 1.5 leading</div>
                </div>
              </div>
            </div>
          </div>

          <SectionLabel n="04" title="Tokens" />
          <div style={{ background: '#fff', borderRadius: 18, padding: 20, border: '1px solid ' + TAG.hairline }}>
            {/* Radii */}
            <div style={{ fontSize: 10, color: TAG.muted, letterSpacing: 0.4, fontFamily: TAG.display, fontWeight: 600, marginBottom: 10 }}>RADIUS</div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end', marginBottom: 18 }}>
              {[{r:12,l:'button'},{r:16,l:'small card'},{r:20,l:'card'},{r:999,l:'pill'}].map((x,i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: x.r === 999 ? 56 : 44, height: 44, background: TAG.tealLight, borderRadius: x.r === 999 ? 999 : x.r, border: '1.5px solid ' + TAG.teal }} />
                  <div style={{ fontSize: 10, fontFamily: 'ui-monospace, Menlo', color: TAG.muted }}>{x.r === 999 ? '∞' : x.r} · {x.l}</div>
                </div>
              ))}
            </div>

            {/* Spacing scale */}
            <div style={{ fontSize: 10, color: TAG.muted, letterSpacing: 0.4, fontFamily: TAG.display, fontWeight: 600, marginBottom: 10 }}>SPACING</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 18 }}>
              {[4,8,12,16,20,24,32,48].map((s,i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 18, height: s, background: TAG.gold, borderRadius: 2 }} />
                  <div style={{ fontSize: 9, fontFamily: 'ui-monospace, Menlo', color: TAG.muted }}>{s}</div>
                </div>
              ))}
            </div>

            {/* Motion */}
            <div style={{ fontSize: 10, color: TAG.muted, letterSpacing: 0.4, fontFamily: TAG.display, fontWeight: 600, marginBottom: 10 }}>MOTION</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: TAG.muted }}>Press</span><span style={{ fontFamily: 'ui-monospace, Menlo' }}>scale 0.97</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: TAG.muted }}>Tab</span><span style={{ fontFamily: 'ui-monospace, Menlo' }}>slide 240ms</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: TAG.muted }}>Card tilt</span><span style={{ fontFamily: 'ui-monospace, Menlo' }}>rotate 6°</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: TAG.muted }}>Skeleton</span><span style={{ fontFamily: 'ui-monospace, Menlo' }}>shimmer 1.4s</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', bottom: 24, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 14, borderTop: '1px solid ' + TAG.hairline,
        fontFamily: 'ui-monospace, Menlo', fontSize: 10, color: TAG.muted, letterSpacing: 1,
      }}>
        <div>FOUNDATION · v1.0 · 2026</div>
        <div>FOR INTERNAL REVIEW · TAG VACATION CLUB</div>
        <div>iOS + ANDROID · 390 × 844</div>
      </div>
    </div>
  );
}

function SectionLabel({ n, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
      <span style={{ fontFamily: 'ui-monospace, Menlo', fontSize: 11, color: TAG.gold, letterSpacing: 2 }}>{n}</span>
      <span style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, color: TAG.ink, letterSpacing: -0.3 }}>{title}</span>
      <span style={{ flex: 1, height: 1, background: TAG.hairline }} />
    </div>
  );
}

Object.assign(window, { TagPrototype, DesignSystemPoster });

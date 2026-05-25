// TAG screens part 1: Splash, Onboarding, Login, Dashboard

// ─────────────────────────────────────────────────────────────
// 1. SPLASH
// ─────────────────────────────────────────────────────────────
function ScreenSplash({ dark }) {
  return (
    <Phone dark hideStatus>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(120% 80% at 50% 30%, #0E8888 0%, #0B6E6E 35%, #053838 100%)',
      }} />
      {/* gold shimmer beams */}
      <div style={{
        position: 'absolute', top: -50, left: -50, right: -50, bottom: -50,
        background: 'conic-gradient(from 200deg at 50% 40%, transparent 0deg, rgba(212,162,76,0.18) 30deg, transparent 60deg, transparent 180deg, rgba(212,162,76,0.12) 220deg, transparent 250deg)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 24,
      }}>
        {/* Logo mark */}
        <div style={{
          width: 96, height: 96, borderRadius: 28, position: 'relative',
          background: 'linear-gradient(135deg, #0F8585 0%, #074B4B 100%)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: TAG.display, fontWeight: 800, fontSize: 36,
            color: TAG.gold, letterSpacing: -1, lineHeight: 1,
            backgroundImage: 'linear-gradient(120deg, #F2CE85 0%, #D4A24C 40%, #F5E9D1 60%, #D4A24C 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'tagShimmer 2.4s linear infinite',
          }}>TAG</div>
          <div style={{
            position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
            width: 48, height: 1.5, background: TAG.gold, opacity: 0.7, borderRadius: 1,
          }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: TAG.display, fontWeight: 700, fontSize: 26, color: '#fff',
            letterSpacing: -0.6, marginBottom: 6,
          }}>Vacation Club</div>
          <div style={{
            fontFamily: TAG.body, fontSize: 14, color: 'rgba(255,255,255,0.7)',
            letterSpacing: 0.4,
          }}>Your Holidays. Your Way.</div>
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: 60, left: 0, right: 0, textAlign: 'center',
        fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 10,
        color: 'rgba(255,255,255,0.4)', letterSpacing: 2,
      }}>EST · MMXXVI</div>
      <div style={{
        position: 'absolute', bottom: 36, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{ width: 32, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)', overflow: 'hidden' }}>
          <div style={{ width: '60%', height: '100%', background: TAG.gold, borderRadius: 2 }} />
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. ONBOARDING (3 slides — show first as primary; small dots show others)
// ─────────────────────────────────────────────────────────────
function ScreenOnboarding({ slide = 1 }) {
  const slides = [
    { kind: 'kerala', title: 'Discover 4,300+ resorts worldwide', body: 'From Goa beaches to Swiss Alps — your TAG membership unlocks them all.' },
    { kind: 'udaipur', title: 'Plan holidays your way', body: 'Pick dates, swap nights, gift trips to family — total flexibility.' },
    { kind: 'manali', title: 'Members-only privileges', body: 'Resort credits, partner discounts and concierge support whenever you travel.' },
  ];
  const s = slides[slide - 1];
  return (
    <Phone>
      <div style={{ position: 'relative', height: 500 }}>
        <Photo kind={s.kind} height={500} radius={0} overlay={false} style={{ width: '100%' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, ' + TAG.bg + ' 100%)',
        }} />
        <div style={{ position: 'absolute', top: 56, right: 20 }}>
          <button style={{
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999,
            padding: '8px 14px', color: '#fff', fontFamily: TAG.display,
            fontWeight: 600, fontSize: 13,
          }}>Skip</button>
        </div>
      </div>
      <div style={{ padding: '0 28px', marginTop: -40, position: 'relative' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              height: 4, borderRadius: 2,
              width: i === slide - 1 ? 28 : 8,
              background: i === slide - 1 ? TAG.teal : TAG.hairline,
              transition: 'width .3s',
            }} />
          ))}
        </div>
        <h1 style={{
          fontFamily: TAG.display, fontWeight: 700, fontSize: 30,
          letterSpacing: -0.8, lineHeight: 1.1, margin: 0, marginBottom: 14,
          color: TAG.ink, textWrap: 'pretty',
        }}>{s.title}</h1>
        <p style={{
          fontFamily: TAG.body, fontSize: 15, lineHeight: 1.5,
          color: TAG.muted, margin: 0, marginBottom: 36,
        }}>{s.body}</p>
        <Button variant="primary" full size="lg" icon={<Icon d={I.arrowR} size={18} color="#fff" stroke={2}/>}>
          {slide === 3 ? 'Get Started' : 'Continue'}
        </Button>
        <div style={{
          textAlign: 'center', marginTop: 18,
          fontFamily: TAG.body, fontSize: 13, color: TAG.muted,
        }}>Already a member? <span style={{ color: TAG.teal, fontWeight: 600 }}>Sign in</span></div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. LOGIN
// ─────────────────────────────────────────────────────────────
function ScreenLogin() {
  return (
    <Phone>
      <Photo kind="agra" height={260} radius={0} overlay style={{ width: '100%' }}>
        <div style={{
          position: 'absolute', top: 70, left: 24, display: 'flex',
          alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontFamily: TAG.display, fontWeight: 800, color: TAG.gold, fontSize: 15 }}>TAG</span>
          </div>
          <span style={{ color: '#fff', fontFamily: TAG.display, fontWeight: 600, fontSize: 16 }}>Vacation Club</span>
        </div>
      </Photo>
      <div style={{
        padding: '28px 24px', background: TAG.bg, borderTopLeftRadius: 28,
        borderTopRightRadius: 28, marginTop: -24, position: 'relative',
      }}>
        <h1 style={{
          fontFamily: TAG.display, fontWeight: 700, fontSize: 26,
          letterSpacing: -0.6, margin: 0, marginBottom: 6,
        }}>Welcome back</h1>
        <p style={{
          fontFamily: TAG.body, fontSize: 14, color: TAG.muted, margin: 0, marginBottom: 28,
        }}>Sign in to access your holidays</p>

        {/* Member number */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: TAG.muted, fontFamily: TAG.display, letterSpacing: 0.4, textTransform: 'uppercase' }}>Membership No.</label>
          <div style={{
            marginTop: 6, background: '#fff', borderRadius: 14, padding: '14px 16px',
            border: '1.5px solid ' + TAG.teal, display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 0 0 4px ' + TAG.tealLight,
          }}>
            <Icon d={I.card} size={18} color={TAG.teal} />
            <span style={{ fontFamily: TAG.body, fontSize: 15, color: TAG.ink }}>TAG-1024-738</span>
            <span style={{ marginLeft: 'auto', width: 1.5, height: 18, background: TAG.teal, animation: 'tagPulse 1s steps(2) infinite' }} />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: TAG.muted, fontFamily: TAG.display, letterSpacing: 0.4, textTransform: 'uppercase' }}>Password</label>
          <div style={{
            marginTop: 6, background: '#fff', borderRadius: 14, padding: '14px 16px',
            border: '1px solid ' + TAG.hairline, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <Icon d={I.shield} size={18} color={TAG.muted} />
            <span style={{ fontFamily: TAG.body, fontSize: 18, color: TAG.ink, letterSpacing: 4 }}>••••••••</span>
            <span style={{ marginLeft: 'auto', fontSize: 12, color: TAG.teal, fontWeight: 600 }}>Show</span>
          </div>
        </div>
        <div style={{ textAlign: 'right', marginBottom: 22 }}>
          <span style={{ fontSize: 12, color: TAG.teal, fontWeight: 600, fontFamily: TAG.display }}>Forgot password?</span>
        </div>

        <Button variant="primary" full size="lg">Sign In</Button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
          <div style={{ flex: 1, height: 1, background: TAG.hairline }} />
          <span style={{ fontSize: 11, color: TAG.muted, fontFamily: TAG.body, letterSpacing: 1 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: TAG.hairline }} />
        </div>

        <Button variant="ghost" full size="md" icon={<Icon d={I.chat} size={18} color={TAG.teal} stroke={1.8}/>}>
          Continue with OTP
        </Button>

        <div style={{ display: 'flex', gap: 14, marginTop: 12 }}>
          <div style={{
            flex: 1, height: 56, background: '#fff', borderRadius: 12,
            border: '1px solid ' + TAG.hairline, display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 8,
          }}>
            <Icon d={I.faceid} size={22} color={TAG.ink} stroke={1.8}/>
            <span style={{ fontFamily: TAG.display, fontSize: 13, fontWeight: 600 }}>Face ID</span>
          </div>
          <div style={{
            flex: 1, height: 56, background: '#fff', borderRadius: 12,
            border: '1px solid ' + TAG.hairline, display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 8,
          }}>
            <Icon d={I.fingerprint} size={22} color={TAG.ink} stroke={1.8}/>
            <span style={{ fontFamily: TAG.display, fontSize: 13, fontWeight: 600 }}>Fingerprint</span>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. DASHBOARD (home) — light + dark
// ─────────────────────────────────────────────────────────────
function ScreenDashboard({ dark }) {
  const fg = dark ? TAG.dInk : TAG.ink;
  const muted = dark ? TAG.dMuted : TAG.muted;

  return (
    <Phone dark={dark}>
      {/* Top bar */}
      <div style={{ padding: '60px 20px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 22,
          background: 'linear-gradient(135deg, ' + TAG.gold + ', ' + TAG.coral + ')',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: TAG.display, fontWeight: 700, fontSize: 16,
          boxShadow: '0 4px 12px rgba(212,162,76,0.3)',
        }}>R</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: muted, fontFamily: TAG.body }}>Namaste 👋</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 17, color: fg, letterSpacing: -0.3 }}>Rahul Singh</div>
        </div>
        <div style={{
          width: 42, height: 42, borderRadius: 14,
          background: dark ? 'rgba(255,255,255,0.06)' : '#fff',
          border: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline),
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <Icon d={I.bell} size={20} color={fg} />
          <div style={{ position: 'absolute', top: 9, right: 10, width: 7, height: 7, background: TAG.coral, borderRadius: 4, border: '2px solid ' + (dark ? TAG.dBg : '#fff') }} />
        </div>
      </div>

      {/* Featured carousel */}
      <div style={{ marginTop: 18, paddingLeft: 20 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', paddingRight: 20, marginBottom: 12 }}>
          <h2 style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, margin: 0, color: fg, letterSpacing: -0.3 }}>Featured stays</h2>
          <span style={{ fontSize: 12, color: TAG.teal, fontWeight: 600, fontFamily: TAG.display }}>See all</span>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingRight: 20, scrollbarWidth: 'none' }}>
          {[
            { k: 'goa', name: 'TAG Beach Resort', loc: 'Candolim, Goa', rating: 4.9 },
            { k: 'shimla', name: 'TAG Pinewood', loc: 'Mashobra, Shimla', rating: 4.8 },
            { k: 'agra', name: 'TAG Heritage', loc: 'Agra, UP', rating: 4.7 },
          ].map((r, i) => (
            <div key={i} style={{ width: 240, flexShrink: 0 }}>
              <Photo kind={r.k} height={300} radius={20}>
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 16,
                    background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon d={I.heart} size={16} color="#fff" stroke={1.8}/>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, color: '#fff' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px',
                    borderRadius: 999, background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)',
                    fontFamily: TAG.display, fontSize: 11, fontWeight: 600, marginBottom: 8,
                  }}>
                    <Icon d={I.star} size={10} color={TAG.gold} fill={TAG.gold} stroke={0}/>
                    {r.rating}
                  </div>
                  <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>{r.name}</div>
                  <div style={{ fontFamily: TAG.body, fontSize: 12, opacity: 0.85, marginTop: 2 }}>
                    <Icon d={I.pin} size={10} color="#fff" stroke={1.8}/> {r.loc}
                  </div>
                </div>
              </Photo>
            </div>
          ))}
        </div>
      </div>

      {/* Quick access tiles */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: 'Book a Stay', icon: I.search, bg: TAG.teal, fg: '#fff' },
            { label: 'My Bookings', icon: I.calendar, bg: dark ? TAG.dCard : '#fff', fg: fg },
            { label: 'Offers', icon: I.gift, bg: TAG.gold, fg: '#1B1408' },
            { label: 'Refer & Earn', icon: I.users, bg: dark ? TAG.dCard : '#fff', fg: fg },
          ].map((t, i) => (
            <div key={i} style={{
              background: t.bg, borderRadius: 18, padding: 14, height: 78,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              border: t.bg === '#fff' || t.bg === TAG.dCard ? '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) : 'none',
              boxShadow: t.bg !== '#fff' && t.bg !== TAG.dCard ? '0 6px 16px rgba(0,0,0,0.08)' : 'none',
            }}>
              <Icon d={t.icon} size={20} color={t.fg} stroke={1.8} />
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: t.fg, letterSpacing: -0.2 }}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Holiday balance + Membership row */}
      <div style={{ padding: '14px 20px 0', display: 'flex', gap: 10 }}>
        {/* Holiday balance — circular */}
        <Card padding={14} dark={dark} style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: muted, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 10 }}>Holiday balance</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ position: 'relative', width: 56, height: 56 }}>
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="22" fill="none" stroke={dark ? 'rgba(255,255,255,0.08)' : '#F2EDE3'} strokeWidth="6"/>
                <circle cx="28" cy="28" r="22" fill="none" stroke={TAG.teal} strokeWidth="6"
                  strokeDasharray={2 * Math.PI * 22}
                  strokeDashoffset={2 * Math.PI * 22 * 0.97}
                  strokeLinecap="round" transform="rotate(-90 28 28)"/>
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TAG.display, fontWeight: 700, fontSize: 13, color: fg }}>0.2</div>
            </div>
            <div>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, color: fg }}>0.2 Days</div>
              <div style={{ fontFamily: TAG.body, fontSize: 11, color: muted }}>Used 5.8 / 6 this year</div>
            </div>
          </div>
        </Card>
        {/* Membership badge */}
        <Card padding={14} dark={dark} style={{ flex: 1, background: dark ? 'linear-gradient(135deg, #0F2A2A 0%, #051818 100%)' : 'linear-gradient(135deg, ' + TAG.teal + ' 0%, ' + TAG.tealDark + ' 100%)', border: 'none' }}>
          <div style={{ fontSize: 11, color: TAG.gold, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 10 }}>Membership</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: -0.3 }}>10-Year Gold</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: TAG.success }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: TAG.body }}>Active · 2036</span>
          </div>
        </Card>
      </div>

      {/* Upcoming booking */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 11, color: muted, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Upcoming holiday</div>
        <Card padding={0} dark={dark} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 12, padding: 12 }}>
            <Photo kind="manali" height={80} radius={14} style={{ width: 80 }} label={false} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 10, fontFamily: 'ui-monospace, Menlo, monospace', color: TAG.gold, letterSpacing: 1 }}>14 — 18 DEC</span>
                <Pill color={TAG.success}>Confirmed</Pill>
              </div>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15, color: fg, letterSpacing: -0.2 }}>TAG Snow Peaks, Manali</div>
              <div style={{ fontFamily: TAG.body, fontSize: 12, color: muted, marginTop: 2 }}>4 nights · 2 adults · 1 kid</div>
            </div>
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) }}>
            <div style={{ flex: 1, padding: 12, textAlign: 'center', fontFamily: TAG.display, fontWeight: 600, fontSize: 13, color: TAG.teal, borderRight: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) }}>Manage trip</div>
            <div style={{ flex: 1, padding: 12, textAlign: 'center', fontFamily: TAG.display, fontWeight: 600, fontSize: 13, color: TAG.teal }}>Add itinerary</div>
          </div>
        </Card>
      </div>

      <div style={{ height: 140 }} />
      <Concierge dark={dark} />
      <TabBar active="home" dark={dark} />
    </Phone>
  );
}

Object.assign(window, { ScreenSplash, ScreenOnboarding, ScreenLogin, ScreenDashboard });

// TAG screens part 2: Profile, Membership Details, Package & Usage, Booking flow (4 sub-screens)

// ─────────────────────────────────────────────────────────────
// 5. PROFILE
// ─────────────────────────────────────────────────────────────
function ScreenProfile({ dark }) {
  const fg = dark ? TAG.dInk : TAG.ink;
  const muted = dark ? TAG.dMuted : TAG.muted;
  const [tab, setTab] = ['Personal', 0];

  const tabs = ['Personal', 'Family', 'Co-applicant', 'Documents'];
  const fields = [
    { label: 'Full name', value: 'Rahul Singh' },
    { label: 'Date of birth', value: '14 Aug 1988' },
    { label: 'Email', value: 'rahul.singh@gmail.com' },
    { label: 'Contact', value: '+91 62002 31117' },
    { label: 'Address', value: '2nd Floor, Tower-A, Noida 201309' },
    { label: 'Occupation', value: 'Product Manager' },
  ];

  return (
    <Phone dark={dark}>
      {/* Header */}
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 22, color: fg, letterSpacing: -0.4 }}>My Profile</div>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: dark ? 'rgba(255,255,255,0.06)' : '#fff', border: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d="M4 4l12 12M16 4L4 16" size={16} color={fg} stroke={2} />
          <span style={{ position: 'absolute' }}></span>
        </div>
      </div>

      {/* Membership card (digital, swipeable) */}
      <div style={{ padding: '0 20px' }}>
        <div style={{
          position: 'relative', borderRadius: 22, padding: 20, overflow: 'hidden',
          background: 'linear-gradient(135deg, #1B1408 0%, #2D2010 50%, #1B1408 100%)',
          boxShadow: '0 20px 40px rgba(15,27,27,0.3), inset 0 1px 0 rgba(212,162,76,0.4)',
        }}>
          {/* gold border accents */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 22, border: '1px solid rgba(212,162,76,0.35)', pointerEvents: 'none' }} />
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,162,76,0.4) 0%, transparent 70%)',
          }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 9, letterSpacing: 2, color: TAG.gold, textTransform: 'uppercase' }}>Vacation Club</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 22, color: TAG.gold, letterSpacing: -0.4, marginTop: 2 }}>TAG · GOLD</div>
            </div>
            <div style={{
              width: 44, height: 44, background: '#fff', borderRadius: 8, padding: 4,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon d={I.qr} size={36} color={TAG.ink} stroke={1.5} />
            </div>
          </div>
          <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 16, letterSpacing: 2, color: '#fff', marginBottom: 12 }}>
            TAG · 1024 · 738
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 9, color: 'rgba(212,162,76,0.7)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: 1 }}>MEMBER NAME</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.4 }}>Rahul Singh</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 9, color: 'rgba(212,162,76,0.7)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: 1 }}>VALID THRU</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: '#fff' }}>03 / 2036</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 10 }}>
          <div style={{ width: 18, height: 4, borderRadius: 2, background: TAG.gold }} />
          <div style={{ width: 4, height: 4, borderRadius: 2, background: TAG.hairline }} />
          <div style={{ width: 4, height: 4, borderRadius: 2, background: TAG.hairline }} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: '20px 20px 12px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {tabs.map((t, i) => (
          <div key={t} style={{
            padding: '7px 14px', borderRadius: 999,
            background: i === 0 ? TAG.teal : (dark ? 'rgba(255,255,255,0.06)' : '#fff'),
            color: i === 0 ? '#fff' : fg,
            fontFamily: TAG.display, fontWeight: 600, fontSize: 12,
            border: i === 0 ? 'none' : '1px solid ' + (dark ? TAG.dHairline : TAG.hairline),
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>{t}</div>
        ))}
      </div>

      {/* Field list */}
      <div style={{ padding: '0 20px' }}>
        <Card padding={0} dark={dark}>
          {fields.map((f, i) => (
            <div key={i} style={{
              padding: '14px 16px',
              borderBottom: i < fields.length - 1 ? '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) : 'none',
            }}>
              <div style={{ fontSize: 11, color: muted, fontFamily: TAG.body, fontWeight: 500, marginBottom: 2 }}>{f.label}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: fg }}>{f.value}</div>
                <Icon d="M3 17l4-1L17 6l-3-3L4 13l-1 4z" size={14} color={muted} />
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div style={{ height: 110 }} />
      <Concierge dark={dark} />
      <TabBar active="profile" dark={dark} />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. MEMBERSHIP DETAILS
// ─────────────────────────────────────────────────────────────
function ScreenMembershipDetails() {
  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon d={I.chevL} size={20} color={TAG.ink} stroke={2}/>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>Membership</div>
      </div>

      {/* Hero card */}
      <div style={{ padding: '0 20px' }}>
        <div style={{
          borderRadius: 22, padding: 20, position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, ' + TAG.teal + ' 0%, ' + TAG.tealDark + ' 100%)',
        }}>
          <div style={{
            position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: 70,
            background: 'rgba(212,162,76,0.15)',
          }} />
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999,
            background: 'rgba(46,158,110,0.25)', border: '1px solid rgba(46,158,110,0.5)',
            marginBottom: 18,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: TAG.success }} />
            <span style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 11, color: '#7FE5B6', letterSpacing: 0.4 }}>ACTIVE</span>
          </div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 28, color: '#fff', letterSpacing: -0.6, lineHeight: 1.1 }}>10-Year<br/>Gold Membership</div>
          <div style={{ marginTop: 14, display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: 1 }}>STARTED</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: '#fff', marginTop: 1 }}>19 Mar 2026</div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: 1 }}>EXPIRES</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: '#fff', marginTop: 1 }}>19 Mar 2036</div>
            </div>
          </div>
          <div style={{ marginTop: 16, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '2%', background: TAG.gold, borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontFamily: TAG.body, marginTop: 6 }}>3,584 days remaining of 3,650</div>
        </div>
      </div>

      {/* Family + Nominee */}
      <div style={{ padding: '18px 20px 8px', fontFamily: TAG.display, fontWeight: 700, fontSize: 16, letterSpacing: -0.3 }}>Family</div>
      <div style={{ padding: '0 20px' }}>
        <Card padding={0}>
          <div style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid ' + TAG.hairline }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: TAG.tealLight, color: TAG.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>P</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14 }}>Priya Singh</div>
              <div style={{ fontFamily: TAG.body, fontSize: 12, color: TAG.muted }}>Spouse · 38</div>
            </div>
            <Pill color={TAG.teal}>Co-applicant</Pill>
          </div>
          <div style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid ' + TAG.hairline }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: TAG.goldLight, color: '#8B6B2E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>A</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14 }}>Aarav Singh</div>
              <div style={{ fontFamily: TAG.body, fontSize: 12, color: TAG.muted }}>Son · 10</div>
            </div>
          </div>
          <div style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: TAG.coralDark + '22', color: TAG.coralDark, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>R</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14 }}>Rajesh Singh</div>
              <div style={{ fontFamily: TAG.body, fontSize: 12, color: TAG.muted }}>Nominee · Father</div>
            </div>
          </div>
        </Card>
      </div>

      <div style={{ padding: '18px 20px 8px', fontFamily: TAG.display, fontWeight: 700, fontSize: 16, letterSpacing: -0.3 }}>Quick actions</div>
      <div style={{ padding: '0 20px', display: 'flex', gap: 10, marginBottom: 110 }}>
        <Button variant="ghost" full size="md" icon={<Icon d={I.upload} size={16} color={TAG.teal}/>}>Upgrade</Button>
        <Button variant="outline" full size="md" icon={<Icon d={I.gift} size={16} color={TAG.teal}/>}>Gift nights</Button>
      </div>
      <Concierge />
      <TabBar active="profile" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 7. PACKAGE & USAGE
// ─────────────────────────────────────────────────────────────
function ScreenPackageUsage() {
  const years = [
    { y: 2026, ent: 6, used: 6 },
    { y: 2027, ent: 6, used: 6 },
    { y: 2028, ent: 6, used: 3 },
    { y: 2029, ent: 6, used: 0 },
    { y: 2030, ent: 6, used: 0 },
    { y: 2031, ent: 6, used: 0 },
    { y: 2032, ent: 6, used: 0 },
    { y: 2033, ent: 6, used: 0 },
  ];
  const filters = ['All', 'Used', 'Available'];

  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon d={I.chevL} size={20} color={TAG.ink} stroke={2}/>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>Package & Usage</div>
      </div>

      {/* Summary tiles */}
      <div style={{ padding: '0 20px', display: 'flex', gap: 10 }}>
        <Card padding={14} style={{ flex: 1 }}>
          <div style={{ fontSize: 10, color: TAG.muted, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>Entitled</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 24, color: TAG.ink, marginTop: 2 }}>60</div>
          <div style={{ fontSize: 10, color: TAG.muted }}>nights total</div>
        </Card>
        <Card padding={14} style={{ flex: 1, background: TAG.coral + '14' }}>
          <div style={{ fontSize: 10, color: TAG.coralDark, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>Used</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 24, color: TAG.coralDark, marginTop: 2 }}>15</div>
          <div style={{ fontSize: 10, color: TAG.coralDark, opacity: 0.7 }}>25% utilised</div>
        </Card>
        <Card padding={14} style={{ flex: 1, background: TAG.success + '15' }}>
          <div style={{ fontSize: 10, color: TAG.success, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>Balance</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 24, color: TAG.success, marginTop: 2 }}>45</div>
          <div style={{ fontSize: 10, color: TAG.success, opacity: 0.7 }}>nights left</div>
        </Card>
      </div>

      {/* Filters */}
      <div style={{ padding: '18px 20px 12px', display: 'flex', gap: 6 }}>
        {filters.map((f, i) => (
          <div key={f} style={{
            padding: '7px 14px', borderRadius: 999,
            background: i === 0 ? TAG.ink : '#fff',
            color: i === 0 ? '#fff' : TAG.ink,
            fontFamily: TAG.display, fontWeight: 600, fontSize: 12,
            border: i === 0 ? 'none' : '1px solid ' + TAG.hairline,
          }}>{f}</div>
        ))}
        <div style={{ marginLeft: 'auto', width: 32, height: 32, borderRadius: 10, background: '#fff', border: '1px solid ' + TAG.hairline, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={I.filter} size={14} color={TAG.ink} />
        </div>
      </div>

      {/* Year list with progress bars */}
      <div style={{ padding: '0 20px' }}>
        <Card padding={0}>
          {years.map((r, i) => {
            const pct = r.used / r.ent;
            const balance = r.ent - r.used;
            const isUsed = balance === 0;
            return (
              <div key={r.y} style={{
                padding: '14px 16px',
                borderBottom: i < years.length - 1 ? '1px solid ' + TAG.hairline : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15, color: TAG.ink }}>{r.y}</div>
                    {isUsed && <Pill color={TAG.muted} bg={TAG.bgWarm}>Fully used</Pill>}
                  </div>
                  <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: TAG.muted }}>
                    <span style={{ color: TAG.coralDark, fontWeight: 600 }}>{r.used}</span>
                    <span> / </span>
                    <span style={{ color: TAG.success, fontWeight: 600 }}>{balance} left</span>
                  </div>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: TAG.bgWarm, overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: (pct * 100) + '%', background: pct === 1 ? TAG.coral : TAG.gold, borderRadius: 3 }} />
                </div>
              </div>
            );
          })}
        </Card>
      </div>
      <div style={{ height: 110 }} />
      <Concierge />
      <TabBar active="profile" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 8a. BOOKING — Search
// ─────────────────────────────────────────────────────────────
function ScreenBookSearch({ dark }) {
  const fg = dark ? TAG.dInk : TAG.ink;
  const muted = dark ? TAG.dMuted : TAG.muted;
  const cardBg = dark ? TAG.dCard : '#fff';
  return (
    <Phone dark={dark}>
      <div style={{ padding: '54px 20px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: TAG.body, fontSize: 12, color: muted }}>Find your next</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 26, color: fg, letterSpacing: -0.6 }}>Holiday</div>
        </div>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: cardBg, border: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={I.filter} size={18} color={fg} />
        </div>
      </div>

      {/* Search form */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card padding={0} dark={dark}>
          <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: TAG.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={I.pin} size={18} color={TAG.teal}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: muted, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Destination</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 15, color: fg }}>Goa, India</div>
            </div>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) }}>
            <div style={{ flex: 1, padding: '14px 16px', borderRight: '1px solid ' + (dark ? TAG.dHairline : TAG.hairline) }}>
              <div style={{ fontSize: 10, color: muted, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: fg, marginTop: 2 }}>Fri, 14 Dec</div>
            </div>
            <div style={{ flex: 1, padding: '14px 16px' }}>
              <div style={{ fontSize: 10, color: muted, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 14, color: fg, marginTop: 2 }}>Tue, 18 Dec</div>
            </div>
          </div>
          <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: TAG.goldLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={I.users} size={18} color="#8B6B2E"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: muted, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Guests</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 15, color: fg }}>2 adults · 1 child</div>
            </div>
          </div>
        </Card>
        <div style={{ marginTop: 14 }}>
          <Button variant="primary" full size="lg" icon={<Icon d={I.search} size={18} color="#fff" stroke={2}/>}>Search resorts</Button>
        </div>
      </div>

      {/* Popular destinations */}
      <div style={{ padding: '24px 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 16, color: fg, letterSpacing: -0.3 }}>Popular with members</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 20px' }}>
        {['kerala', 'udaipur', 'jaipur', 'shimla'].map(k => (
          <div key={k} style={{ borderRadius: 16, overflow: 'hidden' }}>
            <Photo kind={k} height={120}>
              <div style={{ position: 'absolute', bottom: 8, left: 10, color: '#fff', fontFamily: TAG.display, fontWeight: 700, fontSize: 13, textTransform: 'capitalize' }}>{k}</div>
            </Photo>
          </div>
        ))}
      </div>
      <div style={{ height: 110 }} />
      <Concierge dark={dark} />
      <TabBar active="book" dark={dark} />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 8b. BOOKING — Resort list
// ─────────────────────────────────────────────────────────────
function ScreenBookList() {
  const resorts = [
    { k: 'goa', name: 'TAG Beach Resort', loc: 'Candolim, North Goa', rating: 4.9, reviews: 1284, price: '6,800', amenities: [I.pool, I.wifi, I.spa, I.fork] },
    { k: 'agra', name: 'TAG Heritage Palace', loc: 'Taj East Gate, Agra', rating: 4.7, reviews: 942, price: '8,200', amenities: [I.wifi, I.spa, I.fork, I.car] },
    { k: 'udaipur', name: 'TAG Lake Pavilion', loc: 'Lake Pichola, Udaipur', rating: 4.9, reviews: 612, price: '11,400', amenities: [I.pool, I.spa, I.fork] },
  ];
  return (
    <Phone>
      <div style={{ padding: '54px 20px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon d={I.chevL} size={20} color={TAG.ink} stroke={2}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 16, letterSpacing: -0.3 }}>Goa · 14–18 Dec</div>
          <div style={{ fontSize: 12, color: TAG.muted }}>4 nights · 2 adults, 1 child · 24 resorts</div>
        </div>
        <Icon d={I.filter} size={18} color={TAG.ink} />
      </div>

      {/* Filter chips */}
      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {['Beachfront', '5-star', 'Family', 'Spa', 'Use nights'].map((c, i) => (
          <div key={c} style={{
            padding: '6px 12px', borderRadius: 999, flexShrink: 0,
            background: i === 4 ? TAG.tealLight : '#fff',
            color: i === 4 ? TAG.teal : TAG.ink,
            fontFamily: TAG.display, fontWeight: 600, fontSize: 12,
            border: '1px solid ' + (i === 4 ? TAG.tealLight : TAG.hairline),
          }}>{c}</div>
        ))}
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {resorts.map((r, i) => (
          <Card key={i} padding={0}>
            <div style={{ position: 'relative' }}>
              <Photo kind={r.k} height={170} radius={0} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <div style={{ position: 'absolute', top: 12, left: 12 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999, background: 'rgba(212,162,76,0.95)', fontFamily: TAG.display, fontWeight: 700, fontSize: 11, color: '#1B1408' }}>
                    <Icon d={I.zap} size={11} color="#1B1408" fill="#1B1408" stroke={0}/> Member rate
                  </div>
                </div>
                <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 16, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon d={I.heart} size={15} color="#fff" stroke={1.8}/>
                </div>
              </Photo>
            </div>
            <div style={{ padding: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 16, color: TAG.ink, letterSpacing: -0.3 }}>{r.name}</div>
                  <div style={{ fontFamily: TAG.body, fontSize: 12, color: TAG.muted, marginTop: 1, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Icon d={I.pin} size={11} color={TAG.muted} stroke={1.8}/>{r.loc}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: TAG.tealLight, padding: '3px 8px', borderRadius: 8 }}>
                  <Icon d={I.star} size={11} color={TAG.gold} fill={TAG.gold} stroke={0}/>
                  <span style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 12, color: TAG.teal }}>{r.rating}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, marginTop: 10, color: TAG.muted }}>
                {r.amenities.map((a, j) => <Icon key={j} d={a} size={15} color={TAG.muted} stroke={1.6}/>)}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: '1px solid ' + TAG.hairline }}>
                <div>
                  <div style={{ fontSize: 11, color: TAG.muted }}><span style={{ textDecoration: 'line-through' }}>₹14,200</span> · {r.reviews} reviews</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 22, color: TAG.ink, letterSpacing: -0.5 }}>₹{r.price}</span>
                    <span style={{ fontSize: 11, color: TAG.muted }}>/night</span>
                  </div>
                </div>
                <Button variant="dark" size="sm">View</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ height: 110 }} />
      <Concierge />
      <TabBar active="book" />
    </Phone>
  );
}

Object.assign(window, {
  ScreenProfile, ScreenMembershipDetails, ScreenPackageUsage,
  ScreenBookSearch, ScreenBookList,
});

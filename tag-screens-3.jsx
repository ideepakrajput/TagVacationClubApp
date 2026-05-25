// TAG screens part 3: Resort detail, Booking summary, Confirmation,
// My Bookings, Offers, Payment & Wallet, E-Kit & Documents.

// ─────────────────────────────────────────────────────────────
// 8c. RESORT DETAIL
// ─────────────────────────────────────────────────────────────
function ScreenResortDetail() {
  const ams = [
    { i: I.pool, l: 'Infinity pool' },
    { i: I.spa, l: 'Spa & wellness' },
    { i: I.fork, l: 'Multi-cuisine' },
    { i: I.wifi, l: 'Free Wi-Fi' },
    { i: I.car, l: 'Airport pickup' },
    { i: I.bed, l: 'Sea-view rooms' },
  ];
  const rooms = [
    { name: 'Garden Studio', sq: '34 m²', price: 6800, sleeps: 2 },
    { name: 'Sea-View Suite', sq: '52 m²', price: 11400, sleeps: 3, badge: 'Most loved' },
    { name: 'Private Villa', sq: '120 m²', price: 22800, sleeps: 5 },
  ];
  return (
    <Phone>
      <div style={{ position: 'relative' }}>
        <Photo kind="goa" height={340} radius={0} overlay={false} style={{ width: '100%' }}>
          {/* gallery dots */}
          <div style={{
            position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 5,
          }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ width: i === 0 ? 18 : 5, height: 5, borderRadius: 3, background: i === 0 ? '#fff' : 'rgba(255,255,255,0.5)' }} />
            ))}
          </div>
          <div style={{
            position: 'absolute', bottom: 12, right: 14,
            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
            padding: '4px 10px', borderRadius: 999,
            color: '#fff', fontSize: 11, fontFamily: TAG.display, fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            <Icon d={I.camera} size={11} color="#fff" stroke={2}/> 24 photos
          </div>
        </Photo>
        <div style={{ position: 'absolute', top: 54, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 38, height: 38, borderRadius: 19, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon d={I.chevL} size={18} color="#fff" stroke={2}/>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={I.copy} size={16} color="#fff" stroke={2}/>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={I.heart} size={16} color="#fff" stroke={2}/>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background: TAG.bg, borderTopLeftRadius: 28, borderTopRightRadius: 28,
        marginTop: -22, position: 'relative', padding: '20px 20px 0',
      }}>
        <Pill color={TAG.gold} bg={TAG.goldLight}>★ Member exclusive · use nights</Pill>
        <h1 style={{
          fontFamily: TAG.display, fontWeight: 800, fontSize: 24,
          color: TAG.ink, letterSpacing: -0.6, margin: '8px 0 4px',
        }}>TAG Beach Resort</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: TAG.body, fontSize: 13, color: TAG.muted }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Icon d={I.star} size={12} color={TAG.gold} fill={TAG.gold} stroke={0}/>
            <span style={{ color: TAG.ink, fontWeight: 700 }}>4.9</span>
            <span>(1,284)</span>
          </span>
          <span style={{ width: 3, height: 3, borderRadius: 2, background: TAG.muted }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            <Icon d={I.pin} size={12} color={TAG.muted} stroke={1.8}/> Candolim, Goa
          </span>
        </div>

        <p style={{
          fontFamily: TAG.body, fontSize: 13, lineHeight: 1.55, color: TAG.inkSoft,
          margin: '14px 0 18px',
        }}>
          A beachfront sanctuary tucked between palm groves and the Arabian Sea. 84 sea-facing rooms, two pools, and a Konkani spice garden restaurant.
          <span style={{ color: TAG.teal, fontWeight: 600 }}> Read more</span>
        </p>

        {/* Amenities grid */}
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15, marginBottom: 10, letterSpacing: -0.2 }}>What's included</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 20 }}>
          {ams.map((a, i) => (
            <div key={i} style={{
              padding: '12px 8px', background: '#fff', borderRadius: 14,
              border: '1px solid ' + TAG.hairline, display: 'flex',
              flexDirection: 'column', alignItems: 'center', gap: 6,
            }}>
              <Icon d={a.i} size={20} color={TAG.teal} stroke={1.6}/>
              <div style={{ fontSize: 11, fontFamily: TAG.body, color: TAG.ink, textAlign: 'center' }}>{a.l}</div>
            </div>
          ))}
        </div>

        {/* Room types */}
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15, marginBottom: 10, letterSpacing: -0.2 }}>Choose your room</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {rooms.map((r, i) => (
            <Card key={i} padding={12} style={{
              border: i === 1 ? '1.5px solid ' + TAG.teal : '1px solid ' + TAG.hairline,
              boxShadow: i === 1 ? '0 0 0 4px ' + TAG.tealLight : '0 1px 2px rgba(15,27,27,0.04)',
            }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <Photo kind="resort" height={68} radius={12} style={{ width: 76 }} label={false} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.ink }}>{r.name}</div>
                    {r.badge && <Pill color={TAG.coralDark} bg={TAG.coral + '18'}>{r.badge}</Pill>}
                  </div>
                  <div style={{ fontFamily: TAG.body, fontSize: 11, color: TAG.muted, marginTop: 1 }}>{r.sq} · sleeps {r.sleeps}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 6 }}>
                    <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.ink }}>
                      ₹{r.price.toLocaleString('en-IN')} <span style={{ fontWeight: 400, color: TAG.muted, fontSize: 11 }}>/night</span>
                    </div>
                    <div style={{
                      width: 22, height: 22, borderRadius: 11,
                      background: i === 1 ? TAG.teal : '#fff',
                      border: '1.5px solid ' + (i === 1 ? TAG.teal : TAG.hairline),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {i === 1 && <Icon d={I.check} size={12} color="#fff" stroke={3}/>}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: 'sticky', bottom: 0, background: 'rgba(250,247,242,0.94)',
        backdropFilter: 'blur(12px)', padding: '12px 20px 26px',
        borderTop: '1px solid ' + TAG.hairline,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: TAG.muted }}>4 nights · Sea-View Suite</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 20, color: TAG.ink, letterSpacing: -0.4 }}>₹45,600</div>
        </div>
        <Button variant="primary" size="lg" icon={<Icon d={I.arrowR} size={16} color="#fff" stroke={2}/>}>Reserve</Button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 8d. BOOKING SUMMARY
// ─────────────────────────────────────────────────────────────
function ScreenBookSummary() {
  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon d={I.chevL} size={20} color={TAG.ink} stroke={2}/>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>Review booking</div>
      </div>

      {/* progress */}
      <div style={{ padding: '0 20px 18px', display: 'flex', alignItems: 'center', gap: 6 }}>
        {[1, 2, 3].map((n, i) => (
          <React.Fragment key={n}>
            <div style={{
              width: 24, height: 24, borderRadius: 12,
              background: i < 2 ? TAG.teal : '#fff',
              border: '1.5px solid ' + (i < 2 ? TAG.teal : TAG.hairline),
              color: i < 2 ? '#fff' : TAG.muted,
              fontFamily: TAG.display, fontWeight: 700, fontSize: 11,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{i < 2 ? <Icon d={I.check} size={12} color="#fff" stroke={3}/> : n}</div>
            {i < 2 && <div style={{ flex: 1, height: 2, background: i < 1 ? TAG.teal : (i === 1 ? TAG.hairline : TAG.hairline) }} />}
          </React.Fragment>
        ))}
        <div style={{ flex: 1, height: 2, background: TAG.hairline }} />
        <div style={{ fontSize: 11, color: TAG.muted, fontFamily: TAG.display, fontWeight: 600 }}>Step 3 of 3</div>
      </div>

      {/* Stay card */}
      <div style={{ padding: '0 20px 12px' }}>
        <Card padding={12}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Photo kind="goa" height={64} radius={12} style={{ width: 72 }} label={false}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.ink }}>TAG Beach Resort</div>
              <div style={{ fontSize: 11, color: TAG.muted, marginTop: 1 }}>Sea-View Suite · 4 nights</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <div>
                  <div style={{ fontSize: 9, color: TAG.muted, letterSpacing: 1, fontFamily: 'ui-monospace, Menlo' }}>CHECK-IN</div>
                  <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 13 }}>Fri, 14 Dec</div>
                </div>
                <div style={{ width: 1, background: TAG.hairline }} />
                <div>
                  <div style={{ fontSize: 9, color: TAG.muted, letterSpacing: 1, fontFamily: 'ui-monospace, Menlo' }}>CHECK-OUT</div>
                  <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 13 }}>Tue, 18 Dec</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Guests + pay method */}
      <div style={{ padding: '0 20px 12px' }}>
        <Card padding={0}>
          <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid ' + TAG.hairline }}>
            <Icon d={I.users} size={18} color={TAG.teal}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 13 }}>Guests</div>
              <div style={{ fontSize: 11, color: TAG.muted }}>Rahul, Priya + 1 child</div>
            </div>
            <Icon d={I.chevR} size={14} color={TAG.muted}/>
          </div>
          <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Icon d={I.calendar} size={18} color={TAG.teal}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 13 }}>Use membership nights</div>
              <div style={{ fontSize: 11, color: TAG.muted }}>4 of 6 available in 2026</div>
            </div>
            <div style={{ width: 36, height: 22, borderRadius: 11, background: TAG.teal, padding: 2, display: 'flex' }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, background: '#fff', marginLeft: 'auto' }} />
            </div>
          </div>
        </Card>
      </div>

      {/* Cost breakdown */}
      <div style={{ padding: '0 20px 12px' }}>
        <Card padding={16}>
          <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Cost breakdown</div>
          {[
            { l: '₹11,400 × 4 nights', v: '₹45,600' },
            { l: 'Member nights credit', v: '−₹45,600', c: TAG.success },
            { l: 'Resort fee', v: '₹1,200' },
            { l: 'GST (12%)', v: '₹144' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontFamily: TAG.body, fontSize: 13, color: row.c || TAG.inkSoft }}>
              <div>{row.l}</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo', fontWeight: 600 }}>{row.v}</div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid ' + TAG.hairline, marginTop: 8, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15 }}>Total payable</div>
            <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 18, color: TAG.ink, letterSpacing: -0.4 }}>₹1,344</div>
          </div>
        </Card>
      </div>

      <div style={{
        position: 'sticky', bottom: 0, padding: '12px 20px 26px',
        background: 'rgba(250,247,242,0.94)', backdropFilter: 'blur(12px)',
        borderTop: '1px solid ' + TAG.hairline,
      }}>
        <Button variant="primary" full size="lg">Confirm & pay ₹1,344</Button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 8e. CONFIRMATION
// ─────────────────────────────────────────────────────────────
function ScreenBookConfirm() {
  return (
    <Phone>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(120% 80% at 50% 25%, ' + TAG.teal + '20 0%, transparent 60%)',
      }} />
      {/* confetti */}
      {[...Array(14)].map((_, i) => {
        const colors = [TAG.gold, TAG.coral, TAG.teal, TAG.success];
        return (
          <div key={i} style={{
            position: 'absolute', top: 100 + (i % 4) * 12, left: 30 + (i * 23) % 320,
            width: 8, height: 8, borderRadius: i % 3 === 0 ? 4 : 2,
            background: colors[i % 4],
            transform: 'rotate(' + (i * 27) + 'deg)',
            opacity: 0.9,
          }} />
        );
      })}

      <div style={{
        position: 'absolute', top: 100, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 28px',
      }}>
        {/* Check mark */}
        <div style={{
          width: 96, height: 96, borderRadius: 48,
          background: 'linear-gradient(135deg, ' + TAG.success + ' 0%, #1F7A55 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(46,158,110,0.4), 0 0 0 8px rgba(46,158,110,0.15)',
          marginBottom: 28,
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 24l8 8 16-16" strokeDasharray="60" style={{ animation: 'tagCheck 0.6s ease-out forwards' }}/>
          </svg>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{
            fontFamily: 'ui-monospace, Menlo', fontSize: 11, letterSpacing: 2,
            color: TAG.success, textTransform: 'uppercase', marginBottom: 8,
          }}>You're going!</div>
          <h1 style={{
            fontFamily: TAG.display, fontWeight: 800, fontSize: 30,
            letterSpacing: -0.7, margin: 0, lineHeight: 1.1, marginBottom: 8,
          }}>Holiday confirmed</h1>
          <p style={{ fontFamily: TAG.body, fontSize: 14, color: TAG.muted, margin: 0 }}>
            Booking <span style={{ color: TAG.ink, fontWeight: 600 }}>#TAG-DEC-8842</span> is in your trips.
          </p>
        </div>

        <Card padding={0} style={{ width: '100%' }}>
          <div style={{ position: 'relative' }}>
            <Photo kind="goa" height={120} radius={0} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <div style={{ position: 'absolute', bottom: 12, left: 14, color: '#fff' }}>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 16, letterSpacing: -0.3 }}>TAG Beach Resort</div>
                <div style={{ fontSize: 11, opacity: 0.9 }}>Candolim, Goa</div>
              </div>
            </Photo>
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 9, color: TAG.muted, letterSpacing: 1, fontFamily: 'ui-monospace, Menlo' }}>CHECK-IN</div>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>Fri, 14 Dec</div>
                <div style={{ fontSize: 11, color: TAG.muted }}>3:00 pm</div>
              </div>
              <div style={{
                width: 32, height: 32, borderRadius: 16,
                background: TAG.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon d={I.arrowR} size={14} color={TAG.teal} stroke={2}/>
              </div>
              <div>
                <div style={{ fontSize: 9, color: TAG.muted, letterSpacing: 1, fontFamily: 'ui-monospace, Menlo' }}>CHECK-OUT</div>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>Tue, 18 Dec</div>
                <div style={{ fontSize: 11, color: TAG.muted }}>12:00 pm</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div style={{
        position: 'absolute', bottom: 36, left: 20, right: 20,
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        <Button variant="primary" full size="lg">View itinerary</Button>
        <Button variant="ghost" full size="md">Add to calendar</Button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 9. MY BOOKINGS
// ─────────────────────────────────────────────────────────────
function ScreenMyBookings() {
  const tabs = ['Upcoming', 'Past', 'Cancelled'];
  const upcoming = [
    { k: 'goa', name: 'TAG Beach Resort', loc: 'Goa', dates: '14 – 18 Dec 2026', nights: 4, status: 'Confirmed', sc: TAG.success, scBg: TAG.success + '18' },
    { k: 'manali', name: 'TAG Snow Peaks', loc: 'Manali', dates: '8 – 12 Feb 2027', nights: 4, status: 'Pending', sc: TAG.warn, scBg: TAG.warn + '18' },
  ];
  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 26, color: TAG.ink, letterSpacing: -0.6 }}>My Trips</div>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff', border: '1px solid ' + TAG.hairline, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={I.search} size={18} color={TAG.ink} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 24, borderBottom: '1px solid ' + TAG.hairline, marginBottom: 14 }}>
        {tabs.map((t, i) => (
          <div key={t} style={{
            paddingBottom: 10, position: 'relative',
            fontFamily: TAG.display, fontWeight: 600, fontSize: 14,
            color: i === 0 ? TAG.ink : TAG.muted,
          }}>
            {t}
            <span style={{ marginLeft: 6, fontSize: 10, color: TAG.muted, fontFamily: 'ui-monospace, Menlo' }}>{i === 0 ? 2 : i === 1 ? 12 : 1}</span>
            {i === 0 && <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: TAG.teal, borderRadius: 1 }} />}
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {upcoming.map((t, i) => (
          <Card key={i} padding={0}>
            <div style={{ position: 'relative' }}>
              <Photo kind={t.k} height={150} radius={0} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 10px', borderRadius: 999, background: t.scBg, backdropFilter: 'blur(8px)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: t.sc }} />
                  <span style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 11, color: t.sc, letterSpacing: 0.3 }}>{t.status}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14, color: '#fff' }}>
                  <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 17, letterSpacing: -0.3 }}>{t.name}</div>
                  <div style={{ fontSize: 11, opacity: 0.9, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Icon d={I.pin} size={10} color="#fff" stroke={1.8}/>{t.loc}
                  </div>
                </div>
              </Photo>
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon d={I.calendar} size={18} color={TAG.teal} stroke={1.8}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 13 }}>{t.dates}</div>
                <div style={{ fontSize: 11, color: TAG.muted }}>{t.nights} nights</div>
              </div>
              <div style={{
                padding: '8px 14px', borderRadius: 10,
                background: TAG.ink, color: '#fff',
                fontFamily: TAG.display, fontWeight: 600, fontSize: 12,
              }}>View</div>
            </div>
          </Card>
        ))}

        {/* small section: countdown */}
        <Card padding={14} style={{ background: 'linear-gradient(135deg, ' + TAG.gold + '22 0%, ' + TAG.coral + '14 100%)', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: TAG.gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={I.sparkle} size={20} color="#1B1408" stroke={2}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14 }}>21 days till Goa ✈️</div>
              <div style={{ fontSize: 11, color: TAG.muted }}>Add itinerary, book transfers, pack list</div>
            </div>
          </div>
        </Card>
      </div>

      {/* FAB */}
      <div style={{
        position: 'absolute', bottom: 96, right: 16, zIndex: 41,
        padding: '12px 16px', borderRadius: 28,
        background: TAG.coral, color: '#fff',
        boxShadow: '0 12px 28px rgba(255,107,91,0.4)',
        fontFamily: TAG.display, fontWeight: 700, fontSize: 13,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <Icon d={I.plus} size={16} color="#fff" stroke={2.5}/> New enquiry
      </div>
      <div style={{ height: 110 }} />
      <TabBar active="trips" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 10. OFFERS
// ─────────────────────────────────────────────────────────────
function ScreenOffers() {
  const offers = [
    { k: 'kerala', title: 'Monsoon Magic · 30% off Kerala', sub: 'TAG Backwaters Resort', validity: 'Till 30 Aug 2026', tag: 'Hot deal', tc: TAG.coral },
    { k: 'jaipur', title: 'Royal Rajasthan getaway', sub: 'Heritage stays + cultural tour', validity: 'Till 15 Sep 2026', tag: 'Members only', tc: TAG.gold },
    { k: 'shimla', title: 'Free 2 extra nights', sub: 'Book 5 nights, get 7. Hills properties.', validity: 'Limited slots', tag: 'New', tc: TAG.teal },
  ];
  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px' }}>
        <div style={{ fontSize: 11, color: TAG.gold, fontFamily: 'ui-monospace, Menlo', letterSpacing: 2, textTransform: 'uppercase' }}>For you</div>
        <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 26, color: TAG.ink, letterSpacing: -0.6, marginTop: 2 }}>Member offers</div>
      </div>

      {/* Banner carousel */}
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{
          borderRadius: 22, overflow: 'hidden', position: 'relative',
          background: 'linear-gradient(135deg, #1B1408 0%, #2E1F0A 50%, #1B1408 100%)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'conic-gradient(from 200deg at 80% 30%, transparent 0deg, rgba(212,162,76,0.2) 30deg, transparent 60deg)',
          }} />
          <div style={{ padding: '22px 20px 24px', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 999, background: 'rgba(212,162,76,0.18)', color: TAG.gold, fontSize: 10, fontFamily: TAG.display, fontWeight: 700, letterSpacing: 0.4, marginBottom: 12 }}>
              <Icon d={I.zap} size={9} color={TAG.gold} fill={TAG.gold} stroke={0}/> FESTIVE
            </div>
            <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 22, color: '#fff', letterSpacing: -0.5, lineHeight: 1.1 }}>
              Diwali at <span style={{ color: TAG.gold }}>Udaipur</span><br/>From ₹6,800/night
            </div>
            <div style={{ fontFamily: TAG.body, fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>3 nights, breakfast included · 24 Oct – 4 Nov</div>
            <div style={{ marginTop: 14 }}>
              <Button variant="gold" size="sm">Avail now</Button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 10 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: i === 0 ? 16 : 5, height: 5, borderRadius: 3, background: i === 0 ? TAG.gold : TAG.hairline }} />
          ))}
        </div>
      </div>

      {/* List */}
      <div style={{ padding: '6px 20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {offers.map((o, i) => (
          <Card key={i} padding={0}>
            <div style={{ display: 'flex', gap: 12, padding: 12 }}>
              <Photo kind={o.k} height={80} radius={12} style={{ width: 80 }} label={false}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Pill color={o.tc}>{o.tag}</Pill>
                <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.ink, marginTop: 4, letterSpacing: -0.2 }}>{o.title}</div>
                <div style={{ fontSize: 11, color: TAG.muted, marginTop: 1 }}>{o.sub}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, color: TAG.muted }}>
                    <Icon d={I.clock} size={10} color={TAG.muted}/> {o.validity}
                  </div>
                  <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 12, color: TAG.coral }}>Avail →</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ height: 110 }} />
      <Concierge />
      <TabBar active="offers" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 11. PAYMENT & WALLET
// ─────────────────────────────────────────────────────────────
function ScreenPayment() {
  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon d={I.chevL} size={20} color={TAG.ink} stroke={2}/>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>Payment & Wallet</div>
      </div>

      {/* Summary card */}
      <div style={{ padding: '0 20px 14px' }}>
        <Card padding={18} style={{ background: 'linear-gradient(135deg, ' + TAG.teal + ' 0%, ' + TAG.tealDark + ' 100%)', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>Membership Payable</div>
            <Pill color="#7FE5B6" bg="rgba(46,158,110,0.2)">
              <Icon d={I.check} size={10} color="#7FE5B6" stroke={3}/> No Due
            </Pill>
          </div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 30, color: '#fff', marginTop: 8, letterSpacing: -0.8 }}>₹1,00,000</div>
          <div style={{ display: 'flex', gap: 18, marginTop: 14 }}>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.4, fontFamily: 'ui-monospace, Menlo' }}>PAID</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: '#fff' }}>₹1,00,000</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.4, fontFamily: 'ui-monospace, Menlo' }}>BALANCE</div>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.gold }}>₹0</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Wallet tiles */}
      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 10 }}>
        <Card padding={14} style={{ flex: 1, background: TAG.goldLight, border: '1px solid ' + TAG.gold + '40' }}>
          <Icon d={I.wallet} size={20} color="#8B6B2E"/>
          <div style={{ fontSize: 10, color: '#8B6B2E', fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 8 }}>Resort Credit</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 20, color: '#5C3D0A', marginTop: 2 }}>₹4,800</div>
        </Card>
        <Card padding={14} style={{ flex: 1, background: TAG.coral + '18', border: '1px solid ' + TAG.coral + '40' }}>
          <Icon d={I.gift} size={20} color={TAG.coralDark}/>
          <div style={{ fontSize: 10, color: TAG.coralDark, fontFamily: TAG.display, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 8 }}>Referral Points</div>
          <div style={{ fontFamily: TAG.display, fontWeight: 800, fontSize: 20, color: TAG.coralDark, marginTop: 2 }}>2,840</div>
        </Card>
      </div>

      {/* Transactions */}
      <div style={{ padding: '6px 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15, letterSpacing: -0.2 }}>Transactions</div>
        <div style={{ fontSize: 12, color: TAG.teal, fontWeight: 600 }}>This year ↓</div>
      </div>
      <div style={{ padding: '0 20px' }}>
        <Card padding={0}>
          {[
            { l: 'Membership · Final tranche', d: '12 Mar 2026', v: '−₹40,000', t: 'debit' },
            { l: 'Booking #TAG-DEC-8842', d: '24 Nov 2026', v: '−₹1,344', t: 'debit' },
            { l: 'Referral payout · Aman', d: '08 Aug 2026', v: '+₹2,000', t: 'credit' },
            { l: 'Resort credit · Diwali offer', d: '02 Oct 2026', v: '+₹4,800', t: 'credit' },
          ].map((tx, i) => (
            <div key={i} style={{
              padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
              borderBottom: i < 3 ? '1px solid ' + TAG.hairline : 'none',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: tx.t === 'credit' ? TAG.success + '20' : TAG.bgWarm,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon d={tx.t === 'credit' ? I.download : I.card} size={16} color={tx.t === 'credit' ? TAG.success : TAG.ink}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 13, color: TAG.ink }}>{tx.l}</div>
                <div style={{ fontSize: 11, color: TAG.muted, fontFamily: 'ui-monospace, Menlo' }}>{tx.d}</div>
              </div>
              <div style={{
                fontFamily: 'ui-monospace, Menlo', fontWeight: 700, fontSize: 13,
                color: tx.t === 'credit' ? TAG.success : TAG.ink,
              }}>{tx.v}</div>
            </div>
          ))}
        </Card>
      </div>
      <div style={{ height: 110 }} />
      <Concierge />
      <TabBar active="profile" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 12. E-KIT & DOCUMENTS
// ─────────────────────────────────────────────────────────────
function ScreenEKit() {
  const kit = [
    { l: 'Welcome Letter', s: 'from MEM Chief', size: '1.2 MB', i: I.doc },
    { l: 'TAG Member Booklet', s: 'PDF · 24 pages', size: '4.8 MB', i: I.ekit },
    { l: 'Membership Certificate', s: 'Issued 19 Mar 2026', size: '0.8 MB', i: I.shield },
  ];
  const docs = [
    { l: 'PAN Card', s: 'Uploaded · 14 Mar 2026', status: 'Verified', sc: TAG.success },
    { l: 'Aadhaar', s: 'Uploaded · 14 Mar 2026', status: 'Verified', sc: TAG.success },
    { l: 'Address proof', s: 'Pending upload', status: 'Required', sc: TAG.warn, pending: true },
  ];
  return (
    <Phone>
      <div style={{ padding: '54px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon d={I.chevL} size={20} color={TAG.ink} stroke={2}/>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>E-Kit & Documents</div>
      </div>

      {/* Membership snapshot */}
      <div style={{ padding: '0 20px 18px' }}>
        <div style={{
          borderRadius: 22, padding: 16, position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, #1B1408 0%, #2D2010 100%)',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: 14,
            background: 'rgba(212,162,76,0.18)', border: '1px solid ' + TAG.gold + '50',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon d={I.ekit} size={28} color={TAG.gold} stroke={1.6}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: TAG.gold, fontFamily: 'ui-monospace, Menlo', letterSpacing: 1.5 }}>TAG · 10 YEAR</div>
            <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 16, color: '#fff', marginTop: 2 }}>Rahul Singh</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Member since Mar 2026</div>
          </div>
        </div>
      </div>

      {/* Membership kit */}
      <div style={{ padding: '0 20px 10px', fontFamily: TAG.display, fontWeight: 700, fontSize: 15, letterSpacing: -0.2 }}>Membership kit</div>
      <div style={{ padding: '0 20px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {kit.map((k, i) => (
          <Card key={i} padding={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: TAG.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={k.i} size={20} color={TAG.teal} stroke={1.6}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.ink }}>{k.l}</div>
              <div style={{ fontSize: 11, color: TAG.muted }}>{k.s} · {k.size}</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: TAG.coral + '14', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={I.download} size={18} color={TAG.coral} stroke={2}/>
            </div>
          </Card>
        ))}
      </div>

      {/* Upload docs */}
      <div style={{ padding: '0 20px 10px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 15, letterSpacing: -0.2 }}>Your documents</div>
        <div style={{ fontSize: 12, color: TAG.teal, fontWeight: 600 }}>2 / 3 done</div>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {docs.map((d, i) => (
          <Card key={i} padding={14} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            border: d.pending ? '1.5px dashed ' + TAG.warn : '1px solid ' + TAG.hairline,
            background: d.pending ? TAG.warn + '08' : '#fff',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: d.pending ? TAG.warn + '20' : TAG.success + '18',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon d={d.pending ? I.upload : I.shield} size={20} color={d.sc} stroke={1.7}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: TAG.display, fontWeight: 700, fontSize: 14, color: TAG.ink }}>{d.l}</div>
              <div style={{ fontSize: 11, color: TAG.muted }}>{d.s}</div>
            </div>
            <Pill color={d.sc} bg={d.sc + '18'}>
              {!d.pending && <Icon d={I.check} size={9} color={d.sc} stroke={3}/>} {d.status}
            </Pill>
          </Card>
        ))}
      </div>

      {/* Drop zone */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{
          padding: '18px 14px', borderRadius: 16, textAlign: 'center',
          background: '#fff', border: '1.5px dashed ' + TAG.hairline,
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
            <Icon d={I.upload} size={20} color={TAG.teal} stroke={1.8}/>
            <Icon d={I.camera} size={20} color={TAG.teal} stroke={1.8}/>
          </div>
          <div style={{ fontFamily: TAG.display, fontWeight: 600, fontSize: 13, color: TAG.ink }}>Drag a file or use camera</div>
          <div style={{ fontSize: 11, color: TAG.muted, marginTop: 2 }}>JPG, PNG or PDF · up to 8 MB</div>
        </div>
      </div>
      <div style={{ height: 110 }} />
      <Concierge />
      <TabBar active="profile" />
    </Phone>
  );
}

Object.assign(window, {
  ScreenResortDetail, ScreenBookSummary, ScreenBookConfirm,
  ScreenMyBookings, ScreenOffers, ScreenPayment, ScreenEKit,
});

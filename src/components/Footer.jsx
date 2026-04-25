import { motion } from 'framer-motion';
import { MapPin, Clock, Link2, ArrowRight, Mail, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import FloatingCats from './FloatingCats';

const WA_NUMBER = '6288808132018';
const IG_HANDLE = 'pawqu.e';

const Footer = () => (
  <footer style={{ background: 'linear-gradient(180deg, #2d559a 0%, #1a2f5a 100%)', position: 'relative', overflow: 'hidden' }}>

    {/* Floating cats */}
    <FloatingCats count={8} seed={60} />

    {/* ══ LOKASI ══ */}
    <section
      id="lokasi"
      style={{ padding: '80px 0', borderTop: '1px solid rgba(245,221,180,0.07)', position: 'relative', zIndex: 2 }}
    >
      <div className="footer-container">
        {/* Top: title + label */}
        <div className="footer-lokasi-top">
          {/* Vertical label — hidden on mobile */}
          <div className="footer-branch-label">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.2em', whiteSpace: 'nowrap' }}>
              OUR BRANCHES
            </span>
          </div>

          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '6px 14px', borderRadius: '999px',
              backgroundColor: 'rgba(255,193,7,0.12)',
              border: '1px solid rgba(255,193,7,0.25)',
              color: '#FFC107',
              fontFamily: 'var(--font-body)', fontWeight: 800,
              fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: '18px',
            }}>
              <MapPin size={10} />
              Lokasi
            </div>

            <h2 className="footer-title">
              <span style={{ color: '#F5DDB4', display: 'block' }}>TEMUKAN</span>
              <span style={{ color: '#FFC107', display: 'block' }}>KAMI</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: '0.88rem', lineHeight: 1.75,
              color: 'rgba(245,221,180,0.5)',
              maxWidth: '280px', marginBottom: '20px',
            }}>
              Cek Instagram kami untuk update jadwal dan lokasi Market Day terkini.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link2 size={14} style={{ color: '#FFC107' }} />
              <a
                href={`https://instagram.com/${IG_HANDLE}`}
                target="_blank" rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
                  color: 'rgba(245,221,180,0.65)', textDecoration: 'none',
                }}
              >
                @{IG_HANDLE}
              </a>
            </div>
          </div>
        </div>

        {/* Location cards */}
        <div className="footer-cards-grid">
          {/* Card 1: Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
              borderRadius: '20px', padding: '22px',
              backgroundColor: 'rgba(255,193,7,0.07)',
              border: '1.5px solid rgba(255,193,7,0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.68rem',
                padding: '4px 12px', borderRadius: '999px',
                backgroundColor: 'rgba(74,222,128,0.18)', color: '#4ade80', letterSpacing: '0.06em',
              }}>
                Ready
              </span>
              <ExternalLink size={13} style={{ color: 'rgba(245,221,180,0.25)' }} />
            </div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              letterSpacing: '0.06em', color: '#F5DDB4', marginBottom: '8px',
            }}>Online Order</h4>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem',
              color: 'rgba(245,221,180,0.48)', lineHeight: 1.6,
            }}>
              Melayani Kampus A, B, C, SB & luar kampus. Gratis ongkir, syarat & ketentuan berlaku.
            </p>
          </motion.div>

          {/* Card 2: Market Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
              borderRadius: '20px', padding: '22px',
              backgroundColor: 'rgba(245,221,180,0.04)',
              border: '1px solid rgba(245,221,180,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.68rem',
                padding: '4px 12px', borderRadius: '999px',
                backgroundColor: 'rgba(255,193,7,0.13)', color: '#FFC107', letterSpacing: '0.06em',
              }}>
                Market Day
              </span>
              <ArrowRight size={13} style={{ color: 'rgba(245,221,180,0.25)' }} />
            </div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              letterSpacing: '0.06em', color: '#F5DDB4', marginBottom: '10px',
            }}>Stasiun Bumi</h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
              <MapPin size={12} style={{ color: '#FFC107', marginTop: '2px', flexShrink: 0 }} />
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem', color: 'rgba(245,221,180,0.5)', lineHeight: 1.6 }}>
                Telkom University Jakarta
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={12} style={{ color: '#FFC107' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.78rem', color: 'rgba(245,221,180,0.38)' }}>
                Saat Market Day berlangsung
              </p>
            </div>
          </motion.div>

          {/* Card 3: PO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
              borderRadius: '20px', padding: '22px',
              backgroundColor: 'rgba(245,221,180,0.04)',
              border: '1px solid rgba(245,221,180,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.68rem',
                padding: '4px 12px', borderRadius: '999px',
                backgroundColor: 'rgba(255,193,7,0.13)', color: '#FFC107', letterSpacing: '0.06em',
              }}>
                Pre-Order
              </span>
              <ArrowRight size={13} style={{ color: 'rgba(245,221,180,0.25)' }} />
            </div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              letterSpacing: '0.06em', color: '#F5DDB4', marginBottom: '10px',
            }}>Gedung Kampus B</h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
              <MapPin size={12} style={{ color: '#FFC107', marginTop: '2px', flexShrink: 0 }} />
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem', color: 'rgba(245,221,180,0.5)', lineHeight: 1.6 }}>
                Anggota kami stand by untuk kamu
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={12} style={{ color: '#FFC107' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.78rem', color: 'rgba(245,221,180,0.38)' }}>
                Sistem PO — pesan dulu, ambil di sini
              </p>
            </div>
          </motion.div>

          {/* Card 4: Cara Order */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
              borderRadius: '20px', padding: '22px',
              backgroundColor: 'rgba(245,221,180,0.04)',
              border: '1px solid rgba(245,221,180,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.68rem',
                padding: '4px 12px', borderRadius: '999px',
                backgroundColor: 'rgba(255,193,7,0.13)', color: '#FFC107', letterSpacing: '0.06em',
              }}>
                Info
              </span>
              <Link2 size={13} style={{ color: 'rgba(245,221,180,0.25)' }} />
            </div>
            <h4 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              letterSpacing: '0.06em', color: '#F5DDB4', marginBottom: '8px',
            }}>Cara Order</h4>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem',
              color: 'rgba(245,221,180,0.48)', lineHeight: 1.65,
            }}>
              1. DM / WA kami<br />2. Tentukan waktu & lokasi<br />3. Bayar & ambil!
            </p>
          </motion.div>
        </div>

        {/* See more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}
        >
          <a
            href={`https://instagram.com/${IG_HANDLE}`}
            target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
              color: 'rgba(245,221,180,0.4)', textDecoration: 'none',
              paddingBottom: '3px',
              borderBottom: '1px solid rgba(245,221,180,0.15)',
            }}
          >
            Update lokasi di Instagram
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>

    {/* ══ HUBUNGI KAMI ══ */}
    <section
      id="tentang"
      style={{ padding: '80px 0', borderTop: '1px solid rgba(245,221,180,0.07)' }}
    >
      <div className="footer-container">
        <div className="contact-grid">
          {/* Left: Contact CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginBottom: '14px',
              }}>
                <Mail size={15} style={{ color: '#FFC107' }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontWeight: 800,
                  fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#FFC107',
                }}>Hubungi Kami</span>
              </div>

              <h2 className="contact-title">
                TANYA &amp;
                <br />
                <span style={{ color: '#FFC107' }}>ORDER</span>
              </h2>

              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.9rem', lineHeight: 1.75,
                color: 'rgba(245,221,180,0.52)',
                maxWidth: '360px',
              }}>
                Ada pertanyaan? Mau PO duluan? Langsung aja hubungi kami di WhatsApp atau Instagram. Kami fast response!
              </p>
            </div>

            {/* WA & IG links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20Pawque!%20Saya%20mau%20tanya%20tentang%20menu%20dan%20cara%20order.`}
                target="_blank" rel="noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', borderRadius: '16px',
                  textDecoration: 'none',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(245,221,180,0.12)',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  backgroundColor: 'rgba(37,211,102,0.12)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MessageCircle size={18} style={{ color: '#4ade80' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.88rem', color: '#F5DDB4', marginBottom: '2px' }}>
                    Chat di WhatsApp
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.75rem', color: 'rgba(245,221,180,0.4)' }}>
                    Respons cepat · Pre-Order · Tanya apapun
                  </p>
                </div>
                <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'rgba(245,221,180,0.25)', flexShrink: 0 }} />
              </motion.a>

              <motion.a
                href={`https://instagram.com/${IG_HANDLE}`}
                target="_blank" rel="noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 20px', borderRadius: '16px',
                  textDecoration: 'none',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(245,221,180,0.12)',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  backgroundColor: 'rgba(220,39,67,0.1)',
                  border: '1px solid rgba(220,39,67,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Link2 size={17} style={{ color: '#f472b6' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.88rem', color: '#F5DDB4', marginBottom: '2px' }}>
                    Follow Instagram
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.75rem', color: 'rgba(245,221,180,0.4)' }}>
                    @{IG_HANDLE} · Update jadwal & lokasi
                  </p>
                </div>
                <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'rgba(245,221,180,0.25)', flexShrink: 0 }} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Thank You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h2 className="thankyou-title">
              <span style={{ color: '#F5DDB4', display: 'block' }}>THANK</span>
              <span style={{ color: '#FFC107', display: 'block' }}>YOU!</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: '0.9rem', lineHeight: 1.8,
              color: 'rgba(245,221,180,0.52)', maxWidth: '340px',
            }}>
              Terima kasih sudah mampir! Kami akan segera hadir di Market Day kampus. Stay tuned ya!
            </p>

            <motion.a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '56px', height: '56px', borderRadius: '50%',
                backgroundColor: '#FFC107',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#1a2f5a',
                boxShadow: '0 8px 28px rgba(255,193,7,0.4)',
                textDecoration: 'none',
              }}
            >
              <ArrowRight size={22} />
            </motion.a>

            <motion.img
              src="/elemen/seneng.png"
              alt="Mascot"
              style={{ width: '100px', opacity: 0.5, alignSelf: 'flex-end' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ══ Bottom Footer ══ */}
    <div style={{
      borderTop: '1px solid rgba(245,221,180,0.07)',
      backgroundColor: 'rgba(0,0,0,0.18)',
      padding: '48px 0 0 0',
    }}>
      <div className="footer-container">
        <div className="footer-bottom-grid">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/elemen/Logo.png" alt="Pawque" style={{ height: '38px' }} />
              <span style={{ fontFamily: 'var(--font-brand)', color: '#F5DDB4', fontSize: '1.25rem', letterSpacing: '0.06em' }}>
                Pawque
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.82rem',
              lineHeight: 1.75, color: 'rgba(245,221,180,0.36)', maxWidth: '280px',
            }}>
              Quesillo autentik &amp; Lemonade segar. Setiap gigitan adalah petualangan rasa!
            </p>
          </div>

          {/* Subscribe */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} style={{ color: '#FFC107' }} />
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.68rem',
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFC107',
              }}>
                Subscribe
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.82rem', color: 'rgba(245,221,180,0.38)', lineHeight: 1.6 }}>
              Daftarkan email kamu dan jadi yang pertama tahu jadwal Market Day kami!
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="email"
                placeholder="Masukkan email kamu"
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: '12px',
                  border: '1px solid rgba(245,221,180,0.15)',
                  backgroundColor: 'rgba(245,221,180,0.07)',
                  color: '#F5DDB4',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.82rem',
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '12px 18px', borderRadius: '12px', border: 'none',
                  backgroundColor: '#FFC107', color: '#1a2f5a', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(245,221,180,0.26)' }}>
            &copy; 2026 Pawque. All rights reserved.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(245,221,180,0.26)' }}>
            Made with <Heart size={11} fill="#FFC107" style={{ color: '#FFC107' }} /> for Market Day
          </p>
        </div>
      </div>

      {/* CONTACT watermark */}
      <div aria-hidden style={{
        textAlign: 'center', overflow: 'hidden',
        marginTop: '8px', userSelect: 'none', pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(60px, 14vw, 180px)',
          color: 'rgba(245,221,180,0.03)',
          letterSpacing: '0.1em', lineHeight: 1, display: 'block',
        }}>
          CONTACT
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

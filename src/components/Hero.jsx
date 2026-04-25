import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import FloatingCats from './FloatingCats';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        paddingTop: '64px',
        background: 'linear-gradient(148deg, #163064 0%, #2d559a 60%, #3b6cbf 100%)',
      }}
    >
      {/* Bg glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-120px', right: '-60px',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,193,7,0.11), transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-60px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,221,180,0.06), transparent 65%)',
        }} />
      </div>

      {/* Floating cat sprites */}
      <FloatingCats count={14} seed={0} />

      {/* ── Hero Content ── */}
      <div className="hero-grid" style={{ position: 'relative', zIndex: 10 }}>

        {/* ══ LEFT: Text ══ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ width: 'fit-content' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 18px', borderRadius: '999px',
              backgroundColor: 'rgba(255,193,7,0.15)',
              border: '1.5px solid rgba(255,193,7,0.4)',
              color: '#FFC107',
              fontFamily: 'var(--font-body)', fontWeight: 800,
              fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>
              <Star size={11} fill="#FFC107" style={{ flexShrink: 0 }} />
              Market Day Special
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(245,221,180,0.4)', marginTop: '-8px',
            }}
          >
            Where every bite tells a story.
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="hero-headline"
          >
            <span style={{ color: '#F5DDB4', display: 'block' }}>WHAT'S</span>
            <span style={{ color: '#FFC107', display: 'block' }}>YOURS?</span>
          </motion.h1>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 800,
              fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(245,221,180,0.38)',
            }}>
              Mulai dari
            </span>
            <span style={{
              fontFamily: 'var(--font-number)',
              fontWeight: 800,
              fontSize: '2.5rem',
              color: '#FFC107',
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}>
              Rp 8K
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: '0.9rem', lineHeight: 1.75,
              color: 'rgba(245,221,180,0.58)',
              maxWidth: '380px',
            }}
          >
            Quesillo autentik dan Lemonade segar yang bikin hari-harimu makin berwarna. Hadir di Market Day kampus!
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToMenu}
              id="hero-order-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '15px 36px', borderRadius: '14px', border: 'none',
                backgroundColor: '#FFC107', color: '#1a2f5a',
                fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.95rem',
                letterSpacing: '0.02em', cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(255,193,7,0.38)',
              }}
            >
              Pesan Sekarang
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#FFC107" style={{ color: '#FFC107' }} />
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.77rem',
              color: 'rgba(245,221,180,0.4)',
            }}>
              Paw-sitively the best choice! 🐾
            </span>
          </motion.div>
        </div>

        {/* ══ RIGHT: Logo visual ══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, type: 'spring', stiffness: 90 }}
          className="hero-logo-container"
        >
          {/* Outer glow ring pulse */}
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-glow-ring"
          />

          {/* Main circle bg */}
          <div className="hero-circle">
            {/* Dashed orbit rings */}
            <div style={{
              position: 'absolute', inset: '-22px',
              borderRadius: '50%',
              border: '1px dashed rgba(255,193,7,0.14)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', inset: '-48px',
              borderRadius: '50%',
              border: '1px dashed rgba(255,193,7,0.07)',
              pointerEvents: 'none',
            }} />

            {/* Logo */}
            <motion.img
              src="/elemen/Logo.png"
              alt="Pawque Logo"
              className="float-anim hero-logo-img"
            />
          </div>

          {/* Vertical watermark — desktop only */}
          <div
            aria-hidden
            className="hero-watermark"
          >
            PAWQUE
          </div>
        </motion.div>
      </div>

      {/* ── Thumbnail strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{
          position: 'relative', zIndex: 10,
          borderTop: '1px solid rgba(245,221,180,0.08)',
          backgroundColor: 'rgba(22, 48, 100, 0.5)',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 20px',
          display: 'flex', alignItems: 'center', gap: '12px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {[
            { label: 'Quesillo', price: 'Rp 15K', active: true },
            { label: 'Fresh Lemonade', price: 'Rp 8K' },
            { label: 'Pawfect Combo!', price: 'Rp 20K' },
          ].map((item, i) => (
            <div
              key={i}
              onClick={scrollToMenu}
              style={{
                flexShrink: 0,
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 16px', borderRadius: '16px', cursor: 'pointer',
                backgroundColor: item.active ? '#FFC107' : 'rgba(245,221,180,0.06)',
                border: item.active ? 'none' : '1px solid rgba(245,221,180,0.1)',
                minWidth: '140px', transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => { if (!item.active) e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                backgroundColor: item.active ? 'rgba(26,47,90,0.2)' : 'rgba(245,221,180,0.08)',
                border: item.active ? '1.5px solid rgba(26,47,90,0.15)' : '1px solid rgba(245,221,180,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%',
                  backgroundColor: item.active ? 'rgba(26,47,90,0.35)' : 'rgba(245,221,180,0.12)',
                }} />
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.78rem',
                  color: item.active ? '#1a2f5a' : '#F5DDB4', lineHeight: 1.3,
                }}>{item.label}</p>
                <p style={{
                  fontFamily: 'var(--font-number)', fontWeight: 800, fontSize: '0.73rem',
                  color: item.active ? 'rgba(26,47,90,0.65)' : '#FFC107',
                }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

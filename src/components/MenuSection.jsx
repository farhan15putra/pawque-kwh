import { motion } from 'framer-motion';
import { Plus, Flame, ArrowRight } from 'lucide-react';
import useCartStore from '../store/cartStore';
import { menuItems, formatPrice } from '../data/menu';
import FloatingCats from './FloatingCats';
import elemenFix from '../assets/elemen pawque/elemen_fix__1_-removebg-preview (1).png';
import fotoQuesillo from '../assets/Screenshot 2026-04-21 203926.png';
import fotoLemonade from '../assets/Screenshot 2026-04-21 203950.png';

const CONTAINER = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 80px',
};

/* ─── Marquee ─── */
const MarqueeTicker = ({ reverse = false }) => {
  const items = ['PAWQUE', 'QUESILLO', 'LEMONADE', 'MARKET DAY', 'FRESH', 'HANDMADE'];
  return (
    <div style={{ overflow: 'hidden', background: '#FFC107', padding: '14px 0' }}>
      <div
        className="marquee-track"
        style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: '24s' }}
      >
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            padding: '0 28px',
            fontFamily: 'var(--font-display)',
            fontSize: '1rem', letterSpacing: '0.16em',
            color: '#1a2f5a', whiteSpace: 'nowrap',
          }}>
            {text}
            <span style={{ opacity: 0.3, fontSize: '6px' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Special 2-Product Card ─── */
const SpecialCard = ({ item, index }) => {
  const { addItem } = useCartStore();
  const isLeft = index === 0; // Quesillo on left, Lemonade on right

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      style={{
        position: 'relative',
        borderRadius: '32px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: isLeft
          ? '1.5px solid rgba(255,193,7,0.35)'
          : '1.5px solid rgba(96,165,250,0.35)',
        boxShadow: isLeft
          ? '0 24px 64px rgba(255,193,7,0.1), 0 4px 24px rgba(0,0,0,0.3)'
          : '0 24px 64px rgba(96,165,250,0.1), 0 4px 24px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        transition: 'all 0.35s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Badge */}
      {item.badge && (
        <div style={{
          position: 'absolute', top: '20px', left: '20px', zIndex: 20,
          display: 'flex', alignItems: 'center', gap: '5px',
          padding: '6px 14px', borderRadius: '999px',
          backgroundColor: item.badgeColor,
          color: '#1a2f5a',
          fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.7rem',
          letterSpacing: '0.04em',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        }}>
          <Flame size={10} />
          {item.badge}
        </div>
      )}

      {/* Image — tall */}
      <div style={{
        height: '340px',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: isLeft ? '#1a1008' : '#0f1e3a',
      }}>
        <motion.img
          src={item.image}
          alt={item.name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = isLeft
              ? 'linear-gradient(145deg, #2a1a05, #1a0f00)'
              : 'linear-gradient(145deg, #0f1e3a, #0a1428)';
          }}
        />
        {/* Gradient overlay bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '100px',
          background: 'linear-gradient(to top, rgba(22,30,60,0.9), transparent)',
        }} />
        {/* Tagline overlay */}
        <div style={{
          position: 'absolute', bottom: '18px', left: '24px', right: '24px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontWeight: 800,
            fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: isLeft ? 'rgba(255,193,7,0.8)' : 'rgba(96,165,250,0.8)',
          }}>
            {item.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: '28px 32px 32px',
        display: 'flex', flexDirection: 'column', gap: '16px', flex: 1,
      }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.2rem', letterSpacing: '0.04em',
            color: '#F5DDB4', lineHeight: 1, marginBottom: '12px',
          }}>
            {item.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.875rem', lineHeight: 1.7,
            color: 'rgba(245,221,180,0.52)',
          }}>
            {item.description}
          </p>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '20px',
          borderTop: `1px solid ${isLeft ? 'rgba(255,193,7,0.15)' : 'rgba(96,165,250,0.15)'}`,
          marginTop: 'auto',
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.65rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(245,221,180,0.35)', display: 'block', marginBottom: '2px',
            }}>
              Harga
            </span>
            <span style={{
              fontFamily: 'var(--font-number)',
              fontWeight: 800,
              fontSize: '2rem', letterSpacing: '0.04em',
              color: isLeft ? '#FFC107' : '#60a5fa',
            }}>
              {formatPrice(item.price)}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => addItem(item)}
            id={`add-to-cart-${item.id}`}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '14px', border: 'none',
              backgroundColor: isLeft ? '#FFC107' : '#60a5fa',
              color: '#1a2f5a',
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.875rem',
              cursor: 'pointer',
              boxShadow: isLeft
                ? '0 6px 20px rgba(255,193,7,0.35)'
                : '0 6px 20px rgba(96,165,250,0.35)',
            }}
          >
            <Plus size={16} />
            Tambah
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/* ════════════════ MenuSection ════════════════ */
const MenuSection = () => (
  <>
    {/* Marquee 1 */}
    <div id="menu">
      <MarqueeTicker />
    </div>

    {/* Unmatched Quality */}
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, #1a2f5a 0%, #2a4d8f 100%)',
      padding: '120px 0',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', userSelect: 'none', overflow: 'hidden',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(100px, 20vw, 240px)',
          color: 'rgba(245,221,180,0.03)',
          letterSpacing: '0.1em', lineHeight: 1, whiteSpace: 'nowrap',
        }}>
          PAWQUE
        </span>
      </div>

      {/* 🐾 Floating cats */}
      <FloatingCats count={12} seed={20} />

      <div style={{ ...CONTAINER, position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '100px', alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(64px, 8vw, 112px)',
              lineHeight: 0.92, letterSpacing: '0.02em', marginBottom: '36px',
            }}>
              <span style={{ color: '#F5DDB4', display: 'block' }}>UNMATCHED</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2.5px #FFC107' }}>
                QUALITY
              </span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: '0.95rem', lineHeight: 1.8,
              color: 'rgba(245,221,180,0.55)', maxWidth: '400px',
            }}>
              Di Pawque, setiap hari adalah perjalanan menuju cita rasa autentik. Dibuat dengan bahan pilihan, diracik dengan cinta, disajikan langsung untukmu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.85 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 85 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <motion.img
              src={elemenFix}
              alt="Pawque cat characters"
              className="float-anim"
              style={{
                width: 'min(420px, 100%)',
                filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Marquee 2 */}
    <MarqueeTicker reverse />

    {/* ══ 2-Product Special Section ══ */}
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #2d559a 0%, #3b6cbf 100%)',
      padding: '100px 0',
    }}>
      {/* 🐾 Floating cats */}
      <FloatingCats count={12} seed={40} />

      <div style={{ ...CONTAINER, position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '56px', flexWrap: 'wrap', gap: '20px',
          }}
        >
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '6px 14px', borderRadius: '999px',
              backgroundColor: 'rgba(255,193,7,0.13)',
              border: '1px solid rgba(255,193,7,0.28)',
              color: '#FFC107',
              fontFamily: 'var(--font-body)', fontWeight: 800,
              fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              <Flame size={11} />
              Popular
            </div>
          </div>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
            color: '#FFC107', textDecoration: 'none',
            paddingBottom: '4px',
            borderBottom: '1px solid rgba(255,193,7,0.3)',
          }}>
            Order via WA
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* 2-Column special grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '28px',
        }}>
          {menuItems.map((item, index) => {
            // inject foto produk berdasarkan id
            const photo = item.id === 1 ? fotoQuesillo : fotoLemonade;
            return (
              <SpecialCard key={item.id} item={{ ...item, image: photo }} index={index} />
            );
          })}
        </div>

        {/* Mascot bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '72px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <motion.img
              src="/elemen/melet.png"
              alt="Mascot"
              style={{ width: '60px', objectFit: 'contain' }}
              animate={{ rotate: [0, 8, -8, 0], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.875rem',
              color: 'rgba(245,221,180,0.35)',
            }}>
              Kucing kita pun setuju ini enak!
            </p>
            <motion.img
              src="/elemen/seneng.png"
              alt="Mascot"
              style={{ width: '60px', objectFit: 'contain' }}
              animate={{ rotate: [0, -8, 8, 0], y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default MenuSection;

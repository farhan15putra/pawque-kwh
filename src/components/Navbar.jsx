import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import useCartStore from '../store/cartStore';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Contact', href: '#tentang' },
];

const Navbar = () => {
  const { toggleCart, items } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        height: '72px',
        backgroundColor: 'rgba(22, 48, 100, 0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(245,221,180,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 48px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* ── Logo only ── */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/elemen/Logo.png"
            alt="Pawque"
            style={{ height: '44px', width: 'auto' }}
          />
        </a>

        {/* ── Center Nav ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(245,221,180,0.07)',
            border: '1px solid rgba(245,221,180,0.12)',
            borderRadius: '999px',
            padding: '6px 8px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '0.875rem',
                padding: '8px 22px',
                borderRadius: '999px',
                color: link.active ? '#1a2f5a' : 'rgba(245,221,180,0.75)',
                backgroundColor: link.active ? '#FFC107' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!link.active) {
                  e.currentTarget.style.color = '#F5DDB4';
                  e.currentTarget.style.backgroundColor = 'rgba(245,221,180,0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (!link.active) {
                  e.currentTarget.style.color = 'rgba(245,221,180,0.75)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Right: User + Cart ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

          <button
            id="navbar-cart-btn"
            onClick={toggleCart}
            style={{
              position: 'relative',
              display: 'flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#FFC107',
              color: '#1a2f5a',
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: '0.875rem',
              padding: '10px 22px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255,193,7,0.3)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Keranjang</span>
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: '-8px', right: '-8px',
                  width: '20px', height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-number)',
                }}
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

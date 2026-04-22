import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react';
import useCartStore from '../store/cartStore';
import { formatPrice } from '../data/menu';

const WHATSAPP_NUMBER = '6285156789012'; // Ganti dengan nomor WA Pawque

const CartDrawer = () => {
  const { items, isOpen, closeCart, increment, decrement, removeItem, clearCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  const handleWhatsApp = () => {
    if (items.length === 0) return;

    const itemLines = items
      .map((i) => `- ${i.name} x${i.qty} = ${formatPrice(i.price * i.qty)}`)
      .join('\n');

    const message = `Halo Pawque!\n\nSaya mau pesan:\n${itemLines}\n\nTotal: ${formatPrice(totalPrice)}\n\nKirim ke lokasi Market Day Stand ya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col w-full max-w-sm"
            style={{
              background: 'linear-gradient(180deg, #2d559a 0%, #243f7a 100%)',
              borderLeft: '1px solid rgba(245,221,180,0.15)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.4)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid rgba(245,221,180,0.12)' }}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} style={{ color: '#FFC107' }} />
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', color: '#F5DDB4', fontWeight: 700, fontSize: '1.15rem' }}>
                    Keranjangmu
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,221,180,0.55)', fontSize: '0.75rem', fontWeight: 600 }}>
                    {totalItems} item dipilih
                  </p>
                </div>
              </div>
              <button
                onClick={closeCart}
                id="cart-close-btn"
                className="p-2 rounded-xl transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(245,221,180,0.1)', color: '#F5DDB4' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full gap-5 py-20"
                >
                  <motion.img
                    src="/elemen/sedih.png"
                    alt="empty cart"
                    className="w-24 h-24 object-contain opacity-70"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <p
                    className="font-bold text-center"
                    style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,221,180,0.6)' }}
                  >
                    Keranjangmu masih kosong.
                    <br />
                    <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>Yuk pilih menu dulu!</span>
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl p-4 flex items-center gap-4"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(245,221,180,0.1)',
                      }}
                    >
                      {/* Product icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #f8d898, #e8b354)' }}
                      >
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Minus size={20} style={{ color: 'rgba(255,255,255,0.7)' }} />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-bold text-sm truncate"
                          style={{ color: '#F5DDB4', fontFamily: 'var(--font-body)' }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-sm font-extrabold"
                          style={{ color: '#FFC107', fontFamily: 'var(--font-body)' }}
                        >
                          {formatPrice(item.price * item.qty)}
                        </p>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-1.5">
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => decrement(item.id)}
                          id={`cart-decrement-${item.id}`}
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(245,221,180,0.15)', color: '#F5DDB4' }}
                        >
                          {item.qty === 1 ? <Trash2 size={13} /> : <Minus size={13} />}
                        </motion.button>
                        <span
                          className="w-6 text-center font-extrabold text-sm"
                          style={{ color: '#F5DDB4', fontFamily: 'var(--font-body)' }}
                        >
                          {item.qty}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => increment(item.id)}
                          id={`cart-increment-${item.id}`}
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(255,193,7,0.25)', color: '#FFC107' }}
                        >
                          <Plus size={13} />
                        </motion.button>
                      </div>

                      {/* Remove */}
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => removeItem(item.id)}
                        id={`cart-remove-${item.id}`}
                        className="p-1.5 rounded-lg"
                        style={{ color: 'rgba(245,221,180,0.4)' }}
                      >
                        <Trash2 size={14} />
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 py-5 flex flex-col gap-4"
                style={{ borderTop: '1px solid rgba(245,221,180,0.12)' }}
              >
                {/* Summary */}
                <div className="flex flex-col gap-2">
                  <div
                    className="flex justify-between text-sm font-semibold"
                    style={{ color: 'rgba(245,221,180,0.65)', fontFamily: 'var(--font-body)' }}
                  >
                    <span>Subtotal ({totalItems} item)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div
                    className="flex justify-between font-extrabold text-base"
                    style={{ color: '#F5DDB4', fontFamily: 'var(--font-body)' }}
                  >
                    <span>Total</span>
                    <span style={{ color: '#FFC107' }}>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                {/* WhatsApp button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  id="whatsapp-checkout-btn"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-extrabold text-base"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
                  }}
                >
                  <Send size={18} />
                  Pesan via WhatsApp
                </motion.button>

                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  id="cart-clear-btn"
                  className="text-xs text-center font-semibold hover:opacity-100 transition-opacity"
                  style={{ color: 'rgba(245,221,180,0.4)', fontFamily: 'var(--font-body)' }}
                >
                  Kosongkan keranjang
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

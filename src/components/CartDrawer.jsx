import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, Send, ShoppingBag, ArrowLeft, User, MapPin, MessageSquare, Package, Footprints, Bike } from 'lucide-react';
import { useState } from 'react';
import useCartStore from '../store/cartStore';
import { formatPrice } from '../data/menu';

const WHATSAPP_NUMBER = '6288808132018';

/* ── Reusable input style ── */
const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: '12px',
  border: '1.5px solid rgba(245,221,180,0.18)',
  backgroundColor: 'rgba(255,255,255,0.06)',
  color: '#F5DDB4',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: '0.72rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(245,221,180,0.55)',
  marginBottom: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
};

const CartDrawer = () => {
  const { items, isOpen, closeCart, increment, decrement, removeItem, clearCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  /* ── Checkout step: 'cart' | 'form' ── */
  const [step, setStep] = useState('cart');
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    method: 'pickup', // 'pickup' | 'delivery'
    location: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!orderInfo.name.trim()) e.name = 'Nama harus diisi';
    if (orderInfo.method === 'delivery' && !orderInfo.location.trim()) e.location = 'Lokasi pengiriman harus diisi';
    return e;
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    const itemLines = items
      .map((i) => `- ${i.name} x${i.qty} = ${formatPrice(i.price * i.qty)}`)
      .join('\n');

    const methodLine = orderInfo.method === 'pickup'
      ? 'Self Pickup — Kampus B (koordinasi lokasi via WA)'
      : `Delivery ke: ${orderInfo.location}`;

    const notesLine = orderInfo.notes.trim() ? `\nCatatan: ${orderInfo.notes}` : '';

    const message =
      `Halo Pawque! \n\n` +
      `*Nama:* ${orderInfo.name}\n` +
      `*Metode:* ${methodLine}\n` +
      `*Catatan:* ${orderInfo.notes}\n` +
      `*Pesanan:*\n${itemLines}\n` +
      `*Total: ${formatPrice(totalPrice)}*\n` +
      `Mohon konfirmasi ya, terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');

    // Reset setelah berhasil kirim
    clearCart();
    setStep('cart');
    setOrderInfo({ name: '', method: 'pickup', location: '', notes: '' });
    setErrors({});
    closeCart();
  };

  const handleClose = () => {
    setStep('cart');
    setErrors({});
    closeCart();
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
            onClick={handleClose}
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
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col w-full"
            style={{
              maxWidth: '480px',
              background: 'linear-gradient(180deg, #2d559a 0%, #243f7a 100%)',
              borderLeft: '1px solid rgba(245,221,180,0.15)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.4)',
            }}
          >
            {/* ── Header ── */}
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid rgba(245,221,180,0.12)',
              }}
            >
              <div className="flex items-center gap-3">
                {step === 'form' ? (
                  <button
                    onClick={() => { setStep('cart'); setErrors({}); }}
                    style={{ backgroundColor: 'rgba(245,221,180,0.1)', color: '#F5DDB4', padding: '6px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex' }}
                  >
                    <ArrowLeft size={18} />
                  </button>
                ) : (
                  <ShoppingBag size={22} style={{ color: '#FFC107' }} />
                )}
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', color: '#F5DDB4', fontWeight: 700, fontSize: '1.15rem' }}>
                    {step === 'cart' ? 'Keranjangmu' : 'Detail Pesanan'}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-number)', color: 'rgba(245,221,180,0.55)', fontSize: '0.75rem', fontWeight: 600 }}>
                    {step === 'cart' ? `${totalItems} item dipilih` : 'Lengkapi data sebelum order'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                id="cart-close-btn"
                className="p-2 rounded-xl transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(245,221,180,0.1)', color: '#F5DDB4' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* ── Step indicator ── */}
            <div style={{ display: 'flex', gap: '8px', padding: '16px 24px 8px' }}>
              {['Keranjang', 'Data Order'].map((label, idx) => (
                <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{
                    height: '3px',
                    borderRadius: '99px',
                    backgroundColor: (step === 'cart' ? idx === 0 : idx === 1)
                      ? '#FFC107'
                      : 'rgba(245,221,180,0.15)',
                    transition: 'background-color 0.3s',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: (step === 'cart' ? idx === 0 : idx === 1)
                      ? '#FFC107'
                      : 'rgba(245,221,180,0.3)',
                    transition: 'color 0.3s',
                  }}>{label}</span>
                </div>
              ))}
            </div>

            {/* ── STEP 1: Cart Items ── */}
            <AnimatePresence mode="wait">
              {step === 'cart' && (
                <motion.div
                  key="step-cart"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                  style={{ padding: '16px 24px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
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
                              style={{ color: '#FFC107', fontFamily: 'var(--font-number)' }}
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
                              style={{ color: '#F5DDB4', fontFamily: 'var(--font-number)' }}
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
                </motion.div>
              )}

              {/* ── STEP 2: Order Form ── */}
              {step === 'form' && (
                <motion.div
                  key="step-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22 }}
                  style={{ padding: '20px 24px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>
                      <User size={12} />
                      Nama Penerima *
                    </label>
                    <input
                      id="order-name"
                      type="text"
                      placeholder="Nama kamu..."
                      value={orderInfo.name}
                      onChange={(e) => { setOrderInfo({ ...orderInfo, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                      style={{
                        ...inputStyle,
                        borderColor: errors.name ? '#ef4444' : 'rgba(245,221,180,0.18)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(245,221,180,0.18)')}
                    />
                    {errors.name && (
                      <p style={{ color: '#ef4444', fontSize: '0.72rem', fontFamily: 'var(--font-body)', marginTop: '4px' }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Method toggle */}
                  <div>
                    <label style={labelStyle}>
                      <Package size={12} />
                      Metode Pengambilan *
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[
                        { val: 'pickup', icon: <Footprints size={14} />, label: 'Self Pickup' },
                        { val: 'delivery', icon: <Bike size={14} />, label: 'Delivery' },
                      ].map(({ val, icon, label }) => (
                        <button
                          key={val}
                          id={`method-${val}`}
                          onClick={() => { setOrderInfo({ ...orderInfo, method: val, location: '' }); setErrors({ ...errors, location: '' }); }}
                          style={{
                            flex: 1,
                            padding: '10px 12px',
                            borderRadius: '12px',
                            border: orderInfo.method === val
                              ? '1.5px solid #FFC107'
                              : '1.5px solid rgba(245,221,180,0.15)',
                            backgroundColor: orderInfo.method === val
                              ? 'rgba(255,193,7,0.15)'
                              : 'rgba(255,255,255,0.04)',
                            color: orderInfo.method === val ? '#FFC107' : 'rgba(245,221,180,0.5)',
                            fontFamily: 'var(--font-body)',
                            fontWeight: 700,
                            fontSize: '0.78rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                          }}
                        >
                          {icon}
                          {label}
                        </button>
                      ))}
                    </div>
                    {/* Hint below */}
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      color: 'rgba(245,221,180,0.35)',
                      marginTop: '8px',
                    }}>
                      {orderInfo.method === 'pickup'
                        ? '📍 Ambil langsung di Kampus B — koordinasi titik lewat WhatsApp ya!'
                        : '🛵 Kami antar ke lokasi kamu — gratis ongkir, s&k berlaku.'}
                    </p>
                  </div>

                  {/* Location — only if delivery */}
                  <AnimatePresence>
                    {orderInfo.method === 'delivery' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label style={labelStyle}>
                          <MapPin size={12} />
                          Lokasi Antar *
                        </label>
                        <input
                          id="order-location"
                          type="text"
                          placeholder="Gedung / kelas / titik kumpul..."
                          value={orderInfo.location}
                          onChange={(e) => { setOrderInfo({ ...orderInfo, location: e.target.value }); setErrors({ ...errors, location: '' }); }}
                          style={{
                            ...inputStyle,
                            borderColor: errors.location ? '#ef4444' : 'rgba(245,221,180,0.18)',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                          onBlur={(e) => (e.target.style.borderColor = errors.location ? '#ef4444' : 'rgba(245,221,180,0.18)')}
                        />
                        {errors.location && (
                          <p style={{ color: '#ef4444', fontSize: '0.72rem', fontFamily: 'var(--font-body)', marginTop: '4px' }}>
                            {errors.location}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Notes */}
                  <div>
                    <label style={labelStyle}>
                      <MessageSquare size={12} />
                      Catatan Tambahan (opsional)
                    </label>
                    <textarea
                      id="order-notes"
                      rows={3}
                      placeholder="Misal: tidak pakai es, tolong dibungkus rapi, dll..."
                      value={orderInfo.notes}
                      onChange={(e) => setOrderInfo({ ...orderInfo, notes: e.target.value })}
                      style={{
                        ...inputStyle,
                        resize: 'none',
                        lineHeight: 1.6,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(245,221,180,0.18)')}
                    />
                  </div>

                  {/* Order summary preview */}
                  <div style={{
                    borderRadius: '14px',
                    padding: '14px 16px',
                    backgroundColor: 'rgba(255,193,7,0.06)',
                    border: '1px solid rgba(255,193,7,0.2)',
                    display: 'flex', flexDirection: 'column', gap: '6px',
                  }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.72rem', color: '#FFC107', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Ringkasan Pesanan
                    </p>
                    {items.map((i) => (
                      <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(245,221,180,0.7)' }}>
                          {i.name} x{i.qty}
                        </span>
                        <span style={{ fontFamily: 'var(--font-number)', fontSize: '0.8rem', fontWeight: 700, color: '#F5DDB4' }}>
                          {formatPrice(i.price * i.qty)}
                        </span>
                      </div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,193,7,0.15)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.875rem', color: '#F5DDB4' }}>Total</span>
                      <span style={{ fontFamily: 'var(--font-number)', fontWeight: 800, fontSize: '0.875rem', color: '#FFC107' }}>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Footer (always visible when cart has items) ── */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ padding: '20px 24px', borderTop: '1px solid rgba(245,221,180,0.12)', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                {step === 'cart' && (
                  <>
                    <div className="flex flex-col gap-2">
                      <div
                        className="flex justify-between text-sm font-semibold"
                        style={{ color: 'rgba(245,221,180,0.65)', fontFamily: 'var(--font-body)' }}
                      >
                        <span>Subtotal ({totalItems} item)</span>
                        <span style={{ fontFamily: 'var(--font-number)' }}>{formatPrice(totalPrice)}</span>
                      </div>
                      <div
                        className="flex justify-between font-extrabold text-base"
                        style={{ color: '#F5DDB4', fontFamily: 'var(--font-body)' }}
                      >
                        <span>Total</span>
                        <span style={{ color: '#FFC107', fontFamily: 'var(--font-number)' }}>{formatPrice(totalPrice)}</span>
                      </div>
                    </div>

                    {/* Lanjut ke form */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      id="proceed-to-form-btn"
                      onClick={() => setStep('form')}
                      className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-extrabold text-base"
                      style={{
                        background: 'linear-gradient(135deg, #FFC107, #e8a800)',
                        color: '#1a2f5a',
                        fontFamily: 'var(--font-body)',
                        boxShadow: '0 8px 24px rgba(255,193,7,0.35)',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Lanjut ke Checkout
                    </motion.button>

                    <button
                      onClick={clearCart}
                      id="cart-clear-btn"
                      className="text-xs text-center font-semibold hover:opacity-100 transition-opacity"
                      style={{ color: 'rgba(245,221,180,0.4)', fontFamily: 'var(--font-body)', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      Kosongkan keranjang
                    </button>
                  </>
                )}

                {step === 'form' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    id="whatsapp-checkout-btn"
                    onClick={handleSend}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-extrabold text-base"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Send size={18} />
                    Kirim via WhatsApp
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

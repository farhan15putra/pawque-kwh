import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import useCartStore from '../store/cartStore';

const FloatingCartButton = () => {
  const { toggleCart, items } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  return (
    <motion.button
      id="floating-cart-btn"
      onClick={toggleCart}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        backgroundColor: '#FFC107',
        boxShadow: '0 8px 32px rgba(255,193,7,0.5)',
        color: '#1a2f5a',
      }}
    >
      <ShoppingBag size={26} />

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key={totalItems}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
            style={{ backgroundColor: '#ef4444', color: '#fff', fontFamily: 'var(--font-number)' }}
          >
            {totalItems > 9 ? '9+' : totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default FloatingCartButton;

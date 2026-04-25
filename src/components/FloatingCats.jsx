import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Import semua elemen kucing dari src/assets
import el2 from '../assets/elemen pawque/elemen 2.png';
import el3 from '../assets/elemen pawque/elemen 3.png';
import el4 from '../assets/elemen pawque/elemen 4.png';
import el5 from '../assets/elemen pawque/elemen 5.png';
import el6 from '../assets/elemen pawque/elemen 6.png';
import el7 from '../assets/elemen pawque/elemen 7.png';
import el8 from '../assets/elemen pawque/elemen 8.png';

const CAT_SPRITES = [el2, el3, el4, el5, el6, el7, el8];

function sr(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

/**
 * FloatingCats — renders N cat sprites at random absolute positions.
 * Parent must have position: relative & overflow: hidden.
 * @param {number} count  - jumlah kucing
 * @param {number} seed   - offset seed agar tiap section beda
 */
const FloatingCats = ({ count = 14, seed = 0 }) => {
  const cats = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const r = (offset) => sr((i + seed) * 13 + offset);
      return {
        id: i,
        src: CAT_SPRITES[Math.floor(r(0) * CAT_SPRITES.length)],
        left: `${2 + r(1) * 93}%`,
        top: `${r(2) * 100}%`,
        size: 80 + Math.floor(r(3) * 56),    // 68–124px (lebih besar)
        rotate: -30 + r(4) * 60,
        floatY: 14 + r(5) * 20,
        floatDuration: 3 + r(6) * 4,
        floatDelay: r(7) * 3.5,
        rotateDelta: -14 + r(8) * 28,
      };
    });
  }, [count, seed]);

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {cats.map((cat) => (
        <motion.img
          key={cat.id}
          src={cat.src}
          alt=""
          initial={{ opacity: 0, rotate: cat.rotate }}
          animate={{
            opacity: 0.6,
            y: [0, -cat.floatY, 0],
            rotate: [cat.rotate, cat.rotate + cat.rotateDelta, cat.rotate],
          }}
          transition={{
            opacity: { duration: 1.8, delay: cat.floatDelay },
            y: {
              duration: cat.floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: cat.floatDelay,
            },
            rotate: {
              duration: cat.floatDuration * 1.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: cat.floatDelay,
            },
          }}
          style={{
            position: 'absolute',
            left: cat.left,
            top: cat.top,
            width: `${cat.size}px`,
            height: `${cat.size}px`,
            objectFit: 'contain',
            userSelect: 'none',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.18))',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCats;

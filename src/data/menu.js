// Pawque Menu Data — hanya 2 produk
export const menuItems = [
  {
    id: 1,
    name: 'Quesillo',
    tagline: 'Puding Karamel Khas Venezuela',
    description: 'Puding keju super creamy dengan siraman karamel legit yang lumer di mulut. Silky & sweet!',
    price: 15000,
    category: 'food',
    image: '/elemen/produk-quesillo.jpg',
    badge: 'Best Seller',
    badgeColor: '#FFC107',
  },
  {
    id: 2,
    name: 'Fresh Lemonade',
    tagline: 'Segar. Asam. Addictive.',
    description: 'Dibuat langsung dari lemon segar, tanpa pengawet. Segar banget buat teman ngemil.',
    price: 8000,
    category: 'drink',
    image: '/elemen/produk-lemonade.jpg',
    badge: 'Favorit',
    badgeColor: '#60a5fa',
  },
  {
    id: 3,
    name: 'Pawfect Combo!',
    tagline: 'Double the Joy, Double the Meow!',
    description: 'Nikmati Quesillo lembut dan Fresh Lemonade dingin dalam satu paket spesial. Hemat dan nikmat!',
    price: 20000,
    category: 'bundle',
    image: '/elemen/Logo.png',
    badge: 'Special Deal',
    badgeColor: '#ef4444',
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

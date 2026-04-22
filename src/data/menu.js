// Pawque Menu Data — hanya 2 produk
export const menuItems = [
  {
    id: 1,
    name: 'Quesillo',
    tagline: 'Keju autentik Venezuela',
    description: 'Dibuat dari keju segar pilihan, lembut di dalam, gurih di luar. Satu gigitan dan kamu pasti balik lagi.',
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
    description: 'Dibuat langsung dari lemon segar, tanpa pengawet, tanpa sirup. Segar banget buat teman ngemil.',
    price: 10000,
    category: 'drink',
    image: '/elemen/produk-lemonade.jpg',
    badge: 'Favorit',
    badgeColor: '#60a5fa',
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

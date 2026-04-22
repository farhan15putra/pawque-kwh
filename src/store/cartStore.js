import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product) => {
    const { items } = get();
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      set({
        items: items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        ),
      });
    } else {
      set({ items: [...items, { ...product, qty: 1 }] });
    }
  },

  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

  increment: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  decrement: (id) => {
    const { items } = get();
    const item = items.find((i) => i.id === id);
    if (item && item.qty <= 1) {
      set({ items: items.filter((i) => i.id !== id) });
    } else {
      set({
        items: items.map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        ),
      });
    }
  },

  clearCart: () => set({ items: [] }),

  get totalItems() {
    return get().items.reduce((sum, i) => sum + i.qty, 0);
  },

  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
}));

export default useCartStore;

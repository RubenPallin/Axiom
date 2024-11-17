import create from 'zustand';

export const useStore = create((set) => ({
  user: null,
  cart: [],
  products: [],
  
  setUser: (user) => set({ user }),
  addToCart: (product) => set((state) => ({ 
    cart: [...state.cart, product] 
  })),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
  clearCart: () => set({ cart: [] }),
  setProducts: (products) => set({ products }),
}));
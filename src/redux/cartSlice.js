import { createSlice } from "@reduxjs/toolkit";

const INITIAL_QUANTITY = 1;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: INITIAL_QUANTITY });
      }
    },

    removeItem: (state, action) =>
      state.filter((item) => item.id !== action.payload),

    updateQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart: () => [],
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCart = (state) => state.cart;
export const selectCartCount = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;

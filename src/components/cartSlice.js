import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { item, quantity } = action.payload;
      state.items.push({ item, quantity });
    },
    removeItem: (state, action) => {
      const indexToRemove = action.payload;
      state.items.splice(indexToRemove, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

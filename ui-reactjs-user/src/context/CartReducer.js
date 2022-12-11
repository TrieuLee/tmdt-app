import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        const diffSize = state.products.findIndex(
          (item) => item.size === action.size
        );
        state.products.push({
          ...action.payload,
          diffSize,
          quantity: action.payload.quantity,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

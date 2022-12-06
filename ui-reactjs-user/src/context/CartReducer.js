import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      // const item = state.products.find((item)=>item._id === action.p)
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
    },
    resetCart: (state) => {
      state.products= [];
      state.quantity=0;
      state.total= 0;
    },
  },
});

export const { addProduct,removeProduct, resetCart} = cartSlice.actions;
export default cartSlice.reducer;

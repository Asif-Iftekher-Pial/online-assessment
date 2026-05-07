import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log({ state: state, "action:": action });
      const existingProd = state.cartItems.find((prod) => prod.id === action.payload.id);
      if (existingProd) {
        existingProd.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // increment QTY
    incrementQuantity: (state, action) => {
      console.log({ state: state, "action:": action });
      const item = state.cartItems.find((prod) => prod.id === action.payload);
      item.quantity += 1;
    },

    // decrement QTY
    decrementQuantity: (state, action) => {
      console.log({ state: state, "action:": action });
      const item = state.cartItems.find((prod) => prod.id === action.payload);
      item.quantity -= 1;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = addToCartSlice.actions;
export default addToCartSlice.reducer;
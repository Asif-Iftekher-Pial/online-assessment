import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/products/productsSlice";
import addToCartReducer from "./features/cart/addToCartSlice";

const store = configureStore({
  reducer: {
    authUser: authReducer,
    products: productReducer,
    addToCart: addToCartReducer,
  },
});
export default store;

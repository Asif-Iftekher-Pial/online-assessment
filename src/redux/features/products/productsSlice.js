import { createSlice } from "@reduxjs/toolkit";
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 10.99,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 19.99,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 29.99,
    image: "https://picsum.photos/400/300?random=3",
  },
];
const initialState = {
  products: products,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log({ "state:": state, "action:": action });
      state.products.push({
        id: state.products.length + 1,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.image || `https://picsum.photos/400/300?random=${state.products.length + 1}`,
      });
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;

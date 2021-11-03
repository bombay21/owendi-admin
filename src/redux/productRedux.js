import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductsStart:(state)=>{
        state.isFetching = true
    },
    getProductsSuccess:(state,action)=>{
        state.isFetching = false;
        state.products = action.payload;
    },
    getProductsFailure:(state)=>{
        state.error = true
    },
    deleteProductsStart:(state)=>{
        state.isFetching = true
    },
    deleteProductsSuccess:(state,action)=>{
        state.isFetching = false;
        state.products.splice(
          state.products.findIndex((item) => item._id === action.payload),1
        );
    },
    deleteProductsFailure:(state)=>{
        state.error = true
    },
    updateProductsStart:(state)=>{
        state.isFetching = true
        state.error = false
    },
    updateProductsSuccess:(state,action)=>{
        state.isFetching = false;
        state.products[
          state.products.findIndex((item) => item._id === action.payload._id)
        ] = action.payload.user;
    },
    updateProductsFailure:(state)=>{
        state.isFetching = false
        state.error = true
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductsStart,
  deleteProductsSuccess,
  deleteProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
  updateProductsFailure,
} = productSlice.actions;
export default productSlice.reducer;

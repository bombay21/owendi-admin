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
          state.products.findIndex((item) => item._id === action.payload.id)
        ] = action.payload.product;
    },
    updateProductsFailure:(state)=>{
        state.isFetching = false
        state.error = true
    },
    addProductsStart:(state)=>{
        state.isFetching = true
        state.error = false
    },
    addProductsSuccess:(state,action)=>{
        state.isFetching = false;
        state.products.push(action.payload)
    },
    addProductsFailure:(state)=>{
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
  addProductsStart,
  addProductsSuccess,
  addProductsFailure,
} = productSlice.actions;
export default productSlice.reducer;

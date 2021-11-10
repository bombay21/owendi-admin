import { publicRequest, userRequest } from "../requestMethods";
import {
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
  addProductsFailure,
  addProductsSuccess,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

// USER LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// GET PRODUCTS
export const getProducts = async (dispatch, product) => {
  dispatch(getProductsStart());

  await publicRequest
    .get("/products")
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch(() => {
      dispatch(getProductsFailure());
    });
};

// DELETE PRODUCT
export const deleteProduct = async (id,dispatch) => {
  dispatch(deleteProductsStart());

  await userRequest
  .delete("/products/" + id)
  .then(() => {
    dispatch(deleteProductsSuccess(id));
  })
  .catch(() => {
    dispatch(deleteProductsFailure());
  });
};

// UPDATE PRODUCT
export const updateProduct = async (id,product,dispatch) => {
  dispatch(updateProductsStart());

  await userRequest
  .put("/products/" + id)
  .then(() => {
    dispatch(updateProductsSuccess({ id, product }));
  })
  .catch(() => {
    dispatch(updateProductsFailure());
  });
};

// ADD PRODUCT
export const addProduct = async (product,dispatch) => {
  dispatch(addProductsStart());

  await userRequest
  .post("/products/add",product)
  .then((res) => {
    dispatch(addProductsSuccess(res.data));
  })
  .catch(() => {
    dispatch(addProductsFailure());
  });
};

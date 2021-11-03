import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductsStart,
  deleteProductsSuccess,
  deleteProductsFailure,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

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

import axios from "axios";
import {
  deleteProductSuccess,
  getProductsSuccess,
  addProductSuccess,
  updateProductSuccess,
} from "./reducers/productReducer";
import {
  actionStart,
  loginSuccess,
  actionFailure,
  actionSuccess,
} from "./reducers/userReducer";

const BASE_URL = "https://goodunk.herokuapp.com";

export const register = async (dispatch, user) => {
  dispatch(actionStart());
  try {
    await axios.post(BASE_URL + "/api/auth/register", user);
    dispatch(actionSuccess());
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(actionStart());
  try {
    const res = await axios.post(BASE_URL + "/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const getProducts = async (dispatch, uid) => {
  dispatch(actionStart());
  try {
    const res = await axios.get(BASE_URL + "/api/users/" + uid);
    dispatch(getProductsSuccess(res.data.products));
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const deleteProduct = async (dispatch, uid, pid) => {
  dispatch(actionStart());
  try {
    await axios.delete(BASE_URL + "/api/users/" + uid + "/product/" + pid);
    dispatch(deleteProductSuccess(pid));
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const addProduct = async (dispatch, uid, product) => {
  dispatch(actionStart());
  try {
    const res = await axios.post(
      BASE_URL + "/api/users/" + uid + "/product",
      product
    );
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const updateProduct = async (dispatch, newProduct) => {
  dispatch(actionStart());
  try {
    await axios.put(BASE_URL + "/api/products/" + newProduct._id, newProduct);
    dispatch(updateProductSuccess(newProduct));
  } catch (error) {
    dispatch(actionFailure());
  }
};

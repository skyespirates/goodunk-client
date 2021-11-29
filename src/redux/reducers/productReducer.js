const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    pid: null,
    product: {},
    error: false,
  },
  reducers: {
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
    },
    deleteProductSuccess: (state, action) => {
      state.products.splice(
        state.products.findIndex((product) => product._id === action.payload),
        1
      );
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload);
    },
    selectedProduct: (state, action) => {
      state.pid = action.payload;
      state.product =
        state.products[
          state.products.findIndex((product) => action.payload === product._id)
        ];
    },
    updateProductSuccess: (state, action) => {
      state.products[
        state.products.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    resetPid: (state) => {
      state.pid = null;
      state.product = {};
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  getProductsSuccess,
  deleteProductSuccess,
  addProductSuccess,
  updateProductSuccess,
  selectedProduct,
  resetPid,
} = actions;
export default reducer;

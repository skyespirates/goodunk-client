const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        produk: "teh gelas",
        harga: 1000,
        jumlah: 120,
      },
      {
        produk: "mie sedap",
        harga: 3000,
        jumlah: 60,
      },
      {
        produk: "pop mie",
        harga: 4000,
        jumlah: 30,
      },
      {
        produk: "indomie",
        harga: 2500,
        jumlah: 100,
      },
    ],
    id: null,
    produk: {},
    error: false,
  },
  reducers: {
    hapusProduk: (state, action) => {
      state.products.splice(action.payload - 1, 1);
    },
    tambahProduk: (state, action) => {
      state.products.push(action.payload);
    },
    produkTerpilih: (state, action) => {
      state.id = action.payload;
      state.produk = state.products[state.id - 1];
    },
    ubahProduk: (state, action) => {
      state.products.splice(state.id - 1, 1, action.payload);
    },
    resetId: (state) => {
      state.id = null;
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  hapusProduk,
  tambahProduk,
  ubahProduk,
  produkTerpilih,
  resetId,
} = actions;
export default reducer;

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { tambahProduk } from "../redux/reducers/productReducer";

const NewForm = () => {
  const dispatch = useDispatch();
  const [produk, setProduk] = useState({});
  const handleChange = (e) => {
    setProduk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tambahProduk(produk));
  };
  return (
    <>
      <h1 className="text-xl font-semibold text-green-500">Tambah Produk</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-2">
          <label className="block font-semibold" htmlFor="produk">
            Nama Produk
          </label>
          <input
            name="produk"
            className="w-full px-2 py-1 border-2 border-green-500"
            id="produk"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="block font-semibold" htmlFor="harga">
            Harga
          </label>
          <input
            name="harga"
            className="w-full px-2 py-1 border-2 border-green-500"
            id="harga"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="flex mb-2">
          <button className="flex items-center justify-center w-8 h-8 text-white bg-green-500">
            <AiOutlineMinus />
          </button>
          <input
            name="jumlah"
            className="w-16 h-8 p-1 outline-none"
            type="number"
            onChange={handleChange}
          />
          <button className="flex items-center justify-center w-8 h-8 text-white bg-green-500">
            <AiOutlinePlus />
          </button>
        </div>
        <div className="flex">
          <button className="flex-1 py-2 text-white bg-green-500">
            Simpan
          </button>
        </div>
      </form>
    </>
  );
};

export default NewForm;

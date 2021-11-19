import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { resetId, ubahProduk } from "../redux/reducers/productReducer";

const UpdateForm = () => {
  const dispatch = useDispatch();
  const produk = useSelector((state) => state.products.produk);
  const [newProduk, setNewProduk] = useState(produk);
  const handleChange = (e) => {
    setNewProduk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ubahProduk(newProduk));
    dispatch(resetId());
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-green-500">Ubah Produk</h1>
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
            placeholder={produk.produk}
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
            placeholder={produk.harga}
            onChange={handleChange}
          />
        </div>
        <div className="flex mb-3">
          <button className="flex items-center justify-center w-8 h-8 text-white bg-green-500">
            <AiOutlineMinus />
          </button>
          <input
            name="jumlah"
            className="w-16 h-8 p-1 outline-none"
            type="number"
            placeholder={produk.jumlah}
            onChange={handleChange}
          />
          <button className="flex items-center justify-center w-8 h-8 text-white bg-green-500">
            <AiOutlinePlus />
          </button>
        </div>
        <div className="flex mb-1">
          <button
            type="submit"
            className="flex-1 py-2 text-white bg-yellow-500"
          >
            Ubah
          </button>
        </div>
        <p
          onClick={() => dispatch(resetId())}
          className="text-center text-gray-500 underline cursor-pointer hover:no-underline"
        >
          Batal
        </p>
      </form>
    </>
  );
};

export default UpdateForm;

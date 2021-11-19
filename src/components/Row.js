import { useDispatch } from "react-redux";
import { hapusProduk, produkTerpilih } from "../redux/reducers/productReducer";
import { RiEditBoxLine, RiDeleteBin6Line } from "react-icons/ri";
const Row = ({ produk, nomor }) => {
  const dispatch = useDispatch();

  return (
    <tr className="block bg-white border border-grey-500 md:border-none md:table-row">
      <td className="block p-2 text-left md:border md:border-grey-500 md:table-cell">
        <span className="inline-block w-1/3 font-bold md:hidden">Nomor</span>
        {nomor}
      </td>
      <td className="block p-2 text-left md:border md:border-grey-500 md:table-cell">
        <span className="inline-block w-1/3 font-bold md:hidden">
          Nama Produk
        </span>
        {produk.produk}
      </td>
      <td className="block p-2 text-left md:border md:border-grey-500 md:table-cell">
        <span className="inline-block w-1/3 font-bold md:hidden">Harga</span>
        {produk.harga}
      </td>
      <td className="block p-2 text-left md:border md:border-grey-500 md:table-cell">
        <span className="inline-block w-1/3 font-bold md:hidden">Jumlah</span>
        {produk.jumlah}
      </td>
      <td className="block p-2 text-left md:border md:border-grey-500 md:table-cell">
        <span className="inline-block w-1/3 font-bold md:hidden">Aksi</span>
        <button
          onClick={() => dispatch(produkTerpilih(nomor))}
          className="px-2 py-1 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700"
        >
          <RiEditBoxLine />
        </button>
        <button
          onClick={() => dispatch(hapusProduk(nomor))}
          className="px-2 py-1 font-bold text-white bg-red-500 border border-red-500 rounded hover:bg-red-700"
        >
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
};

export default Row;

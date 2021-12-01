import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewForm from "../components/NewForm";
import Row from "../components/Row";
import UpdateForm from "../components/UpdateForm";
import { getProducts } from "../redux/apiCalls";
import { resetPid } from "../redux/reducers/productReducer";
import { getUserSuccess } from "../redux/reducers/userReducer";

const Dashboard = () => {
  const products = useSelector((state) => state.product.products);
  const pid = useSelector((state) => state.product.pid);
  const user = useSelector((state) => state.user.currentUser.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPid());
  }, [dispatch]);

  useEffect(() => {
    const uid = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser._id;
    dispatch(getUserSuccess(uid));
    getProducts(dispatch, uid);
  }, [dispatch]);

  return (
    <div className="">
      <div className="min-h-screen dashboard">
        <div className="py-4 pl-2 bg-gray-100">
          <div className="flex items-center px-4 mb-6 head">
            <div className="relative w-12 h-12 overflow-hidden rounded-full">
              <img
                className="absolute object-cover w-full h-full "
                src="/assets/potrait.jpg"
                alt="potrait"
              />
            </div>
            <div className="flex-1 ml-4">
              <h1 className="font-semibold">{user}</h1>
            </div>

            <Link
              to="/profile"
              className="px-3 py-1 bg-white border-2 border-gray-300"
            >
              Profile
            </Link>
          </div>
          <div className="body">
            <ul className="text-white bg-green-500 ">
              <li>
                <Link
                  to="/new"
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-green-600"
                >
                  <span className="mr-3 material-icons">add_box</span>Tambah
                  Barang
                </Link>
              </li>
              <li>
                <Link
                  to="/update"
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-green-600"
                >
                  <span className="mr-3 material-icons">cached</span>Update Stok
                </Link>
              </li>
              <li>
                <Link
                  to="/supplier"
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-green-600"
                >
                  <span className="mr-3 material-icons">group_add</span>Tambah
                  Suplier
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-green-600"
                >
                  <span className="mr-3 material-icons">description</span>Tambah
                  Data Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 bg-gray-100 ">
          <table className="block w-4/5 mx-auto border-collapse md:table">
            <thead className="block md:table-header-group">
              <tr className="absolute block border border-grey-500 md:border-none md:table-row -top-full md:top-auto -left-full md:left-auto md:relative ">
                <th className="block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell">
                  Nomor
                </th>
                <th className="block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell">
                  Nama Produk
                </th>
                <th className="block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell">
                  Harga
                </th>
                <th className="block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell">
                  Jumlah
                </th>
                <th className="block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {products.map((produk, index) => (
                <Row key={produk._id} nomor={index + 1} produk={produk} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-4 pr-2 bg-gray-100">
          {pid ? <UpdateForm /> : <NewForm />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

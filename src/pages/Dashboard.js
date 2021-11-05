import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid min-h-screen gap-2 my-6 md:grid-cols-3">
        <div className="p-4 bg-gray-200">
          <div className="flex items-center mb-6 head">
            <div className="relative w-24 h-24 overflow-hidden rounded-full">
              <img
                className="absolute object-cover w-full h-full "
                src="/assets/potrait.jpg"
                alt="potrait"
              />
            </div>
            <div className="flex-1 ml-4">
              <h1 className="font-semibold">skyes07</h1>
              <p>book shop</p>
            </div>

            <Link
              to="/profile"
              className="px-3 py-1 bg-white border-2 border-gray-300"
            >
              Profile
            </Link>
          </div>
          <div className="body">
            <ul className="py-4 text-white bg-green-500">
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
              <li>
                <Link
                  to="/landing"
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-green-600"
                >
                  <span className="mr-3 material-icons">logout</span>Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-gray-200">
          <div className="flex flex-col items-center justify-center w-40 h-40 mx-auto text-xl font-semibold text-center text-white bg-green-500">
            <span className="text-xl font-semibold">Selasa</span>
            <span className="font-semibold text-7xl">2</span>
            <span className="text-xl font-semibold">Nov, 2021</span>
          </div>
        </div>
        <div className="p-4 bg-gray-200">
          <h1 className="text-xl font-semibold">Aktivitas</h1>
          <ul>
            <li className="p-1 mb-2 bg-gray-300">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="p-1 mb-2 bg-gray-300">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="p-1 mb-2 bg-gray-300">
              Lorem ipsum dolor sit amet.
            </li>
            <li className="p-1 mb-2 bg-gray-300">
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

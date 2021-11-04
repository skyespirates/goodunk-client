import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-400">
      <div className="flex justify-between max-w-5xl py-2 mx-auto">
        <div className="flex bg-gray-500">
          <Link to="/" className="px-6 py-2 text-white bg-gray-500">
            GOODANK
          </Link>
        </div>
        <div className="flex">
          <Link to="/signin" className="px-6 py-2 mr-2 bg-gray-500">
            Masuk
          </Link>
          <Link to="/signup" className="px-6 py-2 bg-gray-500">
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between py-2 mx-auto max-w-7xl">
        <div className="flex">
          <Link to="/" className="relative h-8 text-white w-36">
            <img
              className="absolute object-contain"
              src="/assets/goodunk-logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex">
          <Link
            to="/signin"
            className="px-4 py-1 mr-2 border-2 border-gray-400"
          >
            Masuk
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1 text-white bg-green-500 border-2 border-green-500"
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

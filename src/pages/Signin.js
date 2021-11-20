import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

const Signin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, user);
  };
  return (
    <div className="min-h-screen mx-auto max-w-7xl ">
      <div className="grid grid-cols-1 gap-2 mt-12 md:grid-cols-3">
        <div className="relative hidden col-span-2 md:block">
          <h1 className="text-4xl">
            Memantau ketersediaan stok barang <br /> menjadi{" "}
            <span className="font-semibold">lebih mudah</span>
          </h1>
          <div className="w-full h-full">
            <img
              className="absolute object-contain w-full h-full"
              src="/assets/login.jpg"
              alt="login"
            />
          </div>
        </div>
        <div className="relative h-full p-8 bg-gray-200">
          <div className="flex flex-col items-center my-6 text-center">
            <Link to="/" className="relative h-8 mb-4 text-white w-36">
              <img
                className="absolute object-contain"
                src="/assets/goodunk-logo.png"
                alt="logo"
              />
            </Link>
            <p>Akses dan pantau stok persediaan barang Anda </p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-6">
              <label className="block font-semibold" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-4 py-1 bg-white shadow-sm "
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-semibold" htmlFor="Password">
                Password
              </label>
              <input
                className="w-full px-4 py-1 bg-white shadow-sm "
                id="Password"
                name="password"
                type="password"
                onChange={handleChange}
              />
              <p className="text-right">Lupa password?</p>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full px-6 py-2 mb-4 text-white bg-green-500"
              >
                Masuk
              </button>
              <p className="text-center">Belum punya akun?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

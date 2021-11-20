import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(dispatch, user);
  };
  return (
    <div className="max-w-5xl min-h-screen mx-auto">
      <div className="max-w-lg p-12 mx-auto my-12 bg-gray-200">
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="relative h-8 text-white w-36">
            <img
              className="absolute object-contain"
              src="/assets/goodunk-logo.png"
              alt="logo"
            />
          </Link>
          <p className="my-6">
            Buat akun untuk akses Goodunk dimana dan kapan saja
          </p>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-4 py-1 shadow-sm"
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-1 shadow-sm"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="block mb-1 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-1 shadow-sm"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-1/2 px-3 py-1 text-white bg-green-500"
            >
              Daftar
            </button>
            <p>Sudah punya akun?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

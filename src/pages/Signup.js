import { Link } from "react-router-dom";

const Signup = () => {
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
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              className="w-full px-4 py-1 shadow-sm"
              id="name"
              type="text"
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
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="toko">
              Nama Toko
            </label>
            <input
              className="w-full px-4 py-1 shadow-sm"
              id="toko"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-4 py-1 shadow-sm"
              id="username"
              type="text"
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
            />
          </div>
          <div className="mt-12 text-center">
            <button className="w-1/2 px-3 py-1 text-white bg-green-500">
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

const Signup = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto">
      <div className="max-w-lg p-6 mx-auto bg-gray-200">
        <div className="mb-12 text-center">
          <h1 className="text-xl text-green-500">GOODUNK</h1>
          <p>Buat akun untuk akses Goodunk dimana dan kapan saja</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">
              Nama Lengkap
            </label>
            <input className="w-full" id="name" type="text" />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input className="w-full" id="email" type="email" />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="toko">
              Nama Toko
            </label>
            <input className="w-full" id="toko" type="text" />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="username">
              Username
            </label>
            <input className="w-full" id="username" type="text" />
          </div>
          <div className="">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input className="w-full" id="password" type="password" />
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

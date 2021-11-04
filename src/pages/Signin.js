const Signin = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto ">
      <div className="grid grid-cols-3 gap-2 ">
        <div className="col-span-2 h-80">
          <h1 className="text-4xl">
            Memantau ketersediaan stok barang menjadi{" "}
            <span className="font-semibold">lebih mudah</span>
          </h1>
          <div className="bg-green-500 h-80 w-80"></div>
        </div>
        <div className="h-96">
          <div className="text-center">
            <h1 className="text-2xl">Goodunk</h1>
            <p>Akses dan pantau stok persediaan barang Anda </p>
          </div>
          <form autoComplete="off">
            <div className="mb-6">
              <label className="block font-semibold" htmlFor="Email">
                Email
              </label>
              <input className="w-full bg-gray-200" id="Email" type="text" />
            </div>
            <div>
              <label className="block font-semibold" htmlFor="Password">
                Password
              </label>
              <input
                className="w-full bg-gray-200"
                id="Password"
                type="password"
              />
              <p className="text-right">Lupa password?</p>
            </div>
            <div>
              <button className="w-full px-6 py-2 text-white bg-green-500 ">
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

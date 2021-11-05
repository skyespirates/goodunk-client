import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid items-center grid-cols-2 gap-2 mt-12 mb-24 overflow-hidden h-96">
        <div>
          <h1 className="text-4xl">
            Pantau ketersediaan <br />
            <span className="font-semibold">stok barang</span> di gudang Anda
          </h1>
          <p className="my-6">Aplikasi manajemen gudang online</p>
          <Link to="/signup" className="py-3 text-white bg-green-500 px-9">
            Daftar Sekarang
          </Link>
        </div>
        <div className="relative w-full h-full">
          <img
            className="absolute object-contain w-full h-full"
            src="/assets/landing-page.jpg"
            alt="landing"
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl font-semibold text-center mb-9">
          Lakukan lebih dengan Goodunk
        </h1>
        <div className="flex justify-between mb-12">
          <div className="w-60 h-80">
            <img className="w-24 mx-auto" src="/assets/docs.svg" alt="docs" />
            <p className="text-center">
              Kemudahan dalam pembuatan laporan barang masuk/keluar
            </p>
          </div>
          <div className="w-60 h-80">
            <img
              className="w-24 mx-auto"
              src="/assets/devices.svg"
              alt="devices"
            />
            <p className="text-center">
              Pantau ketersediaan stok barang di gudang
            </p>
          </div>
          <div className="w-60 h-80">
            <img
              className="w-24 mx-auto"
              src="/assets/manage.svg"
              alt="manage"
            />
            <p className="text-center">
              Mempermudah proses bisnis dan menghemat sumber daya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

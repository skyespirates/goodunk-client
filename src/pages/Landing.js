import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid items-center grid-cols-2 gap-2 mb-12 h-96">
        <div>
          <h1 className="text-4xl">
            Pantau ketersediaan <br />
            <span className="font-semibold">stok barang</span> di gudang Anda
          </h1>
          <p className="my-6">Aplikasi manajemen gudang online</p>
          <Link to="/signup" className="px-6 py-2 bg-green-500">
            Daftar Sekarang
          </Link>
        </div>
        <div className="w-full h-full bg-green-500"></div>
      </div>
      <div>
        <h1 className="mb-6 text-4xl font-semibold text-center">
          Lakukan lebih dengan Goodunk
        </h1>
        <div className="flex justify-between mb-12">
          <div className="bg-green-500 w-60 h-80"></div>
          <div className="bg-green-500 w-60 h-80"></div>
          <div className="bg-green-500 w-60 h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

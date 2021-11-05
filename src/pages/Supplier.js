const Supplier = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="min-h-screen">
        <form className="max-w-2xl p-16 mx-auto bg-gray-200 my-9">
          <h1 className="text-lg font-semibold text-green-500 mb-9">
            Tambah Supplier
          </h1>
          <div className="mb-2">
            <label className="block " htmlFor="kode">
              Kode
            </label>
            <input className="w-full px-3 py-1" id="kode" type="text" />
          </div>
          <div className="mb-2">
            <label className="block " htmlFor="supplier">
              Nama
            </label>
            <input className="w-full px-3 py-1" id="supplier" type="text" />
          </div>
          <div className="mb-2">
            <label className="block " htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-1" id="email" type="email" />
          </div>
          <div className="mb-2">
            <label className="block " htmlFor="kontak">
              Nomor Kontak
            </label>
            <input className="w-full px-3 py-1" id="kontak" type="text" />
          </div>
          <button className="block px-12 py-2 mx-auto text-white bg-green-500 mt-9">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Supplier;

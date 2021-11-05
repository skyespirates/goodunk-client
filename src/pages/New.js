const New = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto">
      <div className="max-w-2xl mx-auto mt-12 bg-gray-200 shadow-sm p-9">
        <h1 className="mb-6 text-xl font-semibold text-green-500">
          Tambah Barang
        </h1>
        <form>
          <div className="mb-2">
            <label className="block font-semibold" htmlFor="kode">
              Kode Barang
            </label>
            <input
              className="w-full px-2 py-1 border-2 border-green-500"
              id="kode"
              type="text"
            />
          </div>
          <div className="mb-2">
            <label className="block font-semibold" htmlFor="barang">
              Nama Barang
            </label>
            <input
              className="w-full px-2 py-1 border-2 border-green-500"
              id="barang"
              type="text"
            />
          </div>
          <div className="mb-2">
            <label className="block font-semibold" htmlFor="kategori">
              Kategori
            </label>
            <input
              className="w-full px-2 py-1 border-2 border-green-500"
              id="kategori"
              type="text"
            />
          </div>
          <div className="mb-2">
            <label className="block font-semibold" htmlFor="supplier">
              Supplier
            </label>
            <input
              className="w-full px-2 py-1 border-2 border-green-500"
              id="supplier"
              type="text"
            />
          </div>
          <div className="flex">
            <button className="w-8 h-8 bg-green-500">-</button>
            <input className="w-12 h-8 p-1 outline-none" type="number" />
            <button className="w-8 h-8 bg-green-500">+</button>
          </div>
          <button className="block px-16 py-2 mx-auto text-white bg-green-500">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default New;

const Order = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="max-w-2xl min-h-screen p-16 mx-auto my-12 bg-gray-200">
        <h1 className="mb-6 text-lg font-semibold text-green-500">
          Tambah Order
        </h1>
        <form>
          <div className="mb-2">
            <label className="block" htmlFor="tanggal">
              Tanggal Order
            </label>
            <input id="tanggal" className="w-full" type="date" />
          </div>
          <div>
            <label className="block" htmlFor="name">
              Nama Supplier
            </label>
            <input id="name" className="w-full" type="text" />
          </div>
          <div>
            <h1 className="mt-4 mb-2">List Barang</h1>
            <div className="flex mb-2">
              <input type="text" />
              <div className="ml-2">
                <button className="w-8 h-6 bg-green-500">-</button>
                <input className="w-12 h-6 outline-none " type="number" />
                <button className="w-8 h-6 bg-green-500">+</button>
              </div>
            </div>
            <div className="flex mb-2">
              <input type="text" />
              <div className="ml-2">
                <button className="w-8 h-6 bg-green-500">-</button>
                <input className="w-12 h-6 outline-none " type="number" />
                <button className="w-8 h-6 bg-green-500">+</button>
              </div>
            </div>
            <div className="flex mb-2">
              <input type="text" />
              <div className="ml-2">
                <button className="w-8 h-6 bg-green-500">-</button>
                <input className="w-12 h-6 outline-none " type="number" />
                <button className="w-8 h-6 bg-green-500">+</button>
              </div>
            </div>
          </div>
          <div>
            <label className="block" htmlFor="kontak">
              Kontak
            </label>
            <input className="w-full" id="kontak" type="text" />
          </div>
          <button className="block px-12 py-2 mx-auto mt-6 text-white bg-green-500">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;

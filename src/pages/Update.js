const Update = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="min-h-screen">
        <h1>Update Stok</h1>
        <div>
          <table className="w-full">
            <thead className="border-b-2 border-green-500">
              <tr>
                <td className="w-1/12">Kode</td>
                <td className="w-6/12 md:w-8/12">Nama Barang</td>
                <td className="w-1/12">Jumlah</td>
                <td className="w-4/12 md:w-2/12">Aksi</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H123DF</td>
                <td>Mie Sedap Goreng</td>
                <td>1200</td>
                <td>
                  <button className="px-3 py-1 mr-2 text-white bg-green-500">
                    Update
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500">
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td>H123DF</td>
                <td>Mie Sedap Goreng</td>
                <td>1200</td>
                <td>
                  <button className="px-3 py-1 mr-2 text-white bg-green-500">
                    Update
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500">
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td>H123DF</td>
                <td>Mie Sedap Goreng</td>
                <td>1200</td>
                <td>
                  <button className="px-3 py-1 mr-2 text-white bg-green-500">
                    Update
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500">
                    Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td>H123DF</td>
                <td>Mie Sedap Goreng</td>
                <td>1200</td>
                <td>
                  <button className="px-3 py-1 mr-2 text-white bg-green-500">
                    Update
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500">
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Update;

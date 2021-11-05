const Profile = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto">
      <div className="flex max-w-3xl p-4 mx-auto my-12 bg-gray-100 shadow-md">
        <div className="flex-1">
          <h1 className="mb-6 text-xl font-semibold text-green-500">
            Pengaturan Profil
          </h1>
          <form>
            <div className="input">
              <div className="mb-4">
                <label className="inline-block w-32" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  className="w-6/12 px-2 py-1"
                  type="text"
                  value="skyes07"
                  onChange={(e) => e}
                />
              </div>
              <div className="mb-4">
                <label className="inline-block w-32" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-6/12 px-2 py-1"
                  type="text"
                  value="skyes@email.com"
                  onChange={(e) => e}
                />
              </div>
              <div className="mb-4">
                <label className="inline-block w-32" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="w-6/12 px-2 py-1"
                  type="password"
                  value="abcdefg"
                  onChange={(e) => e}
                />
              </div>
              <div className="mb-4">
                <label className="inline-block w-32" htmlFor="toko">
                  Nama Toko
                </label>
                <input
                  id="toko"
                  className="w-6/12 px-2 py-1"
                  type="text"
                  value="Toko Buku Cemara"
                  onChange={(e) => e}
                />
              </div>
            </div>
            <div className="button">
              <button type="button" className="px-3 py-1 mr-4 bg-gray-300">
                Kembali
              </button>
              <button
                type="submit"
                className="px-3 py-1 text-white bg-green-500"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
            <img
              className="absolute object-cover w-full h-full"
              src="/assets/potrait.jpg"
              alt="potrait"
            />
          </div>
          <button className="p-2 bg-gray-200">Ubah Profil</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

"use client";

export default function RegisterPage() {
  const handleResgister = async (e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center"></div>
                <form
                  className="mx-auto max-w-xs space-y-5"
                  onSubmit={(e) => handleResgister(e)}
                >
                  {/* Input Nama Lengkap */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="namaLengkap"
                    placeholder="Nama Lengkap"
                    required
                  />
                  {/* Input Email */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  {/* Input Password */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  {/* Tombol Register */}
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Register</span>
                  </button>
                  {/* Link ke halaman login */}
                  <p className="mt-6 text-sm text-gray-600 text-center">
                    Sudah memiliki akun?{" "}
                    <a
                      href="http://localhost:3000/login"
                      className="text-blue-500 hover:underline"
                    >
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          {/* Bagian Gambar */}
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('images/dandan-background.jpg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

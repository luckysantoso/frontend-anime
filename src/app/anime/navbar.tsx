export default function Navbar() {
  return (
    <div>
      {/* Navbar Utama */}
      <nav className="bg-red-700 border-b border-red-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="images/dandan-background-square.jpg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Anime Review Management
            </span>
          </a>
        </div>
      </nav>

      {/* Submenu */}
      <nav className="bg-red-600">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-red-200 hover:underline"
                  aria-current="page"
                >
                  Anime
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-red-200 hover:underline"
                >
                  Fitur Prediction
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

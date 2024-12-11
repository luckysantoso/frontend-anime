import { getData } from "../service/anime";
import Navbar from "./navbar";

export default async function AnimePage() {
  const response = await getData("http://localhost:8000/anime");
  const data = response.data;
  console.log(data);

  return (
    <div className="relative">
      <Navbar />
      <div className="mt-5 flex flex-wrap justify-center gap-6 px-4 max-w-screen-xl mx-auto">
        {data.length > 0 &&
          data.map((anime: any) => (
            <div
              key={anime.id}
              className="w-full sm:w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-32 object-cover"
                  src={anime.image_url}
                  alt={anime.title}
                />
              </a>
              <div className="p-4">
                <a href="#">
                  <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                    {anime.title}
                  </h5>
                </a>
                <p className="mb-3 text-xs text-gray-700 dark:text-gray-400 truncate">
                  {anime.description}
                </p>
                <p className="mb-3 text-xs font-medium text-gray-700 dark:text-gray-400">
                  Episodes: {anime.episodes}
                </p>
                <div className="flex space-x-2">
                  <a
                    href={`/anime/detail/${anime.id}`}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read More
                  </a>
                  <a
                    href={`/anime/review/${anime.id}`}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Review
                  </a>
                  <a
                    href={`/anime/edit/${anime.id}`}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Tombol Tambah */}
      <a
        href="/anime/create"
        className="fixed bottom-5 right-5 bg-red-700 text-white hover:bg-red-800 font-bold py-3 px-4 rounded-full shadow-lg text-lg"
        title="Add New Anime"
      >
        +
      </a>
    </div>
  );
}

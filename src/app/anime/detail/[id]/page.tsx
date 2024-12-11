// "use client";
import Navbar from "@/app/anime/navbar";
import { getData } from "@/app/service/anime";

export default async function DetailAnimepage(props: any) {
  const { params } = props;
  const anime = await getData(`http://localhost:8000/anime/${params.id}`);
  const review = await getData(
    `http://localhost:8000/reviews/${anime.data.id}`
  );

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {anime.data.title}
        </h1>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Episodes:</span> {anime.data.episodes}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Genre:</span> {anime.data.Genre.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Review:</span> {anime.data.review}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Anime ID:</span> {anime.data.id}
          </p>
        </div>
        {review.data.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-700 mb-2">Reviews</h2>
            {review.data.map((item: any, index: number) => (
              <div
                key={index}
                className="mb-2 p-4 border border-gray-200 rounded-md bg-gray-50"
              >
                <p className="text-sm text-gray-800">{item.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// "use client";
import { getData } from "@/app/service/anime";

export default async function DetailAnimepage(props: any) {
  const { params } = props;
  const anime = await getData(`http://localhost:8000/anime/${params.id}`);
  const review = await getData(
    `http://localhost:8000/reviews/${anime.data.id}`
  );

  return (
    <div>
      {/* Kembangkan Tampilannya */}
      <p>{anime.data.title}</p>
      <p>{anime.data.episodes}</p>
      <p>{anime.data.Genre.name}</p>
      <p>{anime.data.review}</p>
      <p>{anime.data.id}</p>
      {review.data.length > 0 && (
        <>
          <p>{review.data.message}</p>
          <br />
          {review.data.map((item: any, index: number) => (
            <div key={index}>
              <p>{item.message}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

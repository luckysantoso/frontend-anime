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
      <p>{anime.data.genre}</p>
      <p>{review.data.message}</p>
      <br />
      {review.data.map((item: any, index: number) => (
        <div key={index}>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

// const fetchReviews = async (id: string) => {
//   const response = await fetch(`http://localhost:8000/genre/${id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//   });

//   if (!response.ok) {
//     return {
//       notFound: true,
//     };
//   }

//   const genre = await response.json();
//   console.log(genre);
//   return genre.data;
// }

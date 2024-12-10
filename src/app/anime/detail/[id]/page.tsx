import { getData } from "@/app/service/anime";
import { Amarante } from "next/font/google";

export default async function DetailAnimepage(props: any) {
  const { params } = props;
  const anime = await getData(`http://localhost:8000/anime/${params.id}`);
  return (
    <div>
      <p>{anime.data.title}</p>
      <p>{anime.data.episodes}</p>
      <p>{anime.data.Genre.name}</p>
    </div>
  );
}

"use client";

import { getData, patchData } from "@/app/service/anime";
import { useState } from "react";

export default async function EditPage(props: any) {
  const { params } = props;
  const anime = await getData(`http://localhost:8000/anime/${params.id}`);

  const [title, setTitle] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [sinopsis, setSinopsis] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await patchData(`http://localhost:8000/anime/${params.id}`, {
      title, 
      episodes, 
      sinopsis,
    });
  };

  return (
    <>
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={anime.data.title} />
      </div>
      <div>
        <label htmlFor="episode">Episode:</label>
        <input
          type="number"
          id="episode"
          name="episode"
          value={anime.data.episodes}
        />
      </div>
      <div>
        <label htmlFor="sinopsis">Sinopsis:</label>
        <input
          type="text"
          id="sinopsis"
          name="sinopsis"
          value={anime.data.episodes}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

"use client";
import { getData, patchData } from "@/app/service/anime";
import { useEffect, useState } from "react";

export default function EditPage(props: { params: Promise<{ id: string }> }) {
  const [anime, setAnime] = useState<any | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const unwrappedParams = async () => {
      const params = await props.params;
      setId(params.id);
    };
    unwrappedParams();
  }, [props]);

  useEffect(() => {
    const fetchAnime = async () => {
      if (id) {
        const fetchedAnime = await getAnimeById(id);
        fetchedAnime.genreid = 1;
        setAnime(fetchedAnime);
      }
    };
    fetchAnime();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id && anime) {
      const response = await patchData(
        `http://localhost:8000/anime/${id}`,
        anime
      );
      console.log(response);

      if (response) {
        alert("Anime updated successfully!");
      } else {
        alert("Failed to update anime.");
      }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setAnime((prevAnime: any) => ({
      ...prevAnime,
      [name]: name === "genreid" || name === "episodes" ? Number(value) : value,
    }));
  };

  if (!anime) {
    return <div>Loading...</div>;
  }

  const deleteAnime = async () => {
    if (id) {
      const response = await fetch(`http://localhost:8000/anime/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        alert("Anime deleted successfully!");
      } else {
        alert("Failed to delete anime.");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={anime.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="episodes">Episodes:</label>
          <input
            type="number"
            id="episodes"
            name="episodes"
            value={anime.episodes}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sinopsis">Sinopsis:</label>
          <input
            type="text"
            id="Sinopsis"
            name="Sinopsis"
            value={anime.sinopsis}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="genreid">Genre:</label>
          <select
            name="genreid"
            id="genreid"
            value={anime.genreid}
            onChange={handleChange}
          >
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="3">Comedy</option>
            <option value="4">Drama</option>
            <option value="5">Fantasy</option>
            <option value="6">Magic</option>
            <option value="7">Mecha</option>
            <option value="8">Music</option>
            <option value="9">Romance</option>
            <option value="10">Sci-Fi</option>
            <option value="11">Shounen</option>
            <option value="12">Slice of Life</option>
            <option value="13">Sports</option>
            <option value="14">Supernatural</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {anime && (
        <button
          onClick={() => {
            deleteAnime().then(() => {
              window.location.href = "/anime";
            });
          }}
        >
          Delete
        </button>
      )}
    </>
  );
}

export const getAnimeById = async (id: string) => {
  const response = await fetch(`http://localhost:8000/anime/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }
  const animeData = await response.json();
  return animeData.data;
};

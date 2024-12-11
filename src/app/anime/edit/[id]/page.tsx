"use client";

import Navbar from "@/app/anime/navbar";
import { patchData } from "@/app/service/anime";
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
        setAnime(fetchedAnime);
      }
    };
    fetchAnime();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id && anime) {
      try {
        const response = await patchData(
          `http://localhost:8000/anime/${id}`,
          anime
        );
        if (response) {
          alert("Anime updated successfully!");
          // Fetch data again to show updated information
          const updatedAnime = await getAnimeById(id);
          setAnime(updatedAnime); // Update the state with new data
        } else {
          alert("Failed to update anime.");
        }
      } catch (error) {
        console.error("Error updating anime:", error);
        alert("An error occurred while updating the anime.");
      }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setAnime((prevAnime: any) => ({
      ...prevAnime,
      [name]: name === "genreid" || name === "episodes" ? Number(value) : value,
    }));
  };

  if (!anime) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <span className="text-4xl font-bold text-gray-700">Loading...</span>
      </div>
    );
  }

  const deleteAnime = async () => {
    if (id) {
      try {
        const response = await fetch(`http://localhost:8000/anime/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          alert("Anime deleted successfully!");
          window.location.href = "/anime";
        } else {
          alert("Failed to delete anime.");
        }
      } catch (error) {
        console.error("Error deleting anime:", error);
        alert("An error occurred while deleting the anime.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6 mt-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={anime.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="episodes"
              className="block text-sm font-medium text-gray-700"
            >
              Episodes:
            </label>
            <input
              type="number"
              id="episodes"
              name="episodes"
              value={anime.episodes}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sinopsis"
              className="block text-sm font-medium text-gray-700"
            >
              Sinopsis:
            </label>
            <textarea
              id="sinopsis"
              name="sinopsis"
              value={anime.sinopsis}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-24"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="genreid"
              className="block text-sm font-medium text-gray-700"
            >
              Genre:
            </label>
            <select
              name="genreid"
              id="genreid"
              value={anime.genreid}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                deleteAnime();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
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

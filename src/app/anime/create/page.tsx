"use client";

import Navbar from "@/app/anime/navbar";
import { postData } from "@/app/service/anime";
import { useState } from "react";

export default function CreateAnimePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [episodes, setEpisodes] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await postData(`http://localhost:8000/anime`, {
        title: title,
        sinopsis: description,
        genreid: parseInt(genre),
        created_at: new Date(releaseDate).toISOString(),
        episodes: parseInt(episodes),
      });
      alert("Anime created successfully!");
    } catch (error) {
      console.error("Failed to create anime:", error);
      alert("Failed to create anime.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Anime</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows={4}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select Genre</option>
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
          <div>
            <label
              htmlFor="episodes"
              className="block text-sm font-medium text-gray-700"
            >
              Episodes
            </label>
            <input
              type="number"
              id="episodes"
              name="episodes"
              required
              value={episodes}
              onChange={(e) => setEpisodes(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="releaseDate"
              className="block text-sm font-medium text-gray-700"
            >
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              required
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
              <div className="flex justify-center">
              <button
                type="submit"
                onClick={() => {
                  window.location.href = "/anime";
                }}
                className="py-2 px-4 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Create
              </button>
              </div>
        </form>
      </div>
    </div>
  );
}

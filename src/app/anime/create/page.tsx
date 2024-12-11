"use client";
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            name="genre"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
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
          <label htmlFor="episodes">Episodes:</label>
          <input
            type="number"
            id="episodes"
            name="episodes"
            required
            value={episodes}
            onChange={(e) => setEpisodes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            required
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            window.location.href = "/anime";
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </form>
    </div>
  );
}

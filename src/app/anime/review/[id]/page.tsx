"use client";

import Navbar from "@/app/anime/navbar";
import { postData } from "@/app/service/anime";
import { useState } from "react";

import { useParams } from "next/navigation";

export default function ReviewPage() {
  const params = useParams();
  const [review, setReview] = useState("");
  const userId = 1; // Add user_id constant
  const animeId = parseInt(params.id as string); // Add anime_id constant

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await postData(`http://localhost:8000/reviews/${params.id}`, {
      message: review,
      user_id: userId,
      anime_id: animeId,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="mb-6">
            <label
              htmlFor="review-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Review
            </label>
            <textarea
              id="review-input"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Masukkan review anda"
              className="block w-full h-40 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base resize-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={() => {
                window.location.href = "/anime";
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

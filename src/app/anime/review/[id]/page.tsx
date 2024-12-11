"use client";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 center">
          <label
            htmlFor="review-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Review
          </label>
          <input
            type="text"
            id="review-input"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Masukkan review anda"
            className="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

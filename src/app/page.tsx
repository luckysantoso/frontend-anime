"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('images/dandan-background.jpg')",
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Welcome to Anime World
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Discover the best animes, reviews, and genres in one place. Let's
            dive into the world of anime!
          </p>
          <div className="mt-6 space-x-4">
            <button
              onClick={() => signIn()}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all"
            >
              Login
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

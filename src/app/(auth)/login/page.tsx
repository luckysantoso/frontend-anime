"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter(); // Use the hook at the top level
  const [error, setError] = useState<string | null>(null); // Track errors

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget); // Extract form data
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/dashboard",
      });

      if (res && !res.error) {
        router.push("/dashboard");
      } else {
        setError(res?.error || "An unknown error occurred");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center"></div>
                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleLogin}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Login</span>
                    </button>
                  </form>
                  {error && (
                    <p className="mt-3 text-sm text-red-500 text-center">
                      {error}
                    </p>
                  )}
                  <p className="mt-6 text-sm text-gray-600 text-center">
                      Don't have an account yet?{" "}
                    <a
                      href="http://localhost:3000/register"
                      className="text-blue-500 hover:underline"
                    >
                      Register here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('images/dandan-background.jpg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

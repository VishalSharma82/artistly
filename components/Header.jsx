"use client";

export default function Header() {
  return (
    <header className="bg-gray-50 sticky top-0 z-50 shadow-md py-4 px-6 flex justify-between items-center transition-all duration-200">
      <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight hover:scale-105 transition">
        🎤 Artistly
      </h1>

      <nav className="space-x-6 text-sm font-medium">
        <a
          href="/"
          className="text-gray-700 hover:text-indigo-600 hover:bg-green-100 p-2 rounded transition"
        >
          Home
        </a>
        <a
          href="/artist-listing"
          className="text-gray-700 hover:text-indigo-600 hover:bg-green-100 p-2 rounded transition"
        >
          Artists
        </a>
        <a
          href="/onboarding"
          className="text-gray-700 hover:text-indigo-600 hover:bg-green-100 p-2 rounded transition"
        >
          Onboard Artist
        </a>
        <a
          href="/dashboard"
          className="text-gray-700 hover:text-indigo-600 hover:bg-green-100 p-2 rounded transition"
        >
          Dashboard
        </a>
      </nav>
    </header>
  );
}

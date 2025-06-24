"use client";

import { useState } from "react";
import Header from "../../components/Header";
import ArtistCard from "../../components/ArtistCard";
import FilterBlock from "../../components/FilterBlock";
import data from "../../data/artists.json";

export default function ArtistListingPage() {
  const [filtered, setFiltered] = useState(data);

  const handleFilterChange = ({ category, location }) => {
    let temp = data;

    if (category) temp = temp.filter((a) => a.category === category);
    if (location) temp = temp.filter((a) => a.location === location);

    setFiltered(temp);
  };

  return (
    <main>
      <Header />
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Browse Artists</h2>
        <FilterBlock onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </section>
    </main>
  );
}

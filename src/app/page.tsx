"use client";

import React, { useState } from "react";
import Collection from "@/components/Collection/Collection";
import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage/HomePage";
import TopHeader from "@/components/TopHeader/TopHeader";

export default function Home() {
  const [query, setQuery] = useState("");
  const [artistIds, setArtistIds] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <TopHeader />
      <Header onQueryChange={setQuery} />
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          <HomePage query={query} setArtistIds={setArtistIds} setError={setError} />
          <Collection artistIds={artistIds} />
        </>
      )}
    </>
  );
}

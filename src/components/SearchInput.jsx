"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="search something..."
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
      />
    </form>
  );
};

export default SearchInput;

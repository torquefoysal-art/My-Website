"use client";

import { useSearchParams } from "next/navigation";

export function DeskSearch() {
  const query = useSearchParams().get("q") ?? "";

  return (
    <form className="desk-search" action="/search" role="search">
      <label>
        <span className="sr-only">Search stories</span>
        <input name="q" placeholder="Search the desk" defaultValue={query} key={query} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

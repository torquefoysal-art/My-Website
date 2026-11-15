import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Byline } from "@/components/news/Byline";
import { Paper } from "@/components/news/Paper";
import { searchStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Harbor Ledger desk by headline, writer, or subject.",
};

function normalize(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value ?? "").trim();
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  return (
    <Paper current="search">
      <Suspense fallback={<p className="waiting">Looking through the desk…</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
    </Paper>
  );
}

async function Results({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  const query = normalize(q);
  const results = searchStories(query);

  return (
    <section className="search-page">
      <header className="section-hero">
        <p className="kicker">Search</p>
        <h1>{query ? `Results for “${query}”` : "Search the desk"}</h1>
        <p className="dek">
          {query
            ? `${results.length} ${results.length === 1 ? "piece" : "pieces"} mention that.`
            : "Try a place, a writer, or a subject. Ferry, heat, budget, lunch."}
        </p>
      </header>
      {results.length === 0 ? (
        <p className="empty">
          Nothing on the desk matches that. <Link href="/">Return to the front</Link>.
        </p>
      ) : (
        <div className="section-list">
          {results.map((story) => (
            <article key={story.slug}>
              <p className="kicker">{story.kicker}</p>
              <h2>
                <Link href={`/story/${story.slug}`}>{story.title}</Link>
              </h2>
              <p className="tile-dek">{story.dek}</p>
              <Byline story={story} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

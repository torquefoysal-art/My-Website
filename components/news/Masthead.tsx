import Link from "next/link";
import { Suspense } from "react";
import { edition, sections } from "@/lib/stories";
import { DeskSearch } from "./DeskSearch";

const links = [
  { href: "/", label: "Front", id: "front" },
  ...sections.map((section) => ({
    href: `/section/${section.slug}`,
    label: section.name,
    id: section.slug,
  })),
  { href: "/about", label: "About", id: "about" },
];

export function Masthead({ current = "front" }: { current?: string }) {
  return (
    <header className="masthead">
      <a className="skip" href="#main">
        Skip to the paper
      </a>
      <div className="edition-bar">
        <span>{edition.dateLabel}</span>
        <span>
          {edition.volume} · {edition.number}
        </span>
        <span>{edition.place}</span>
      </div>
      <div className="wordmark-row">
        <p className="ear">Evening edition</p>
        <Link href="/" className="wordmark">
          The Harbor Ledger
        </Link>
        <Suspense fallback={<SearchFallback />}>
          <DeskSearch />
        </Suspense>
      </div>
      <p className="motto">{edition.motto}</p>
      <nav className="section-nav" aria-label="Sections">
        {links.map((link) => (
          <Link key={link.id} href={link.href} aria-current={current === link.id ? "page" : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function SearchFallback() {
  return (
    <form className="desk-search" action="/search" role="search">
      <label>
        <span className="sr-only">Search stories</span>
        <input name="q" placeholder="Search the desk" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

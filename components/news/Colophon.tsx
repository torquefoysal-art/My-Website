import Link from "next/link";
import { edition, sections } from "@/lib/stories";

export function Colophon() {
  return (
    <footer className="colophon">
      <div>
        <p className="colophon-name">{edition.name}</p>
        <p>
          {edition.volume} · {edition.number} · {edition.place}
        </p>
      </div>
      <nav aria-label="Footer">
        {sections.map((section) => (
          <Link key={section.slug} href={`/section/${section.slug}`}>
            {section.name}
          </Link>
        ))}
        <Link href="/about">About</Link>
        <Link href="/search">Search</Link>
      </nav>
      <p className="colophon-note">
        Original desk pieces written for this reading room, set in Fraunces and Newsreader. Built by Foysal Islam.
        These are not wire reports.
      </p>
    </footer>
  );
}

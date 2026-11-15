import type { Metadata } from "next";
import { Paper } from "@/components/news/Paper";
import { edition } from "@/lib/stories";

export const metadata: Metadata = {
  title: "About the desk",
  description: "What The Harbor Ledger is, and how the evening edition is put together.",
};

export default function AboutPage() {
  return (
    <Paper current="about">
      <article className="story about-page">
        <header>
          <p className="kicker">Colophon</p>
          <h1>A small paper for a long evening</h1>
          <p className="dek">
            {edition.name} is an original news desk: reported-style pieces about a harbor city, written for this site
            rather than taken from the wire.
          </p>
        </header>
        <div className="prose">
          <p className="dateline">The masthead</p>
          <p className="lede">
            The front page leads with one story and keeps the rest in reach. City follows the ferry and the night
            shift. Science follows the measurements. Culture follows the hours people keep for themselves. Business
            follows a number until it becomes rope, light, or wages.
          </p>
          <p>
            The writers on the bylines are the desk’s correspondents. The scenes are composed for this edition. If a
            piece sounds like a place you know, that is the point of the form, not a claim that the council met last
            night.
          </p>
          <p>
            The paper is set in Fraunces for the name and the headlines, Newsreader for the story, and Outfit for the
            labels that tell you which desk you are in. It is built as a Next.js reading room by Foysal Islam.
          </p>
        </div>
      </article>
    </Paper>
  );
}

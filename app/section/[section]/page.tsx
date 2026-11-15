import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Byline } from "@/components/news/Byline";
import { Paper } from "@/components/news/Paper";
import { getSection, sections, storiesIn, type SectionSlug } from "@/lib/stories";

type SectionParams = { section: string };

export function generateStaticParams(): SectionParams[] {
  return sections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: { params: Promise<SectionParams> }): Promise<Metadata> {
  const { section: slug } = await params;
  const section = getSection(slug);
  if (!section) return { title: "Section not found" };
  return {
    title: section.name,
    description: section.blurb,
  };
}

export default function SectionPage({ params }: { params: Promise<SectionParams> }) {
  return (
    <Suspense
      fallback={
        <Paper>
          <p className="waiting">Opening the section…</p>
        </Paper>
      }
    >
      <SectionBody params={params} />
    </Suspense>
  );
}

async function SectionBody({ params }: { params: Promise<SectionParams> }) {
  const { section: slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  const pieces = storiesIn(section.slug as SectionSlug);

  return (
    <Paper current={section.slug}>
      <header className="section-hero">
        <p className="kicker">Section</p>
        <h1>{section.name}</h1>
        <p className="dek">{section.blurb}</p>
      </header>
      <div className="section-list">
        {pieces.map((story) => (
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
    </Paper>
  );
}

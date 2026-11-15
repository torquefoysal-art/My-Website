import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Byline } from "@/components/news/Byline";
import { Paper } from "@/components/news/Paper";
import { formatDate, getSection, getStory, relatedStories, stories } from "@/lib/stories";

type StoryParams = { slug: string };

export function generateStaticParams(): StoryParams[] {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<StoryParams> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: story.title,
    description: story.dek,
    authors: [{ name: story.author }],
    openGraph: {
      title: story.title,
      description: story.dek,
      type: "article",
      publishedTime: story.date,
    },
  };
}

export default function StoryPage({ params }: { params: Promise<StoryParams> }) {
  return (
    <Suspense
      fallback={
        <Paper>
          <p className="waiting">Setting the type…</p>
        </Paper>
      }
    >
      <StoryArticle params={params} />
    </Suspense>
  );
}

async function StoryArticle({ params }: { params: Promise<StoryParams> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const section = getSection(story.section);
  const more = relatedStories(story.slug);
  const [opening, ...rest] = story.body;
  const beforeQuote = rest.slice(0, 1);
  const afterQuote = rest.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.title,
    description: story.dek,
    datePublished: story.date,
    author: { "@type": "Person", name: story.author },
    articleSection: section?.name,
  };

  return (
    <Paper current={story.section}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="story">
        <header>
          <p className="kicker">
            <Link href={`/section/${story.section}`}>{section?.name}</Link>
            <span aria-hidden="true"> · </span>
            {story.kicker}
          </p>
          <h1>{story.title}</h1>
          <p className="dek">{story.dek}</p>
          <Byline story={story} />
        </header>
        <div className="prose">
          <p className="dateline">{story.dateline}</p>
          <p className="lede">{opening}</p>
          {beforeQuote.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className="pull">{story.pullQuote}</blockquote>
          {afterQuote.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="story-end">
          {story.authorRole}. Filed {formatDate(story.date)}.
        </p>
      </article>
      <aside className="related" aria-label="More to read">
        <h2>Continue</h2>
        <div>
          {more.map((item) => (
            <article key={item.slug}>
              <p className="kicker">{item.kicker}</p>
              <h3>
                <Link href={`/story/${item.slug}`}>{item.title}</Link>
              </h3>
            </article>
          ))}
        </div>
      </aside>
    </Paper>
  );
}

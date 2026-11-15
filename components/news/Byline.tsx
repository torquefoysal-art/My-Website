import { formatDate, type Story } from "@/lib/stories";

export function Byline({ story }: { story: Story }) {
  return (
    <p className="byline">
      <span>{story.author}</span>
      <span>{formatDate(story.date)}</span>
      <span>{story.minutes} min read</span>
    </p>
  );
}

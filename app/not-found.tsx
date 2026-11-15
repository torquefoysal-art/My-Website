import Link from "next/link";
import { Paper } from "@/components/news/Paper";

export default function NotFound() {
  return (
    <Paper>
      <section className="section-hero">
        <p className="kicker">Missing</p>
        <h1>That piece is not in this edition.</h1>
        <p className="dek">
          The page may have moved, or the slug never made the paper. <Link href="/">Return to the front</Link>.
        </p>
      </section>
    </Paper>
  );
}

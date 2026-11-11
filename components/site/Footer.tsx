import { profile } from "@/lib/content";
import { Mark } from "@/components/site/Mark";

export function Footer() {
  return (
    <footer className="footer">
      <Mark />
      <p>© 2026 Foysal Islam. Geometric studio. No figurative imagery.</p>
      <a href={profile.github} rel="noreferrer">
        GitHub
      </a>
    </footer>
  );
}

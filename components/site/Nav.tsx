import { profile } from "@/lib/content";
import { Mark } from "@/components/site/Mark";

const links = [
  { href: "#studies", label: "Studies" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">
        <Mark />
        <span>Foysal Islam</span>
      </a>
      <nav aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-github" href={profile.github} rel="noreferrer">
        GitHub
      </a>
    </header>
  );
}

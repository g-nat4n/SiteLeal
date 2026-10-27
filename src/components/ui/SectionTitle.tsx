import Link from "next/link";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={light ? "section-title light" : "section-title"}>
      <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a className="text-link" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className="text-link" href={href}>
      {children}
    </Link>
  );
}

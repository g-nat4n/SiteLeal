import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-cream">
      <div className="container-main py-14 md:py-16">
        <nav className="mb-4 text-sm text-muted" aria-label="Trilha">
          {crumbs.map((crumb, index) => (
            <span key={crumb.label}>
              {index > 0 && <span className="px-2">/</span>}
              {crumb.href ? <Link href={crumb.href} className="hover:text-green">{crumb.label}</Link> : crumb.label}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1
          className="mt-2 max-w-3xl text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] text-green-deep"
          style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}
        >
          {title}
        </h1>
        {description && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
      </div>
    </section>
  );
}

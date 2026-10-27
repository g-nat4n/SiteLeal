import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { laws } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legislação",
  description: "Normas e leis que organizam a vida em condomínio: Código Civil, Lei do Condomínio, Inquilinato e NBR 16280.",
};

export default function LegislacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Legislação"
        title="Referências para síndico e condômino"
        description="Resumos do que cada norma trata, com link para o texto oficial."
        crumbs={[{ label: "Home", href: "/" }, { label: "Legislação" }]}
      />
      <section className="section-padding">
        <div className="container-main grid gap-5">
          {laws.map((law) => (
            <Link key={law.slug} href={`/legislacao/${law.slug}`} className="feature-card block">
              <p className="text-xs font-bold uppercase tracking-[2px] text-sand-deep">{law.date}</p>
              <h2 className="mt-2 text-2xl font-extrabold text-green-deep">{law.title}</h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-muted">{law.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

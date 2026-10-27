import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="bg-mint">
      <div className="container-main flex flex-wrap items-center justify-between gap-6 py-14">
        <div>
          <p className="eyebrow">Suporte para o seu condomínio</p>
          <h2 className="mt-2 text-3xl font-extrabold text-green-deep" style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}>
            A Leal tem a solução para você.
          </h2>
          <p className="mt-2 max-w-xl text-muted">Entre em contato, solicite uma proposta ou fale com a equipe pelo telefone e pelo WhatsApp.</p>
        </div>
        <Link href="/contato" className="btn btn-primary">
          Contate-nos agora
        </Link>
      </div>
    </section>
  );
}

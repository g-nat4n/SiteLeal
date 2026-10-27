import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-main text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-green-deep" style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}>
          Página não encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">O endereço não existe ou foi movido. Volte para a página inicial.</p>
        <Link href="/" className="btn btn-primary mt-6">
          Ir para a home
        </Link>
      </div>
    </section>
  );
}

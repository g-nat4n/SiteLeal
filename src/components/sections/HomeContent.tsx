import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Headphones, Globe } from "lucide-react";
import { portalList } from "@/lib/links";
import { services } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCta from "@/components/sections/ContactCta";

const pillars = [
  {
    icon: Building2,
    title: "Serviços",
    text: "Gestão condominial com total assessoria ao síndico.",
    href: "/servicos",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    text: "Satisfação do cliente, com um atendimento personalizado.",
    href: "/contato",
  },
  {
    icon: Globe,
    title: "Condomínio on-line",
    text: "Síndico e condôminos com um canal aberto de comunicação.",
    href: "/servicos/online",
  },
];

export default function HomeContent() {
  return (
    <>
      <section className="bg-green-deep text-white">
        <div className="container-main grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="eyebrow-light">Curitiba e região</p>
            <h1
              className="mt-3 max-w-xl text-[clamp(40px,5.4vw,64px)] font-extrabold leading-[1.02]"
              style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}
            >
              Venha para a Leal Administradora de Condomínios
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/78">
              Nossos profissionais, com mais de 15 anos no mercado, agregam à carteira empreendimentos em bairros de Curitiba. Solicite uma proposta e conte com a nossa prestação de serviços.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contato" className="btn btn-sand">
                Solicite uma proposta
                <ArrowRight size={18} />
              </Link>
              <a href={portalList[0].href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Acessar o sistema
              </a>
            </div>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[460px]">
            <Image
              src="/images/hero-condominio.jpg"
              alt="Fachada de um condomínio residencial, com varandas e janelas"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-2 bg-gradient-to-t from-green-deep via-green-deep/80 to-transparent px-4 pb-4 pt-16 text-sm">
              <p><span className="block text-lg font-extrabold text-foam">15+</span>anos de atuação</p>
              <p><span className="block text-lg font-extrabold text-foam">Curitiba</span>e região</p>
              <p><span className="block text-lg font-extrabold text-foam">3</span>acessos on-line</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-5 md:grid-cols-3">
          {pillars.map((item) => (
            <Link key={item.title} href={item.href} className="feature-card block">
              <item.icon className="text-green" />
              <h2 className="mt-4 text-xl font-extrabold text-green-deep" style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}>{item.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle eyebrow="O que fazemos" title="Serviços para o condomínio" description="Da emissão de boletos à contabilidade, com apoio ao síndico em cada etapa." />
            <Link href="/servicos" className="link-more group">
              Ver todos
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`} className="feature-card block">
                <h3 className="text-lg font-extrabold text-green-deep">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-deep text-white">
        <div className="container-main">
          <SectionTitle
            light
            eyebrow="CondPrime"
            title="Condomínio on-line"
            description="O síndico e os condôminos acessam o sistema da administradora. Código Leal: 12."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {portalList.map((portal) => (
              <a key={portal.href} href={portal.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <h3 className="text-xl font-extrabold">{portal.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{portal.description}</p>
                <span className="mt-5 inline-flex text-sm font-extrabold text-foam">Entrar</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid items-center gap-10 md:grid-cols-2">
          <div className="section-title">
            <p className="eyebrow">A empresa</p>
            <h2>Excelência no mercado de Curitiba e região</h2>
            <p>
              Atendemos condomínios comerciais e residenciais. A missão é desenvolver uma convivência organizada, sem abrir mão da valorização do condomínio.
            </p>
            <Link href="/empresa" className="text-link mt-5">Conheça a Leal</Link>
          </div>
          <div className="rounded-3xl bg-mint p-8">
            <p className="text-sm font-extrabold uppercase tracking-[2px] text-sand-deep">Para o síndico</p>
            <p className="mt-3 text-2xl font-extrabold leading-snug text-green-deep" style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}>
              Assessoria administrativa, financeira e de pessoal, com relatórios que o conselho consegue ler.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

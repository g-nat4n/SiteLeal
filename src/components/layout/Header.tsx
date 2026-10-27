"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { portalList } from "@/lib/links";
import { services } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicos", label: "Serviços", children: services.map((item) => ({ href: `/servicos/${item.slug}`, label: item.title })) },
  { href: "/legislacao", label: "Legislação" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileOnline, setMobileOnline] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMobileServices(false);
    setMobileOnline(false);
  }, [pathname]);

  useEffect(() => {
    document.body.dataset.menu = open ? "open" : "closed";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.dataset.menu = "closed";
      document.body.style.overflow = "";
    };
  }, [open]);
  const [onlineOpen, setOnlineOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="container-main flex h-16 items-center gap-4 lg:h-[84px] lg:gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo.png" alt="Leal Administradora de Condomínios" width={168} height={52} priority className="h-12 w-auto" />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="group/menu relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold ${isActive(item.href) ? "text-green" : "text-green-deep hover:text-green"}`}
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover/menu:rotate-180" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 rounded-2xl border border-line bg-white p-2 shadow-card">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-green-deep hover:bg-mint">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-bold ${isActive(item.href) ? "text-green" : "text-green-deep hover:text-green"}`}
              >
                {item.label}
              </Link>
            ),
          )}

          <div className="group/menu relative" onMouseEnter={() => setOnlineOpen(true)} onMouseLeave={() => setOnlineOpen(false)}>
            <button type="button" className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold text-green-deep hover:text-green">
              On-line
              <ChevronDown size={14} className="transition-transform duration-200 group-hover/menu:rotate-180" />
            </button>
            {onlineOpen && (
              <div className="absolute right-0 top-full w-72 rounded-2xl border border-line bg-white p-2 shadow-card">
                {portalList.map((portal) => (
                  <a
                    key={portal.href}
                    href={portal.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2.5 hover:bg-mint"
                  >
                    <span className="block text-sm font-bold text-green-deep">{portal.label}</span>
                    <span className="block text-xs leading-relaxed text-muted">{portal.description}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a href={portalList[0].href} target="_blank" rel="noreferrer" className="btn btn-primary hidden px-4 py-2.5 text-sm lg:inline-flex">
          Área do cliente
        </a>

        <button type="button" className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg text-green-deep lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden" aria-label="Menu">
          <div className="container-main flex flex-col pb-28 pt-2">
            {links.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-line">
                  <button type="button" className="flex w-full items-center justify-between px-1 py-4 text-left font-bold text-green-deep" onClick={() => setMobileServices((value) => !value)} aria-expanded={mobileServices}>
                    {item.label}
                    <ChevronDown size={18} className={`text-sand transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServices && (
                    <div className="grid pb-3">
                      <Link href={item.href} className="px-4 py-2 text-sm font-semibold text-muted">Ver todos</Link>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="px-4 py-2 text-sm text-green-deep">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="block border-b border-line px-1 py-4 font-bold text-green-deep">
                  {item.label}
                </Link>
              ),
            )}
            <div className="border-b border-line">
              <button type="button" className="flex w-full items-center justify-between px-1 py-4 text-left font-bold text-green-deep" onClick={() => setMobileOnline((value) => !value)} aria-expanded={mobileOnline}>
                On-line
                <ChevronDown size={18} className={`text-sand transition-transform duration-200 ${mobileOnline ? "rotate-180" : ""}`} />
              </button>
              {mobileOnline && (
                <div className="grid pb-3">
                  {portalList.map((portal) => (
                    <a key={portal.href} href={portal.href} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm text-green-deep" onClick={() => setOpen(false)}>
                      {portal.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href={portalList[0].href} target="_blank" rel="noreferrer" className="btn btn-primary mt-6" onClick={() => setOpen(false)}>
              Área do cliente
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

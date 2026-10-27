import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import SiteLayout from "@/components/layout/SiteLayout";
import "@/styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: "Leal Administradora de Condomínios",
    template: "%s | Leal Administradora de Condomínios",
  },
  description:
    "Administradora de condomínios em Curitiba. Gestão, cobrança, contabilidade e atendimento ao síndico com a Leal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

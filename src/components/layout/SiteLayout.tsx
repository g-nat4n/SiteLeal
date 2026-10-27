import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

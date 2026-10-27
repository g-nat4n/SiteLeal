import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/data";

const service = getService("administracao");
export const metadata: Metadata = { title: service.title, description: service.summary };

export default function Page() {
  return <ServiceDetail slug="administracao" />;
}

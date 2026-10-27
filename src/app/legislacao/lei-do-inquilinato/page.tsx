import type { Metadata } from "next";
import LawDetail from "@/components/sections/LawDetail";
import { getLaw } from "@/lib/data";

const law = getLaw("lei-do-inquilinato");
export const metadata: Metadata = { title: law.title, description: law.summary };

export default function Page() {
  return <LawDetail slug="lei-do-inquilinato" />;
}

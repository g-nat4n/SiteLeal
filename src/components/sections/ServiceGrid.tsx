"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { services } from "@/lib/data";

const filters = ["Todos", ...services.map((service) => service.title)];

export default function ServiceGrid() {
  const [filter, setFilter] = useState("Todos");
  const visible = useMemo(
    () => (filter === "Todos" ? services : services.filter((service) => service.title === filter)),
    [filter],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${filter === item ? "bg-green text-white" : "bg-white text-green-deep"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((service) => (
          <Link key={service.slug} href={`/servicos/${service.slug}`} className="feature-card block">
            <h2 className="text-xl font-extrabold text-green-deep">{service.title}</h2>
            <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
            <ul className="mt-4 grid gap-1 text-sm text-muted">
              {service.items.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

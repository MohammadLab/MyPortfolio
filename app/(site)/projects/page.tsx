
"use client";
import { useMemo, useState } from "react";
import { projects, categories } from "@/lib/projects";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchText = (p.title + " " + p.description + " " + p.tech.join(" ")).toLowerCase().includes(q.toLowerCase());
      const matchCat = cat === "All" ? true : p.categories.includes(cat as any);
      return matchText && matchCat;
    });
  }, [q, cat]);

  return (
    <div className="container space-y-8">
      <h1 className="text-4xl">Projects</h1>

      <div className="flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects..."
          className="flex-1 min-w-[240px] bg-black/20 border border-white/10 rounded-lg px-4 py-2"
        />
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-2 rounded-lg border ${cat === c ? "border-brand text-brand" : "border-white/10 hover:border-white/20"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ProjectGrid items={filtered} />
    </div>
  );
}

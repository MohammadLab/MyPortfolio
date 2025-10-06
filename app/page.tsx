import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function HomePage() {
  // --- Filters ---
  const featuredGeneral = projects
    .filter((p) => p.categories.includes("Web App") || p.categories.includes("Tools"))
    .slice(0, 3);

  const featuredGameDev = projects
    .filter((p) => p.categories.includes("Game Dev"))
    .slice(0, 3);

  return (
    <div className="container space-y-20 py-20">
      {/* Hero Section */}
      <Hero />

      {/* Featured General Projects */}
      <section id="featured">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <ProjectGrid items={featuredGeneral} />
      </section>

      {/* Featured Game Dev Projects */}
      <section id="game-dev">
        <h2 className="text-3xl font-bold mb-8">Featured Game Dev</h2>
        <ProjectGrid items={featuredGameDev} />
      </section>
    </div>
  );
}

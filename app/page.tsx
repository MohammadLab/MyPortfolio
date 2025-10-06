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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <a
            href="/projects#web"
            className="text-sm px-4 py-2 rounded-lg border border-[#0095FF]/50 text-[#0095FF] hover:bg-[#0095FF]/10 transition"
          >
            View All →
          </a>
        </div>

        <ProjectGrid items={featuredGeneral} />
      </section>


      {/* Featured Game Dev Projects */}
      <section id="game-dev">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Game Dev</h2>
          <a
            href="/projects#game-dev"
            className="text-sm px-4 py-2 rounded-lg border border-[#0095FF]/50 text-[#0095FF] hover:bg-[#0095FF]/10 transition"
          >
            View All →
          </a>
        </div>

        <ProjectGrid items={featuredGameDev} />
      </section>
    </div>
  );
}

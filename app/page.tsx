
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 6);
  return (
    <div className="container space-y-16">
      <Hero />
      <section>
        <h2 className="text-3xl mb-6">Featured Projects</h2>
        <ProjectGrid items={featured} />
      </section>
    </div>
  );
}

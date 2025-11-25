import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const webProjects = projects.filter((p) => p.categories.includes("Web App"));
  const unrealProjects = projects.filter((p) => p.categories.includes("Game Dev"));
  const workshopProjects = projects.filter((p) => p.categories.includes("Workshop"));

  return (
    <div className="container space-y-20 py-20">
      {/* Web Section */}
      <section id="web">
        <h2 className="text-3xl font-bold mb-8">Featured Web Projects</h2>
        <ProjectGrid items={webProjects} />
      </section>

      {/* Game Dev Section */}
      <section id="unreal">
        <h2 className="text-3xl font-bold mb-8">Featured Unreal Engine Projects</h2>
        <ProjectGrid items={unrealProjects} />
      </section>

      {/* Workshops Section */}
      <section id="workshops">
        <h2 className="text-3xl font-bold mb-8">Workshops</h2>
        <ProjectGrid items={workshopProjects} />
      </section>
    </div>
  );
}

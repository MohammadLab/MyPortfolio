import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const engineeringProjects = projects.filter((p) => p.categories.includes("Engineering"));
  const systemsProjects = projects.filter((p) => p.categories.includes("Systems"));
  const webProjects = projects.filter((p) => p.categories.includes("Web App"));
  const unrealProjects = projects.filter((p) => p.categories.includes("Game Dev"));

  return (
    <div className="container space-y-20 py-20">
      {/* Web Section */}
      <section id="web">
        <h2 className="text-3xl font-bold mb-8">Featured Web Projects</h2>
        <ProjectGrid items={webProjects} />
      </section>

      {/* Systems Section */}
      <section id="systems">
        <h2 className="text-3xl font-bold mb-8">Systems, Networking & AR</h2>
        <ProjectGrid items={systemsProjects} />
      </section>

      {/* Engineering Section */}
      <section id="engineering">
        <h2 className="text-3xl font-bold mb-8">Engineering Design & Simulation</h2>
        <ProjectGrid items={engineeringProjects} />
      </section>

      {/* Game Dev Section */}
      <section id="unreal">
        <h2 className="text-3xl font-bold mb-8">Featured Unreal Engine Projects</h2>
        <ProjectGrid items={unrealProjects} />
      </section>
    </div>
  );
}

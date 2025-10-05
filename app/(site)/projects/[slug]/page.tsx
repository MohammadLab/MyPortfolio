import { projects } from "@/lib/projects";
import Image from "next/image";

type PageProps = {
  params: Promise<{ slug: string }>; // 👈 params is async in Next 15
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  // ✅ Await params before using
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-20 space-y-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      {project.image && (
        <div className="relative aspect-video w-full max-w-3xl mx-auto">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <p className="text-lg opacity-90 max-w-2xl mx-auto text-center">
        {project.description}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 border border-white/10 rounded-md text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

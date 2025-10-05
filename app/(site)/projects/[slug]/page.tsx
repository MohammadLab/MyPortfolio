
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

type Props = { params: { slug: string } };

export default function ProjectDetail({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    return (
      <div className="container">
        <h1 className="text-3xl">Project not found</h1>
        <Link href="/projects" className="underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="container space-y-8">
      <h1 className="text-4xl">{project.title}</h1>
      {project.image && (
        <Image src={project.image} alt={project.title} width={1200} height={630} className="rounded-xl border border-white/10" />
      )}
      <p className="text-lg opacity-90">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-sm">{t}</span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && <a className="underline" href={project.github} target="_blank">GitHub</a>}
        {project.demo && <a className="underline" href={project.demo} target="_blank">Live Demo</a>}
      </div>
      <Link href="/projects" className="underline">← Back to Projects</Link>
    </div>
  );
}

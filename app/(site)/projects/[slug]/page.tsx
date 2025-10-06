import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectLayout } from "@/components/ProjectLayout";

interface Props {
  params: Promise<{ slug: string }>; // 👈 params is async
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; // 👈 must await before accessing

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectLayout project={project} />;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

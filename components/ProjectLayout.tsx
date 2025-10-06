"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
    slug: string;
    title: string;
    description: string;
    image?: string;
    tech: string[];
    categories: string[];
    github?: string;
    demo?: string;
};

export function ProjectLayout({ project }: { project: Project }) {
    return (
        <section className="relative py-16">
            {/* ───── Hero Banner ───── */}
            <div className="relative aspect-[3/1] w-full overflow-hidden rounded-2xl border border-white/10 mb-16">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover brightness-90"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        {project.title}
                    </h1>
                </div>
            </div>

            {/* ───── Body Layout ───── */}
            <div className="container grid md:grid-cols-[280px_1fr] gap-10">
                {/* ───── Sidebar ───── */}
                <aside className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="sticky top-24 rounded-xl border border-white/10 bg-[#0D1117]/70 backdrop-blur-md p-5 space-y-6"
                    >
                        <div>
                            <h3 className="text-[#0095FF] font-semibold mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 rounded-md border border-white/10 text-white/90"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.categories?.length > 0 && (
                            <div>
                                <h3 className="text-[#0095FF] font-semibold mb-2">
                                    Categories
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.categories.map((c) => (
                                        <span
                                            key={c}
                                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/80 border border-white/10"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="space-y-3">
                            {project.demo && (
                                <Button
                                    asChild
                                    className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-white/10 hover:border-white/20 text-white"
                                >
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        View Live
                                    </a>
                                </Button>
                            )}
                            {project.github && (
                                <Button
                                    asChild
                                    className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-white/10 hover:border-white/20 text-white"
                                >
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub Repo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </aside>

                {/* ───── Main Content ───── */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-10"
                >
                    {/* Overview */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#0095FF] mb-3">
                            Overview
                        </h2>
                        <p className="text-base leading-relaxed text-white/90 whitespace-pre-line">
                            {project.description.trim()}
                        </p>
                    </div>

                    {/* Optional Results Section */}
                    <div className="border-t border-white/10 pt-8">
                        <h2 className="text-2xl font-semibold text-[#0095FF] mb-3">
                            Results & Highlights
                        </h2>
                        <ul className="list-disc list-inside text-white/85 space-y-2 text-sm">
                            <li>
                                Streamlined workflows and improved data efficiency across
                                project operations.
                            </li>
                            <li>
                                Designed for scalability and maintainability with modern
                                frameworks.
                            </li>
                            <li>
                                Demonstrated strong full-stack, backend, and design skills.
                            </li>
                        </ul>
                    </div>

                    {/* Placeholder for screenshots / gallery */}
                    <div className="border-t border-white/10 pt-8">
                        <h2 className="text-2xl font-semibold text-[#0095FF] mb-3">
                            Gallery
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/50">
                                Screenshot 1
                            </div>
                            <div className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/50">
                                Screenshot 2
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}

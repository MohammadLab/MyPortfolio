"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


type Project = {
    slug: string;
    title: string;
    description: string;
    image?: string;
    tech: string[];
    categories: string[];
    github?: string;
    demo?: string;
    filesZip?: string;
};

export function ProjectLayout({ project }: { project: Project }) {
    const [activeImage, setActiveImage] = useState<string | null>(null);

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

                            {/* 🔹 New download button */}
                            {project.filesZip && (
                                <Button
                                    asChild
                                    className="
                                                  w-full
                                                  bg-[#1a1a1a] 
                                                  hover:bg-[#2a2a2a]
                                                  text-white
                                                  border border-white/10 
                                                  hover:border-white/20
                                                  transition
                                                "
                                >
                                    <a href={project.filesZip} download>
                                        <FileDown className="mr-2 h-4 w-4" />
                                        Download Project Files
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

                    {/* Dynamic Gallery with Lightbox */}
                    <div className="border-t border-white/10 pt-8">
                        <h2 className="text-2xl font-semibold text-[#0095FF] mb-3">Gallery</h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="aspect-video rounded-lg border border-white/10 overflow-hidden bg-black/20 cursor-pointer"
                                    onClick={() =>
                                        setActiveImage(`/images/projects/${project.slug}/screenshot${i}.png`)
                                    }
                                >
                                    <Image
                                        src={`/images/projects/${project.slug}/screenshot${i}.png`}
                                        alt={`${project.title} screenshot ${i}`}
                                        width={1280}
                                        height={720}
                                        className="object-cover w-full h-full"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/images/placeholder-dark.png";
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Lightbox Overlay */}
                        <AnimatePresence>
                            {activeImage && (
                                <motion.div
                                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setActiveImage(null)}
                                >
                                    <motion.div
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.95, opacity: 0 }}
                                        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                                        className="relative max-w-5xl w-full"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            onClick={() => setActiveImage(null)}
                                            className="absolute top-3 right-3 z-50 p-2 bg-black/50 rounded-full border border-white/10 hover:bg-black/70 transition"
                                        >
                                            <X className="h-5 w-5 text-white" />
                                        </button>

                                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                            <Image
                                                src={activeImage}
                                                alt={`${project.title} enlarged view`}
                                                fill
                                                sizes="100vw"
                                                className="object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}

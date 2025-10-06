"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CodeFrame } from "@/components/CodeFrame";
import { Github, Linkedin, FileText } from "lucide-react";

const chips = ["Web App", "Game Dev", "AI/ML", "Tools"];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container grid md:grid-cols-2 items-center gap-12">
        {/* Left column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, duration: 0.6 },
            },
          }}
          className="space-y-6"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl font-bold leading-tight"
          >
            I build performant, playful, full-stack apps.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            CS @ UWindsor · Web, Game Dev & AI projects with polish.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-2"
          >
            {chips.map((chip, i) => (
              <motion.span
                key={chip}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="px-3 py-1 text-sm rounded-full bg-muted text-foreground/80 border border-border"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/MohammadLab" target="_blank">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://linkedin.com/in/mohammadlabak" target="_blank">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.3 }}
          className="hidden md:block"
        >
          <CodeFrame />
        </motion.div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent" />
    </section>
  );
}

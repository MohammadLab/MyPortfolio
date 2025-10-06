"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail, MapPin, Code2, Gamepad2, Cpu, Server, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="container py-20 space-y-20">
      {/* ───── Hero Section ───── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          I’m <span className="text-[#0095FF] font-medium">Mohammad Labak</span> — a
          developer, designer, and lifelong learner passionate about blending code,
          creativity, and engineering precision.  
          Currently based in Windsor, Ontario 🇨🇦, I study Computer Science at the
          University of Windsor and work at the intersection of software, AI, and game technology.
        </p>
      </motion.div>

      {/* ───── Introduction Section ───── */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-[#0095FF]">My Journey</h2>
          <p className="text-white/80 leading-relaxed">
            My journey into software started with building simple tools to solve everyday problems —
            from tracking marks as a Teaching Assistant to automating warehouse billing systems.
            Those small utilities evolved into full-scale production applications and e-commerce
            systems serving real businesses.
          </p>
          <p className="text-white/80 leading-relaxed">
            Along the way, I’ve developed a deep love for backend systems, game mechanics, and
            clean user experience design. Whether I’m working with Flask, React, or Unreal Engine,
            my focus is on delivering work that feels polished, efficient, and human-centered.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:labak2@uwindsor.ca"
              className="flex items-center gap-2 text-[#0095FF] hover:underline"
            >
              <Mail className="h-4 w-4" /> labak2@uwindsor.ca
            </a>
            <span className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4" /> Windsor, Ontario
            </span>
            <a
              href="https://github.com/MohammadLab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0095FF] hover:underline"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0095FF]/10 via-purple-500/10 to-transparent rounded-2xl blur-3xl" />
          <Image
            src="/images/pfp.png"
            alt="Mohammad Labak"
            width={420}
            height={480}
            className="rounded-2xl border border-white/10 relative z-10 object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* ───── Technical Focus Section ───── */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#0095FF]">Technical Focus</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<Code2 className="h-6 w-6 text-[#0095FF]" />}
            title="Full-Stack Development"
            desc="Building polished, responsive apps with Next.js, Flask, and Node.js — integrating APIs, databases, and real-time data flows."
          />
          <SkillCard
            icon={<Cpu className="h-6 w-6 text-[#0095FF]" />}
            title="AI & Automation"
            desc="Designing intelligent systems using Gemini API, Python scripting, and automation pipelines for efficiency and insight."
          />
          <SkillCard
            icon={<Gamepad2 className="h-6 w-6 text-[#0095FF]" />}
            title="Game Development"
            desc="Creating immersive mechanics in Unreal Engine 5 and UEFN — focusing on player feel, physics, and cinematic design."
          />
          <SkillCard
            icon={<Server className="h-6 w-6 text-[#0095FF]" />}
            title="Backend Systems"
            desc="Architecting robust APIs, database models, and Dockerized microservices that scale cleanly across environments."
          />
        </div>
      </section>

      {/* ───── Experience Section ───── */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#0095FF]">Experience Highlights</h2>
        <div className="space-y-6">
          <TimelineItem
            title="Teaching Assistant — University of Windsor"
            period="2024–Present"
            details="Supporting first-year programming students in Python and C++. I help debug code live, explain algorithms, and mark assignments, emphasizing logical thinking and clean code."
          />
          <TimelineItem
            title="Developer — Allpac Container Ltd."
            period="2024–Present"
            details="Built the full-stack e-commerce platform for Allpac, automating sales of packaging products and integrating Stripe Checkout. Improved internal workflows and established CI/CD pipelines."
          />
          <TimelineItem
            title="Developer — LaPurity Water Tech"
            period="2025"
            details="Developed the company’s Sanity CMS-based catalog site. Automated product imports and structured dynamic category filtering with GROQ and TypeScript."
          />
        </div>
      </section>

      {/* ───── Beyond Code Section ───── */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#0095FF]">Beyond Code</h2>
        <p className="text-white/80 max-w-3xl leading-relaxed">
          Outside of development, I’m fascinated by design, architecture, and systems thinking.
          I love combining creative and analytical skills — whether designing game mechanics in Unreal Engine,
          crafting intuitive UI layouts, or learning about efficient business processes.  
          I’m also passionate about sustainability and work with the UWindsor Green Tech club to bring environmental awareness into software solutions.
        </p>
        <p className="text-white/80 max-w-3xl leading-relaxed">
          I thrive in multidisciplinary environments where design, logic, and communication intersect.
          My long-term goal is to grow as an engineer capable of bridging creative industries and emerging technology —
          especially in areas like interactive systems, automation, and AI-driven design.
        </p>
      </section>

      {/* ───── Contact Section ───── */}
      <section className="text-center space-y-4 border-t border-white/10 pt-12">
        <Sparkles className="h-8 w-8 text-[#0095FF] mx-auto mb-2" />
        <h2 className="text-3xl font-semibold">Let’s Build Something Great</h2>
        <p className="text-white/70 max-w-xl mx-auto">
          I’m open to collaborations, co-op opportunities, and conversations about tech, design, or game development.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="mailto:labak2@uwindsor.ca"
            className="px-5 py-3 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-white/10 text-white transition"
          >
            Get in Touch
          </a>
          <a
            href="/resume"
            className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 text-white transition"
          >
            View Resume
          </a>
        </div>
      </section>
    </section>
  );
}

// ───── Subcomponents ─────
function SkillCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border border-white/10 bg-[#0D1117]/60 p-5 space-y-3 hover:border-[#0095FF]/40 transition"
    >
      {icon}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TimelineItem({
  title,
  period,
  details,
}: {
  title: string;
  period: string;
  details: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border border-white/10 rounded-xl p-5 bg-[#0D1117]/60 hover:border-[#0095FF]/40 transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-sm text-white/50">{period}</span>
      </div>
      <p className="text-sm text-white/80 leading-relaxed">{details}</p>
    </motion.div>
  );
}

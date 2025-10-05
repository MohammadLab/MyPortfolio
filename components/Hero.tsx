"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "AI Enthusiast", "Unreal Engine Dev"];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // mark client mount to trigger animation
    setMounted(true);
  }, []);

  return (
    <section className="relative py-16 md:py-28">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl leading-tight">
            Mohammad <span className="text-brand">Labak</span>
          </h1>
          <p className="text-xl opacity-90">{roles.join(" · ")}</p>
          <div className="flex gap-3">
            <Link href="/resume" className="btn-primary">
              Resume
            </Link>
            <Link href="/projects" className="btn-primary">
              Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={mounted ? { opacity: 1, scale: 1 } : false}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 aspect-video
                     bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                     from-brand/20 to-transparent"
        />
      </div>
    </section>
  );
}

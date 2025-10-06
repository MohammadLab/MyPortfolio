"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CodeFrame({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ rotateX: 4, rotateY: -4 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className={cn(
        "relative w-full max-w-md mx-auto rounded-2xl border border-border bg-[#0A0A0A] text-white shadow-2xl overflow-hidden",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border-b border-border">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Code content */}
      <div className="font-mono text-sm px-5 py-4 leading-relaxed">
        <code className="text-muted-foreground">
          <span className="text-[#8b949e]">{"// portfolio snippet"}</span>
          <br />
          <span className="text-[#79c0ff]">const</span>{" "}
          <span className="text-[#d2a8ff]">developer</span> = {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-[#7ee787]">name</span>:{" "}
          <span className="text-[#ffa657]">"Mohammad Labak"</span>,
          <br />
          &nbsp;&nbsp;<span className="text-[#7ee787]">role</span>:{" "}
          <span className="text-[#ffa657]">"Software Developer"</span>,
          <br />
          &nbsp;&nbsp;<span className="text-[#7ee787]">stack</span>:{" "}
          <span className="text-[#ffa657]">
            ["Next.js", "React", "Flask", "AI"]
          </span>
          ,
          <br />
          {"}"}
          <br />
          <br />
          <span className="text-[#79c0ff]">function</span>{" "}
          <span className="text-[#d2a8ff]">build</span>
          {"() {"}
          <br />
          &nbsp;&nbsp;<span className="text-[#79c0ff]">return</span>{" "}
          <span className="text-[#ffa657]">"polished experiences"</span>;
          <br />
          {"}"}
          <br />
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-2 h-5 bg-white align-bottom ml-1"
          />
        </code>
      </div>
    </motion.div>
  );
}

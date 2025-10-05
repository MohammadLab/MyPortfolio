"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];


export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Wait until client hydration completes
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Handle scroll only after hydration
  useEffect(() => {
    if (!hydrated) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hydrated]);

  // Don't render until client-side hydration is ready
  if (!hydrated) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 h-16 bg-black/40 backdrop-blur border-b border-white/10"></header>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled
          ? "backdrop-blur bg-black/40 border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          Mohammad Labak
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-md hover:bg-white/5 transition ${pathname === l.href ? "text-brand" : ""
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

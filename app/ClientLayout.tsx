"use client";

import { Navbar } from "@/components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      <Navbar />
      <main className="pt-20" suppressHydrationWarning>
        {children}
      </main>
    </div>
  );
}

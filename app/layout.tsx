import type { Metadata } from "next";
import "@/styles/globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Mohammad Labak — Portfolio",
  description: "Portfolio showcasing Web, AI, and Unreal projects.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mohammad Labak — Portfolio",
    description: "Web, AI, and Unreal projects",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        {/* ❌ Don't add suppressHydrationWarning to custom components */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

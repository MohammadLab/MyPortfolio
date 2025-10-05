import Image from "next/image";
import Link from "next/link";

type Item = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  categories: string[];
  github?: string;
  demo?: string;
};

export function ProjectGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
          <div className="border border-white/10 rounded-xl overflow-hidden hover:border-brand transition">
            <div
              className="aspect-video bg-black/30 relative"
              suppressHydrationWarning // 👈 fixes SSR/client mismatch for next/image
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              )}
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold group-hover:text-brand transition">
                {p.title}
              </h3>
              <p className="text-sm opacity-80 line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

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
          <div className="flex flex-col h-full min-h-[430px] sm:min-h-[460px] lg:min-h-[500px] border border-white/10 rounded-xl overflow-hidden hover:border-[#0095FF]/50 transition-transform duration-200 hover:-translate-y-1.5">
            {/* Image Section */}
            <div
              className="aspect-video bg-black/30 relative"
              suppressHydrationWarning
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              )}
            </div>

            {/* Text Section */}
            <div className="flex flex-col flex-1 p-4 space-y-2">
              <h3 className="text-lg font-semibold group-hover:text-[#0095FF] transition">
                {p.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed line-clamp-5 flex-grow">
                {p.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2 mt-auto">
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


export const categories = ["Web App", "Game Dev", "AI/ML", "Tools"] as const;
export type Category = typeof categories[number];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  categories: Category[];
  image?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "orora-invoice-generator",
    title: "Orora Invoice Generator",
    description:
      "Flask app automating invoice creation for warehouse operations (95% time saved).",
    tech: ["Python", "Flask", "CSV", "HTML", "CSS"],
    categories: ["Web App"],
    github: "https://github.com/MohammadLab/PalletsStockManager",
    image: "/images/orora.jpg"
  },
  {
    slug: "movement-system-ue5",
    title: "Advanced Movement System (UE5)",
    description:
      "Comprehensive UE5 Blueprint movement pack with climbing, mantling, sliding.",
    tech: ["Unreal Engine", "Blueprint"],
    categories: ["Game Dev"],
    image: "/images/movement-pack.jpg"
  },
  {
    slug: "reuse-ai",
    title: "ReUseAI",
    description:
      "Flask app using Gemini API to generate eco-friendly reuse ideas for any object.",
    tech: ["Python", "Flask", "Gemini API"],
    categories: ["AI/ML", "Web App"],
    github: "https://github.com/MohammadLab/AI-Recycle-or-Reuse-generator",
    image: "/images/reuseai.jpg"
  }
];

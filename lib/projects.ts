export const projects = [
  // ────────────────  WEB APP PROJECTS  ────────────────
  {
    slug: "allpac-store",
    title: "Allpac Container Store (E-Commerce Platform)",
    description: `
A full-stack e-commerce platform built for Allpac Container Ltd., a Canadian packaging manufacturer. 
The site supports dynamic pricing, design uploads, and a persistent shopping cart system built with React and Node.js. 
I developed the entire system end-to-end — backend logic, API routes, and a custom Stripe Checkout integration. 
Deployed via Vercel and Railway with automated GitHub Actions for CI/CD, it now manages over 100 product SKUs and powers Allpac’s online storefront. 
The responsive interface, product pages, and smooth checkout flow increased sales efficiency and reduced manual quoting overhead.
    `,
    image: "/images/allpac-store.png", // placeholder → allpac-store.png
    tech: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    categories: ["Web App"],
    demo: "https://allpacstore.com",
  },
  {
    slug: "lapurity-water-tech",
    title: "LaPurity Water Tech Product Catalog",
    description: `
A headless-CMS catalog for LaPurity Water Tech Inc., designed to manage a growing product line of water-treatment systems. 
I implemented the site in Next.js with Sanity CMS, building custom schemas and import scripts in Node.js for structured data. 
The front end uses GROQ queries for real-time content updates, allowing the client to edit specs and categories instantly from Sanity Studio. 
Its optimized layouts achieve Lighthouse performance scores above 95, and the system cut manual content entry time by over 80%. 
Built for maintainability and speed, the site runs on Vercel and connects directly to Sanity’s global CDN.
    `,
    image: "/images/lapurity-catalog.png", // placeholder → lapurity-catalog.png
    tech: ["Next.js", "Sanity CMS", "GROQ", "Tailwind CSS", "TypeScript"],
    categories: ["Web App"],
    demo: "https://lapurity-water-tech.com",
  },
  {
    slug: "warehouse-invoicing-app",
    title: "Warehouse Invoicing App",
    description: `
A Python-Flask web application that automates monthly invoice generation for warehouse storage operations. 
It ingests CSV datasets, aggregates import/export data, and automatically generates detailed invoice reports. 
I designed REST APIs for real-time tracking dashboards and deployed the system inside Docker for easy portability. 
The modular interface enables staff to view pallet trends and export billing summaries with a single click. 
This automation replaced nearly all manual spreadsheet work, cutting processing time by roughly 95%.
    `,
    image: "/images/warehouse-invoicing.png", // placeholder → warehouse-invoicing.png
    tech: ["Flask", "Python", "JavaScript", "Docker", "HTML/CSS"],
    categories: ["Web App"],
  },
  {
    slug: "orora-invoice-generator",
    title: "Orora Invoice Generator",
    description: `
A streamlined invoice-generation web app designed to simplify financial reporting for warehouse clients. 
Built using Flask and JavaScript, it parses CSV data, aggregates totals by product type, and exports PDF invoices automatically. 
I implemented server-side validation, error handling, and a dynamic preview interface that renders generated invoices in real time. 
By automating calculations and document formatting, the tool reduced invoice turnaround from hours to minutes. 
Its simple web interface and backend logic make it adaptable for any logistics or distribution environment.
    `,
    image: "/images/orora-invoice.png", // placeholder → orora-invoice.png
    tech: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    categories: ["Web App"],
  },
  {
    slug: "reuseai",
    title: "ReUseAI — AI-Powered Sustainability Assistant",
    description: `
An AI-driven web app that helps users discover creative ways to reuse or recycle items instead of discarding them. 
Powered by Google’s Gemini 1.5 Flash API and a Flask backend, the app generates suggestions with built-in safety and relevance guardrails. 
I designed the front-end interface, API prompts, and moderation layer to filter inappropriate content while keeping responses creative. 
The result is a clean, fast tool demonstrating responsible AI integration for environmental education. 
It was deployed under my portfolio domain as an example of real-world AI service use.
    `,
    image: "/images/reuseai.png", // placeholder → reuseai.png
    tech: ["Flask", "Gemini API", "JavaScript", "HTML", "CSS"],
    categories: ["Web App", "AI/ML"],
    github: "https://github.com/MohammadLab/ReUseAI",
    demo: "https://mohammadlabak.com",
  },
  {
    slug: "uwindsor-green-tech",
    title: "UWindsor Green Tech — Carbon Footprint Tracker",
    description: `
A mobile application developed with the UWindsor Green Tech club to promote eco-conscious habits through technology. 
Built using React Native and Firebase, it tracks daily activities like transport, food, and energy use to estimate personal carbon output. 
I worked on integrating database synchronization, user authentication, and dynamic chart components for data visualization. 
The app provides educational insights and gamified milestones that encourage sustainable decisions. 
Its modular design allows future expansion into campus-wide sustainability challenges.
    `,
    image: "/images/green-tech.png", // placeholder → green-tech.png
    tech: ["React Native", "Firebase", "TypeScript"],
    categories: ["Web App", "AI/ML"],
  },

  // ────────────────  TOOLS & AUTOMATION  ────────────────
  {
    slug: "ta-marking-tracker",
    title: "TA Marking Tracker App",
    description: `
A lightweight Python-based tool for Teaching Assistants to track grades, attendance, and student progress efficiently. 
The app uses a simple HTML interface with XML data storage for portability and easy offline use. 
I built robust input validation, record filtering, and summary generation for quick feedback during lab sessions. 
It allows dynamic mark entry and automatic grade calculations while remaining fully local — no internet or database setup required. 
Used weekly to simplify grading, it increased marking accuracy and consistency across student submissions.
    `,
    image: "/images/ta-tracker.png", // placeholder → ta-tracker.png
    tech: ["Python", "HTML", "XML"],
    categories: ["Tools"],
    github: "https://github.com/MohammadLab/TA-Marking-App",
  },
  {
    slug: "logistics-storage-tracker",
    title: "Logistics Storage Tracker",
    description: `
An inventory and pallet-tracking tool built in Java to help a logistics company monitor shipments in real time. 
I developed the backend data model and UI synchronization with a cloud database, providing live visibility of warehouse operations. 
The interface shows inbound/outbound shipment logs, pallet usage statistics, and product movement trends. 
This tool replaced manual paper tracking and helped operations managers make faster data-driven decisions. 
Designed for scalability, it can easily integrate with existing ERP or dashboard systems.
    `,
    image: "/images/logistics-tracker.png", // placeholder → logistics-tracker.png
    tech: ["Java", "Firebase", "SQL"],
    categories: ["Tools"],
    github: "https://github.com/MohammadLab/Logistics-Storage-Tracker",
  },

  // ────────────────  UNREAL ENGINE / GAME DEV  ────────────────
  {
    slug: "movement-pack-ue5",
    title: "Advanced Movement Pack — Unreal Engine 5",
    description: `
A custom movement framework for Unreal Engine 5 that adds realistic player mechanics such as sliding, vaulting, and ledge climbing. 
Built using both Blueprints and C++, it focuses on responsive controls and physics-based animation blending for fluid player motion. 
I designed the system for reusability across both FPS and third-person prototypes, featuring camera sway, mantling, and momentum handling. 
This pack became the foundation for multiple personal and collaborative UE5/UEFN projects, improving overall gameplay feel. 
It’s modular, performance-optimized, and serves as my go-to base for rapid game prototyping.
    `,
    image: "/images/movement-pack.png", // placeholder → movement-pack.png
    tech: ["Unreal Engine 5", "Blueprints", "C++"],
    categories: ["Game Dev"],
  },
  {
    slug: "uefn-projects",
    title: "UEFN Game Collection",
    description: `
A series of three projects developed using Unreal Editor for Fortnite (UEFN), each exploring unique gameplay and design challenges. 
The first, a Fall Guys-style obstacle map, emphasizes movement rhythm, timing, and reward pacing for satisfying flow. 
The second is a fast-paced FPS prototype built atop my custom UE5 Movement Pack, balancing recoil physics and traversal. 
The third is an atmospheric horror map driven by audio cues and AI-triggered sound events that mislead or guide the player. 
Together, these maps demonstrate expertise in level design, sound engineering, and Unreal’s Blueprint logic system.
    `,
    image: "/images/uefn-collection.png", // placeholder → uefn-collection.png
    tech: ["UEFN", "Blueprints", "Level Design", "Audio Systems"],
    categories: ["Game Dev"],
  },
];
/*

| Project                   | Suggested File Name       |
| ------------------------- | ------------------------- |
| Allpac Store              | `allpac-store.png`        |
| LaPurity Water Tech       | `lapurity-catalog.png`    |
| Warehouse Invoicing App   | `warehouse-invoicing.png` |
| Orora Invoice Generator   | `orora-invoice.png`       |
| ReUseAI                   | `reuseai.png`             |
| UWindsor Green Tech       | `green-tech.png`          |
| TA Marking Tracker        | `ta-tracker.png`          |
| Logistics Storage Tracker | `logistics-tracker.png`   |
| Movement Pack UE5         | `movement-pack.png`       |
| UEFN Projects             | `uefn-collection.png`     |


*/
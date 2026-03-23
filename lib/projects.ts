export const projects = [
  {
    slug: "sentinel-fieldview",
    title: "Sentinel FieldView",
    description: `
Sentinel FieldView is a multi-device systems prototype for real-time floorplan-based guidance and AR-assisted situational awareness.
It combines a WinUI 3 desktop operator tool, an authoritative C#/.NET UDP relay, and an Android viewer built with Kotlin and Jetpack Compose to synchronize markers, paths, and zones across devices.
The platform uses a custom UDP protocol with diff-based overlay updates, ACK handling, sequence tracking, and snapshot-based recovery when viewers detect gaps.
On the desktop side, the operator application supports real editing workflows including structured tool modes, snapping, selection, dragging, path and zone editing, erasing, and undo/redo.
Phase 2 extends the system into AR using ARCore and SceneView, where calibrated floorplan overlays are projected into world space as anchored markers and line geometry.
The project was designed with clear separation between authoring, relay-side state authority, viewer rendering, and AR projection, while laying groundwork for later security hardening such as encrypted UDP, replay protection, authentication, and auditability.
    `,
    image: "/images/projects/sentinel-fieldview.png",
    tech: ["C#", ".NET", "WinUI 3", "Kotlin", "ARCore"],
    categories: ["Systems"],
  },
  {
    slug: "electric-motor-simulation-automation",
    title: "Electric Motor Design, Simulation & Python Automation",
    summary: `
An end-to-end engineering project combining SolidWorks CAD, ANSYS simulation, and Python-based workflow automation to evaluate electric motor designs under varying test conditions.
    `,
    description: `
This project brought together mechanical design, simulation, and scripting into a single engineering workflow centered on electric motor development. The motor geometry was designed in SolidWorks, refined for simulation readiness, and then recreated or imported into ANSYS for validation under different operating conditions. Python was used to automate repeated test setups, parameter changes, and analysis tasks, turning what would normally be a manual simulation loop into a more efficient and repeatable process.

    The result is a multidisciplinary project focused on simulation-driven design decisions rather than isolated modeling. It demonstrates an ability to move from CAD creation to engineering validation, then extend that workflow with software automation to support iteration, consistency, and deeper analysis.
    `,
    image: "/images/projects/electric-motor-simulation-automation.png",
    tech: ["SolidWorks", "ANSYS", "Python", "CAD", "Simulation"],
    categories: ["Engineering"],
    gallery: [
      "/images/projects/electric-motor-simulation-automation/screenshot1.png",
    ],
    sections: [
      {
        heading: "Tech Stack / Tools Used",
        content: `
SolidWorks was used to design and refine the 3D motor geometry, with attention to building a model that was not only mechanically coherent but also suitable for downstream simulation work. ANSYS was used to evaluate behavior across different design conditions, supporting validation and comparison between iterations. Python was used to automate parts of the testing and analysis workflow, including parameter variation, repeated runs, and structured data handling for simulation review.
        `,
      },
      {
        heading: "Key Responsibilities / What I Did",
        content: `
The project covered the full workflow from model creation through analysis automation. Responsibilities included designing the motor in SolidWorks, refining geometry for simulation readiness, importing or recreating the design in ANSYS, evaluating motor behavior under different conditions, and building Python scripts to reduce manual repetition in the testing process. The work also involved interpreting simulation output and using those results to guide further design refinement.
        `,
      },
      {
        heading: "Engineering Workflow",
        content: `
The workflow began with CAD development in SolidWorks, where the motor geometry was built and iterated with simulation in mind. From there, the design was transferred into ANSYS for analysis under multiple conditions so that behavior could be observed and compared in a structured way. Python automation was layered on top of that process to streamline repeated testing, manage parameter changes, and improve the consistency of analysis across iterations. This created a tighter feedback loop between design, validation, and refinement.
        `,
      },
      {
        heading: "Challenges and Problem Solving",
        content: `
One of the main engineering challenges was connecting design work and simulation work in a way that remained efficient across multiple iterations. CAD models often need cleanup or refinement before they are ready for reliable simulation, so the geometry had to be adjusted with downstream analysis in mind. Another challenge was reducing the time cost of repeated testing; Python was used to automate routine analysis steps so different design conditions could be evaluated more systematically and with less manual overhead.
        `,
      },
      {
        heading: "Outcome / What This Project Demonstrates",
        content: `
This project demonstrates the ability to work across mechanical design tools, simulation environments, and software automation in one integrated system. It reflects practical engineering thinking around validation, iteration, and efficiency, and shows how programming can strengthen traditional engineering workflows. More broadly, it highlights the ability to build repeatable technical processes rather than treating CAD, analysis, and scripting as isolated tasks.
        `,
      },
    ],
    highlights: [
      "Designed and refined a 3D electric motor model in SolidWorks with simulation-readiness in mind.",
      "Validated design behavior in ANSYS under multiple conditions to support simulation-driven iteration.",
      "Built Python automation for repeated testing, parameter variation, and analysis workflow efficiency.",
      "Integrated CAD, simulation, and scripting into a repeatable engineering workflow rather than a one-off model.",
    ],
  },
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
    image: "/images/projects/allpac-store.png",
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
    image: "/images/projects/lapurity-catalog.png", // placeholder → lapurity-catalog.png
    tech: ["Next.js", "Sanity CMS", "GROQ", "Tailwind CSS", "TypeScript"],
    categories: ["Web App"],
    demo: "https://lapurity-water-tech.com",
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
    image: "/images/projects/orora-invoice.png", // placeholder → orora-invoice.png
    tech: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    categories: ["Web App"],
    github: "https://github.com/MohammadLab/PalletsStockManager",
  },
  /* {
    slug: "reuseai",
    title: "ReUseAI — AI-Powered Sustainability Assistant",
    description: `
An AI-driven web app that helps users discover creative ways to reuse or recycle items instead of discarding them. 
Powered by Google’s Gemini 1.5 Flash API and a Flask backend, the app generates suggestions with built-in safety and relevance guardrails. 
I designed the front-end interface, API prompts, and moderation layer to filter inappropriate content while keeping responses creative. 
The result is a clean, fast tool demonstrating responsible AI integration for environmental education. 
It was deployed under my portfolio domain as an example of real-world AI service use.
    `,
    image: "/images/projects/reuseai.png", // placeholder → reuseai.png
    tech: ["Flask", "Gemini API", "JavaScript", "HTML", "CSS"],
    categories: ["AI/ML", "Workshop"],
    github: "https://github.com/MohammadLab/AI-Recycle-or-Reuse-generator",

  }, */
  /* {
    slug: "uwindsor-green-tech",
    title: "UWindsor Green Tech — Carbon Footprint Tracker",
    description: `
A mobile application developed with the UWindsor Green Tech club to promote eco-conscious habits through technology. 
Built using React Native and Firebase, it tracks daily activities like transport, food, and energy use to estimate personal carbon output. 
I worked on integrating database synchronization, user authentication, and dynamic chart components for data visualization. 
The app provides educational insights and gamified milestones that encourage sustainable decisions. 
Its modular design allows future expansion into campus-wide sustainability challenges.
    `,
    image: "/images/projects/green-tech.png", // placeholder → green-tech.png
    tech: ["React Native", "Firebase", "TypeScript"],
    categories: ["Web App", "AI/ML"],
  }, */

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
    image: "/images/projects/movement-pack.png", // placeholder → movement-pack.png
    tech: ["Unreal Engine 5", "Blueprints", "C++"],
    categories: ["Game Dev"],
  },
  /* {
    slug: "uefn-fall-guys-map",
    title: "UEFN — Fall Guys-Style Obstacle Map",
    description: `
A bright, fast-paced obstacle course created in Unreal Editor for Fortnite (UEFN), inspired by Fall Guys.  
This project emphasizes timing, flow, and reward pacing, blending fun mechanics with accessible level design.  
I built and tuned the course around jump physics and camera movement to ensure satisfying traversal across checkpoints.  
Custom materials and lighting were used to create a colorful, competitive atmosphere suitable for short play sessions.  
This map demonstrates my understanding of pacing, player feedback loops, and reward timing in UEFN gameplay design.
  `,
    image: "/images/projects/uefn-fallguys.png", // placeholder → uefn-fallguys.png
    tech: ["UEFN", "Blueprints", "Level Design", "Gameplay Flow"],
    categories: ["Game Dev"],
  }, */
  /* {
    slug: "uefn-fps-prototype",
    title: "UEFN — The Bridges",
    description: `
A high-speed FPS prototype developed in UEFN to explore aim feel, recoil balance, and movement mechanics.  
Built atop my custom Unreal Engine 5 Movement Pack, this project combines sprinting, sliding, and wall-running physics.  
I focused on tuning weapon feedback, camera recoil, and time-to-kill to achieve responsive, skill-based combat.  
The environment features close-quarters encounters balanced by open sightlines for tactical variety.  
This project showcases my ability to build combat systems and responsive player controls within Unreal’s gameplay framework.
  `,
    image: "/images/projects/uefn-fps.png", // placeholder → uefn-fps.png
    tech: ["UEFN", "Blueprints", "Unreal Engine 5", "Cinematics"],
    categories: ["Game Dev"],
  }, */
  {
    slug: "uefn-horror-map",
    title: "UEFN — Audio-Driven Horror Map",
    description: `
An atmospheric horror experience built in UEFN, designed around spatial audio and psychological tension.  
Instead of relying on jump scares, this map uses dynamic sound cues and AI-triggered events to mislead or guide the player.  
I carefully balanced lighting, fog density, and AI patrol paths to maintain suspense and immersion.  
Audio direction was handled with layered reverb and distance-based triggers to convey presence and threat.  
This project demonstrates my ability to merge audio design, level scripting, and emotional pacing in game environments.
  `,
    image: "/images/projects/uefn-horror.png", // placeholder → uefn-horror.png
    tech: ["UEFN", "Blueprints", "Audio Systems", "Lighting Design"],
    categories: ["Game Dev"],
  },
  /* {
    slug: "ecocheck-workshop",
    title: "EcoCheck — AI Recycling Scanner Workshop",
    description: `
                Led a hands-on workshop at the University of Windsor for science and computer science students, introducing AI image classification in the browser using TensorFlow.js and MobileNet.  
                Attendees built **EcoCheck**, a lightweight, browser-based recycling scanner that classifies uploaded images and determines if an item is recyclable — entirely offline with no backend or API key.  
                The workshop demonstrated real-time model inference, confidence scoring, and keyword-based recycling logic, helping beginners understand practical AI integration in web development.  
                I created all workshop materials — slides, starter code, live demo, and branding under UWin Green Tech.
                  `,
    image: "/images/projects/ecocheck-workshop.png",
    tech: ["HTML", "CSS", "JavaScript", "TensorFlow.js", "MobileNet v2"],
    categories: ["Workshop"],
    date: "November 28, 2025",
    location: "Dillon Hall 264, University of Windsor",
    event: "Green Tech Coding Workshop",
    filesZip: "/files/ecocheck-project-files.zip",
  }, */

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

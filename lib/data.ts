import type {
  Skill,
  Project,
  EducationEntry,
  ExperienceEntry,
  Certification,
  ResearchPaper,
  BlogPost,
} from "./types";

export const site = {
  name: "Maryam Zaheer",
  initials: "MZ",
  role: "Full-Stack Developer",
  subRole: "AI/ML & Computer Vision",
  tagline:
    "I design and ship full-stack products — from real-time collaboration platforms to computer-vision systems — with the same care for architecture, performance, and detail as the teams I want to join.",
  shortBio:
    "Computer Science undergraduate at UET Lahore who builds complete systems, not just features: auth and data models, background workflows, OCR and CV pipelines, and the UI on top of all of it.",
  location: "Lahore, Pakistan",
  university: "University of Engineering and Technology (UET), Lahore",
  email: "maryamzaheer2006@gmail.com",
  github: "https://github.com/Maryam024",
  linkedin: "https://www.linkedin.com/in/maryam-zaheer-b532742a8",
  resumeUrl: "/resume/Maryam-Zaheer-Resume.pdf",
  domain: "https://maryamzaheer.dev",
};

export const languages = ["English", "Urdu"];

export const stats = [
  { label: "Projects shipped", value: 9 },
  { label: "Years building", value: 3 },
  { label: "Research papers", value: 2 },
  { label: "CGPA", value: "3.3/4.0" },
];

export const skills: Skill[] = [
  // Full Stack — languages, frontend, backend
  { name: "JavaScript", category: "Full Stack", level: 5 },
  { name: "TypeScript", category: "Full Stack", level: 4 },
  { name: "Python", category: "Full Stack", level: 5 },
  { name: "C++", category: "Full Stack", level: 4 },
  { name: "Java", category: "Full Stack", level: 4 },
  { name: "SQL", category: "Full Stack", level: 4 },
  { name: "React", category: "Full Stack", level: 5 },
  { name: "Next.js", category: "Full Stack", level: 4 },
  { name: "Tailwind CSS", category: "Full Stack", level: 5 },
  { name: "HTML5 / CSS3", category: "Full Stack", level: 5 },
  { name: "Streamlit", category: "Full Stack", level: 4 },
  { name: "Node.js", category: "Full Stack", level: 4 },
  { name: "Express.js", category: "Full Stack", level: 4 },
  { name: "FastAPI", category: "Full Stack", level: 4 },
  { name: "Flask", category: "Full Stack", level: 4 },
  { name: "Django", category: "Full Stack", level: 3 },
  { name: "REST API Design", category: "Full Stack", level: 5 },
  { name: "JWT Auth", category: "Full Stack", level: 4 },

  // AI & Machine Learning — ML, NLP, and computer vision
  { name: "TensorFlow", category: "AI & Machine Learning", level: 4 },
  { name: "PyTorch", category: "AI & Machine Learning", level: 3 },
  { name: "Scikit-learn", category: "AI & Machine Learning", level: 4 },
  { name: "LSTM / Sequence Models", category: "AI & Machine Learning", level: 4 },
  { name: "NLP", category: "AI & Machine Learning", level: 4 },
  { name: "Retrieval-Augmented Generation", category: "AI & Machine Learning", level: 4 },
  { name: "Vision-Language Models (CLIP / BLIP-2)", category: "AI & Machine Learning", level: 4 },
  { name: "FAISS", category: "AI & Machine Learning", level: 4 },
  { name: "YOLOv8", category: "AI & Machine Learning", level: 4 },
  { name: "OpenCV", category: "AI & Machine Learning", level: 4 },
  { name: "EasyOCR", category: "AI & Machine Learning", level: 4 },
  { name: "Real-time Object Tracking", category: "AI & Machine Learning", level: 3 },

  // Mobile
  { name: "Kotlin", category: "Mobile", level: 4 },
  { name: "Android SDK", category: "Mobile", level: 4 },
  { name: "Jetpack / XML UI", category: "Mobile", level: 4 },

  // Databases
  { name: "MongoDB", category: "Databases", level: 4 },
  { name: "PostgreSQL", category: "Databases", level: 4 },
  { name: "MySQL", category: "Databases", level: 4 },
  { name: "Neo4j / Graph DBs", category: "Databases", level: 4 },
  { name: "Supabase", category: "Databases", level: 4 },

  // Tools — cloud, devops, automation, QA
  { name: "Docker", category: "Tools", level: 3 },
  { name: "Git & GitHub", category: "Tools", level: 5 },
  { name: "CI/CD", category: "Tools", level: 3 },
  { name: "Firebase", category: "Tools", level: 4 },
  { name: "Vercel", category: "Tools", level: 4 },
  { name: "n8n Automation", category: "Tools", level: 4 },
  { name: "Postman", category: "Tools", level: 5 },
  { name: "Figma", category: "Tools", level: 4 },
  { name: "Manual & Regression Testing", category: "Tools", level: 4 },
  { name: "Test Case Design (SDLC/STLC)", category: "Tools", level: 4 },
];

export const projects: Project[] = [
  {
    slug: "robustrag",
    title: "RobustRAG",
    tagline: "Robustness of RAG systems under corpus poisoning and query noise",
    description:
      "A reproducible evaluation pipeline — BGE embeddings plus FAISS retrieval — that stress-tests retrieval-augmented generation against three designed corpus-poisoning strategies and query embedding noise across 10,570 SQuAD 1.1 questions.",
    year: "2026",
    role: "ML Research Engineer",
    status: "Research",
    cover: "/images/projects/robustrag/cover.png",
    images: [{ src: "/images/projects/robustrag/cover.png", alt: "RobustRAG evaluation pipeline diagram" }],
    tech: ["Python", "PyTorch", "BGE", "FAISS"],
    githubUrl: "https://github.com/Maryam024/robustrag",
    paperUrl: "https://zenodo.org/records/22153313",
    featured: true,
    metrics: [
      { label: "Questions evaluated", value: "10,570" },
      { label: "EM degradation (query noise)", value: "-48% relative" },
      { label: "Poisoning strategies", value: "3 designed" },
    ],
    overview:
      "RAG systems are usually evaluated on how well they answer clean questions against a clean corpus — not on what happens when either one degrades. RobustRAG builds a reproducible evaluation harness around BGE embeddings and FAISS retrieval, then deliberately breaks both sides: it poisons the corpus with near-duplicate, contradictory, and irrelevant documents, and separately perturbs query embeddings with noise, measuring retrieval quality (Recall@5, MRR) and generation quality (Exact Match, BLEU, ROUGE-L) across all 10,570 questions in SQuAD 1.1 under each condition.",
    features: [
      "Reproducible evaluation pipeline combining BGE embeddings with FAISS retrieval over the full SQuAD 1.1 corpus",
      "Three designed corpus-poisoning strategies: near-duplicate injection, contradictory documents, and irrelevant documents",
      "Query embedding noise injection, isolated as its own failure mode rather than bundled with corpus poisoning",
      "Retrieval metrics (Recall@5, MRR) and generation metrics (Exact Match, BLEU, ROUGE-L) tracked side by side under every condition",
      "A lightweight near-duplicate suppression defense, evaluated rather than assumed to help",
    ],
    architecture: [
      "BGE embedding model encoding both the SQuAD corpus and incoming queries into a shared vector space",
      "FAISS index over the full corpus for dense retrieval, rebuilt per poisoning condition to keep evaluation runs isolated",
      "A poisoning-strategy module that injects near-duplicate, contradictory, or irrelevant documents into the corpus at a controlled rate",
      "A separate query-noise module perturbing query embeddings directly, decoupled from corpus poisoning so each failure mode can be attributed independently",
      "An evaluation harness scoring every condition on Recall@5, MRR, Exact Match, BLEU, and ROUGE-L against the same held-out question set",
    ],
    challenges: [
      {
        problem: "Attributing a drop in answer quality to retrieval failure versus generation failure",
        solution:
          "Tracked retrieval metrics (Recall@5, MRR) and generation metrics (EM, BLEU, ROUGE-L) as separate axes per condition, instead of a single end-to-end score, so degradation could be traced to the stage that actually caused it.",
      },
      {
        problem: "A near-duplicate suppression defense that was expected to help instead hurt Recall@5 by 4.6%",
        solution:
          "Investigated rather than discarded the result — traced it to the defense suppressing legitimately similar (not just poisoned) passages, and reported it as a real structural limitation of similarity-based defenses instead of quietly dropping the experiment.",
      },
      {
        problem: "Isolating query embedding noise as a failure mode distinct from corpus poisoning",
        solution:
          "Ran query-noise trials as a fully separate experimental arm with the corpus held clean, which is what surfaced it as the dominant failure mode — a 48% relative Exact Match degradation — rather than letting it get averaged away in a combined condition.",
      },
    ],
    lessons: [
      "The failure mode you designed the experiment around (corpus poisoning) isn't always the dominant one — query noise turned out to matter more, and only a decoupled evaluation design could show that.",
      "A defense that improves the metric it targets can quietly regress another one; evaluating on a single axis would have called the near-duplicate suppression a straightforward win.",
    ],
  },
  {
    slug: "adagraphrag",
    title: "AdaGraphRAG",
    tagline: "Adaptive hierarchical Graph-RAG with incremental construction and self-verified retrieval",
    description:
      "An extension of Microsoft's GraphRAG adding an adaptive retrieval router, incremental graph construction, and a self-verification layer that checks generated claims against retrieved evidence.",
    year: "2026",
    role: "ML Research Engineer",
    status: "Research",
    cover: "/images/projects/adagraphrag/cover.png",
    images: [{ src: "/images/projects/adagraphrag/cover.png", alt: "AdaGraphRAG architecture diagram" }],
    tech: ["Python", "Neo4j", "Qdrant", "Streamlit"],
    githubUrl: "https://github.com/Maryam024/graphrag",
    featured: true,
    metrics: [
      { label: "Self-verification precision", value: "100% (6/6 injected claims)" },
      { label: "Retrieval strategies", value: "none / local / global / hybrid" },
      { label: "Extends", value: "Microsoft GraphRAG (Edge et al., 2024)" },
    ],
    overview:
      "GraphRAG answers every query with the same expensive global traversal, re-indexes the full corpus whenever a document is added, and never checks whether its generated answer is actually grounded in the evidence it retrieved. AdaGraphRAG extends Microsoft's GraphRAG (Edge et al., 2024) with three fixes for exactly those gaps: an adaptive router that classifies query complexity and picks the cheapest sufficient retrieval strategy, incremental graph construction that entity-resolves new documents into the existing graph instead of rebuilding it, and a self-verification layer that decomposes generated answers into individual claims and checks each one against retrieved evidence — triggering a targeted second retrieval pass on anything unsupported.",
    features: [
      "Adaptive retrieval router classifying each query and selecting none / local / global / hybrid retrieval instead of always paying for global traversal",
      "Incremental graph construction — new documents are entity-resolved and merged into the existing graph, re-summarizing only the communities that actually changed",
      "Self-verification layer decomposing answers into claims and checking each against retrieved evidence, with a second targeted retrieval pass on unsupported claims",
      "100% precision distinguishing true from false claims on a test set of deliberately injected false statements",
      "Adaptive routing evaluated against an always-global baseline on a toy corpus, with methodology, metrics, and limitations documented directly in the repository",
      "Built under a clean-architecture layout — domain, infrastructure adapters, and orchestration kept separate — with a typer CLI and FastAPI service anticipated as the natural next layer",
    ],
    architecture: [
      "Domain layer of entities and interfaces with no external dependencies, so retrieval, storage, and LLM adapters can be swapped independently",
      "Adaptive retrieval router (Contribution #1) classifying incoming queries before any retrieval work happens",
      "Incremental graph construction module (Contribution #2) entity-resolving new documents into the existing Neo4j graph and re-summarizing only affected communities",
      "Self-verification layer (Contribution #3) decomposing generated answers into claims and checking each against retrieved evidence, with a second retrieval pass for unsupported claims",
      "Qdrant vector store and Neo4j graph store as pluggable infrastructure adapters behind the domain interfaces",
      "Streamlit UI for indexing and querying, with a typer CLI and FastAPI service scoped as natural next additions given the existing layering",
    ],
    architectureNote:
      "Evaluation is a toy-corpus sanity check (2-3 documents, hand-written queries and injected claims) intended to verify the three design decisions behave as intended, not a benchmark-scale claim about accuracy or cost on real-world corpora.",
    challenges: [
      {
        problem: "An evidence pool was leaking across claims during self-verification, causing O(n²) prompt growth and 30-50s latency spikes on later claims",
        solution:
          "Traced the leak to shared state in the verifier, fixed it, and documented it plainly in the evaluation write-up rather than quietly patching it out of the results.",
      },
      {
        problem: "Comparing adaptive routing against an always-global baseline on raw chat-completion call count made adaptive routing look more expensive (8 calls vs. 4)",
        solution:
          "Flagged the metric as incomplete rather than reporting it as a win or a loss — it excludes embedding calls, and the always-global baseline pays for a full community-embedding batch on every query regardless of complexity, which the latency numbers show even though the call-count metric misses it.",
      },
      {
        problem: "The router occasionally under-classified a directly-answerable query as needing no retrieval, which then sent the self-verification layer chasing evidence for ungrounded claims",
        solution:
          "Identified this as a router-calibration problem rather than a self-verification bug, and scoped it as future work needing a labeled query set instead of patching around the symptom.",
      },
    ],
    lessons: [
      "Writing the evaluation script surfaced three real bugs (an evidence-pool leak, a non-recursive cache-clear glob, and a Neo4j cartesian-product warning) that the architecture alone hadn't revealed — evaluation is also a debugging tool.",
      "An incomplete cost metric is worse than no metric if it's reported without its gap stated — the call-count comparison needed the embedding-cost caveat to mean anything.",
    ],
  },
  {
    slug: "melanoma-ssl-nuclei",
    title: "Semi-Supervised Melanoma Nuclei Segmentation",
    tagline: "Can a model learn to segment cell nuclei in melanoma tissue from only a handful of labeled images?",
    description:
      "Melanoma is diagnosed by pathologists manually examining histopathology slides — a slow process that deep learning could help automate, except expert-labeled medical images are expensive and scarce. This project tests whether semi-supervised learning can close the gap to full supervision under realistic label scarcity, using the PUMA histopathology dataset.",
    year: "2026",
    role: "ML Research Engineer",
    status: "Research",
    cover: "/images/projects/melanoma-ssl/cover.png",
    images: [{ src: "/images/projects/melanoma-ssl/cover.png", alt: "Melanoma nuclei segmentation SSL method comparison diagram" }],
    tech: ["Python", "PyTorch", "U-Net"],
    githubUrl: "https://github.com/Maryam024/melanoma-ssl",
    featured: true,
    metrics: [
      { label: "Supervised baseline (U-Net)", value: "0.91 Dice" },
      { label: "GAN-based SSL at 15 labels", value: "0.869 Dice (near-parity)" },
      { label: "Dataset", value: "PUMA · 205 annotated images" },
    ],
    overview:
      "Fully supervised nuclei segmentation works well when there's enough labeled tissue to train on — the problem is that in melanoma histopathology, there almost never is. This project investigates whether a model can still learn to accurately segment cell nuclei using only a handful of labeled images, by also learning from a larger pool of unlabeled ones. Working with the PUMA histopathology dataset, a U-Net segmentation baseline reached 0.91 Dice under full supervision, closely matching the benchmark reported in the target research lab's own published work (Akbarpour et al., J. Imaging 11(8):274, 2025). Four distinct semi-supervised learning techniques were then implemented and rigorously compared against that matched supervised baseline under simulated label scarcity.",
    features: [
      "U-Net supervised baseline on the PUMA dataset (205 annotated images), reaching 0.91 Dice — within 1.2 points of the benchmark paper's 0.916",
      "Four semi-supervised techniques compared under matched conditions: Mean Teacher consistency regularization, a semi-supervised GAN, autoencoder pretraining, and confidence-based pseudo-labeling",
      "Simulated label scarcity at 15 and 40 labeled images, with every method benchmarked against the same supervised baseline at each label count",
      "GAN-based SSL reaching near-parity with full supervision using only 15 labeled images (0.869 vs. 0.870 Dice)",
      "A follow-up domain-diversity experiment using real out-of-domain histopathology data sourced from the public TCGA-SKCM archive via the NIH GDC API",
    ],
    architecture: [
      "U-Net segmentation backbone shared across the supervised baseline and all four semi-supervised variants, so comparisons isolate the SSL method rather than the architecture",
      "Mean Teacher branch: a slower-moving teacher network whose predictions on augmented unlabeled patches supervise the student via a consistency loss",
      "Semi-supervised GAN branch: a discriminator trained to distinguish real segmentation masks from generated ones, providing an additional training signal from unlabeled images",
      "Autoencoder pretraining branch: an encoder pretrained to reconstruct unlabeled tissue patches, then fine-tuned for segmentation",
      "Pseudo-labeling branch: confidence-gated pseudo-masks generated on unlabeled patches and folded back into training",
      "A domain-diversity ablation pulling real out-of-domain melanoma histopathology from TCGA-SKCM via the NIH GDC API, to isolate the effect of unlabeled-data diversity from unlabeled-data quantity",
    ],
    challenges: [
      {
        problem: "A promising SSL method stalled well below the supervised baseline in one setting, with no obvious bug in the implementation",
        solution:
          "Traced the stall to insufficient diversity in the unlabeled pool rather than a modeling flaw, and tested that diagnosis directly by sourcing real out-of-domain histopathology data from TCGA-SKCM via the NIH GDC API — which partially closed the gap under controlled ablation, confirming the diagnosis without overclaiming a fix.",
      },
      {
        problem: "Comparing four SSL methods fairly, rather than letting each look strongest under its own best-case setup",
        solution:
          "Held the backbone, label counts (15 and 40), and evaluation protocol identical across all four methods and the supervised baseline, so the comparison reflects the method itself rather than incidental tuning differences.",
      },
      {
        problem: "Validating the supervised baseline against a benchmark from a different lab's dataset and pipeline",
        solution:
          "Reproduced a U-Net baseline on PUMA and compared directly against Akbarpour et al.'s published Dice score, landing within 1.2 points — close enough to trust the baseline as a fair reference point for the SSL comparison that followed.",
      },
    ],
    lessons: [
      "A near-parity result at 15 labeled images (0.869 vs. 0.870 Dice) is the headline, but the real finding is that GAN-based SSL was the only one of four methods to get there — the other three didn't close the gap at the same label count.",
      "Diagnosing a stalled result as a data problem rather than a modeling problem only meant something once it was tested against real out-of-domain data, not just asserted.",
    ],
  },
  {
    slug: "devflow",
    title: "DevFlow",
    tagline: "Collaborative project management platform with real-time Kanban boards",
    description:
      "A modern, multi-workspace project management platform — workspaces, projects, Kanban boards, task detail views, team invites, and real-time notifications, all behind JWT-secured auth.",
    year: "2026",
    role: "Solo Full-Stack Developer",
    status: "Flagship",
    cover: "/images/projects/devflow/main-dashboard.png",
    images: [
      { src: "/images/projects/devflow/main-dashboard.png", alt: "DevFlow main dashboard" },
      { src: "/images/projects/devflow/workspace-dashboard.png", alt: "DevFlow workspace dashboard" },
      { src: "/images/projects/devflow/project-dashboard.png", alt: "DevFlow project dashboard" },
      { src: "/images/projects/devflow/kanban-board.png", alt: "DevFlow Kanban board" },
      { src: "/images/projects/devflow/task-details.png", alt: "DevFlow task detail view" },
      { src: "/images/projects/devflow/invite-member.png", alt: "DevFlow invite a team member" },
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Cloudinary",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Maryam024/DevFlow",
    featured: true,
    metrics: [
      { label: "Core modules", value: "6" },
      { label: "Workspaces → Projects → Tasks", value: "3 levels" },
      { label: "Auth model", value: "JWT" },
    ],
    overview:
      "DevFlow is my flagship project: a self-contained project-management platform in the spirit of Linear or Trello, built to prove I can own a full product surface — not just a CRUD demo. It models the way real engineering teams actually work: an account belongs to one or more workspaces, each workspace holds projects, and each project runs on a Kanban board with tasks that carry assignees, status, and detail. On top of that sits authentication, team invitations, file uploads, and real-time notifications, so the whole thing feels like a product rather than a prototype.",
    features: [
      "JWT-based authentication with protected routes and persistent sessions across the app",
      "Multi-tenant workspace model — a user can belong to and switch between several workspaces",
      "Project dashboards nested inside each workspace, each with its own team and settings",
      "Drag-and-drop Kanban boards for task status (To Do / In Progress / Done) per project",
      "Rich task detail view — description, assignee, due date, and activity",
      "Team invitations to bring collaborators into a workspace or project",
      "Real-time notifications so board and task changes reach teammates immediately",
      "File uploads attached to tasks and projects",
    ],
    architecture: [
      "React front end with route-level code-splitting for the dashboard, workspace, project, and board views",
      "Node.js/Express REST API handling auth, workspaces, projects, tasks, and invitations as distinct resources",
      "MongoDB as the primary store, modeling workspaces → projects → tasks as a nested, referenced hierarchy",
      "JWT access tokens for stateless authentication, with middleware guarding every protected route",
      "Socket.io channel per workspace/project so board updates and notifications push to connected clients in real time",
      "Cloudinary for handling and serving uploaded task/project files without burdening the API server",
    ],
    architectureNote:
      "Architecture reconstructed from the shipped product and repository description, since this write-up focuses on the engineering decisions rather than reproducing source code.",
    challenges: [
      {
        problem: "Modeling a workspace → project → task hierarchy that stays fast to query as data grows",
        solution:
          "Used referenced (not deeply embedded) MongoDB documents with indexes on workspace and project IDs, so board and dashboard queries stay scoped and cheap even as tasks accumulate.",
      },
      {
        problem: "Keeping every connected client's board in sync the moment a task moves or a teammate is invited",
        solution:
          "Scoped Socket.io rooms per workspace/project so updates broadcast only to the people who should see them, instead of a single noisy global channel.",
      },
      {
        problem: "Making JWT auth feel invisible to the user while still gating every workspace and project route",
        solution:
          "Centralized token verification in Express middleware and mirrored it with route guards on the client, so an expired or missing token redirects to login before any protected UI renders.",
      },
    ],
    lessons: [
      "Designing the data model (workspace → project → task) before writing a single UI screen paid off — it's the decision that made drag-and-drop boards and permissions straightforward later.",
      "Real-time features are a UX problem before they're a WebSocket problem: scoping rooms correctly matters more than the transport.",
      "Shipping the full loop — signup through invite through notification — end to end is more convincing than a polished board with no real backend behind it.",
    ],
  },
  {
    slug: "workpulse",
    title: "WorkPulse",
    tagline: "AI-powered productivity monitoring platform",
    description:
      "A full-stack productivity platform that automates document intake, tracks work activity, and delivers AI-driven insights — Flask backend, Supabase for data and auth, n8n for automation, EasyOCR for document parsing.",
    year: "2025",
    role: "Full-Stack Developer",
    status: "Shipped",
    cover: "/images/projects/workpulse/manager-dashboard.png",
    images: [
      { src: "/images/projects/workpulse/signup.png", alt: "WorkPulse sign up" },
      { src: "/images/projects/workpulse/manager-dashboard.png", alt: "WorkPulse manager dashboard" },
      { src: "/images/projects/workpulse/employe-dashboard1.png", alt: "WorkPulse employee dashboard" },
      { src: "/images/projects/workpulse/employe-dashboard2.png", alt: "WorkPulse employee dashboard, activity view" },
      { src: "/images/projects/workpulse/ai-assistant.png", alt: "WorkPulse AI assistant" },
    ],
    tech: ["Flask", "Python", "Supabase", "n8n", "EasyOCR", "Resend API", "JWT", "React"],
    githubUrl: "https://github.com/Maryam024/WorkPulse",
    featured: true,
    metrics: [
      { label: "Roles", value: "Manager + Employee" },
      { label: "Automations", value: "n8n workflows" },
      { label: "OCR pipeline", value: "EasyOCR" },
    ],
    overview:
      "WorkPulse automates the parts of workplace admin that usually happen manually: logging documents, tracking activity, and turning that raw data into a report someone actually reads. Automation is core to the product, not a side script — every background job (document intake, scheduled reports, email delivery) runs through n8n workflows instead of hand-rolled cron jobs, orchestrated alongside a Flask API and Supabase Postgres store. EasyOCR reads incoming documents, and an AI assistant surfaces insights instead of leaving managers to read raw logs.",
    features: [
      "End-to-end automation built on n8n — document intake, scheduled reports, and email delivery all run as n8n workflows rather than custom background scripts",
      "Manager and employee dashboards with role-aware views and permissions",
      "Automated document intake with OCR-based text extraction from uploads and receipts",
      "AI assistant surfacing productivity insights instead of raw activity logs",
      "Scheduled reporting and email delivery via automated n8n workflows",
      "JWT-secured API with Supabase-backed row-level security",
    ],
    architecture: [
      "Flask REST API backend with JWT-based authentication and role-aware endpoints",
      "Supabase (PostgreSQL) as the primary data store, handling relational data and auth policies",
      "n8n workflow automation orchestrating background jobs — document ingestion, notifications, scheduled reports",
      "EasyOCR pipeline extracting structured text from uploaded documents",
      "Resend API integration for transactional email notifications",
    ],
    challenges: [
      {
        problem: "Coordinating asynchronous n8n workflows with the Flask API without race conditions on shared Supabase tables",
        solution:
          "Used Supabase row-level policies plus idempotent workflow steps so retried or overlapping n8n runs couldn't corrupt shared state.",
      },
      {
        problem: "Tuning EasyOCR accuracy across varied document formats and image quality",
        solution:
          "Added a preprocessing step (contrast/deskew normalization) before OCR and validated output against a set of real sample documents before trusting it in the pipeline.",
      },
      {
        problem: "Keeping the JWT auth flow simple on the frontend while still enforcing Supabase RLS",
        solution:
          "Passed the Supabase-issued JWT straight through from the client, letting RLS policies do enforcement server-side instead of duplicating auth logic in Flask.",
      },
    ],
    lessons: [
      "Automation tools like n8n are excellent for orchestration but still need the same idempotency discipline as any backend job queue.",
      "OCR is only as good as the preprocessing in front of it — the model choice mattered less than image quality.",
    ],
  },
  {
    slug: "visiontrack",
    title: "VisionTrack",
    tagline: "Real-time object detection and tracking desktop app",
    description:
      "A desktop application for real-time object detection and multi-class tracking using YOLOv8, with a CustomTkinter GUI for images, video files, and live webcam feeds.",
    year: "2026",
    role: "ML / Computer Vision Developer",
    status: "Shipped",
    cover: "/images/projects/visiontrack/detection.png",
    images: [
      { src: "/images/projects/visiontrack/gui.png", alt: "VisionTrack desktop GUI" },
      { src: "/images/projects/visiontrack/detection.png", alt: "VisionTrack object detection output" },
      { src: "/images/projects/visiontrack/tracking.png", alt: "VisionTrack multi-object tracking" },
      { src: "/images/projects/visiontrack/media.png", alt: "VisionTrack media input handling" },
      { src: "/images/projects/visiontrack/methodology-diagram.png", alt: "VisionTrack methodology diagram" },
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "CustomTkinter", "Pillow"],
    githubUrl: "https://github.com/Maryam024/VisionTrack",
    featured: true,
    metrics: [
      { label: "Model", value: "YOLOv8" },
      { label: "Inputs", value: "Image / Video / Webcam" },
    ],
    overview:
      "VisionTrack applies YOLOv8 to real-time multi-class object detection and tracking, wrapped in a desktop GUI so the pipeline is usable by someone who isn't running scripts from a terminal. It handles static images, video files, and live webcam streams through one consistent interface.",
    features: [
      "Real-time multi-class object detection with confidence scores and bounding boxes",
      "Object tracking across frames, preserving identity through occlusion and fast movement",
      "Support for image, video file, and live webcam input from a single interface",
      "Configurable detection settings exposed directly in the GUI",
    ],
    architecture: [
      "YOLOv8-based detection pipeline supporting multiple simultaneous object classes",
      "OpenCV-driven frame processing for images, video files, and live webcam feeds",
      "Frame-to-frame tracking logic maintaining object identity with real-time bounding boxes",
      "CustomTkinter GUI layer for configurable detection settings and multiple input sources",
      "Pillow-based image handling for efficient rendering inside the desktop interface",
    ],
    challenges: [
      {
        problem: "Maintaining real-time performance while running deep learning inference on live video",
        solution:
          "Kept the inference loop lean by batching frame preprocessing with OpenCV and avoiding unnecessary copies between the capture and inference stages.",
      },
      {
        problem: "Tracking objects consistently across frames without losing identity during occlusion",
        solution:
          "Layered a tracking pass on top of per-frame YOLOv8 detections instead of treating each frame independently, so identities persist through brief occlusion.",
      },
      {
        problem: "Keeping the GUI responsive while detection runs continuously in the background",
        solution:
          "Ran capture/inference off the GUI's main loop so the interface stayed interactive even during continuous detection.",
      },
    ],
    lessons: [
      "Real-time CV work is as much about the data pipeline (frame handling, buffering) as it is about the model itself.",
      "A usable GUI around a model is what turns a notebook experiment into something a non-technical user could actually run.",
    ],
  },
  {
    slug: "graph-db-management-system",
    title: "Graph Database Engine",
    tagline: "Graph-native data engine with a Cypher-like query language",
    description:
      "A from-scratch graph database engine with a Streamlit front end and FastAPI backend, supporting ACID-compliant transactions, a Cypher-like query syntax, and interactive graph visualization.",
    year: "2024",
    role: "Backend / Systems Developer",
    status: "Shipped",
    cover: "/images/projects/graphdb/dashboard.png",
    images: [
      { src: "/images/projects/graphdb/dashboard.png", alt: "Graph database engine dashboard" },
      { src: "/images/projects/graphdb/example-queries.png", alt: "Example graph queries running against the engine" },
    ],
    tech: ["FastAPI", "Python", "Streamlit", "Graph Theory", "Cypher-like DSL"],
    githubUrl: "https://github.com/Maryam024/GraphDB",
    featured: true,
    metrics: [{ label: "Query language", value: "Custom Cypher-like DSL" }],
    overview:
      "Most student database projects wrap a relational engine. This one builds the graph engine itself — nodes, edges, transactions, and a query language — from first principles, then exposes it through a FastAPI backend and an interactive Streamlit visualizer.",
    features: [
      "Custom Cypher-like query language for expressive node/edge traversal",
      "ACID-compliant transaction handling across writes",
      "Interactive graph visualization and live querying through Streamlit",
      "FastAPI layer exposing graph CRUD and query endpoints",
    ],
    architecture: [
      "FastAPI backend exposing graph CRUD and query endpoints",
      "Custom Cypher-like query parser mapping expressions to graph traversals",
      "ACID-compliant transaction layer guaranteeing consistency across writes",
      "Streamlit interface for interactive graph visualization and live querying",
    ],
    challenges: [
      {
        problem: "Designing a transaction layer that preserves ACID guarantees without a full database engine underneath",
        solution:
          "Implemented write-ahead logging semantics around graph mutations so a failed transaction couldn't leave the graph in a partially-updated state.",
      },
      {
        problem: "Parsing a Cypher-like query language and mapping it to efficient graph traversals",
        solution:
          "Built a small recursive-descent parser producing an AST, then compiled that AST to traversal operations rather than interpreting query strings directly.",
      },
      {
        problem: "Rendering large graphs responsively inside Streamlit",
        solution:
          "Limited default render depth and let users expand subgraphs on demand instead of rendering the entire graph on every query.",
      },
    ],
    lessons: [
      "Building a database engine — even a small one — teaches transaction and consistency concepts no course project centered on an existing DB can.",
      "Query language design is a UX problem: the parser needs to forgive minor syntax variance to feel usable.",
    ],
  },
  {
    slug: "gamehub",
    title: "GameHub",
    tagline: "Android multi-game platform — 7 games, one account",
    description:
      "A feature-rich Android platform bringing together seven casual games in a single app, with authentication, cloud-synced profiles, and global leaderboards.",
    year: "2026",
    role: "Android Developer",
    status: "Shipped",
    cover: "/images/projects/gamehub/dashboard.jpeg",
    images: [
      { src: "/images/projects/gamehub/dashboard.jpeg", alt: "GameHub dashboard" },
      { src: "/images/projects/gamehub/leaderboard.jpeg", alt: "GameHub global leaderboard" },
      { src: "/images/projects/gamehub/memorymatch.jpeg", alt: "GameHub Memory Match" },
      { src: "/images/projects/gamehub/neondashrunner.jpeg", alt: "GameHub Neon Dash Runner" },
      { src: "/images/projects/gamehub/pianotile.jpeg", alt: "GameHub Piano Tiles" },
      { src: "/images/projects/gamehub/photopuzzle.jpeg", alt: "GameHub Photo Puzzle" },
      { src: "/images/projects/gamehub/quizgame.jpeg", alt: "GameHub Quiz Challenge" },
      { src: "/images/projects/gamehub/wordquest.jpeg", alt: "GameHub Word Quest" },
      { src: "/images/projects/gamehub/mystatistic.jpeg", alt: "GameHub personal statistics" },
      { src: "/images/projects/gamehub/3x3grid.jpeg", alt: "GameHub 3x3 memory grid" },
      { src: "/images/projects/gamehub/4x4grid.jpeg", alt: "GameHub 4x4 memory grid" },
    ],
    tech: ["Kotlin", "Android SDK", "XML Layouts", "Firebase Auth", "Firestore"],
    githubUrl: "https://github.com/Maryam024/GameHub",
    apkUrl: "https://github.com/Maryam024/GameHub/tree/main/apk",
    metrics: [{ label: "Games in one app", value: "7" }],
    overview:
      "Seven independently-designed casual games — Memory Match, Neon Dash, Piano Tiles, Photo Puzzle, Quiz Challenge, Rapid Tap, and Word Quest — sharing one account system, one leaderboard, and one modular codebase instead of seven disconnected apps.",
    features: [
      "Seven playable games behind a single sign-in",
      "Cloud-synced player profiles via Firebase Auth and Firestore",
      "Global leaderboards and per-game statistics",
      "Modular Activity/Adapter/Model structure shared across all games",
    ],
    architecture: [
      "Modular architecture with reusable Activities, Adapters, Models, and Utility classes shared across all seven games",
      "Firebase Authentication and Firestore for secure sign-in and cloud-synchronized profiles",
      "Global leaderboards and score tracking backed by Firestore",
      "Custom Views and touch handling per game (e.g. Piano Tiles timing, Neon Dash movement)",
      "SharedPreferences for persistent local storage and offline score caching",
    ],
    challenges: [
      {
        problem: "Sharing one profile, leaderboard, and stats system across seven independently-built games",
        solution:
          "Centralized profile and score logic into shared utility classes so every game wrote to the same Firestore schema instead of maintaining its own.",
      },
      {
        problem: "Implementing custom touch handling tailored to each game's mechanics within one app",
        solution:
          "Built game-specific custom Views on top of a shared base Activity, keeping only the interaction logic per-game while reusing navigation and profile chrome.",
      },
      {
        problem: "Keeping local SharedPreferences state reliably in sync with Firestore across sessions",
        solution:
          "Treated SharedPreferences as an offline cache and Firestore as source of truth, reconciling on app resume rather than writing to both on every event.",
      },
    ],
    lessons: [
      "A shared core (auth, profile, leaderboard) is what makes a multi-game app maintainable — without it, seven games become seven apps.",
      "Designing for offline-first cache reconciliation early avoided painful retrofits later.",
    ],
  },
  {
    slug: "mini-excel-dsa",
    title: "Mini Excel from Data Structures",
    tagline: "A spreadsheet engine built entirely on core DSA",
    description:
      "A spreadsheet application built on fundamental data structures — graphs for dependency tracking, trees for parsing, and stacks/queues for evaluation — supporting live formula computation.",
    year: "2024",
    role: "Developer",
    status: "Shipped",
    cover: "/images/projects/excel/dashboard.png",
    images: [
      { src: "/images/projects/excel/main-screen.png", alt: "Mini Excel main spreadsheet screen" },
      { src: "/images/projects/excel/dashboard.png", alt: "Mini Excel dashboard view" },
    ],
    tech: ["C++/Java", "Graphs", "Trees", "Stacks", "Queues", "Linked Lists"],
    githubUrl: "https://github.com/Maryam024/MiniExcel",
    metrics: [{ label: "Built on", value: "Core DSA, no libraries" }],
    overview:
      "A simplified spreadsheet engine that implements live formula evaluation the same way a real one would: a dependency graph between cells, an expression tree for parsing, and stack/queue-based evaluation — reinforcing DSA concepts through a genuinely useful build rather than a textbook exercise.",
    features: [
      "Live formula computation across dependent cells",
      "Circular reference detection",
      "Efficient recalculation limited to affected cells only",
    ],
    architecture: [
      "Dependency graph between cells to detect circular references and determine recalculation order",
      "Expression tree construction for parsing formulas, handling operator precedence structurally",
      "Stack-based evaluation for arithmetic expressions; queue-based recalculation propagation",
      "Linked-list-backed sparse grid representation for efficient cell storage",
    ],
    challenges: [
      {
        problem: "Detecting and reporting circular formula dependencies without infinite loops",
        solution:
          "Ran cycle detection on the dependency graph before evaluation, rejecting a formula outright if it would close a cycle.",
      },
      {
        problem: "Keeping recalculation efficient by only updating affected cells",
        solution:
          "Used topological ordering on the dependency graph so recalculation touched only cells downstream of an edit.",
      },
    ],
    lessons: [
      "Building a 'toy' spreadsheet from raw DSA made topological sort and expression trees concrete in a way lecture slides never did.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const education: EducationEntry[] = [
  {
    institution: "University of Engineering and Technology (UET), Lahore",
    degree: "B.Sc. Computer Science",
    location: "Lahore, Pakistan",
    duration: "2023 — 2027",
    status: "Currently in progress · CGPA 3.3 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Compiler Construction",
      "Parallel & Distributed Computing",
      "Mobile Application Development",
      "Software Project Management",
      "Machine Learning",
      "Web Development",
      "Artificial Intelligence",
      "Computer Vision",
    ],
  },
  {
    institution: "Punjab Group of Colleges (PGC)",
    degree: "FSc Pre-Engineering",
    location: "Lahore, Pakistan",
    duration: "2021 — 2023",
    status: "Completed",
    coursework: ["Physics", "Chemistry", "Mathematics"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: "AI/ML Research Intern",
    organization: "National Center of Artificial Intelligence (NCAI), UET Lahore",
    duration: "Jun 2026 — Present",
    location: "Lahore, Pakistan",
    type: "Internship",
    points: [
      "Investigated AI security, LLM hallucination, and reliability through literature review, experimentation, and evaluation of modern AI systems.",
      "Researched methods for hallucination detection and mitigation in LLM-based applications.",
      "Currently developing a research study on malignant melanoma detection from H&E-stained histopathological images using deep learning.",
      "Exploring semi-supervised learning, self-supervised learning, and representation learning to improve medical image analysis with limited labeled data.",
      "Conducted dataset and literature analysis to identify suitable benchmarks and establish an experimental research pipeline.",
    ],
  },
  {
    title: "Independent Full-Stack & AI Projects",
    organization: "Self-directed",
    duration: "2023 — Present",
    location: "Lahore, Pakistan",
    type: "Independent Development",
    points: [
      "Designed and shipped 6 independent full-stack and AI/ML projects end-to-end — from data model to deployment-ready build — covering web platforms, an Android app, a research pipeline, and a database engine built from scratch.",
      "Took every project through the same discipline as production work: architecture decisions up front, incremental builds, and a documented account of trade-offs and lessons for each one.",
      "Worked across the full stack repeatedly: React/Next.js front ends, Node/Flask/FastAPI backends, MongoDB/PostgreSQL/Supabase data layers, and JWT-based auth.",
    ],
  },
  {
    title: "Independent Researcher — MedInsight",
    organization: "Self-directed",
    duration: "2026",
    location: "Lahore, Pakistan",
    type: "Research",
    points: [
      "Authored \"MedInsight: Evaluating Retrieval-Augmented Vision-Language Models for Evidence-Grounded Medical Image Understanding,\" DOI-registered on Zenodo.",
      "Built a CLIP-embedded FAISS retrieval index over ~90K ROCOv2 radiology image-caption pairs and used it to evaluate a BLIP-2 vision-language model with and without retrieved evidence on the VQA-RAD benchmark.",
      "Ran paired bootstrap significance testing rather than reporting a raw accuracy delta, and reported the result honestly — a consistent but not statistically significant effect — instead of overstating it.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    organization: "UET Lahore",
    duration: "2024 — 2025",
    location: "Lahore, Pakistan",
    type: "Research",
    points: [
      "Authored an independent research paper \"AI-Based Depression Detection from Social Media Using LSTM Networks,\" DOI-registered on Zenodo.",
      "Designed the full research pipeline — preprocessing, sequence modeling, evaluation — and documented methodology and findings to publication standard.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Independent Research Paper — MedInsight (Retrieval-Augmented Medical VLMs)",
    issuer: "Zenodo",
    date: "2026",
    credentialUrl: "https://zenodo.org/records/21670123",
  },
  {
    title: "Independent Research Paper — AI-Based Depression Detection",
    issuer: "Zenodo",
    date: "2025",
    credentialUrl: "https://zenodo.org/records/21265208",
  },
  {
    title: "Securing AI Agents with NeMo Guardrails",
    issuer: "NVIDIA Learning",
    date: "Self-paced course",
  },
  {
    title: "Plan and Prepare to Develop AI Solutions on Azure",
    issuer: "Microsoft Learn",
    date: "Jul 2026",
    rating: 5,
  },
  {
    title: "Agentic AI Explained",
    issuer: "Self-paced course",
    date: "Completed",
    hasCertificate: false,
  },
  {
    title: "Explore Azure Machine Learning Workspace Resources and Assets",
    issuer: "Microsoft Learn",
    date: "Jul 2026",
    rating: 4,
  },
  {
    title: "Introduction to Generative AI and Agents",
    issuer: "Microsoft Learn",
    date: "Jul 2026",
  },
  {
    title: "6 Independent Full-Stack & AI Projects Shipped",
    issuer: "GitHub",
    date: "2023 — Present",
    credentialUrl: "https://github.com/Maryam024",
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    slug: "melanoma-ssl",
    title: "Semi-Supervised Melanoma Nuclei Segmentation for Computer-Aided Diagnosis",
    venue: "NCAI, UET Lahore · Manuscript in preparation",
    year: "2026",
    featured: true,
    status: "In Progress",
    tagline:
      "Melanoma is diagnosed by pathologists manually examining histopathology slides — can a model learn to segment the relevant cell nuclei from only a handful of labeled examples?",
    abstract:
      "Expert-labeled medical images are expensive and scarce in practice, which makes fully supervised nuclei segmentation for melanoma histopathology hard to scale. This project tests whether semi-supervised learning can close that gap. Working with the PUMA histopathology dataset (205 annotated images), a U-Net segmentation baseline reached 0.91 Dice under full supervision — within 1.2 points of the 0.916 Dice reported by the benchmark study this work builds on (Akbarpour et al., J. Imaging 11(8):274, 2025). Four semi-supervised techniques — Mean Teacher consistency regularization, a semi-supervised GAN, autoencoder pretraining, and confidence-based pseudo-labeling — were then rigorously compared against a matched supervised baseline under simulated label scarcity (15 and 40 labeled images). The manuscript is currently being written.",
    contributions: [
      "A U-Net supervised baseline on the PUMA dataset reaching 0.91 Dice, closely matching the benchmark study it's compared against",
      "A controlled comparison of four distinct semi-supervised techniques — Mean Teacher, semi-supervised GAN, autoencoder pretraining, and pseudo-labeling — against the same supervised baseline under simulated label scarcity",
      "A demonstration that GAN-based semi-supervision reaches near-parity with full supervision using only 15 labeled images",
      "A follow-up domain-diversity experiment using real out-of-domain histopathology data sourced from the public TCGA-SKCM archive via the NIH GDC API",
    ],
    tech: ["Python", "PyTorch", "U-Net", "OpenCV", "NumPy", "Pandas"],
    datasets: [
      "PUMA histopathology dataset — 205 expert-annotated melanoma images (labeled component)",
      "TCGA-SKCM (The Cancer Genome Atlas, skin cutaneous melanoma), sourced via the NIH GDC API — out-of-domain unlabeled data for the follow-up diversity experiment",
    ],
    methodology: [
      "U-Net segmentation baseline trained under full supervision on the PUMA dataset, benchmarked directly against Akbarpour et al.'s published Dice score",
      "Four semi-supervised methods implemented and compared under matched conditions: Mean Teacher consistency regularization, a semi-supervised GAN, autoencoder pretraining, and confidence-based pseudo-labeling",
      "Simulated label scarcity at 15 and 40 labeled images, with every method evaluated against the same supervised baseline at the same label counts",
      "A domain-diversity ablation sourcing real out-of-domain histopathology data from TCGA-SKCM via the NIH GDC API, to test whether unlabeled-data diversity — not just quantity — affects semi-supervised performance",
    ],
    keyResults: [
      { label: "Supervised baseline (U-Net, full supervision)", value: "0.91 Dice" },
      { label: "Benchmark comparison", value: "within 1.2 pts of Akbarpour et al.'s 0.916 Dice" },
      { label: "Best SSL method at 15 labeled images", value: "GAN-based SSL — 0.869 Dice vs. 0.870 supervised" },
      { label: "Out-of-domain diversity ablation (TCGA-SKCM)", value: "partially closed the gap, did not surpass supervised training" },
    ],
    findings: [
      "GAN-based semi-supervision reached near-parity with full supervision using only 15 labeled images (0.869 vs. 0.870 Dice) — the strongest of the four methods tested at that label count",
      "A stalled result in one setting was traced to insufficient domain diversity in the unlabeled pool, not a weakness in the method itself",
      "Sourcing real out-of-domain histopathology data from TCGA-SKCM to directly test that diagnosis: added diversity partially closed the gap under controlled ablation, but did not surpass supervised training",
      "The four SSL techniques were evaluated under genuinely matched conditions — same baseline, same label counts, same evaluation protocol — rather than each being reported against its own best-case setup",
    ],
    limitations: [
      "Results are from the PUMA dataset and a TCGA-SKCM out-of-domain ablation — not yet validated on a held-out clinical cohort",
      "The manuscript describing this work is still being written; a preprint or venue hasn't been finalized yet",
      "Computer-aided diagnosis here is intended as pathologist decision support, not a validated standalone clinical tool",
    ],
    githubUrl: "https://github.com/Maryam024/melanoma-ssl",
  },
  {
    slug: "medinsight",
    title:
      "MedInsight: Evaluating Retrieval-Augmented Vision-Language Models for Evidence-Grounded Medical Image Understanding",
    venue: "Independent research · DOI-archived on Zenodo",
    year: "2026",
    featured: false,
    tagline:
      "Does giving a medical vision-language model retrieved similar-case evidence actually make it more accurate — or does it just look like it should?",
    abstract:
      "MedInsight tests whether retrieval-augmented prompting improves a vision-language model's accuracy on medical visual question answering, using only openly licensed, non-credentialed data. A CLIP-embedded FAISS index over ~90,000 ROCOv2 radiology image-caption pairs supplies retrieved evidence captions to a pretrained BLIP-2 model, and that retrieval-augmented condition is compared against the same model answering with no retrieved evidence at all — same checkpoint, same decoding settings, same scoring code, on the official VQA-RAD test split (451 clinician-authored questions), with paired bootstrap significance testing rather than a single reported delta.",
    contributions: [
      "A fully reproducible retrieval-augmented medical VQA pipeline built entirely on open, non-credentialed datasets — no data-use agreement required to run it end to end",
      "A controlled baseline-vs-RAG comparison that shares one generation code path between both conditions, so any measured difference can be attributed to retrieval itself rather than an implementation quirk",
      "Statistical rigor beyond a raw accuracy delta: paired bootstrap significance testing (10,000 resamples) plus a qualitative improved/regressed/unchanged error breakdown",
    ],
    tech: [
      "Python",
      "PyTorch",
      "BLIP-2",
      "CLIP",
      "FAISS",
      "Retrieval-Augmented Generation",
      "Vision-Language Models",
      "Hugging Face Transformers",
    ],
    datasets: ["ROCOv2 (retrieval corpus)", "VQA-RAD (evaluation benchmark)"],
    methodology: [
      "CLIP-embedded FAISS flat inner-product index over the full ROCOv2 corpus (~90K radiology image-caption pairs)",
      "Shared generation code path (BaselineVLM.generate_from_prompt) for both the baseline and retrieval-augmented BLIP-2 conditions — identical tokenization, decoding, and scoring",
      "Evaluation on VQA-RAD's official 451-example held-out test split, scored by exact match (closed questions) and BLEU-4/ROUGE-L (open questions)",
      "Paired bootstrap significance testing (10,000 resamples) plus a sweep over retrieval depth k ∈ {1, 3, 5, 10}",
    ],
    keyResults: [
      { label: "Closed-question accuracy", baseline: "43.0%", value: "47.8% (+4.8 pts)" },
      { label: "Overall exact match", baseline: "26.8%", value: "29.5% (+2.7 pts)" },
      { label: "Significance (closed EM)", value: "p = 0.1848 — not significant at n = 451" },
      { label: "Best retrieval depth", value: "k = 1 (accuracy declines as k increases)" },
    ],
    findings: [
      "Retrieval augmentation improved every reported metric at the default depth (k = 5), but paired bootstrap testing found neither the closed-question nor open-question improvement statistically significant — an honest result more useful than an overstated one",
      "Accuracy peaked at the smallest retrieval depth (k = 1) and declined monotonically through k = 10, suggesting excess retrieved evidence can dilute rather than reinforce a base model's answer",
      "Error analysis showed both conditions failed on the majority of questions (58%) — the underlying VLM's zero-shot capability on radiology imagery, not retrieval, is the primary bottleneck",
    ],
    limitations: [
      "VQA-RAD's 451-example test split is small, which is why significance testing was treated as a requirement rather than an optional check",
      "The retriever matches only on image similarity — the question text never participates in retrieval — a plausible confound with the k-depth findings",
      "A single BLIP-2 checkpoint was evaluated at a single scale; no clinician review of answer quality was performed, so results describe this pipeline, not a validated clinical tool",
    ],
    githubUrl: "https://github.com/Maryam024/MedInsight",
    paperUrl: "https://zenodo.org/records/21670123",
  },
  {
    slug: "depression-detection-lstm",
    title: "AI-Based Depression Detection from Social Media Using LSTM Networks",
    venue: "Independent research · DOI-archived on Zenodo",
    year: "2024 – 2025",
    tagline: "Sequence models vs. bag-of-words for spotting depression indicators in social text",
    abstract:
      "This research investigates whether Long Short-Term Memory (LSTM) networks can pick up linguistic and behavioral indicators of depression in social media text more reliably than simple bag-of-words baselines. NLP preprocessing (tokenization, cleaning, stopword removal, embedding generation) feeds a sequence model trained to classify posts as depression-indicative or not, with class-imbalance handling and standard classification metrics.",
    contributions: [
      "An end-to-end pipeline from raw, informal social text to a trained classifier",
      "An LSTM architecture chosen specifically to capture contextual and temporal language patterns that bag-of-words baselines miss",
    ],
    tech: ["Python", "TensorFlow/PyTorch", "LSTM", "NLP", "Pandas", "NumPy"],
    methodology: [
      "Text preprocessing pipeline: tokenization, stopword removal, embedding generation",
      "LSTM-based sequence model capturing contextual and temporal patterns in language",
      "Train/validation/test split with class-imbalance handling",
      "Evaluation using accuracy, precision, recall, and F1-score",
    ],
    keyResults: [{ label: "Published", value: "DOI-archived on Zenodo" }],
    findings: [
      "Sequence-based models captured contextual depression indicators more effectively than bag-of-words baselines",
      "Preprocessing quality moved evaluation metrics more than architecture tweaks did",
      "Class-imbalance handling was necessary to avoid bias toward the majority (non-depressive) class",
    ],
    paperUrl: "https://zenodo.org/records/21265208",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "melanoma-histopathology-semi-supervised-learning",
    title: "The Labeling Problem in Skin Cancer: Rethinking Melanoma Detection with Semi-Supervised Learning",
    excerpt:
      "A pathologist can diagnose melanoma from a single glance at a stained slide. Teaching a model to do the same runs into a much older problem: there's never enough labeled data. Notes from an active research project at NCAI.",
    date: "2026-08-27",
    readTime: "11 min read",
    tags: ["Medical AI", "Computer Vision", "Histopathology", "Semi-Supervised Learning"],
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Photograph_of_lentigo_maligna_melanoma.jpg",
    content: [
      {
        type: "p",
        text: "Most people picture melanoma as a mole that looks a little wrong — asymmetric, oddly bordered, too many colors. That picture isn't false, but it's the easy 5% of the problem. The diagnosis that actually decides treatment doesn't happen on skin. It happens under a microscope, on a slide of tissue stained pink and purple, where a pathologist reads patterns that took years to learn to see. Teaching a model to read those same slides is the project I'm currently working on at NCAI, and it's forced me to think hard about a problem that has nothing to do with model architecture: where do the labels come from, and what do you do when there aren't enough of them?",
      },
      { type: "h2", text: "What melanoma actually looks like" },
      {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Photograph_of_lentigo_maligna_melanoma.jpg",
        alt: "Clinical photograph of lentigo maligna melanoma showing an irregularly pigmented skin lesion",
        caption:
          "Lentigo maligna melanoma: the asymmetry and uneven pigmentation clinicians are trained to flag on sight. Source: Wikimedia Commons, CC BY 3.0.",
      },
      {
        type: "p",
        text: "The clinical picture above is a real melanoma, and it shows exactly what dermatologists are trained to look for: asymmetry, an irregular border, more than one shade of brown or black, a diameter that's grown past what a normal mole should be. This is the ABCDE rule, and it's genuinely useful as a first screen. But it's also where the easy part of the problem ends. A visual exam can tell a clinician \"this looks suspicious.\" It can't tell them how deep the tumor has grown, whether it's ulcerated, or what subtype it is — and all three of those drive the treatment plan. For that, the lesion has to be biopsied and read under a microscope.",
      },
      { type: "h2", text: "Where the real diagnosis happens: the slide, not the photo" },
      {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Histopathology_of_nodular_melanoma.jpg",
        alt: "H&E-stained histopathology slide of nodular melanoma at low and high magnification",
        caption:
          "H&E-stained nodular melanoma at low (a) and high (b) magnification — nests of atypical melanocytes are visible at higher power. Source: Wikimedia Commons, CC BY 4.0.",
      },
      {
        type: "p",
        text: "This is what a pathologist actually reads: a hematoxylin-and-eosin (H&E) stained tissue section, viewed at multiple magnifications. At low power, the concern is architecture — has the normal layered structure of the skin broken down, is there an asymmetric nest of cells pushing into the dermis. At high power, it's cellular detail — enlarged, hyperchromatic nuclei, prominent nucleoli, irregular chromatin, the loss of the orderly single-file arrangement melanocytes normally keep. A 2025 study by Akbarpour, Fazlollahiaghamalek, Barati, Hashemi Kamangar, and Mandal, working out of the University of Alberta, applied an enhanced CNN architecture with test-time augmentation and an ensemble strategy to exactly this task — nuclei segmentation and melanoma-region detection — and reported Dice scores above 91% for nuclei and just under 88% for melanoma regions. That's a strong supervised result, and it's a useful reference point. But it also raises the question that actually matters for anyone trying to build on top of it: what did it take to get there, and does that scale?",
      },
      { type: "h2", text: "The core problem: melanoma histopathology doesn't come with enough labels" },
      {
        type: "p",
        text: "A whole-slide image is enormous — often billions of pixels — so no model reads it in one pass. The standard approach breaks it into a pipeline: detect tissue, cut it into patches, learn features from those patches, classify each one, then stitch the patch-level predictions back into a slide-level call.",
      },
      {
        type: "steps",
        items: [
          "Whole-slide image → tissue detection, discarding empty background",
          "Patch extraction — thousands of candidate regions per slide",
          "Feature learning on each patch",
          "Patch-level prediction, aggregated into a slide-level melanoma call",
        ],
      },
      {
        type: "p",
        text: "Every one of those patches is a training example a model could learn from — but only if it's labeled, and labeling a patch reliably requires a pathologist's time and judgment, not a crowdworker's. In practice, a realistic dataset ends up looking like a small labeled core surrounded by a much larger unlabeled majority: a few hundred carefully annotated images, and thousands more that exist but say nothing on their own. A conventional supervised pipeline trains on the labeled core and simply ignores the rest. That's the part that bothered me enough to build a project around it — those unlabeled images still encode real information about tissue structure, staining variation, and cellular morphology. Throwing them away isn't a neutral choice; it's giving up signal that's sitting right there.",
      },
      { type: "h2", text: "What semi-supervised learning actually buys you" },
      {
        type: "p",
        text: "Semi-supervised learning sits between the two extremes: it doesn't need every image labeled, and it doesn't ignore labels either. The labeled set defines the task; the unlabeled set teaches the model about the structure of the data itself — texture, morphology, staining variation — often more of it than any labeled set could show on its own. Several techniques fall under this umbrella, and they earn their keep in different ways.",
      },
      {
        type: "table",
        headers: ["Technique", "How it uses unlabeled data", "Main risk"],
        rows: [
          [
            "Autoencoders",
            "Compress and reconstruct images to learn features without needing a class label at all",
            "Learned features may capture staining artifacts rather than biologically meaningful structure",
          ],
          [
            "GANs",
            "Generate synthetic tissue images for augmentation or representation learning",
            "A visually convincing synthetic slide can still be biologically meaningless",
          ],
          [
            "Pseudo-labeling",
            "Use the model's own confident predictions on unlabeled patches as temporary training labels",
            "A confidently wrong prediction becomes a confidently wrong label, and the model reinforces its own mistake",
          ],
          [
            "Consistency regularization",
            "Require stable predictions when the same patch is lightly augmented or transformed",
            "Not every augmentation that's harmless for natural images is harmless for stained tissue",
          ],
        ],
      },
      {
        type: "p",
        text: "For this project I'm leaning toward a Mean Teacher-style setup — a student model trained on labeled data with a standard classification loss, plus a consistency objective that pulls its predictions on unlabeled data toward those of a slower-moving teacher version of itself. It's a reasonably well-tested design in other imaging domains, which matters, because histopathology is not a place to debut an untested idea and hope.",
      },
      { type: "h2", text: "Why the baseline matters more than the fancy model" },
      {
        type: "p",
        text: "It's tempting to skip straight to the interesting architecture. I think that's usually a mistake, and it's the first thing I locked in for this project: a fully supervised CNN, trained on the labeled data alone, has to exist and be measured before any semi-supervised claim means anything. The question that actually matters isn't \"did the semi-supervised model hit 90% accuracy\" — it's \"can it match or beat the supervised baseline while using substantially fewer labels than that baseline needed.\" Only the second question tells you whether the unlabeled data did real work.",
      },
      { type: "h2", text: "Evaluation: accuracy is the wrong first question" },
      {
        type: "p",
        text: "Melanoma datasets are typically dominated by benign cases, which makes accuracy a genuinely misleading headline metric — a model that predicts \"benign\" almost every time can post a high accuracy score while missing most of the melanomas it exists to catch. Sensitivity, specificity, and ROC-AUC matter more here, because in a diagnostic context a missed melanoma and an unnecessary follow-up biopsy are not remotely equivalent costs. That asymmetry has to be built into the evaluation plan before a single experiment runs, not bolted on afterward to explain a disappointing accuracy number.",
      },
      { type: "h2", text: "The one mistake that invalidates everything: data leakage" },
      {
        type: "p",
        text: "There's a failure mode in histopathology evaluation that's easy to miss and expensive when you do: splitting patches randomly into train and test sets, when multiple patches from the same patient — or the same slide — end up on both sides of the split. The model ends up being tested on tissue that's practically a neighbor of something it trained on, and the reported performance describes memorization dressed up as generalization. The fix is unglamorous but non-negotiable: split at the patient or slide level, so an entire patient's tissue lives entirely in train, validation, or test, never spread across more than one.",
      },
      { type: "h2", text: "Where this project stands right now" },
      {
        type: "p",
        text: "I want to be direct about this rather than let a polished write-up imply more than is true: this project is active, not finished. Right now the work is in dataset curation and experimental design — confirming that the labeled melanoma corpus and the candidate public unlabeled datasets are actually compatible in staining protocol, resolution, and tissue characteristics, and locking in the supervised baseline before touching semi-supervised training. There are no accuracy, sensitivity, or AUC numbers to report yet, and I'd rather say that plainly than round up. What is settled is the question the project is built to answer: how much of a pathologist's labeling effort can be recovered by making better use of the data that was never labeled in the first place. I'll be updating this page as the baseline and subsequent experiments land.",
      },
      {
        type: "callout",
        title: "Key takeaways",
        items: [
          "A clinical photo can flag a suspicious lesion, but the diagnosis that drives treatment happens on a stained tissue slide under a microscope.",
          "Most realistic histopathology datasets are a small labeled core surrounded by a much larger unlabeled majority — semi-supervised learning is about not discarding that majority.",
          "A supervised baseline has to exist before a semi-supervised claim means anything; the real question is how few labels the unlabeled data lets you get away with.",
          "Accuracy is the wrong headline metric for an imbalanced diagnostic task — sensitivity, specificity, and ROC-AUC reflect the actual cost of a missed melanoma.",
          "Patient- or slide-level data splitting isn't optional — patch-level random splitting quietly turns memorization into what looks like generalization.",
        ],
      },
    ],
  },
  {
    slug: "rise-of-ai-agents",
    title: "The Rise of AI Agents: How LLMs Are Becoming Autonomous",
    excerpt:
      "Language models are moving from single-shot chat responses to systems that plan, call tools, and take multi-step action on their own. Here's what's actually changed under the hood.",
    date: "2026-06-18",
    readTime: "8 min read",
    tags: ["AI Agents", "LLMs", "RAG"],
    cover: "/images/blog/ai-agents-cover.jpg",
    content: [
      {
        type: "p",
        text: "A year or two ago, most interaction with an LLM looked the same for everyone: type a prompt, read a response, repeat. That loop is still useful, but it's no longer the interesting part. The interesting part is what happens when the loop closes itself — when a model is given a goal, a set of tools, and permission to decide what to do next without a human typing the next instruction.",
      },
      { type: "h2", text: "From completion to action" },
      {
        type: "p",
        text: "A classic LLM call is a function: text in, text out. An agent wraps that function in a loop. At each step, the model reasons about the current state, chooses an action — call an API, run code, query a database, click a button in a browser — observes the result, and decides whether it's done or needs another step. The model itself hasn't fundamentally changed; what changed is the scaffolding around it: structured tool-calling, memory of prior steps, and a stopping condition instead of a fixed number of turns.",
      },
      {
        type: "steps",
        items: [
          "Perceive the current state (a task, a page, a ticket, a codebase)",
          "Reason and plan the next action",
          "Act — call a tool, run code, or take a UI action",
          "Observe the result and loop, or stop",
        ],
      },
      { type: "h2", text: "Agents you can already use today" },
      {
        type: "p",
        text: "This isn't a future-tense idea anymore — it's shipping across the industry in different shapes, each optimized for a different environment.",
      },
      {
        type: "table",
        headers: ["Agent", "Maker", "Environment it acts in", "What it automates"],
        rows: [
          ["Operator", "OpenAI", "Web browser", "Fills forms, books, and completes multi-step web tasks"],
          ["Claude (agentic / computer use)", "Anthropic", "Terminal, desktop, browser", "Writes and ships code, runs commands, operates a computer"],
          ["Copilot (Microsoft 365 agents)", "Microsoft", "Office apps, enterprise data", "Drafts documents, schedules meetings, summarizes threads"],
          ["GitHub Copilot / coding agents", "GitHub", "Codebase & CI", "Turns an issue into a pull request end to end"],
          ["Support agents (e.g. Intercom Fin, Sierra)", "Various vendors", "Customer support tooling", "Resolves tickets autonomously without a human reply"],
        ],
        caption: "A sample of agent products in production use as of 2026 — not an exhaustive list.",
      },
      { type: "h2", text: "Why this is harder than it sounds" },
      {
        type: "p",
        text: "The demos make it look effortless, but three problems show up almost immediately once you try to build one yourself. First, error compounding — a wrong assumption in step two quietly poisons steps three through ten, and the model is often confidently wrong about it. Second, tool selection is a genuine reasoning problem, not a lookup: giving a model twenty tools and hoping it picks the right one at the right time is closer to system design than prompt design. Third, cost and latency stack linearly with steps, so an agent that \"just keeps trying\" can burn a lot of time and money before it fails safely.",
      },
      {
        type: "p",
        text: "The practical fixes that tend to work are boring, not clever: constrain the action space tightly instead of exposing every tool everywhere, force the model to state its plan before acting so mistakes are visible before they're executed, and add a hard step budget with a graceful fallback rather than an infinite retry loop.",
      },
      { type: "h2", text: "Where autonomy earns its complexity" },
      {
        type: "p",
        text: "The autonomous-agent narrative gets applied to everything, but the cases where it earns its complexity are narrower: long-horizon tasks with clear success criteria — fix this failing test, triage this ticket queue, reconcile this spreadsheet — where a human checking every intermediate step would defeat the point of automating it. In enterprise workflows especially, the value shows up in the boring, repetitive middle of a process, not in flashy one-shot demos.",
      },
      { type: "h2", text: "What's next" },
      {
        type: "p",
        text: "Three trends look likely to define the next couple of years. Multi-agent systems, where specialized agents hand tasks to each other rather than one model doing everything, are moving from research demos into production pipelines. Standardized tool-and-context protocols (the kind that let any agent talk to any tool without custom glue code) are turning \"agent building\" from bespoke engineering into something closer to plugging in a peripheral. And as agents get access to real systems — codebases, inboxes, payment flows — the guardrails around them (permissions, audit trails, human checkpoints) are becoming as important a design problem as the reasoning loop itself.",
      },
      {
        type: "callout",
        title: "Key takeaways",
        items: [
          "An agent is an LLM call wrapped in a loop: reason, act, observe, repeat — the model didn't change, the scaffolding around it did.",
          "Real products already ship this today across very different environments: browsers (Operator), terminals and desktops (Claude), office suites (Copilot), codebases (GitHub coding agents), and support queues.",
          "The hard parts are compounding errors, tool selection, and runaway cost — not the reasoning itself.",
          "The best use cases are long-horizon, clearly-scored tasks, with a human checkpoint before anything consequential happens.",
        ],
      },
    ],
  },
  {
    slug: "explainable-ai-can-we-trust-it",
    title: "Explainable AI: Can We Trust Artificial Intelligence?",
    excerpt:
      "Accuracy isn't the same as trust. A look at what explainability actually buys you, why it matters most in high-stakes decisions, and where the current tools fall short.",
    date: "2026-05-02",
    readTime: "7 min read",
    tags: ["Explainable AI", "ML Ethics", "AI Safety"],
    cover: "/images/blog/explainable-ai-cover.jpg",
    content: [
      {
        type: "p",
        text: "\"Is the model accurate?\" is the question everyone asks first. The harder, more useful question is: do we know why it's right when it's right, and can we tell before it's wrong? Those two questions are much harder to answer than a benchmark score, and they're the whole premise of explainable AI.",
      },
      { type: "h2", text: "Accuracy without explanation is a black box with good marketing" },
      {
        type: "p",
        text: "A model that hits 90% accuracy sounds trustworthy until you ask what the other 10% looks like, and whether the model has any way of signaling which bucket a given answer falls into. Without an explanation mechanism, you can't distinguish confident-and-correct from confident-and-wrong — and that distinction is exactly what matters once a model's output influences a real decision about a person.",
      },
      {
        type: "table",
        headers: ["Domain", "Decision the AI influences", "Why an explanation matters"],
        rows: [
          ["Medical diagnosis", "Flags a condition from imaging or symptoms", "A clinician needs to see the evidence before acting on it"],
          ["Loan approval", "Approves or denies credit", "Applicants have a right to know why they were rejected"],
          ["Fraud detection", "Flags or blocks a transaction", "False positives freeze real accounts and real money"],
          ["Self-driving cars", "Chooses a driving action in real time", "Post-incident review needs to reconstruct what the model saw"],
          ["Hiring", "Screens or ranks candidates", "Unexplained bias can quietly become unlawful discrimination"],
          ["Legal decision support", "Recommends sentencing or risk scores", "Due process requires a reviewable rationale, not just a number"],
        ],
      },
      { type: "h2", text: "The toolkit, and its limits" },
      {
        type: "p",
        text: "Attention maps, SHAP and LIME feature attributions, and saliency maps for vision models are the common toolkit. Each one answers a narrower question than people assume: attention weights show what the model looked at, not why it weighted it that way; SHAP values are a local approximation, not a causal explanation; saliency maps can highlight regions that look plausible to a human without actually driving the prediction. Explainability tools tell you something true about a model's behavior — they don't automatically tell you the whole truth.",
      },
      { type: "h2", text: "Trust is a property of the system, not just the model" },
      {
        type: "p",
        text: "\"Is the AI explainable\" isn't quite the right question on its own. Trust comes from the combination of an explanation a domain expert can actually evaluate, a way to measure whether the model's stated confidence matches its real reliability, and a process for someone qualified to override it when the explanation doesn't hold up. Remove any one of those three and the explanation becomes decoration rather than accountability.",
      },
      { type: "h2", text: "Where this is headed" },
      {
        type: "p",
        text: "Regulation is starting to catch up with deployment: frameworks like the EU AI Act now classify high-stakes uses — credit, hiring, medical devices, law enforcement — as requiring a documented, reviewable rationale, not just a score. Expect explainability to shift from a research nicety to a compliance requirement in exactly the domains discussed above, and expect the tooling (model cards, standardized attribution benchmarks, audit trails) to mature accordingly. The honest goalpost isn't \"a fully transparent model\" — it's a system where a qualified human can verify the reasoning rather than just admire it.",
      },
      {
        type: "callout",
        title: "Key takeaways",
        items: [
          "High accuracy is not the same claim as trustworthiness — the two need to be evaluated separately.",
          "Explainability matters most where AI decisions touch people directly: healthcare, credit, hiring, law, and safety-critical systems like autonomous vehicles.",
          "Every explainability tool (attention, SHAP/LIME, saliency) answers a narrower question than it looks like it does — treat them as partial evidence, not proof.",
          "Regulation is turning explainability from a nice-to-have into a requirement in high-stakes domains — plan for it rather than bolt it on later.",
        ],
      },
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
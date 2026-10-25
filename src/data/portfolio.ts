export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  technologies: string[];
  description: string;
  usePurpose: string;
  problem: string;
  approach: string;
  whatIBuilt: string;
  implementationDetails: string[];
  whatILearned: string;
  sourceCode: string;
  liveDemo: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Web' | 'Data' | 'Security' | 'Tools';
  status: 'FOUNDATION' | 'ACTIVE LEARNING' | 'BUILDING' | 'EXPLORING';
  description: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface LabItem {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
}

export const PERSONAL_INFO = {
  name: "Adhithya Ram",
  role: "Computer Science & Engineering Student",
  degree: "B.Tech — Computer Science & Engineering",
  college: "Sri Manakula Vinayagar Engineering College",
  location: "Puducherry, India",
  email: "adhithyaram2006@gmail.com",
  github: "https://github.com/adhithyaram2006-dev",
  linkedin: "https://www.linkedin.com/in/adhithyaram-jayaraman-06434b353",
  status: "Building / Learning",
  focus: ["Web Development", "Cybersecurity", "AI / ML", "Systems"]
};

export const AREAS_OF_EXPLORATION = [
  { id: "01", title: "Web Development", status: "BUILDING", desc: "Crafting modern, responsive, and performant frontend architectures using React, TypeScript, and Tailwind." },
  { id: "02", title: "Cybersecurity", status: "EXPLORING", desc: "Understanding network protocols, web security vulnerabilities, Linux hardening, and defensive principles." },
  { id: "03", title: "AI / Machine Learning", status: "LEARNING", desc: "Exploring intelligent workflows, LLM integrations, and applied machine learning prototypes." },
  { id: "04", title: "Data & Analytics", status: "DEVELOPING", desc: "Manipulating and analyzing datasets with Python, NumPy, Pandas, and Matplotlib." },
  { id: "05", title: "Algorithms", status: "FOUNDATION", desc: "Mastering fundamental data structures, sorting, searching, and computational problem solving." },
  { id: "06", title: "System Design", status: "EXPLORING", desc: "Studying architecture patterns, component communication, and reliable software structure." },
  { id: "07", title: "Computing Systems", status: "EXPLORING", desc: "Exploring microprocessors, 8086/8051 architecture, low-level mechanics, and embedded computing." }
];

export const PROJECTS: Project[] = [
  {
    id: "personal-portfolio",
    number: "01",
    title: "Personal Portfolio Website",
    category: "FRONTEND × MOTION × UX",
    status: "IN DEVELOPMENT",
    technologies: ["React", "TypeScript", "Vite", "GSAP", "ScrollTrigger", "Lenis", "CSS", "Lucide React"],
    description: "A personal portfolio website designed to present my skills, projects, learning journey and technical interests through a modern interactive experience.",
    usePurpose: "A digital laboratory and professional showcase highlighting my engineering growth, academic projects, and technical stack as a Computer Science student.",
    problem: "Most student portfolios feel generic and fail to showcase genuine technical curiosity, computational thinking, and clean interactive craftsmanship.",
    approach: "Architected a modular React application powered by Lenis smooth scrolling, GSAP animations, custom cursors, and structured computer science narrative design.",
    whatIBuilt: "Created an immersive dark-mode digital laboratory featuring system visualizations, interactive skill constellations, step-by-step problem-solving guides, and a technical terminal interface.",
    implementationDetails: [
      "Optimized React component hierarchy adhering to strict TypeScript standards",
      "Smooth scroll integration with Lenis and synchronized GSAP ScrollTrigger animations",
      "Responsive layout design tailored for desktop, tablet, and mobile viewports"
    ],
    whatILearned: "Mastered advanced animation orchestration, performance optimization, and maintaining clean component decoupling in modern React applications.",
    sourceCode: "https://github.com/adhithyaram2006-dev",
    liveDemo: "https://github.com/adhithyaram2006-dev",
    featured: true
  },
  {
    id: "ai-procurement-system",
    number: "02",
    title: "AI-Powered Procurement System",
    category: "AI × FULL STACK × ERP",
    status: "PROTOTYPE",
    technologies: ["React", "Python", "AI/ML", "Database", "REST APIs", "ERP concepts"],
    description: "An AI-assisted procurement system designed to organize procurement workflows, supplier information and purchasing-related decision support.",
    usePurpose: "Streamlining inventory evaluation, supplier information vetting, and intelligent purchasing order generation suggestions for small-to-medium workflows.",
    problem: "Traditional procurement workflows involve fragmented communication, manual supplier vetting, and lack of automated insights for purchasing decisions.",
    approach: "Designed a modular dashboard concept integrating supplier data pipelines with intelligent categorization and automated purchase order generation suggestions.",
    whatIBuilt: "Built a responsive frontend interface with simulated backend procurement logic, intelligent item matching, and structured RFQ (Request for Quotation) tracking.",
    implementationDetails: [
      "React component architecture for real-time inventory and supplier status tracking",
      "Python-based data validation and intelligent purchase recommendation algorithms",
      "Structured form validation and responsive multi-step procurement wizards"
    ],
    whatILearned: "Gained hands-on experience in structuring enterprise resource planning (ERP) data models and designing intuitive dashboards for complex multi-step workflows.",
    sourceCode: "https://github.com/adhithyaram2006-dev",
    liveDemo: "Coming soon",
    featured: true
  },
  {
    id: "upi-fraud-detection",
    number: "03",
    title: "UPI Fraud Detection System",
    category: "AI/ML × FINTECH × SECURITY",
    status: "STUDENT PROJECT",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning"],
    description: "A machine-learning based system designed to analyze UPI transaction patterns and identify potentially fraudulent or suspicious transactions.",
    usePurpose: "Analyzing transaction velocity, anomaly patterns, and geospatial indicators in digital payments to detect suspicious fraudulent transfers.",
    problem: "Rapid growth in real-time digital payments requires automated anomaly detection to flag unauthorized or suspicious transactions before funds are settled.",
    approach: "Applied exploratory data analysis using Pandas and trained supervised machine learning classification models with Scikit-learn to evaluate risk scores.",
    whatIBuilt: "Developed data cleaning scripts, feature extraction pipelines, and evaluation metrics visualization using Matplotlib to assess model accuracy.",
    implementationDetails: [
      "Pandas preprocessing pipeline for transaction timestamp and amount normalization",
      "Scikit-learn classification models for binary fraud risk scoring",
      "Matplotlib confusion matrix and ROC curve plotting for model evaluation"
    ],
    whatILearned: "Learned applied machine learning fundamentals, feature engineering for financial datasets, and the importance of handling class imbalance in fraud detection.",
    sourceCode: "https://github.com/adhithyaram2006-dev",
    liveDemo: "Coming soon",
    featured: true
  }
];

export const SKILLS_DATA: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", status: "ACTIVE LEARNING", description: "Data structures, scripting, automation, and algorithmic problem solving." },
  { name: "C", category: "Languages", status: "FOUNDATION", description: "Low-level memory management, pointers, structures, and systems foundations." },
  { name: "JavaScript", category: "Languages", status: "BUILDING", description: "ES6+ syntax, asynchronous programming, DOM manipulation, and interactive UIs." },
  { name: "TypeScript", category: "Languages", status: "BUILDING", description: "Type safety, interfaces, generics, and robust scalable application architecture." },
  { name: "SQL", category: "Languages", status: "ACTIVE LEARNING", description: "Relational database design, queries, joins, and data manipulation." },

  // Web
  { name: "HTML", category: "Web", status: "FOUNDATION", description: "Semantic markup, accessibility standards, and document structure." },
  { name: "CSS", category: "Web", status: "BUILDING", description: "Tailwind CSS, flexbox/grid layouts, responsive design, and CSS animations." },
  { name: "React", category: "Web", status: "BUILDING", description: "Component-based architecture, hooks, state management, and modern SPA development." },

  // Security
  { name: "Linux", category: "Security", status: "ACTIVE LEARNING", description: "Command-line navigation, file permissions, shell scripting, and environment setup." },
  { name: "Networking", category: "Security", status: "ACTIVE LEARNING", description: "TCP/IP models, DNS, HTTP/HTTPS protocols, subnetting, and packet analysis." },
  { name: "Cyber Security", category: "Security", status: "ACTIVE LEARNING", description: "Network defense, vulnerability assessment, cryptography principles, and security protocols." },

  // Tools
  { name: "Git", category: "Tools", status: "BUILDING", description: "Version control, branching workflows, commits, and collaborative code management." },
  { name: "GitHub", category: "Tools", status: "BUILDING", description: "Repository hosting, remote collaboration, and portfolio showcase." }
];

export const TECHNICAL_DEPTH = [
  { level: "01", title: "Algorithms", desc: "Binary Search, Merge Sort, Quick Sort, Data Structures, Problem Solving" },
  { level: "02", title: "Programming", desc: "C, Python, JavaScript, TypeScript, Logic Construction" },
  { level: "03", title: "Data", desc: "Relational SQL, Data Pipelines, Structured Datasets" },
  { level: "04", title: "Networks", desc: "TCP/IP, HTTP/HTTPS, DNS, Packet Analysis, Network Protocols" },
  { level: "05", title: "Security", desc: "Linux Hardening, Cyber Security Principles, OWASP Guidelines" },
  { level: "06", title: "Systems", desc: "8086 / 8051 Microprocessors, Microcontrollers, Low-Level Architecture" },
  { level: "07", title: "AI", desc: "Applied LLMs, Prompt Engineering, Intelligent Automation Prototypes" }
];

export const PROBLEM_SOLVING_STEPS = [
  { number: "01", title: "UNDERSTAND", desc: "Carefully analyze the requirements, constraints, and core objective before writing any code." },
  { number: "02", title: "DECOMPOSE", desc: "Break complex problems into smaller, manageable sub-components and modular tasks." },
  { number: "03", title: "RESEARCH", desc: "Explore documentation, reference algorithms, system documentation, and best practices." },
  { number: "04", title: "BUILD", desc: "Write clean, modular, and typed code implementing the core solution architecture." },
  { number: "05", title: "TEST", desc: "Verify edge cases, validate inputs, check responsiveness, and debug anomalies." },
  { number: "06", title: "ITERATE", desc: "Refactor for performance, improve UX, clean up codebase, and document learnings." }
];

export const JOURNEY_TIMELINE: JourneyItem[] = [
  {
    period: "2025",
    title: "Started B.Tech CSE",
    description: "Entered Sri Manakula Vinayagar Engineering College to pursue Computer Science & Engineering.",
    highlights: ["Programming fundamentals in C", "Mathematical foundations", "Problem solving & logic building", "Introduction to computer science core"]
  },
  {
    period: "2025–2026",
    title: "Expanding Horizons",
    description: "Ventured into higher-level programming languages, data manipulation, and algorithmic thinking.",
    highlights: ["Learned Python and SQL", "Data structures and sorting algorithms", "Early frontend experiments with HTML/CSS", "Cyber security fundamentals"]
  },
  {
    period: "2026",
    title: "Web & Security Exploration",
    description: "Dived deeper into modern web development with React/TypeScript and initiated cyber security studies.",
    highlights: ["Built responsive web applications", "Explored networking and Linux administration", "Cyber security principles and defense", "System design concepts and microprocessors"]
  },
  {
    period: "PRESENT",
    title: "Building & Experimenting",
    description: "Actively developing projects, participating in hackathons, and continuously learning new technologies.",
    highlights: ["AI-powered procurement ERP prototype", "Advanced portfolio engineering with GSAP/Lenis", "Continuous exploration of security and systems", "Writing clean, maintainable code"]
  }
];

export const SYSTEM_STATUS_ITEMS = [
  { name: "WEB DEVELOPMENT", status: "ACTIVE" },
  { name: "AI / ML", status: "EXPLORING" },
  { name: "CYBER SECURITY", status: "LEARNING" },
  { name: "DATA", status: "BUILDING" },
  { name: "ALGORITHMS", status: "DEVELOPING" },
  { name: "SYSTEMS", status: "EXPLORING" }
];

export const LAB_ITEMS: LabItem[] = [
  {
    id: "lab-01",
    number: "01",
    title: "Web Interaction Experiments",
    category: "FRONTEND",
    status: "ACTIVE",
    description: "Custom cursor mechanics, SVG path animations, magnetic button physics, and scroll-driven timelines.",
    tech: ["React", "GSAP", "CSS"]
  },
  {
    id: "lab-02",
    number: "02",
    title: "Cyber Security & Networking",
    category: "SECURITY",
    status: "LEARNING",
    description: "Network defense concepts, protocol inspection, and local socket communication testing.",
    tech: ["Linux", "TCP/IP", "Security"]
  },
  {
    id: "lab-03",
    number: "03",
    title: "Data Visualization & SQL",
    category: "DATA ANALYSIS",
    status: "EXPLORING",
    description: "Relational database queries, analytical transformations, and statistical summaries.",
    tech: ["Python", "SQL", "Pandas"]
  },
  {
    id: "lab-04",
    number: "04",
    title: "AI Experiments",
    category: "AI / ML",
    status: "EXPLORING",
    description: "Structured prompt workflows, JSON-mode data extraction, and intelligent assistant prototypes.",
    tech: ["Python", "API", "Prompts"]
  },
  {
    id: "lab-05",
    number: "05",
    title: "Computing / Hardware",
    category: "SYSTEMS",
    status: "FOUNDATION",
    description: "Microprocessor architecture studies (8086/8051), assembly basics, and low-level computing concepts.",
    tech: ["Assembly", "Hardware", "Systems"]
  }
];

// ─── TypeScript Interfaces ────────────────────────────────────────────────────

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  telegram: string;
  location: string;
}

export interface Experience {
  role: string;
  company: string;
  type?: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  current: boolean;
}

export interface Project {
  name: string;
  dateRange: string;
  tags: string[];
  description: string;
  highlights: string[];
  github: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
}

export interface Award {
  title: string;
  achievement: string;
  date: string;
}

export interface Organization {
  name: string;
  role: string;
  dateRange: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  awards: Award[];
  organizations: Organization[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const resumeData: ResumeData = {
  name: "Yeabsira Moges",
  title: "Backend Software Developer",
  contact: {
    email: "yabume123@gmail.com",
    phone: "+251901549581",
    github: "https://github.com/coleYab",
    linkedin: "https://www.linkedin.com/in/yeabsira-moges-781822289/",
    telegram: "https://t.me/nbayeabsira",
    location: "Addis Ababa, Ethiopia",
  },
  summary:
    "I build high-performance backend systems, storage engines and APIs. From matching engines processing 94K orders/sec to time-series databases compressing data to 0.25 bytes/point.",
  experience: [
    {
      role: "Software Developer",
      company: "Sydek IT Solutions",
      startDate: "02/2026",
      endDate: "Present",
      location: "Addis Ababa",
      current: true,
      highlights: [
        "Built the dispatch module of a 100+ routes and 99-database table platform, including a real-time board over Laravel Reverb",
        "Developed a unit recommendation engine ranking by proximity, availability and capabilities, plus a pending queue with auto-dispatch",
        "Built an age-verification API on Fayda digital ID returning an over or under threshold verdict without storing the date of birth",
        "Mentored 4 developers and led PRD reviews and technical evaluations for 2 products built by interns",
      ],
    },
    {
      role: "Software Developer",
      company: "Carelink Medical Transportation LLC",
      type: "Part Time",
      startDate: "08/2026",
      endDate: "10/2026",
      location: "United States, Remote",
      current: false,
      highlights: [
        "Built a Laravel and React booking platform with Google Places/Mapbox geocoding and distance-based upfront quotes, and integrated Stripe Checkout with idempotent webhook payment reconciliation",
        "Developed a 13-module dispatch console with Bambi NEMT integration, fleet management, and booking audit logging across 4 event types",
        "Built a custom CMS and interactive onboarding knowledge base with 12 guided React Joyride tours and 8 simulations",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Sydek IT Solutions",
      startDate: "05/2025",
      endDate: "08/2025",
      location: "Addis Ababa",
      current: false,
      highlights: [
        "Designed and built a car spare-parts marketplace using Next.js and NestJS",
        "Led a team of five developers through 8 weeks of planning, task assignment and code review to deliver an email outreach platform",
      ],
    },
  ],
  projects: [
    {
      name: "OrderBook – C++ Matching Engine",
      dateRange: "02/2026 – 03/2026",
      tags: ["C++", "Systems", "Low Latency"],
      description:
        "C++23 limit order book matching engine supporting Limit, Market, Stop-Limit, Stop-Market, and Iceberg orders with GTC, IOC, FOK, GTD. Benchmarked at ~94,500 orders/sec (p50 5.4 µs, p99 8.6 µs). Append-only WAL for crash recovery.",
      highlights: ["~94,500 orders/sec", "p50 5.4 µs latency", "WAL crash recovery"],
      github: "https://github.com/coleYab",
    },
    {
      name: "ChronoDB – Time Series Storage Engine",
      dateRange: "05/2026 – 06/2026",
      tags: ["Go", "Storage Engine", "Compression"],
      description:
        "Go time-series storage engine with event loop and group commit WAL, sustaining ~565,000 points/sec. Gorilla-style delta-of-delta/XOR compression cutting storage from 10 to 0.25–2.37 bytes/point. Linux metrics agent collecting 13 CPU/memory/disk/network metrics.",
      highlights: [
        "~565K points/sec",
        "0.25 bytes/point compression",
        "13 system metrics",
      ],
      github: "https://github.com/coleYab",
    },
    {
      name: "IDRMC – Ethiopian Disaster Risk Management",
      dateRange: "12/2025 – Present",
      tags: ["Laravel", "PostGIS", "REST API", "Flutter"],
      description:
        "Versioned REST API with 84 endpoints and 15 database entities for incident reporting, disaster management, resource needs, donations and RBAC. PostGIS spatial indexing for nationwide GIS-based search across 14 administrative regions.",
      highlights: [
        "84 REST endpoints",
        "PostGIS spatial indexing",
        "14 regions covered",
      ],
      github: "https://github.com/coleYab",
    },
    {
      name: "M-PESA Go SDK",
      dateRange: "Award Winner",
      tags: ["Go", "SDK", "Fintech"],
      description:
        "Go SDK wrapping M-PESA API endpoints for B2C, C2B, STK Push, status and reversal requests. Won 50K ETB Safaricom challenge.",
      highlights: ["Competition winner", "50K ETB prize"],
      github: "https://github.com/coleYab",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "C++",
        "Go",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "C",
        "Java",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks",
      items: ["Gin", "Laravel", "NestJS", "Express", "Next.js"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Postman", "Jira", "GitHub Actions", "gRPC"],
    },
  ],
  education: [
    {
      degree: "BSc Information Systems",
      institution: "Addis Ababa University",
      startYear: "2022",
      endYear: "2026",
    },
    {
      degree: "Competitive Programming",
      institution: "A2SV",
      startYear: "2024",
      endYear: "2025",
    },
    {
      degree: "Software Engineering (Backend)",
      institution: "ALX Africa",
      startYear: "2023",
      endYear: "2024",
    },
  ],
  awards: [
    {
      title: "ETCPC (ICPC)",
      achievement: "2nd place out of 42 teams",
      date: "09/2026",
    },
    {
      title: "M-PESA SDK Challenge",
      achievement: "Winner, 50K ETB",
      date: "03/2025",
    },
    {
      title: "National Code League",
      achievement: "2nd place out of 53 teams",
      date: "06/2025",
    },
  ],
  organizations: [
    {
      name: "GDG Addis Ababa",
      role: "Contest Organizer at CP Sub-Team",
      dateRange: "01/2026 – 06/2026",
    },
  ],
};

export const experienceData = [
  {
    company: "Schoollog (L.B. Micro Technologies)",
    location: "Jaipur, Rajasthan",
    role: "Software Development Engineer II (SDE-2)",
    duration: "Mar 2024 – Present",
    projects: [
      {
        title: "Matrix Academy CRM & Test Management System",
        techStacks: ["React.js", "Next.js", "NestJS", "Python", "Redis", "MongoDB", "AWS", "Qdrant", "Microservices", "Docker", "OpenAI APIs", "LLMs", "Vector DB"],
        responsibilities: [
          "Engineered a highly scalable, multi-tenant CRM platform supporting 50,000+ annual users and 400+ GB of operational data, implementing secure JWT and Role-Based Access Control (RBAC) for 300+ staff across branch-wise sessions.",
          "Architected an event-driven communication service (WhatsApp Business API, Email, SMS) using Redis queues and real-time webhooks to automate high-volume notification campaigns with dynamic templates.",
          "Spearheaded an AI-assisted learning platform by building a vector-search infrastructure with OpenAI Embeddings, Qdrant, and Redis; indexed 500,000+ questions to enable semantic search, duplicate detection, and automated contextual doubt resolution.",
          "Architected an AI-driven content pipeline (React, OpenAI/Gemini/DeepSeek, MathJax) to parse unstructured bilingual text and complex equations into structured assessments, accelerating content ingestion by 80% and reducing manual corrections by 90%.",
          "Owned the end-to-end development of a secure payment microservice, implementing isolated sensitive data management with a secondary database to ensure high availability and compliance.",
          "Digitized 100% of timetable workflows by integrating AscEdupage APIs, replacing manual scheduling with an automated system featuring comprehensive audit logging and operational analytics.",
          "Mentored 3 developers in technical design while optimizing backend performance; reduced latency in high-volume reporting via MongoDB aggregation tuning, advanced indexing strategies, and Redis caching."
        ]
      }
    ]
  },
  {
    company: "Schoollog (L.B. Micro Technologies)",
    location: "Jaipur, Rajasthan",
    role: "Software Development Engineer II (SDE-2)",
    duration: "Mar 2024 – Present",
    projects: [
      {
        title: "Matrix Olympiad (MOF) & Hostel Management System",
        techStacks: ["NestJS", "React.js", "Next.js", "Redis", "BullMQ", "Puppeteer", "MongoDB", "AWS"],
        responsibilities: [
          "Engineered a high-scale Olympiad management system capable of handling heavy burst traffic, successfully onboarding 250,000+ annual student registrations within a concentrated 3–4-month window.",
          "Architected an automated hybrid exam engine supporting 80,000+ online test-takers nationwide, featuring dynamic test assignment, automated center allocation, and secure result distribution with >95% reliability.",
          "Designed a distributed document-generation pipeline using NestJS, Redis, BullMQ, and Puppeteer, processing 100,000+ dynamic admit cards and results while reducing generation time by 70%.",
          "Built an event-driven lifecycle messaging system orchestrating 40+ dynamic automated templates with secure document attachments to manage student communications from registration to final results.",
          "Developed an end-to-end HMS as the sole engineer, streamlining admissions workflows, payment gateways, and daily attendance tracking for 20,000+ students annually."
        ]
      }
    ]
  }
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  stars?: string;
  featured?: boolean;
  isPrivate?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'RevenueOS Backend',
    tagline: 'Multi-Tenant B2B Revenue Quotation Engine & Idempotent Ledger in Go',
    description: 'Production-grade B2B quotation agent in Go with PostgreSQL. Features WorkOS JWT/JWKS auth, row-level security, transactional outbox with SKIP LOCKED, integer minor-unit money math, micro-benchmarks (~1.5M ops/sec), and Stripe webhook processing.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'Idempotency', 'Stripe', 'WorkOS'],
    githubUrl: 'https://github.com/Taki7980/RevenueOS-backend',
    featured: true,
    isPrivate: false
  },
  {
    title: 'AI Workflow V3',
    tagline: 'Deterministic AI Agent Control Plane & Multi-Repo Indexer in Go',
    description: 'Go-first orchestration platform with multi-repo code-review-graph indexing. Escalates model capability instead of bloating prompt tokens. Uses structural symbol intelligence to eliminate file dumping with native MCP servers and deterministic loops.',
    tags: ['Go', 'MCP Protocol', 'AST Indexing', 'Multi-Agent', 'CLI'],
    githubUrl: 'https://github.com/Taki7980/Ai-workflow-V3',
    featured: true,
    isPrivate: false
  },
  {
    title: 'Context Bridge',
    tagline: 'Zero-Leak Ephemeral Memory Bridge & Context Optimizer for AI',
    description: 'Sanitizes developer context before it hits third-party LLMs. Achieves 63.9% median token reduction while maintaining 100% core entity retention. Filters credentials and exports structured context via Chrome MV3 and native messaging.',
    tags: ['TypeScript', 'Chrome MV3', 'Security', 'Privacy', 'Compression'],
    githubUrl: 'https://github.com/Taki7980/Context-Bridge',
    featured: true,
    isPrivate: false
  },
  {
    title: 'Distributed File Storage',
    tagline: 'Decentralized Content-Addressed Storage System in Go',
    description: 'Peer-to-peer storage cluster built from scratch in Go. Implements custom TCP framing, peer handshakes, CAS SHA-256 routing, streaming AES-256-GCM encryption at rest, and full ReadStream/Delete primitives without third-party frameworks.',
    tags: ['Go', 'P2P', 'TCP Sockets', 'CAS', 'Crypto', 'AES-256'],
    githubUrl: 'https://github.com/Taki7980/distributed-file-storage',
    featured: true,
    isPrivate: false
  },
  {
    title: 'AI PRD Generator',
    tagline: 'Multi-Model Engineering Requirements Workbench with RICE Scoring',
    description: 'Converts unstructured product concepts into production PRDs with edge cases and RICE scoring. Features multi-model ensemble orchestration across Claude, GPT-4o, and Gemini with Zod schema validation and token-optimized Caveman mode.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Zod', 'RICE Scoring'],
    githubUrl: 'https://github.com/Taki7980/PRD_Generator',
    featured: true,
    isPrivate: false
  },
  {
    title: 'AI Workflow Control Plane V2',
    tagline: 'Budget-Constrained Context Assembly & Adaptive Routing Engine',
    description: 'Autonomous control plane coordinating structural AST intelligence, BM25/RRF fusion ranking, and submodular context assembly with crash-consistent atomic state transitions and budget-aware model failover.',
    tags: ['Python', 'AST Indexing', 'Context Optimization', 'Telemetry', 'Distributed'],
    githubUrl: 'https://github.com/Taki7980/ai-workflow-control-plane-v2',
    featured: true,
    isPrivate: false
  },
  {
    title: 'Dripper Backend',
    tagline: 'High-Throughput Subscription Billing & Garment Queue Pipeline',
    description: 'Hono and TypeScript event-driven backend for automated garment distribution. Features BullMQ queue workers, PostgreSQL with Drizzle ORM, HMAC webhook validation, and Docker Compose orchestration.',
    tags: ['TypeScript', 'Hono', 'BullMQ', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/Taki7980/Dripper-backend',
    featured: true,
    isPrivate: false
  },
  {
    title: 'askDocRAG',
    tagline: 'Edge AI Document Intelligence Engine with SQLite Vector Search',
    description: 'High-performance local document intelligence and RAG engine built on Next.js and sqlite-vec. Features in-process vector cosine similarity searches, zero-telemetry local Ollama embedding pipelines, and automated retrieval evaluation.',
    tags: ['TypeScript', 'Next.js', 'SQLite', 'sqlite-vec', 'RAG', 'Ollama'],
    githubUrl: 'https://github.com/Taki7980/askDocRAG',
    featured: true,
    isPrivate: false
  },
  {
    title: 'RevenueOS Admin Panel',
    tagline: 'Enterprise Billing & Operations Console with Radix UI',
    description: 'Production React 18 and Vite dashboard for subscription billing observability. Features TanStack Query cache management, accessible Radix UI design systems, interactive enterprise quote configurator, and 70 Vitest unit tests.',
    tags: ['React 18', 'TypeScript', 'Vite', 'Radix UI', 'Vitest', 'Tailwind'],
    githubUrl: 'https://github.com/Taki7980/revenueOS-admin-panel',
    featured: true,
    isPrivate: false
  },
  {
    title: 'healthOS',
    tagline: 'WhatsApp-Native Medicine Fulfillment & Real-Time Geospatial Search',
    description: 'Fastify and TypeScript medicine engine connecting patients to local pharmacies via WhatsApp Cloud API webhooks. Implements state machine conversation loops, PostGIS geospatial radius searching, and quote reservation flows.',
    tags: ['TypeScript', 'Fastify', 'WhatsApp API', 'Geospatial', 'State Machine'],
    githubUrl: 'https://github.com/Taki7980/healthOS',
    featured: true,
    isPrivate: false
  }
];

export interface Essay {
  id: string;
  title: string;
  date: string;
  summary: string;
  readTime: string;
  content: string;
}

export const ESSAYS: Essay[] = [
  {
    id: 'deterministic-systems',
    title: 'Why Deterministic Systems Beat LLM Prompts in Production',
    date: 'Oct 2026',
    readTime: '4 min read',
    summary: 'Building reliable transaction systems by keeping probabilistic models far away from business state logic.',
    content: 'Large Language Models are probabilistic generators, while financial ledgers, inventory counts, and state gates demand strict determinism. In production system design, we isolate LLMs strictly to parsing unstructured input into strongly-typed schemas. State transitions, idempotency keys, and persistence are executed exclusively in compiled backend services with ACID guarantees. Never let an LLM do arbitrary math or directly authorize transactional transitions.'
  },
  {
    id: 'cas-storage-sockets',
    title: 'Designing Content-Addressed Storage from Sockets to Disk',
    date: 'Sep 2026',
    readTime: '6 min read',
    summary: 'A deep-dive into TCP framing, SHA-256 CAS routing, and p2p handshakes without third-party frameworks.',
    content: 'Building a distributed peer-to-peer storage engine from scratch forces you to understand every layer of the network stack. Instead of relying on libp2p, we implemented raw TCP socket framing with explicit byte lengths, handshakes with cryptographic identity verification, and content-addressed storage where file paths are derived strictly from SHA-256 digests. This guarantees deduplication across the entire cluster by design.'
  },
  {
    id: 'token-optimization-agents',
    title: 'The Token Optimization Playbook for High-Efficiency Agents',
    date: 'Aug 2026',
    readTime: '5 min read',
    summary: 'How AST symbol indexing, tree-sitter, and SCIP cut agent context window waste.',
    content: 'Dumping entire source repositories into model context windows is an inefficient way to run coding agents. In AI Workflow architectures, we build an indexer producing SCIP symbol definitions and references. When the agent investigates an issue, it fetches only the exact function signature, docstring, and immediate callers rather than raw thousands-line files. Unnecessary token bloat drops while response precision rises.'
  }
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Distributed Systems & AI Architecture',
    period: '2023 — Present',
    highlights: [
      'Architected high-throughput Go microservices handling concurrent event streams and p99 latency guarantees.',
      'Designed agentic workflows utilizing the Model Context Protocol (MCP) for deterministic codebase navigation.',
      'Built automated lead-to-quote conversion pipelines with schema validation and WhatsApp business API integration.'
    ]
  },
  {
    role: 'Open Source Systems Developer',
    company: 'Self-Directed & Community Contributions',
    period: '2022 — Present',
    highlights: [
      'Published 80+ public GitHub repositories spanning distributed storage, browser extensions, and developer tooling.',
      'Solved 200+ LeetCode algorithmic challenges with a strong focus on graphs, dynamic programming, and binary trees.',
      'Authored technical deep-dives on system determinism, network socket framing, and LLM orchestration.'
    ]
  }
];

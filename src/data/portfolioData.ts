export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  stars?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'AI Workflow V3',
    tagline: 'Deterministic AI Agent Control Plane & SCIP Indexer in Go',
    description: 'Autonomous multi-agent orchestration architecture written in Go. Prioritizes SCIP AST symbol graphs over full-file dumping to cut prompt token consumption by 70%. Features local MCP server integrations and deterministic execution loops.',
    tags: ['Go', 'MCP Protocol', 'SCIP/AST', 'Multi-Agent', 'CLI'],
    githubUrl: 'https://github.com/Taki7980/Ai-workflow-V3',
    featured: true
  },
  {
    title: 'RevenueOS Backend',
    tagline: 'High-Concurrency Automated Quotation & Order Engine',
    description: 'Production B2B sales automation engine. Isolates LLMs strictly to schema-bounded natural language extraction while Go manages ledger states, idempotency keys, and transactional order operations.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'REST API', 'WhatsApp Bot'],
    githubUrl: 'https://github.com/Taki7980/RevenueOS-backend',
    featured: true
  },
  {
    title: 'Distributed File Storage',
    tagline: 'Decentralized Content-Addressed Storage System',
    description: 'Peer-to-peer storage cluster built from scratch in Go. Implements TCP framing, peer handshakes, CAS SHA-256 routing, and streaming encryption without heavy frameworks.',
    tags: ['Go', 'P2P', 'TCP Sockets', 'CAS', 'Crypto'],
    githubUrl: 'https://github.com/Taki7980/distributed-file-storage',
    featured: true
  },
  {
    title: 'Context Bridge',
    tagline: 'Local-First Chrome Extension for Secure AI Prompts',
    description: 'Sanitizes developer context before it hits third-party LLMs. Scans for leaked keys, tokens, and PII, then exports structured snippets via clipboard or native MCP bridges.',
    tags: ['TypeScript', 'Chrome MV3', 'Security', 'Privacy'],
    githubUrl: 'https://github.com/Taki7980/Context-Bridge',
    featured: false
  },
  {
    title: 'PRD Generator',
    tagline: 'Structured Requirements Workbench with Multi-Model AI',
    description: 'Transforms informal feature brainstorms into structured engineering PRDs with RICE scoring. Unifies Claude, GPT-4o, and Gemini with strict schema enforcement.',
    tags: ['TypeScript', 'React', 'Multi-Model', 'Schemas'],
    githubUrl: 'https://github.com/Taki7980/PRD_Generator',
    featured: false
  },
  {
    title: 'Elden Ring Utility',
    tagline: 'Zero-Telemetry Browser Gaming Companion Tool',
    description: 'Offline-capable gaming extension audited for minimal permissions and zero telemetry. Fast, lightweight reference built for desktop browsers.',
    tags: ['JavaScript', 'Extension', 'Audited'],
    githubUrl: 'https://github.com/Taki7980/elden-ring-extension',
    featured: false
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
    summary: 'Building reliable revenue systems by keeping probabilistic models far away from business state logic.',
    content: 'Large Language Models are probabilistic generators, while financial ledgers, inventory counts, and authentication gates demand 100% determinism. When building RevenueOS, we isolated LLMs strictly to parsing unstructured customer intent into strongly-typed JSON schemas. The transaction logic, idempotency keys, and state transitions are executed exclusively in Go with ACID guarantees in PostgreSQL. Never let an LLM do math or decide whether an order is valid.'
  },
  {
    id: 'content-addressed-storage',
    title: 'Designing Content-Addressed Storage from Sockets to Disk',
    date: 'Sep 2026',
    readTime: '6 min read',
    summary: 'A deep-dive into TCP framing, SHA-256 CAS routing, and p2p handshakes without third-party frameworks.',
    content: 'Building a distributed peer-to-peer storage engine from scratch forces you to understand every layer of the network stack. Instead of relying on libp2p, we implemented raw TCP socket framing with explicit byte lengths, handshakes with cryptographic identity verification, and content-addressed storage where file paths are derived strictly from SHA-256 digests. This guarantees deduplication across the entire cluster by design.'
  },
  {
    id: 'token-optimization-playbook',
    title: 'The Token Optimization Playbook for High-Efficiency Agents',
    date: 'Aug 2026',
    readTime: '5 min read',
    summary: 'How AST symbol indexing, tree-sitter, and SCIP cut agent context window usage by up to 70%.',
    content: 'Dumping entire source repositories into model context windows is the most expensive and error-prone way to build coding agents. In AI Workflow V3, we built an indexer that produces SCIP symbol definitions and references. When the agent investigates a bug, it fetches only the exact function signature, docstring, and immediate callers rather than raw 1,000-line files. Token consumption drops significantly while response precision skyrockets.'
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

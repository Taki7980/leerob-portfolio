import { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Code2, 
  Terminal, 
  Server, 
  Layers, 
  BookOpen, 
  Copy, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

function GithubIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedEssay, setSelectedEssay] = useState<number | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const copyEmail = () => {
    navigator.clipboard.writeText('nirjharsarkar8@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projects: Project[] = [
    {
      title: 'AI Workflow V3',
      tagline: 'Go-first, agent-agnostic control plane for software development',
      description: 'Clean re-implementation of AI agent orchestration. Escalates capability, not context volume. Features native MCP server, SCIP/code-review-graph AST indexing, deterministic journal replay, and differential testing harness.',
      tags: ['Go', 'MCP', 'AST Analysis', 'Multi-Agent', 'CLI'],
      githubUrl: 'https://github.com/Taki7980/Ai-workflow-V3',
      featured: true
    },
    {
      title: 'RevenueOS Backend',
      tagline: 'Production-grade AI B2B quotation & revenue automation engine',
      description: 'Modular monolith backend for an AI quotation agent. Converts inquiries into deterministic quotations, automated approval workflows, WhatsApp delivery, CRM records, and PostgreSQL state persistence.',
      tags: ['Go', 'PostgreSQL', 'REST', 'Docker', 'Multi-tenant'],
      githubUrl: 'https://github.com/Taki7980/RevenueOS-backend',
      featured: true
    },
    {
      title: 'Distributed File Storage',
      tagline: 'P2P network transport layer & content-addressed storage',
      description: 'Peer-to-peer decentralized storage architecture implemented from scratch in Go. Features custom TCP transport decoding, peer handshakes, CAS hash routing, and streaming data encryption.',
      tags: ['Go', 'P2P Networking', 'TCP', 'CAS', 'Distributed Systems'],
      githubUrl: 'https://github.com/Taki7980/distributed-file-storage',
      featured: true
    },
    {
      title: 'Context Bridge',
      tagline: 'Local-first Chrome extension for moving reviewable AI context',
      description: 'Chrome Manifest V3 extension for privacy-first developer context transfer. Deterministically packs user-selected text, runs security audits against secret exposure, and exports to clipboard or MCP bridge.',
      tags: ['TypeScript', 'Chrome Extension', 'Privacy', 'Manifest V3'],
      githubUrl: 'https://github.com/Taki7980/Context-Bridge'
    },
    {
      title: 'AI PRD Generator',
      tagline: 'Multi-model requirements workbench with native structured outputs',
      description: 'Converts product ideas and telemetry feedback into comprehensive PRDs with RICE scoring. Unifies Claude, GPT-4o, and Gemini using provider-level structured schema constraints.',
      tags: ['TypeScript', 'React', 'Multi-Model', 'LLM Schemas'],
      githubUrl: 'https://github.com/Taki7980/PRD_Generator'
    },
    {
      title: 'Elden Ring Browser Utility',
      tagline: 'Privacy-audited gaming tool & interactive companion',
      description: 'Security-reviewed browser extension with strict least-privilege permissions, zero remote analytics, and fast offline game data access.',
      tags: ['JavaScript', 'Security Audit', 'Privacy'],
      githubUrl: 'https://github.com/Taki7980/elden-ring-extension'
    }
  ];

  const experiences: Experience[] = [
    {
      role: 'Full Stack & Distributed Systems Engineer',
      company: 'High-Scale Platforms & Microservices',
      period: '2023 — Present',
      highlights: [
        'Designed high-throughput dispatch and real-time state machines using Go, Redis, and event-driven microservices.',
        'Engineered telemetry pipelines with New Relic to monitor sub-second latency SLA across distributed API clusters.',
        'Spearheaded developer tooling and agentic workflows, cutting routine debugging cycles by over 60%.'
      ]
    },
    {
      role: 'Full Stack Web Developer & Open Source Contributor',
      company: 'Independent Engineering',
      period: '2022 — 2023',
      highlights: [
        'Built full-stack web applications using Next.js, React, Node.js, TypeScript, PostgreSQL, and Tailwind CSS.',
        'Authored over 80 public repositories covering P2P networking, developer extensions, and generative AI control planes.',
        'Solved 200+ algorithm and data structure challenges on LeetCode with emphasis on optimal asymptotic bounds.'
      ]
    }
  ];

  const essays = [
    {
      title: 'Escalating Capability, Not Context Volume',
      date: 'Oct 2026',
      summary: 'Why naive 1M-token prompt dumps degrade reasoning, and how AST/SCIP structural retrieval preserves LLM precision.',
      content: 'In building AI Workflow V3, we found that dumping raw project directories into agent prompts introduces significant hallucination. By adopting an AST-first indexing approach and targeted SCIP symbols, agents operate with surgical precision while consuming 80% fewer tokens.'
    },
    {
      title: 'Deterministic Quotations in Probabilistic Worlds',
      date: 'Sep 2026',
      summary: 'Architecting B2B RevenueOS: keeping generative models away from authoritative financial logic.',
      content: 'LLMs are great at parsing messy customer WhatsApp inquiries, but should NEVER calculate discounts or tax line items. In RevenueOS, LLMs extract intent into strict JSON schemas, while a deterministic Go state machine computes prices and checks ledger rules.'
    },
    {
      title: 'Building a P2P Transport Layer from Scratch in Go',
      date: 'Aug 2026',
      summary: 'Lessons learned implementing raw TCP handshakes, peer discovery, and content-addressed storage.',
      content: 'Understanding network protocols requires wrestling with byte streams, framing delimiters, and goroutine leak prevention. Building a custom CAS protocol taught me the fundamental tradeoffs between TCP head-of-line blocking and UDP custom retransmission.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111010] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20 font-sans">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between pb-10 mb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-4">
            <img 
              src="/avatar.jpg" 
              alt="Nirjhar Sarkar" 
              className="w-14 h-14 rounded-full object-cover border border-neutral-300 dark:border-neutral-700 shadow-sm"
            />
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Nirjhar Sarkar
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Software Engineer • Distributed Systems & AI Systems
              </p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </header>

        {/* Intro */}
        <section className="mb-14 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-[15px]">
          <p>
            I am a software engineer focused on <strong>distributed systems</strong>, <strong>AI agent infrastructure</strong>, and <strong>performant web applications</strong>.
          </p>
          <p>
            Currently architecting high-concurrency Go backends, event-driven pipelines, and agent-agnostic control planes like{' '}
            <a 
              href="https://github.com/Taki7980/Ai-workflow-V3" 
              target="_blank" 
              rel="noreferrer" 
              className="font-medium underline underline-offset-4 text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400"
            >
              AI Workflow V3
            </a>
            . I believe in clean code, minimal dependencies, and deterministic software engineering.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for high-impact roles & consulting
            </span>
            <span>•</span>
            <span>India / Remote Worldwide</span>
          </div>
        </section>

        {/* Selected Work / Experience */}
        <section className="mb-14">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 mb-6">
            Experience & Contributions
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                  {exp.company}
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-300">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-1.5 text-xs">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-14">
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500">
              Featured Projects
            </h2>
            <a 
              href="https://github.com/Taki7980?tab=repositories" 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 inline-flex items-center gap-1"
            >
              View all 80+ repos <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          
          <div className="grid gap-5">
            {projects.map((proj, i) => (
              <a 
                key={i} 
                href={proj.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="block p-5 rounded-xl border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white dark:bg-neutral-900/40 transition group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
                      {proj.title}
                    </h3>
                    {proj.featured && (
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 mb-2">
                  {proj.tagline}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, t) => (
                    <span 
                      key={t} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills / Craft */}
        <section className="mb-14">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 mb-6">
            Craft & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2 text-sm">
                <Server className="w-4 h-4 text-neutral-500" /> Backend & Distributed
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
                Go, Microservices, Redis, Kafka, PostgreSQL, TCP Networking, Docker, gRPC, Distributed State Machines
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2 text-sm">
                <Layers className="w-4 h-4 text-neutral-500" /> Frontend & Architecture
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
                TypeScript, React, Next.js (App Router), Tailwind CSS, Vite, Radix UI, State Management, Responsive Design
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2 text-sm">
                <Terminal className="w-4 h-4 text-neutral-500" /> AI Systems & Tooling
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
                Model Context Protocol (MCP), Agent Control Planes, SCIP/AST Symbol Retrieval, Structured Outputs, Multi-model orchestrators
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2 text-sm">
                <Code2 className="w-4 h-4 text-neutral-500" /> Observability & Quality
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
                New Relic, Distributed Tracing, LeetCode (200+ Solved), Unit & Integration Testing, Security Audits
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Essays / Notes */}
        <section className="mb-14">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 mb-6">
            Notes & Architecture
          </h2>
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {essays.map((essay, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setSelectedEssay(selectedEssay === idx ? null : idx)}
                  className="w-full text-left flex justify-between items-center group cursor-pointer"
                >
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
                      {essay.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {essay.summary}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono ml-4 shrink-0">
                    {essay.date}
                  </span>
                </button>
                {selectedEssay === idx && (
                  <div className="mt-3 p-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 animate-fadeIn">
                    {essay.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Connect & Socials */}
        <section className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 mb-6">
            Connect
          </h2>
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <a 
              href="https://github.com/Taki7980" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/nirjhar-sarkar/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a 
              href="https://x.com/nirjharsarkar_7" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <TwitterIcon className="w-4 h-4" /> X (Twitter)
            </a>
            <a 
              href="https://leetcode.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <Code2 className="w-4 h-4" /> LeetCode
            </a>
            <a 
              href="https://stackoverflow.com/users/21166071" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <BookOpen className="w-4 h-4" /> Stack Overflow
            </a>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-500">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-neutral-700 dark:text-neutral-300 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied to clipboard' : 'nirjharsarkar8@gmail.com'}</span>
            </button>
            <span>© {new Date().getFullYear()} Nirjhar Sarkar</span>
          </div>
        </section>
      </main>
    </div>
  );
}

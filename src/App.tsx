import { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Terminal, 
  Sun, 
  Moon, 
  Copy, 
  Check, 
  Code2, 
  Server, 
  Layers, 
  Search, 
  Command,
  AlertCircle
} from 'lucide-react';
import { PROJECTS, ESSAYS, EXPERIENCES } from './data/portfolioData';
import { TerminalModal } from './components/TerminalModal';

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

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch {
      return false;
    }
  });
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedEssay, setSelectedEssay] = useState<number | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch {
      // Safe fallback if localStorage is blocked
    }
  }, [darkMode]);

  // Passive & Throttled Scroll Listener for Reading Progress
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (windowHeight > 0) {
            setReadingProgress((totalScroll / windowHeight) * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut cmd+k / ctrl+k for terminal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInputFocused = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        if (!isInputFocused || isTerminalOpen) {
          e.preventDefault();
          setIsTerminalOpen(prev => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isTerminalOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nirjharsarkar8@gmail.com');
      setCopyStatus('success');
    } catch {
      setCopyStatus('error');
    } finally {
      setTimeout(() => setCopyStatus('idle'), 2500);
    }
  };

  const allTags = ['All', 'Go', 'TypeScript', 'MCP Protocol', 'P2P', 'Security'];

  const filteredProjects = PROJECTS.filter(proj => {
    const matchesTag = selectedTag === 'All' || proj.tags.includes(selectedTag);
    const matchesQuery = searchQuery === '' || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111010] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      
      {/* Scroll Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20 font-sans">
        
        {/* Navigation / Header */}
        <header className="flex items-center justify-between pb-10 mb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-4">
            <img 
              src="/avatar.jpg" 
              alt="Nirjhar Sarkar" 
              className="w-14 h-14 rounded-full object-cover border border-neutral-300 dark:border-neutral-700 shadow-xs"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/mio_profile.jpg';
              }}
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
          
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsTerminalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
              title="Open Command Terminal"
              aria-label="Open Interactive Terminal"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Intro Section */}
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

        {/* Dynamic Project Showcase with Search & Filters */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
              Selected Projects
            </h2>
            
            {/* Live Search Input */}
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search projects or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition"
                aria-label="Filter projects by title or technology"
              />
            </div>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-2.5 py-1 rounded-md transition cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-medium'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Project List */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg text-xs text-neutral-500">
              No projects found matching "{searchQuery}".
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => {
                const CardTag = project.isPrivate ? 'div' : 'a';
                const cardProps = project.isPrivate
                  ? { role: 'article', 'aria-label': `${project.title} (Private Repository)` }
                  : { href: project.githubUrl, target: '_blank', rel: 'noreferrer' };

                return (
                  <CardTag
                    key={project.title}
                    {...cardProps}
                    className={`group block p-4 -mx-4 rounded-xl transition duration-150 border border-transparent ${
                      project.isPrivate
                        ? 'cursor-default'
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-900/60 hover:border-neutral-200 dark:hover:border-neutral-800 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-1.5 transition">
                          <span>{project.title}</span>
                          {project.isPrivate && (
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
                              Private
                            </span>
                          )}
                          {!project.isPrivate && (
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-150" />
                          )}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardTag>
                );
              })}
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6">
            Experience & Milestones
          </h2>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {exp.role} <span className="text-neutral-400 font-normal">at {exp.company}</span>
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Capabilities Grid */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6">
            Core Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <div className="flex items-center space-x-2.5 text-neutral-900 dark:text-neutral-100 mb-2 font-medium text-xs">
                <Server className="w-4 h-4 text-emerald-500" />
                <span>Distributed Backends & Go</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Go (Golang), PostgreSQL, Redis, Kafka, WebSockets, TCP Sockets, Docker, Microservice Architecture.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <div className="flex items-center space-x-2.5 text-neutral-900 dark:text-neutral-100 mb-2 font-medium text-xs">
                <Terminal className="w-4 h-4 text-blue-500" />
                <span>AI Infrastructure & Protocols</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Model Context Protocol (MCP), Tree-sitter / AST indexing, structured schema outputs, deterministic agents.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <div className="flex items-center space-x-2.5 text-neutral-900 dark:text-neutral-100 mb-2 font-medium text-xs">
                <Layers className="w-4 h-4 text-purple-500" />
                <span>Frontend Systems</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                TypeScript, React, Next.js, Tailwind CSS, Chrome Extension MV3, performance profiling.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
              <div className="flex items-center space-x-2.5 text-neutral-900 dark:text-neutral-100 mb-2 font-medium text-xs">
                <Code2 className="w-4 h-4 text-amber-500" />
                <span>Algorithmic Rigor</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                200+ LeetCode problems solved. Strong intuition for graphs, trees, DP, and space-time tradeoffs.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Essays Section */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6">
            Architecture Essays & Thoughts
          </h2>
          <div className="space-y-4">
            {ESSAYS.map((essay, idx) => (
              <div 
                key={essay.id}
                className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition"
              >
                <button
                  type="button"
                  onClick={() => setSelectedEssay(selectedEssay === idx ? null : idx)}
                  className="w-full text-left flex justify-between items-start cursor-pointer group"
                >
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {essay.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {essay.summary}
                    </p>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <span className="text-xs text-neutral-400 block font-mono">
                      {essay.date}
                    </span>
                    <span className="text-[10px] text-neutral-500 block font-mono">
                      {essay.readTime}
                    </span>
                  </div>
                </button>
                {selectedEssay === idx && (
                  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {essay.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer & Socials */}
        <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-500">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-neutral-700 dark:text-neutral-300 cursor-pointer"
              aria-label="Copy email address"
            >
              {copyStatus === 'success' && <Check className="w-3.5 h-3.5 text-emerald-500" />}
              {copyStatus === 'error' && <AlertCircle className="w-3.5 h-3.5 text-rose-500" />}
              {copyStatus === 'idle' && <Copy className="w-3.5 h-3.5" />}
              <span>
                {copyStatus === 'success' ? 'Copied to clipboard' : copyStatus === 'error' ? 'Copy Failed' : 'nirjharsarkar8@gmail.com'}
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Taki7980" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/nirjhar-sarkar/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a 
              href="https://x.com/nirjharsarkar_7" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              title="Twitter"
            >
              <TwitterIcon />
            </a>
            <a 
              href="https://leetcode.com/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>
        </footer>

      </main>

      {/* Interactive Command Terminal Modal */}
      <TerminalModal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        onThemeToggle={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />

    </div>
  );
}

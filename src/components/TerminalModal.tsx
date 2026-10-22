import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minus } from 'lucide-react';
import { PROJECTS, ESSAYS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeToggle: () => void;
  darkMode: boolean;
}

interface CommandHistory {
  command: string;
  output: string | string[];
}

export function TerminalModal({ isOpen, onClose, onThemeToggle, darkMode }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: [
        'Welcome to Nirjhar Sarkar\'s interactive terminal v2.4.0',
        'Type "help" to see available commands or "ls" to list resources.'
      ]
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Escape key handler to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let out: string | string[] = '';
    const parts = cmd.split(' ');
    const main = parts[0];

    switch (main) {
      case 'help':
        out = [
          'Available Commands:',
          '  help        - List all commands',
          '  ls          - List projects and essays',
          '  cat <item>  - Read an essay or project summary',
          '  stats       - View GitHub & algorithmic metrics',
          '  theme       - Toggle dark/light theme',
          '  clear       - Clear terminal screen',
          '  exit        - Close terminal'
        ];
        break;

      case 'ls':
        out = [
          'Projects:',
          ...PROJECTS.map(p => `  • ${p.title} (${p.tags.join(', ')})`),
          '',
          'Essays:',
          ...ESSAYS.map(e => `  • ${e.id} [${e.date}]`)
        ];
        break;

      case 'cat':
        if (parts.length < 2) {
          out = 'Usage: cat <project-name | essay-id>';
        } else {
          const target = parts.slice(1).join(' ').toLowerCase();
          const proj = PROJECTS.find(p => p.title.toLowerCase().includes(target));
          const essay = ESSAYS.find(e => e.id.toLowerCase().includes(target));

          if (proj) {
            out = [
              `[PROJECT: ${proj.title}]`,
              `Tagline: ${proj.tagline}`,
              `Stack: ${proj.tags.join(', ')}`,
              `URL: ${proj.githubUrl}`,
              `Details: ${proj.description}`
            ];
          } else if (essay) {
            out = [
              `[ESSAY: ${essay.title}] (${essay.date} • ${essay.readTime})`,
              '',
              essay.content
            ];
          } else {
            out = `File or resource "${target}" not found. Type "ls" for available items.`;
          }
        }
        break;

      case 'stats':
        out = [
          'ENGINEER METRICS:',
          '  • Public Repositories: 80+',
          '  • LeetCode Problems:   200+ (Graphs, DP, Trees)',
          '  • Primary Stack:       Go, TypeScript, PostgreSQL, Docker',
          '  • Status:              Available for high-impact systems roles'
        ];
        break;

      case 'theme':
        onThemeToggle();
        out = `Switched theme to ${!darkMode ? 'dark' : 'light'} mode.`;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        out = `command not found: ${cmd}. Type "help" for a list of commands.`;
        break;
    }

    setHistory(prev => [...prev, { command: input, output: out }]);
    setInput('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Command Terminal"
    >
      <div 
        ref={modalRef}
        className="w-full max-w-2xl bg-neutral-950 text-neutral-200 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm animate-in fade-in zoom-in-95 duration-150"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 select-none">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-neutral-300">nirjhar@system:~</span>
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <button 
              type="button" 
              onClick={onClose} 
              className="p-1 hover:text-white rounded cursor-pointer" 
              aria-label="Minimize terminal"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="p-1 hover:text-white rounded cursor-pointer" 
              aria-label="Close terminal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-4 h-80 sm:h-96 overflow-y-auto space-y-3">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center space-x-2 text-neutral-400">
                <span className="text-emerald-400 font-bold">λ</span>
                <span className="text-white">{h.command}</span>
              </div>
              {Array.isArray(h.output) ? (
                <div className="space-y-0.5 text-neutral-300 pl-4 border-l border-neutral-800">
                  {h.output.map((line, j) => (
                    <div key={j}>{line}</div>
                  ))}
                </div>
              ) : (
                <div className="text-neutral-300 pl-4 border-l border-neutral-800">{h.output}</div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-1">
            <span className="text-emerald-400 font-bold">λ</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0"
              placeholder="type a command... (try 'help')"
              aria-label="Terminal command input"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

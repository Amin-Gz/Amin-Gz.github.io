import { useState, useEffect, useRef, ReactNode, KeyboardEvent } from 'react';
import { TabId, ThemeMode } from '../types';
import { personalInfo, projects, publications } from '../data/portfolioData';
import { videoProjectsData } from '../data/videoProjectsData';
import {
  Search,
  ArrowRight,
  User,
  Briefcase,
  Layers,
  BookOpen,
  Cpu,
  FileText,
  Video,
  Linkedin,
  Github,
  Sun,
  Moon,
  Laptop,
  Check,
  Copy,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabId) => void;
  onSetTheme: (theme: ThemeMode) => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Navigate' | 'Projects' | 'Videos (Private UI/UX)' | 'Research' | 'Connect' | 'Appearance';
  icon: ReactNode;
  action: () => void;
  badge?: string;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectTab,
  onSetTheme,
  onSelectProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000);
  };

  const allItems: CommandItem[] = [
    // Navigate
    {
      id: 'nav-about',
      title: 'About / Home',
      subtitle: 'Overview, background, and personal intro',
      category: 'Navigate',
      icon: <User className="w-4 h-4 text-blue-500" />,
      action: () => {
        onSelectTab('about');
        onClose();
      },
    },
    {
      id: 'nav-experience',
      title: 'Experience Timeline',
      subtitle: 'Tonb, Ariomex, KeyKavoos Zaman',
      category: 'Navigate',
      icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      action: () => {
        onSelectTab('experience');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Featured Projects',
      subtitle: 'Production web apps & backend architectures',
      category: 'Navigate',
      icon: <Layers className="w-4 h-4 text-purple-500" />,
      action: () => {
        onSelectTab('projects');
        onClose();
      },
    },
    {
      id: 'nav-videos',
      title: 'Confidential Videos & UI/UX Demos',
      subtitle: 'Proprietary enterprise dashboards & recorded flows (Coming Soon)',
      category: 'Navigate',
      icon: <Video className="w-4 h-4 text-blue-500" />,
      action: () => {
        onSelectTab('videos');
        onClose();
      },
      badge: 'Coming Soon',
    },
    {
      id: 'nav-research',
      title: 'Research & Publications',
      subtitle: '6 conference papers in applied AI & optimization',
      category: 'Navigate',
      icon: <BookOpen className="w-4 h-4 text-amber-500" />,
      action: () => {
        onSelectTab('research');
        onClose();
      },
      badge: '6 Papers',
    },
    {
      id: 'nav-stack',
      title: 'Technical Stack',
      subtitle: 'Frontend, backend, databases, tools',
      category: 'Navigate',
      icon: <Cpu className="w-4 h-4 text-cyan-500" />,
      action: () => {
        onSelectTab('stack');
        onClose();
      },
    },
    {
      id: 'nav-cv',
      title: 'Curriculum Vitae (CV)',
      subtitle: 'Academic résumé, education & career milestones',
      category: 'Navigate',
      icon: <FileText className="w-4 h-4 text-rose-500" />,
      action: () => {
        onSelectTab('cv');
        onClose();
      },
    },

    // Video Private UI/UX Demos
    ...videoProjectsData.map((v) => ({
      id: `vid-${v.id}`,
      title: v.title,
      subtitle: `${v.company} · ${v.category} · ${v.duration}`,
      category: 'Videos (Private UI/UX)' as const,
      icon: <Video className="w-4 h-4 text-blue-500" />,
      action: () => {
        onSelectTab('videos');
        onClose();
      },
      badge: v.category,
    })),

    // Selected Projects
    ...projects.map((proj) => ({
      id: `proj-${proj.id}`,
      title: proj.title,
      subtitle: `${proj.category} · ${proj.tagline}`,
      category: 'Projects' as const,
      icon: <Layers className="w-4 h-4 text-neutral-500" />,
      action: () => {
        onSelectTab('projects');
        if (onSelectProject) onSelectProject(proj.id);
        onClose();
      },
      badge: proj.category,
    })),

    // Publications
    ...publications.map((pub) => ({
      id: `pub-${pub.id}`,
      title: pub.title,
      subtitle: `CIVILICA: ${pub.civilicaId} · ${pub.category} (${pub.pages}p)`,
      category: 'Research' as const,
      icon: <BookOpen className="w-4 h-4 text-neutral-500" />,
      action: () => {
        onSelectTab('research');
        onClose();
      },
      badge: pub.category,
    })),

    // Connect
    {
      id: 'connect-email',
      title: 'Copy Email Address',
      subtitle: personalInfo.email,
      category: 'Connect',
      icon: copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-blue-500" />,
      action: copyEmail,
      badge: copied ? 'Copied!' : 'Copy',
    },
    {
      id: 'connect-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/amingoodarzi',
      category: 'Connect',
      icon: <Linkedin className="w-4 h-4 text-blue-600" />,
      action: () => {
        window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'connect-github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/Amin-Gz',
      category: 'Connect',
      icon: <Github className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />,
      action: () => {
        window.open(personalInfo.github, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },

    // Appearance
    {
      id: 'theme-light',
      title: 'Set Theme: Light Mode',
      subtitle: 'Apple-inspired bright neutral canvas (#F5F5F7)',
      category: 'Appearance',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
      action: () => {
        onSetTheme('light');
        onClose();
      },
    },
    {
      id: 'theme-dark',
      title: 'Set Theme: Dark Mode',
      subtitle: 'Apple-inspired deep dark system (#000000)',
      category: 'Appearance',
      icon: <Moon className="w-4 h-4 text-blue-400" />,
      action: () => {
        onSetTheme('dark');
        onClose();
      },
    },
    {
      id: 'theme-system',
      title: 'Set Theme: System Preference',
      subtitle: 'Synchronize automatically with operating system',
      category: 'Appearance',
      icon: <Laptop className="w-4 h-4 text-neutral-500" />,
      action: () => {
        onSetTheme('system');
        onClose();
      },
    },
  ];

  const filteredItems = allItems.filter((item) => {
    const searchTarget = `${item.title} ${item.subtitle || ''} ${item.category}`.toLowerCase();
    return searchTarget.includes(query.toLowerCase());
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 dark:bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="command-palette-modal"
        className="w-full max-w-xl bg-[#FFFFFF] dark:bg-[#1C1C1E] rounded-2xl shadow-2xl border border-[#D2D2D7] dark:border-white/10 overflow-hidden flex flex-col max-h-[75vh]"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#D2D2D7]/60 dark:border-white/10">
          <Search className="w-4 h-4 text-[#86868B]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, video demo, project, paper, or search..."
            className="flex-1 bg-transparent text-sm text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.08]"
            >
              Clear
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#86868B] bg-black/[0.05] dark:bg-white/[0.08] rounded border border-black/[0.06] dark:border-white/[0.06]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-2 space-y-1 flex-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#86868B]">
              No matching commands or results found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  id={`cmd-item-${item.id}`}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-blue-500/10 dark:bg-blue-400/15 text-[#1D1D1F] dark:text-[#F5F5F7]'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-[11px] text-[#86868B] truncate">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-black/[0.04] dark:bg-white/[0.06] text-[#86868B]">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'translate-x-0.5 text-blue-500 opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-black/[0.02] dark:bg-white/[0.02] border-t border-[#D2D2D7]/50 dark:border-white/10 flex items-center justify-between text-[11px] text-[#86868B]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono bg-black/[0.04] dark:bg-white/[0.08] px-1 py-0.5 rounded">↑</kbd>{' '}
              <kbd className="font-mono bg-black/[0.04] dark:bg-white/[0.08] px-1 py-0.5 rounded">↓</kbd> navigate
            </span>
            <span>
              <kbd className="font-mono bg-black/[0.04] dark:bg-white/[0.08] px-1 py-0.5 rounded">↵</kbd> select
            </span>
          </div>
          <span>Spotlight Command</span>
        </div>
      </div>
    </div>
  );
}

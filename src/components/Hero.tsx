import { useState } from 'react';
import { TabId } from '../types';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Check,
  Code2,
  Terminal,
  Database,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onSelectTab: (tab: TabId) => void;
}

export function Hero({ onSelectTab }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [interactiveMarkHovered, setInteractiveMarkHovered] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="pt-12 sm:pt-20 pb-12 sm:pb-16 max-w-4xl mx-auto">
      {/* Top Status Line */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/4 dark:bg-white/6 border border-black/6 dark:border-white/8 mb-8 text-[13px] text-[#6E6E73] dark:text-[#A1A1A6]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>{personalInfo.status}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Main Content (Headline & Copy) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-[-0.03em] text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium tracking-tight text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90 leading-snug">
              {personalInfo.headline}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed max-w-2xl font-normal">
            {personalInfo.supportingCopy}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-view-work-btn"
              onClick={() => onSelectTab('projects')}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white dark:text-black bg-[#1D1D1F] dark:bg-[#F5F5F7] hover:bg-black dark:hover:bg-white transition-all shadow-sm active:scale-[0.98]"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-about-me-btn"
              onClick={() => onSelectTab('experience')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/10 border border-black/6 dark:border-white/8 transition-all"
            >
              Experience & Timeline
            </button>

            <button
              id="hero-research-btn"
              onClick={() => onSelectTab('research')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/3 dark:hover:bg-white/5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>6 Research Papers</span>
            </button>
          </div>

          {/* Tertiary Quick Links */}
          <div className="flex items-center gap-4 pt-3 text-xs text-[#86868B]">
            <a
              id="hero-link-github"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              id="hero-link-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <button
              id="hero-copy-email"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied email!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Visual: Direction B & C — Abstract Geometric Monogram & Developer Workspace Matrix */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div
            onMouseEnter={() => setInteractiveMarkHovered(true)}
            onMouseLeave={() => setInteractiveMarkHovered(false)}
            className="w-full max-w-70 p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-black/8 dark:border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-blue-500/30"
          >
            {/* Minimal Geometric Monogram */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/6 dark:border-white/6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-black flex items-center justify-center font-bold text-sm tracking-tighter">
                  A/G
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Amin Goodarzi</div>
                  <div className="text-[10px] text-[#86868B] font-mono">portfolio.v26</div>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </div>

            {/* Architecture Stack Micro-Fragments */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-black/3 dark:bg-white/4 px-2.5 py-1.5 rounded-md">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-blue-500" />
                  <span>React · Next.js · TS</span>
                </span>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">Frontend</span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-black/3 dark:bg-white/4 px-2.5 py-1.5 rounded-md">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-emerald-500" />
                  <span>Python · Django · Node</span>
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Backend</span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-black/3 dark:bg-white/4 px-2.5 py-1.5 rounded-md">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-purple-500" />
                  <span>PostgreSQL · Docker</span>
                </span>
                <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">Data / Ops</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-black/6 dark:border-white/6 text-center">
              <span className="text-[11px] text-[#86868B] font-mono">
                {interactiveMarkHovered ? '⚡ Ready to collaborate' : '⌘K to search portfolio'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

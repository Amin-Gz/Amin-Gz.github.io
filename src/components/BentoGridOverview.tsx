import { useState } from 'react';
import { TabId } from '../types';
import { personalInfo, projects, experiences } from '../data/portfolioData';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Mail,
  Waves,
  Mountain,
  Dumbbell,
} from 'lucide-react';

interface BentoGridOverviewProps {
  onSelectTab: (tab: TabId) => void;
  onSelectProject?: (projectId: string) => void;
  onOpenProjectModal?: (project: typeof projects[0]) => void;
}

export function BentoGridOverview({
  onSelectTab,
  onSelectProject,
  onOpenProjectModal,
}: BentoGridOverviewProps) {
  const [copied, setCopied] = useState(false);

  const featuredProject = projects.find((p) => p.id === 'avazeh-school') || projects[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleOpenFeatured = () => {
    if (onOpenProjectModal && featuredProject) {
      onOpenProjectModal(featuredProject);
    } else if (onSelectProject && featuredProject) {
      onSelectProject(featuredProject.id);
    } else {
      onSelectTab('projects');
    }
  };

  return (
    <div className="w-full space-y-4 pt-2">
      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
        
        {/* 1. Hero Bento Card (Spans 8 cols on desktop) */}
        <div
          id="bento-hero-card"
          className="md:col-span-8 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-[28px] sm:rounded-4xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Subtle Background Geometric Architectural Watermark */}
          <div className="absolute top-0 right-0 p-8 text-[#1D1D1F] dark:text-white opacity-[0.04] dark:opacity-[0.06] group-hover:opacity-[0.08] dark:group-hover:opacity-[0.12] transition-opacity pointer-events-none">
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <div className="space-y-4 z-10">
            {/* Status & Category Tag */}
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono text-[#007AFF] dark:text-[#0A84FF] uppercase tracking-widest font-semibold">
                Software Engineer
              </div>
              <span className="text-[#D2D2D7] dark:text-white/20">/</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] max-w-2xl">
              Frontend-focused developer{' '}
              <span className="text-[#86868B]">building toward full-stack.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] max-w-xl leading-relaxed">
              I build polished web experiences with React, Next.js, and TypeScript, increasingly scaling across Python, Django, and database architecture.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6 sm:pt-8 z-10">
            <button
              id="bento-view-work-btn"
              onClick={() => onSelectTab('projects')}
              className="bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-black px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-black dark:hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="bento-about-me-btn"
              onClick={() => onSelectTab('cv')}
              className="bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] px-6 py-3 rounded-full text-sm font-medium hover:bg-black/4 dark:hover:bg-white/8 transition-all"
            >
              View CV
            </button>

            <button
              id="bento-copy-email-btn"
              onClick={handleCopyEmail}
              className="text-xs font-mono text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] px-3 py-2 rounded-full transition-colors inline-flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. Stack Bento Card (Spans 4 cols on desktop) */}
        <div
          id="bento-stack-card"
          className="md:col-span-4 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-[28px] sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-start mb-5">
              <div className="space-y-0.5">
                <h2 className="text-xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                  Stack
                </h2>
                <p className="text-xs text-[#86868B]">Core tools & frameworks</p>
              </div>
              <span className="text-[11px] font-mono text-[#86868B] bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 px-2 py-0.5 rounded-md">
                v2.026
              </span>
            </div>

            {/* Quick Tech Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: 'React / Next.js', tag: 'UI' },
                { name: 'TypeScript', tag: 'Core' },
                { name: 'Python / Django', tag: 'API' },
                { name: 'PostgreSQL', tag: 'DB' },
                { name: 'Docker', tag: 'Ops' },
                { name: 'Tailwind CSS', tag: 'CSS' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-2.5 sm:p-3 bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 rounded-xl text-xs font-mono border border-[#D2D2D7] dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center justify-between"
                >
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onSelectTab('stack')}
            className="mt-5 pt-4 border-t border-[#F2F2F7] dark:border-white/10 flex items-center justify-between text-[13px] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] group transition-colors"
          >
            <span>See all tools & libraries</span>
            <span className="text-[#007AFF] dark:text-[#0A84FF] group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </button>
        </div>

        {/* 3. Experience Bento Card (Spans 4 cols on desktop) */}
        <div
          id="bento-experience-card"
          className="md:col-span-4 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-[28px] sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                Experience
              </h2>
              <span className="text-xs font-mono text-[#86868B]">Career Path</span>
            </div>

            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-[#F2F2F7] dark:border-white/10">
                  <div
                    className={`absolute -left-1.25 top-1 w-2 h-2 rounded-full ${
                      idx === 0 ? 'bg-[#007AFF] dark:bg-[#0A84FF]' : 'bg-[#D2D2D7] dark:bg-white/30'
                    }`}
                  />
                  <div className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {exp.company}
                  </div>
                  <div className="text-xs text-[#86868B] font-medium flex items-center justify-between">
                    <span>{exp.role}</span>
                    <span className="font-mono text-[10px]">{exp.period.split('–')[0]?.trim() ?? exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onSelectTab('experience')}
            className="mt-6 pt-4 border-t border-[#F2F2F7] dark:border-white/10 flex items-center justify-between text-[13px] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] group transition-colors"
          >
            <span>Full career timeline</span>
            <span className="text-[#007AFF] dark:text-[#0A84FF] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* 4. Featured Project Bento Card (Spans 5 cols on desktop, High-Contrast Dark Bento Card) */}
        <div
          id="bento-featured-project-card"
          onClick={handleOpenFeatured}
          className="md:col-span-5 bg-[#1C1C1E] text-white border border-[#D2D2D7]/20 dark:border-white/10 rounded-[28px] sm:rounded-4xl p-6 sm:p-8 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
        >
          {/* Angled Mockup Card Graphic on bottom right */}
          <div className="absolute -bottom-6 -right-6 w-48 sm:w-56 h-36 bg-[#2C2C2E] rounded-2xl transform rotate-3 border border-white/10 p-4 transition-transform group-hover:rotate-0 group-hover:scale-105 pointer-events-none shadow-xl">
            <div className="flex items-center gap-1 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400/70" />
              <div className="w-2 h-2 rounded-full bg-amber-400/70" />
              <div className="w-2 h-2 rounded-full bg-green-400/70" />
            </div>
            <div className="w-full h-2.5 bg-white/20 rounded-full mb-2" />
            <div className="w-2/3 h-2 bg-white/10 rounded-full mb-3" />
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-6 bg-white/5 rounded" />
              <div className="h-6 bg-white/5 rounded" />
              <div className="h-6 bg-white/5 rounded" />
            </div>
          </div>

          <div className="space-y-2 z-10 max-w-sm">
            <div className="text-[11px] font-mono text-[#0A84FF] uppercase tracking-wider font-semibold">
              Case Study
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              {featuredProject?.title ?? 'Featured project'}
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed line-clamp-3">
              {featuredProject?.description ?? 'Explore selected engineering work and case studies.'}
            </p>
          </div>

          <div className="mt-8 z-10 flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] font-mono text-white/90 border border-white/10">
                Next.js
              </span>
              <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] font-mono text-white/90 border border-white/10">
                Konva.js
              </span>
              <span className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] font-mono text-white/90 border border-white/10">
                TypeScript
              </span>
            </div>

            <span className="text-xs text-white/80 font-medium group-hover:text-white inline-flex items-center gap-1">
              <span>View details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* 5. Research & Publication Bento Card (Spans 3 cols on desktop) */}
        <div
          id="bento-research-card"
          className="md:col-span-3 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-[28px] sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                Research
              </h2>
              <BookOpen className="w-4 h-4 text-blue-500" />
            </div>

            <div className="text-4xl font-bold text-[#007AFF] dark:text-[#0A84FF] tracking-tight mb-0.5">
              06
            </div>
            <div className="text-[11px] text-[#6E6E73] dark:text-[#A1A1A6] font-mono uppercase tracking-wider mb-3">
              Conference Papers
            </div>

            <p className="text-xs text-[#86868B] leading-relaxed mb-4">
              Exploring Genetic Algorithms, Traffic Forecasting, and E-Learning systems.
            </p>
          </div>

          <div
            onClick={() => onSelectTab('research')}
            className="cursor-pointer bg-[#F5F5F7] dark:bg-[#2C2C2E] p-3.5 rounded-2xl border border-[#D2D2D7]/60 dark:border-white/5 hover:border-blue-500/30 transition-colors"
          >
            <div className="text-[11px] font-bold text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
              Genetic Algorithms in Logistics
            </div>
            <div className="text-[10px] text-[#86868B] font-mono mt-0.5 flex justify-between items-center">
              <span>CIVILICA: MEMARCONF05_278</span>
              <span className="text-blue-600 dark:text-blue-400">→</span>
            </div>
          </div>
        </div>

      </div>

      {/* Secondary Bento Row: Videos, Personality & Philosophy Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
        {/* Confidential Project Walkthroughs Card */}
        <div
          id="bento-videos-teaser-card"
          onClick={() => onSelectTab('videos')}
          className="md:col-span-4 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-blue-500/40 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                Private Demos
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
              Coming Soon
            </span>
          </div>

          <div className="my-3">
            <h3 className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Enterprise UI/UX Demos
            </h3>
            <p className="text-xs text-[#86868B] mt-0.5 line-clamp-2">
              Recorded workflows & design architectures for proprietary company apps (Ariomex, Tonb, etc.) coming soon.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs font-medium text-blue-600 dark:text-blue-400 pt-2 border-t border-[#D2D2D7]/40 dark:border-white/5">
            <span>Preview upcoming demos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Personality & Sports Bento Box */}
        <div className="md:col-span-5 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
              Off the keyboard
            </div>
            <p className="text-xs sm:text-sm text-[#1D1D1F] dark:text-[#F5F5F7] font-medium">
              “{personalInfo.personality}”
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 text-[#6E6E73] dark:text-[#A1A1A6]">
              <Waves className="w-3 h-3 text-cyan-500" />
              <span>Wakeboarding</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 text-[#6E6E73] dark:text-[#A1A1A6]">
              <Mountain className="w-3 h-3 text-blue-500" />
              <span>Snowboarding</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 text-[#6E6E73] dark:text-[#A1A1A6]">
              <Dumbbell className="w-3 h-3 text-emerald-500" />
              <span>Coding</span>
            </span>
          </div>
        </div>

        {/* Quick Contact & Action Bento Box */}
        <div className="md:col-span-3 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Have a project?
            </div>
            <div className="text-xs text-[#86868B]">Let’s build something durable.</div>
          </div>

          <div className="pt-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full text-center block px-4 py-2 rounded-full bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-black text-xs font-medium hover:bg-black dark:hover:bg-white transition-colors shadow-xs"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

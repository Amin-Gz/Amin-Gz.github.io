import { useState } from 'react';
import { ProjectItem } from '../types';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Layers,
  Code2,
  Server,
  Globe,
  CheckCircle2,
} from 'lucide-react';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend' | 'Backend'>('All');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Full-Stack') return p.category === 'Full-Stack' || p.category === 'Web Application';
    return p.category === filter;
  });

  const featured = projects.find((p) => p.id === 'avazeh-school') || projects[0];
  const dayKimya = projects.find((p) => p.id === 'day-kimya');
  const ariomex = projects.find((p) => p.id === 'ariomex-platform');
  const divar = projects.find((p) => p.id === 'divar-sample');
  const cosmetics = projects.find((p) => p.id === 'cosmetics-store');
  const djangoBackend = projects.find((p) => p.id === 'django-backend');

  return (
    <section id="projects-section" className="py-12 max-w-5xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Selected Projects
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A1A1A6]">
            Carefully engineered web platforms, open-source architectures, and production systems.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 self-start sm:self-auto shadow-xs">
          {(['All', 'Full-Stack', 'Frontend', 'Backend'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all ${
                filter === cat
                  ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-black shadow-xs font-semibold'
                  : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid Layout */}
      {filter === 'All' ? (
        <div className="space-y-6">
          {/* 1. Large Featured Project Card: Avazeh School */}
          {featured && (
            <div
              id={`project-card-${featured.id}`}
              onClick={() => setSelectedProject(featured)}
              className="group cursor-pointer rounded-[28px] sm:rounded-[32px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      Featured Platform
                    </span>
                    <span className="text-xs text-[#86868B]">· {featured.metricsOrScope}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featured.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                    {featured.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featured.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:underline">
                      <span>View architecture details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    {featured.liveUrl && (
                      <span className="text-[#86868B] font-mono">avazehschool.ir</span>
                    )}
                  </div>
                </div>

                {/* Abstract Visual / UI Preview */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-[#F5F5F7] dark:bg-[#121214] border border-[#D2D2D7] dark:border-white/10 p-5 flex flex-col justify-between overflow-hidden group-hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/50 dark:border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
                      </div>
                      <span className="text-[10px] font-mono text-[#86868B]">portal.avazeh</span>
                    </div>
                    <div className="space-y-2 py-4">
                      <div className="h-4 w-3/4 bg-blue-500/15 dark:bg-blue-400/20 rounded"></div>
                      <div className="h-3 w-1/2 bg-black/[0.06] dark:bg-white/[0.08] rounded"></div>
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-10 bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/50 dark:border-white/10 rounded-md"></div>
                        <div className="h-10 bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/50 dark:border-white/10 rounded-md"></div>
                        <div className="h-10 bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/50 dark:border-white/10 rounded-md"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-[#86868B] font-mono">
                      <span>Next.js 14 · SSR</span>
                      <span className="text-emerald-600 dark:text-emerald-400">● 100/100 Core Vitals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Two Half-Width Projects: Day Kimya & Ariomex */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayKimya && (
              <div
                id={`project-card-${dayKimya.id}`}
                onClick={() => setSelectedProject(dayKimya)}
                className="group cursor-pointer rounded-[28px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#86868B]">{dayKimya.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {dayKimya.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                    {dayKimya.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {dayKimya.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-[#86868B] font-mono flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>daykimya.com</span>
                  </div>
                </div>
              </div>
            )}

            {ariomex && (
              <div
                id={`project-card-${ariomex.id}`}
                onClick={() => setSelectedProject(ariomex)}
                className="group cursor-pointer rounded-[28px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#86868B]">{ariomex.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {ariomex.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                    {ariomex.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {ariomex.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-[#86868B] font-mono flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>ariomex.ir</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Full-Width & Architecture Section: Divar Sample, Cosmetics Store, Django Backend */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                Architectural Samples & Open Source
              </h3>
              <span className="text-xs text-[#86868B] font-mono">3 repositories</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[divar, cosmetics, djangoBackend].filter(Boolean).map((p) => {
                if (!p) return null;
                return (
                  <div
                    key={p.id}
                    id={`project-card-${p.id}`}
                    onClick={() => setSelectedProject(p)}
                    className="group cursor-pointer rounded-2xl bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-[#86868B]">
                        <span>{p.category}</span>
                        <Github className="w-3.5 h-3.5 group-hover:text-[#1D1D1F] dark:group-hover:text-[#F5F5F7] transition-colors" />
                      </div>
                      <h4 className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#D2D2D7]/40 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#86868B]">
                      <span>{p.technologies[0]}</span>
                      <span className="group-hover:text-blue-500 transition-colors">Details →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Filtered Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer rounded-[22px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.08] p-6 shadow-[0_1px_8px_rgba(0,0,0,0.01)] hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#86868B]">{proj.category}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-black/[0.03] dark:bg-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

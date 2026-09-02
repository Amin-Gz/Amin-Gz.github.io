import { useState } from 'react';
import { experiences } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience-section" className="py-12 max-w-4xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          Work Experience
        </h2>
        <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A1A1A6]">
          Professional journey from hands-on engineering internships to technical team leadership.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.75 sm:before:left-3.75 before:top-3 before:bottom-3 before:w-0.5 before:bg-black/8 dark:before:bg-white/8">
        {experiences.map((exp) => {
          const isHovered = hoveredId === exp.id;
          const isAnyHovered = hoveredId !== null;
          const opacityClass =
            isAnyHovered && !isHovered
              ? 'opacity-60 transition-opacity duration-200'
              : 'opacity-100 transition-opacity duration-200';

          return (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative group ${opacityClass}`}
            >
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                  exp.isCurrent || isHovered
                    ? 'bg-[#1D1D1F] dark:bg-[#F5F5F7] border-transparent text-white dark:text-black shadow-sm'
                    : 'bg-[#F5F5F7] dark:bg-[#1C1C1E] border-black/12 dark:border-white/12 text-[#86868B]'
                }`}
              >
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>

              {/* Card Container */}
              <div
                className={`p-6 sm:p-8 rounded-3xl sm:rounded-[28px] border transition-all duration-200 ${
                  isHovered
                    ? 'bg-[#FFFFFF] dark:bg-[#1C1C1E] border-blue-500/40 dark:border-blue-400/40 shadow-md'
                    : 'bg-[#FFFFFF] dark:bg-[#1C1C1E] border-[#D2D2D7] dark:border-white/10 shadow-sm'
                }`}
              >
                {/* Role and Company Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[#86868B] font-medium hidden sm:inline">·</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </span>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#86868B] hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-1"
                        title="Visit company website"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#86868B] shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#86868B] flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </div>

                {/* Description summary */}
                <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Chips */}
                <div className="pt-3 border-t border-[#D2D2D7]/40 dark:border-white/10 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

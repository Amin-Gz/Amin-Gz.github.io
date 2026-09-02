import { TabId } from '../types';
import {
  personalInfo,
  experiences,
  education,
  languages,
  publications,
} from '../data/portfolioData';
import {
  Download,
  Printer,
} from 'lucide-react';

interface CVSectionProps {
  onSelectTab: (tab: TabId) => void;
}

export function CVSection({ onSelectTab }: CVSectionProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv-section" className="py-12 max-w-4xl mx-auto space-y-10">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D2D2D7]/60 dark:border-white/10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Curriculum Vitae
          </h2>
          <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
            Academic and professional credentials of {personalInfo.name}.
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            id="cv-print-btn"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 hover:bg-black/4 dark:hover:bg-white/6 shadow-xs transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>

          <button
            id="cv-download-btn"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-medium rounded-full text-white dark:text-black bg-[#1D1D1F] dark:bg-[#F5F5F7] hover:bg-black dark:hover:bg-white transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV ↓</span>
          </button>
        </div>
      </div>

      {/* Main CV Document Sheet */}
      <div className="print-page p-8 sm:p-12 rounded-[28px] sm:rounded-4xl bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-sm space-y-10">
        {/* CV Header */}
        <div className="space-y-4 pb-8 border-b border-[#D2D2D7]/50 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                {personalInfo.name}
              </h1>
              <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                {personalInfo.role} · Progressing into {personalInfo.targetRole}
              </p>
            </div>

            <div className="text-xs text-[#86868B] space-y-0.5 sm:text-right font-mono">
              <div>{personalInfo.location}</div>
              <div>{personalInfo.email}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#86868B]">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              linkedin.com/in/amingoodarzi
            </a>
            <span>·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
            >
              github.com/Amin-Gz
            </a>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#86868B]">
            01 / Professional Profile
          </h3>
          <p className="text-sm sm:text-base text-[#1D1D1F] dark:text-[#F5F5F7] leading-relaxed">
            Frontend-focused software developer progressing toward full-stack engineering. Experienced in building responsive, accessible, and high-performance applications with React, Next.js, and TypeScript, with active expansion across Python, Django, database schema design, and Docker containerization. Author of 6 academic publications in applied AI and optimization.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#86868B]">
            02 / Work Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {exp.role}
                    </span>
                    <span className="text-sm text-[#86868B]"> — {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-[#86868B]">{exp.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1 pl-4 list-disc text-xs text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="leading-snug">
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="text-[11px] font-mono text-[#86868B] pt-1">
                  Technologies: {exp.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#86868B]">
            03 / Education
          </h3>

          {education.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {edu.degree}
                  </span>
                  <div className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6]">
                    {edu.institution} · {edu.location}
                  </div>
                </div>
                <span className="text-xs font-mono text-[#86868B]">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Research & Publications Highlight */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#86868B]">
              04 / Academic Research & Publications
            </h3>
            <button
              onClick={() => onSelectTab('research')}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium no-print"
            >
              <span>View dedicated research page ({publications.length} papers) →</span>
            </button>
          </div>

          <div className="space-y-2">
            {publications.map((pub) => (
              <div key={pub.id} className="text-xs text-[#1D1D1F] dark:text-[#F5F5F7] flex items-start gap-2">
                <span className="font-mono text-[#86868B]">{pub.indexNumber}.</span>
                <div>
                  <span className="font-semibold">{pub.title}</span> — <em>{pub.conference}</em> ({pub.year}, {pub.pages}p).{' '}
                  <span className="text-[#86868B] font-mono">CIVILICA: {pub.civilicaId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Selected Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-black/6 dark:border-white/6">
          {/* Languages */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#86868B]">
              05 / Languages
            </h3>
            <div className="space-y-2">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">{l.name}</span>
                  <span className="text-[#6E6E73] dark:text-[#A1A1A6] font-mono">{l.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#86868B]">
              06 / Core Competencies
            </h3>
            <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] space-y-1.5 leading-relaxed">
              <div>
                <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, Konva.js, React DnD, Mantine.
              </div>
              <div>
                <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Backend & DB:</strong> Python, Django REST, Node.js, Express, PostgreSQL, MSSQL, Docker.
              </div>
              <div>
                <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Methodologies:</strong> Component systems, responsive design, a11y, API contract design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

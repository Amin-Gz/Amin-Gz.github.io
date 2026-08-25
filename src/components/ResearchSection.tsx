import { useState } from 'react';
import { PublicationItem, PublicationTopic } from '../types';
import { publications, personalInfo } from '../data/portfolioData';
import {
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Filter,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export function ResearchSection() {
  const [activeFilter, setActiveFilter] = useState<PublicationTopic>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);

  const filters: PublicationTopic[] = ['All', 'AI', 'Optimization', 'Information Systems', 'E-Learning'];

  const filteredPubs = publications.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const handleCopyCivilica = (civilicaId: string) => {
    navigator.clipboard.writeText(civilicaId);
    setCopiedId(civilicaId);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <section id="research-section" className="py-12 max-w-4xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400">
            Academic Research
          </span>
          <span className="text-xs text-[#86868B]">· 6 Conference Publications</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          Research & Publications
        </h2>

        <p className="text-base text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed max-w-3xl">
          Alongside software development, I’ve explored applied AI, optimization, information systems, and educational technology through academic research.
        </p>

        {/* CIVILICA Profile Banner */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs">
          <div className="text-[#6E6E73] dark:text-[#A1A1A6]">
            All 6 papers are indexed on the national CIVILICA academic database.
          </div>
          <a
            href={personalInfo.civilicaProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>View CIVILICA Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-[#D2D2D7]/50 dark:border-white/10">
        {filters.map((f) => (
          <button
            key={f}
            id={`filter-pub-${f}`}
            onClick={() => setActiveFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeFilter === f
                ? 'bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-black font-semibold shadow-xs'
                : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPubs.map((pub) => {
          const isExpanded = expandedPubId === pub.id;
          const isCopied = copiedId === pub.civilicaId;

          return (
            <div
              key={pub.id}
              id={`publication-${pub.civilicaId}`}
              className="p-6 sm:p-7 rounded-[24px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              {/* Header & Meta */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-[#86868B] font-mono text-xs flex items-center justify-center font-bold">
                    {pub.indexNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10">
                    {pub.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyCivilica(pub.civilicaId)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono rounded bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
                    title="Copy CIVILICA ID"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>ID: {pub.civilicaId}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Title & Conference Details */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] leading-snug tracking-tight">
                  {pub.title}
                </h3>
                <div className="text-xs text-[#86868B] flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>{pub.conference}</span>
                  <span>·</span>
                  <span>{pub.year}</span>
                  <span>·</span>
                  <span>{pub.pages} pages</span>
                </div>
              </div>

              {/* Abstract Summary */}
              <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                {pub.abstractSummary}
              </p>

              {/* Expanded Key Contributions */}
              {isExpanded && (
                <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2 animate-in fade-in duration-150">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                    Key Research Contributions
                  </div>
                  <ul className="space-y-1.5">
                    {pub.keyContributions.map((kc, i) => (
                      <li key={i} className="text-xs text-[#1D1D1F] dark:text-[#F5F5F7] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>{kc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer: Topics & Expand toggle */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-black/[0.04] dark:border-white/[0.04]">
                <div className="flex flex-wrap gap-1.5">
                  {pub.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] bg-black/[0.03] dark:bg-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExpandedPubId(isExpanded ? null : pub.id)}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>{isExpanded ? 'Less details' : 'Abstract details'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  <a
                    href={pub.civilicaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] inline-flex items-center gap-1"
                  >
                    <span>CIVILICA</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

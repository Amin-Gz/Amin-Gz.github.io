import { personalInfo } from '../data/portfolioData';
import {
  Code,
  Server,
  Award,
  Waves,
  Mountain,
  Dumbbell,
} from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about-section" className="py-12 max-w-4xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          About & Engineering Philosophy
        </h2>
        <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A1A1A6]">
          Merging frontend craft, rigorous systems thinking, and applied academic research.
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="p-6 sm:p-10 rounded-[28px] sm:rounded-4xl bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-sm space-y-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none text-[#1D1D1F] dark:text-[#F5F5F7] text-base leading-relaxed space-y-4">
          <p>
            I am a frontend-focused software developer with professional experience in modern web architecture and an intentional progression into full-stack engineering. My work centers on creating performant, resilient, and visually deliberate digital interfaces that respect both user attention and backend constraints.
          </p>
          <p className="text-[#6E6E73] dark:text-[#A1A1A6]">
            On the client side, I specialize in <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">React</strong>, <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Next.js</strong>, <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">TypeScript</strong>, and <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Tailwind CSS</strong>. On the service and database layer, I engineer scalable APIs and schema designs using <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Python & Django</strong>, <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Node.js</strong>, <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">PostgreSQL</strong>, and <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Docker</strong>.
          </p>
          <p className="text-[#6E6E73] dark:text-[#A1A1A6]">
            My long-term trajectory is becoming a <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">Senior Full-Stack Developer</strong> capable of leading end-to-end product architecture—from fluid, accessible browser interactions to dependable, containerized microservices.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#D2D2D7]/50 dark:border-white/10">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 border border-[#D2D2D7] dark:border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Code className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Frontend Precision
            </h3>
            <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              Strict TypeScript types, responsive micro-layouts, Canvas graphics (Konva.js), and zero-layout-shift UI.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 border border-[#D2D2D7] dark:border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Backend Foundations
            </h3>
            <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              Django REST framework, relational schema indexing, containerization, and clean architectural boundaries.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 border border-[#D2D2D7] dark:border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Academic Depth
            </h3>
            <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              6 published conference papers spanning Genetic Algorithms, AI traffic models, and Fuzzy Decision Analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Small Personality Moment (As specified in prompt: Section 8) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-black/3 dark:bg-white/4 border border-black/6 dark:border-white/6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono text-[#86868B] uppercase tracking-wider">
            Off the keyboard
          </div>
          <p className="text-sm text-[#1D1D1F] dark:text-[#F5F5F7] font-medium leading-normal">
            “{personalInfo.personality}”
          </p>
        </div>

        {/* Subtle sports micro-badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-white dark:bg-[#2C2C2E] border border-black/6 dark:border-white/8 text-[#6E6E73] dark:text-[#A1A1A6]">
            <Waves className="w-3 h-3 text-cyan-500" />
            <span>Wakeboard</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-white dark:bg-[#2C2C2E] border border-black/6 dark:border-white/8 text-[#6E6E73] dark:text-[#A1A1A6]">
            <Mountain className="w-3 h-3 text-blue-500" />
            <span>Snowboard</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-white dark:bg-[#2C2C2E] border border-black/6 dark:border-white/8 text-[#6E6E73] dark:text-[#A1A1A6]">
            <Dumbbell className="w-3 h-3 text-emerald-500" />
            <span>Fitness</span>
          </span>
        </div>
      </div>
    </section>
  );
}

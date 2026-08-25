import { useState, FormEvent } from 'react';
import { videoProjectsData } from '../data/videoProjectsData';
import {
  Video,
  Clock,
  Sparkles,
  Shield,
  Bell,
  CheckCircle2,
  Film,
} from 'lucide-react';

export function VideosSection() {
  const [notifiedEmails, setNotifiedEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifyMe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInput.trim() && !notifiedEmails.includes(emailInput.trim())) {
      setNotifiedEmails([...notifiedEmails, emailInput.trim()]);
      setSubmitted(true);
      setEmailInput('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="videos-section" className="py-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-200">
      {/* Header with NDA & Coming Soon Context Banner */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proprietary & Enterprise Walkthroughs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Confidential UI/UX Demos
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-medium self-start sm:self-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>Coming Soon · High-Fidelity Screen Recordings</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#A1A1A6] max-w-3xl leading-relaxed">
          Due to corporate Non-Disclosure Agreements (NDA), live production links and internal database records for these enterprise systems remain confidential. Detailed, sanitized UI/UX screen walkthroughs with interactive architectural breakdowns are currently in production and will be published here soon.
        </p>
      </div>

      {/* Main Coming Soon Featured Hero Banner */}
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F7] dark:from-[#1C1C1E] dark:to-[#121214] border border-[#D2D2D7] dark:border-white/10 p-8 sm:p-12 shadow-sm text-center">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
            <Film className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              In Production
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Recorded Walkthroughs & Case Studies Arriving Soon
            </h2>
            <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
              We are finalizing edited video deep-dives demonstrating real-time order books, WebSocket streaming engines, and distributed fleet dispatch systems.
            </p>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/60 dark:border-white/10 text-center">
              <div className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">2</div>
              <div className="text-[11px] text-[#86868B]">Enterprise Demos</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/60 dark:border-white/10 text-center">
              <div className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">1080p 60fps</div>
              <div className="text-[11px] text-[#86868B]">High-Definition</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/60 dark:border-white/10 text-center">
              <div className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">NDA Sanitized</div>
              <div className="text-[11px] text-[#86868B]">Mocked Data</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7]/60 dark:border-white/10 text-center">
              <div className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">UX Breakdowns</div>
              <div className="text-[11px] text-[#86868B]">Step-by-step</div>
            </div>
          </div>

          {/* Notification / inquiry form */}
          <div className="w-full max-w-md pt-2">
            <form onSubmit={handleNotifyMe} className="flex gap-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter email for private preview link"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 text-xs text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#1D1D1F] text-xs font-semibold hover:bg-black dark:hover:bg-white transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Notify</span>
              </button>
            </form>
            {submitted && (
              <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>You're on the early preview list!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Planned Video Releases (Coming Soon Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Upcoming Video Walkthroughs
            </h2>
            <p className="text-xs text-[#86868B]">
              Preview the systems scheduled for video release
            </p>
          </div>
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full font-medium">
            Releasing Soon
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {videoProjectsData.map((project) => (
            <div
              key={project.id}
              id={`video-preview-${project.id}`}
              className="bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-[24px] p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Badge row */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#6E6E73] dark:text-[#A1A1A6] border border-[#D2D2D7]/50 dark:border-white/5">
                    {project.company}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-semibold font-mono">
                    <Clock className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {project.title}
                </h3>
                <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] mt-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Topics / Workflow preview */}
                <div className="mt-4 pt-4 border-t border-[#D2D2D7]/40 dark:border-white/5 space-y-2">
                  <div className="text-[11px] font-mono uppercase text-[#86868B]">
                    Planned Video Chapters
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.keyWorkflows.map((flow, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] text-[11px] text-[#1D1D1F] dark:text-[#F5F5F7]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                        {flow.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech tags & Duration */}
              <div className="mt-6 pt-4 border-t border-[#D2D2D7]/40 dark:border-white/5 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#86868B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#86868B] flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-blue-500" />
                  ~{project.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NDA Notice Banner */}
      <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 flex items-start gap-3.5">
        <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-amber-900 dark:text-amber-200">
          <span className="font-semibold block">Need a private walkthrough for recruitment or due diligence?</span>
          <p className="text-amber-800/90 dark:text-amber-300/90 leading-relaxed">
            If you are evaluating technical capabilities for a senior engineering role or enterprise advisory position, reach out directly via email to schedule a live private video screen share under reciprocal confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}

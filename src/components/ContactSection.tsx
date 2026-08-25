import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-section" className="py-12 max-w-4xl mx-auto space-y-8">
      <div className="p-8 sm:p-12 rounded-[28px] sm:rounded-[32px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-sm space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10">
            <MessageSquare className="w-3 h-3" />
            <span>Get in touch</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight">
            Have something interesting in mind?
          </h2>

          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] max-w-2xl leading-relaxed">
            I’m always interested in meaningful products, challenging engineering problems, and opportunities to keep learning.
          </p>
        </div>

        {/* Primary Contact Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            id="contact-mail-link"
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white dark:text-black bg-[#1D1D1F] dark:bg-[#F5F5F7] hover:bg-black dark:hover:bg-white transition-all shadow-sm active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            <span>Send an email</span>
          </a>

          <button
            id="contact-copy-email-btn"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#86868B]" />
                <span>Copy {personalInfo.email}</span>
              </>
            )}
          </button>

          <a
            id="contact-linkedin-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
          >
            <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
          </a>

          <a
            id="contact-github-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
          >
            <Github className="w-4 h-4 text-[#1D1D1F] dark:text-[#F5F5F7]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
          </a>
        </div>

        {/* Playful line (Section 16) */}
        <div className="pt-4 border-t border-[#D2D2D7] dark:border-white/10">
          <p className="text-xs sm:text-sm text-[#86868B] italic">
            “Worst case, we have a good conversation.”
          </p>
        </div>
      </div>
    </section>
  );
}

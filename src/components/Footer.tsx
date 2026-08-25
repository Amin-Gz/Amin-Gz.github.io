import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDesignSpecs?: () => void;
}

export function Footer({ onOpenDesignSpecs }: FooterProps) {
  const [curiosityCount, setCuriosityCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleCuriosityClick = () => {
    const nextCount = curiosityCount + 1;
    setCuriosityCount(nextCount);
    if (nextCount >= 1) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };

  return (
    <footer className="w-full border-t border-[#D2D2D7] dark:border-white/10 py-8 text-[11px] text-[#86868B] font-medium tracking-wide transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span>© 2026 {personalInfo.name}</span>
          <span>·</span>
          <span>Tehran, Iran</span>
        </div>

        {/* Center / Personality and Easter Egg */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="hidden sm:inline">Wakeboarding · Snowboarding · Coding</span>
          <span className="hidden sm:inline">·</span>
          <div className="relative">
            <button
              id="footer-curiosity-btn"
              onClick={handleCuriosityClick}
              className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors inline-flex items-center gap-1 group cursor-pointer"
              title="Click me"
            >
              <span>Built with</span>
              <span className="underline decoration-dotted text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold group-hover:text-blue-500">curiosity</span>
            </button>

            {showEasterEgg && (
              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-black shadow-lg text-[11px] font-mono whitespace-nowrap animate-in fade-in zoom-in-95 duration-150 flex items-center gap-1.5 z-30">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>⚡ "Stay hungry, stay curious." 🏄‍♂️</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          {onOpenDesignSpecs && (
            <button
              onClick={onOpenDesignSpecs}
              className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              Design Tokens
            </button>
          )}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

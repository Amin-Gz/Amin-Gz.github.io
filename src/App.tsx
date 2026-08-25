import { useState, useEffect } from 'react';
import { TabId, ThemeMode, ProjectItem } from './types';
import { Navigation } from './components/Navigation';
import { BentoGridOverview } from './components/BentoGridOverview';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { StackSection } from './components/StackSection';
import { CVSection } from './components/CVSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { DesignTokensModal } from './components/DesignTokensModal';
import { ProjectModal } from './components/ProjectModal';
import { projects } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('amin-portfolio-theme') as ThemeMode;
      if (saved && ['light', 'dark', 'system'].includes(saved)) return saved;
    }
    return 'system';
  });
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [designSpecsOpen, setDesignSpecsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Apply Theme Mode (Light / Dark / System)
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      let isDark = false;
      if (theme === 'dark') {
        isDark = true;
      } else if (theme === 'light') {
        isDark = false;
      } else {
        isDark = mediaQuery.matches;
      }

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('amin-portfolio-theme', theme);

    const handler = () => {
      if (theme === 'system') applyTheme();
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  // Global Keyboard Shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string) => {
    const proj = projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    } else {
      setActiveTab('projects');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        theme={theme}
        onSetTheme={setTheme}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenDesignSpecs={() => setDesignSpecsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-4 sm:px-6 max-w-6xl w-full mx-auto pb-16">
        {/* Dynamic Tab Views */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-200 space-y-10 pt-4">
            {/* Bento Grid Showcase */}
            <BentoGridOverview
              onSelectTab={handleSelectTab}
              onSelectProject={handleSelectProject}
              onOpenProjectModal={(p) => setSelectedProject(p)}
            />

            {/* In-depth Engineering Philosophy & Profile */}
            <div className="pt-4 border-t border-[#D2D2D7] dark:border-white/10">
              <AboutSection />
            </div>

            <ContactSection />
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="animate-in fade-in duration-200 pt-6 space-y-12">
            <ExperienceSection />
            <ContactSection />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="animate-in fade-in duration-200 pt-6 space-y-12">
            <ProjectsSection />
            <ContactSection />
          </div>
        )}

        {activeTab === 'research' && (
          <div className="animate-in fade-in duration-200 pt-6 space-y-12">
            <ResearchSection />
            <ContactSection />
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="animate-in fade-in duration-200 pt-6 space-y-12">
            <StackSection />
            <ContactSection />
          </div>
        )}

        {activeTab === 'cv' && (
          <div className="animate-in fade-in duration-200 pt-6 space-y-12">
            <CVSection onSelectTab={handleSelectTab} />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenDesignSpecs={() => setDesignSpecsOpen(true)} />

      {/* Spotlight Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectTab={handleSelectTab}
        onSetTheme={setTheme}
        onSelectProject={handleSelectProject}
        onOpenDesignSpecs={() => setDesignSpecsOpen(true)}
      />

      {/* Global Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Figma Design System Foundations & Specifications Modal */}
      <DesignTokensModal
        isOpen={designSpecsOpen}
        onClose={() => setDesignSpecsOpen(false)}
      />
    </div>
  );
}

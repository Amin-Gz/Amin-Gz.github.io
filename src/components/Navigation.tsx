import { useState, useEffect } from 'react';
import { TabId, ThemeMode } from '../types';
import { personalInfo } from '../data/portfolioData';
import {
  Sun,
  Moon,
  Laptop,
  Menu,
  X,
  Video,
} from 'lucide-react';

interface NavigationProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  theme: ThemeMode;
  onSetTheme: (theme: ThemeMode) => void;
  onOpenCommandPalette: () => void;
}

export function Navigation({
  activeTab,
  onSelectTab,
  theme,
  onSetTheme,
  onOpenCommandPalette,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent));
      
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems: { id: TabId; label: string; badge?: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'videos', label: 'Videos', badge: 'Coming Soon' },
    { id: 'research', label: 'Research' },
    { id: 'stack', label: 'Stack' },
    { id: 'cv', label: 'CV' },
  ];

  const cycleTheme = () => {
    if (theme === 'light') onSetTheme('dark');
    else if (theme === 'dark') onSetTheme('system');
    else onSetTheme('light');
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-3.5 h-3.5 text-amber-500" />;
    if (theme === 'dark') return <Moon className="w-3.5 h-3.5 text-blue-400" />;
    return <Laptop className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F5F5F7]/90 dark:bg-[#000000]/90 backdrop-blur-md border-b border-[#D2D2D7] dark:border-white/10 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Brand Identity / Monogram */}
        <div className="flex items-center gap-6">
          <button
            id="nav-brand-button"
            onClick={() => {
              onSelectTab('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-7 h-7 rounded-lg bg-[#1D1D1F] dark:bg-[#FFFFFF] text-white dark:text-black flex items-center justify-center font-semibold text-xs tracking-tight transition-transform duration-200 group-hover:scale-105 shadow-xs">
              AG
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {personalInfo.name}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                  {item.id === 'videos' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions: Search, Theme, Contact */}
        <div className="flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            id="nav-command-btn"
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 rounded-lg px-3 py-1.5 shadow-xs text-[13px] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-all"
            title="Open Command Palette"
          >
            <span>Search</span>
            <span className="px-1.5 py-0.5 bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-[#D2D2D7] dark:border-white/10 rounded-md text-[10px] font-mono">
              {isMac ? '⌘ K' : 'Ctrl K'}
            </span>
          </button>

          {/* Theme Mode Toggle */}
          <button
            id="nav-theme-toggle"
            onClick={cycleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-xs transition-all cursor-pointer"
            title={`Current theme: ${theme} (Click to switch)`}
          >
            {getThemeIcon()}
          </button>

          {/* Direct Contact Action */}
          <button
            id="nav-contact-btn"
            onClick={() => {
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onSelectTab('about');
            }}
            className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-medium text-white dark:text-black bg-[#1D1D1F] dark:bg-[#F5F5F7] hover:bg-black dark:hover:bg-white rounded-full transition-all shadow-xs active:scale-[0.98]"
          >
            Contact
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-md flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7] bg-black/[0.04] dark:bg-white/[0.06]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D2D2D7] dark:border-white/10 bg-[#F5F5F7] dark:bg-[#121214] px-4 py-3 space-y-1 transition-all">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10 font-semibold'
                    : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#D2D2D7]/50 dark:border-white/10 flex items-center justify-between px-2">
            <span className="text-xs text-[#86868B]">Theme</span>
            <div className="flex gap-1">
              {(['light', 'dark', 'system'] as ThemeMode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => onSetTheme(m)}
                  className={`px-2.5 py-1 text-xs rounded capitalize ${
                    theme === m
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] bg-black/[0.04] dark:bg-white/[0.06]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { TabId, ThemeMode } from '../types';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../../assets/gz.jpeg';
import { ProfileDialog } from './ProfileDialog';
import {
  Sun,
  Moon,
  Menu,
  X,
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
  const [profileOpen, setProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMac, setIsMac] = useState(true);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      } else if (event.key === 'Tab') {
        const buttons = sidebarRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', closeOnDesktop);
      if (!desktopQuery.matches) menuToggleRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  const navItems: { id: TabId; label: string; badge?: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'videos', label: 'Videos', badge: 'Coming Soon' },
    { id: 'research', label: 'Research' },
    { id: 'stack', label: 'Stack' },
    { id: 'cv', label: 'CV' },
  ];

  const toggleTheme = () => onSetTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F5F5F7]/90 dark:bg-[#000000]/90 backdrop-blur-md border-b border-[#D2D2D7] dark:border-white/10 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Profile and Brand Identity */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <button
              id="nav-profile-button"
              type="button"
              onClick={() => setProfileOpen(true)}
              className="group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
              aria-label={`Open ${personalInfo.name}'s contact card`}
              aria-haspopup="dialog"
              aria-expanded={profileOpen}
            >
              <img
                src={profilePhoto}
                alt=""
                className="h-8 w-8 rounded-lg border border-black/10 object-cover shadow-xs transition-transform duration-200 group-hover:scale-105 dark:border-white/10"
              />
            </button>
            <button
              id="nav-brand-button"
              type="button"
              onClick={() => {
                onSelectTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group rounded-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Go to About"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {personalInfo.name}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
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
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/4 dark:hover:bg-white/6'
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
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-xs transition-all cursor-pointer"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light'
              ? <Sun className="w-3.5 h-3.5 text-amber-500" />
              : <Moon className="w-3.5 h-3.5 text-blue-400" />}
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
            ref={menuToggleRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-md flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7] bg-black/4 dark:bg-white/6"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/70"
            onMouseDown={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="mobile-navigation-sidebar"
            ref={sidebarRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="mobile-sidebar absolute inset-y-0 right-0 flex h-dvh w-80 max-w-[85vw] flex-col border-l border-[#D2D2D7] bg-white shadow-2xl dark:border-white/10 dark:bg-[#1C1C1E]"
          >
            <div className="flex items-center justify-between border-b border-[#D2D2D7] px-5 py-5 dark:border-white/10">
              <span className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">Navigation</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6E6E73] hover:bg-black/5 hover:text-[#1D1D1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-[#A1A1A6] dark:hover:bg-white/8 dark:hover:text-white"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-4 py-5" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    type="button"
                    onClick={() => {
                      onSelectTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-500/10 font-semibold text-blue-600 dark:text-blue-400'
                        : 'text-[#6E6E73] hover:bg-black/4 hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:bg-white/6 dark:hover:text-[#F5F5F7]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center justify-between border-t border-[#D2D2D7] px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] dark:border-white/10">
              <span className="text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A6]">Theme</span>
              <div className="flex gap-1">
                {(['light', 'dark'] as ThemeMode[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => onSetTheme(mode)}
                    aria-pressed={theme === mode}
                    className={`rounded-lg px-3 py-1.5 text-xs capitalize ${
                      theme === mode
                        ? 'bg-blue-600 font-medium text-white'
                        : 'bg-black/4 text-[#6E6E73] dark:bg-white/6 dark:text-[#A1A1A6]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>,
        document.body,
      )}

      <ProfileDialog isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </header>
  );
}

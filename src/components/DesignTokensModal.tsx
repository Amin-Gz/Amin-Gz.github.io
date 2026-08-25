import { useState } from 'react';
import {
  X,
  Sparkles,
  Layers,
  Palette,
  Type,
  Grid,
  Maximize2,
  Copy,
  Check,
} from 'lucide-react';

interface DesignTokensModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesignTokensModal({ isOpen, onClose }: DesignTokensModalProps) {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'grid' | 'components'>('colors');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToken = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(val);
    setTimeout(() => setCopiedToken(null), 1200);
  };

  const colorTokens = [
    {
      name: 'background-primary',
      light: '#F5F5F7',
      dark: '#000000',
      desc: 'Main canvas background',
    },
    {
      name: 'surface-primary',
      light: '#FFFFFF',
      dark: '#121214',
      desc: 'Primary cards and containers',
    },
    {
      name: 'surface-elevated',
      light: '#FFFFFF',
      dark: '#1C1C1E',
      desc: 'Elevated modals & active panels',
    },
    {
      name: 'surface-secondary',
      light: '#F2F2F7',
      dark: '#2C2C2E',
      desc: 'Subtle item backgrounds & chips',
    },
    {
      name: 'text-primary',
      light: '#1D1D1F',
      dark: '#F5F5F7',
      desc: 'High-contrast headings & titles',
    },
    {
      name: 'text-secondary',
      light: '#6E6E73',
      dark: '#A1A1A6',
      desc: 'Body paragraphs & descriptions',
    },
    {
      name: 'text-tertiary',
      light: '#86868B',
      dark: '#86868B',
      desc: 'Muted metadata & timestamps',
    },
    {
      name: 'accent-primary',
      light: '#007AFF',
      dark: '#0A84FF',
      desc: 'Apple System Blue interactive states',
    },
    {
      name: 'border-subtle',
      light: 'rgba(0,0,0,0.08)',
      dark: 'rgba(255,255,255,0.1)',
      desc: '1px clean architectural boundaries',
    },
  ];

  const typographyScale = [
    { level: 'Hero Heading', size: '52px / 64px', weight: '700 (Bold)', tracking: '-0.03em', usage: 'Main Portfolio Hero' },
    { level: 'Section Heading', size: '32px / 36px', weight: '700 (Bold)', tracking: '-0.02em', usage: 'Tab & Section Titles' },
    { level: 'Card Title', size: '20px / 24px', weight: '700 (Bold)', tracking: '-0.01em', usage: 'Projects, Experience Roles' },
    { level: 'Body Large', size: '18px', weight: '400 (Regular)', tracking: 'normal', usage: 'Hero intro & lead paragraphs' },
    { level: 'Body Standard', size: '15px / 16px', weight: '400 (Regular)', tracking: 'normal', usage: 'General reading text (1.6 line height)' },
    { level: 'Mono / Metadata', size: '11px / 13px', weight: '500 (Medium)', tracking: '0.02em', usage: 'Tech chips, dates, CIVILICA IDs' },
  ];

  return (
    <div
      id="design-tokens-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="design-tokens-content"
        className="w-full max-w-3xl bg-[#FFFFFF] dark:bg-[#1C1C1E] rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Figma Design System Foundations & Specifications
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/[0.05] dark:hover:bg-white/[0.08]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
          {[
            { id: 'colors', label: 'Color Tokens', icon: <Palette className="w-3.5 h-3.5" /> },
            { id: 'typography', label: 'Typography Scale', icon: <Type className="w-3.5 h-3.5" /> },
            { id: 'grid', label: 'Grid & Spacing', icon: <Grid className="w-3.5 h-3.5" /> },
            { id: 'components', label: 'Component Library', icon: <Layers className="w-3.5 h-3.5" /> },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === t.id
                  ? 'bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-black font-semibold'
                  : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {activeTab === 'colors' && (
            <div className="space-y-4">
              <p className="text-[#6E6E73] dark:text-[#A1A1A6]">
                Apple Human Interface Guidelines semantic token system supporting Light and Dark modes.
              </p>
              <div className="space-y-2">
                {colorTokens.map((token) => (
                  <div
                    key={token.name}
                    className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="font-mono font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {token.name}
                      </span>
                      <p className="text-[11px] text-[#86868B]">{token.desc}</p>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0 font-mono text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 rounded-md border border-black/10 shadow-sm"
                          style={{ backgroundColor: token.light }}
                        />
                        <span className="text-[#6E6E73]">{token.light}</span>
                      </div>
                      <span className="text-[#86868B]">|</span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 rounded-md border border-white/20 shadow-sm"
                          style={{ backgroundColor: token.dark }}
                        />
                        <span className="text-[#A1A1A6]">{token.dark}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="space-y-4">
              <p className="text-[#6E6E73] dark:text-[#A1A1A6]">
                Apple SF Pro font hierarchy with geometric fallbacks (Inter) and monospace data tokens (JetBrains Mono).
              </p>
              <div className="space-y-2">
                {typographyScale.map((ts) => (
                  <div
                    key={ts.level}
                    className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-[#1D1D1F] dark:text-[#F5F5F7] text-sm">
                        {ts.level}
                      </div>
                      <div className="text-[11px] text-[#86868B]">{ts.usage}</div>
                    </div>
                    <div className="text-right font-mono text-[11px] text-[#6E6E73] dark:text-[#A1A1A6]">
                      <div>{ts.size}</div>
                      <div className="text-[10px] text-[#86868B]">{ts.weight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'grid' && (
            <div className="space-y-4">
              <p className="text-[#6E6E73] dark:text-[#A1A1A6]">
                Mathematical layout grid with 4/8px spatial increments and responsive container breakpoints.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] space-y-1">
                  <div className="text-blue-600 dark:text-blue-400 font-bold">Desktop Layout</div>
                  <div className="text-[#6E6E73] dark:text-[#A1A1A6]">Max-Width: 1200px</div>
                  <div className="text-[#86868B]">Columns: 12 · Gutter: 24px</div>
                  <div className="text-[#86868B]">Section Spacing: 96px — 128px</div>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] space-y-1">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold">Mobile Layout</div>
                  <div className="text-[#6E6E73] dark:text-[#A1A1A6]">Breakpoint: 390px — 768px</div>
                  <div className="text-[#86868B]">Columns: 4 · Gutter: 16px</div>
                  <div className="text-[#86868B]">Section Spacing: 48px — 64px</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'components' && (
            <div className="space-y-4">
              <p className="text-[#6E6E73] dark:text-[#A1A1A6]">
                Component architecture with strict token integration:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px]">
                {[
                  'Navigation Bar',
                  'Command Palette',
                  'Editorial Project Card',
                  'Timeline Node',
                  'Publication Item',
                  'Civilica ID Badge',
                  'Technology Chip',
                  'Theme Selector',
                  'Print CV Engine',
                  'Contact Module',
                  'Abstract UI Preview',
                  'Curiosity Easter Egg',
                ].map((c) => (
                  <div
                    key={c}
                    className="p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] text-[#1D1D1F] dark:text-[#F5F5F7]"
                  >
                    ✓ {c}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[#86868B]">
          <span>Figma Specs v2.6 · Amin Goodarzi</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg text-xs font-medium bg-black/[0.05] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7]"
          >
            Close Specs
          </button>
        </div>
      </div>
    </div>
  );
}

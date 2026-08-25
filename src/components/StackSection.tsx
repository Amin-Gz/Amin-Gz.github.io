import { useState, ReactNode } from 'react';
import { techStack } from '../data/portfolioData';
import { TechItem } from '../types';
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Wrench,
  Search,
  Check,
} from 'lucide-react';

export function StackSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const categories: {
    id: TechItem['category'];
    label: string;
    icon: ReactNode;
    description: string;
  }[] = [
    {
      id: 'Frontend',
      label: 'Frontend',
      icon: <Code2 className="w-4 h-4 text-blue-500" />,
      description: 'Modern component architectures, typed applications, canvas graphics & design systems.',
    },
    {
      id: 'Mobile',
      label: 'Mobile',
      icon: <Smartphone className="w-4 h-4 text-purple-500" />,
      description: 'Cross-platform mobile apps for iOS and Android with React Native and Expo.',
    },
    {
      id: 'Backend',
      label: 'Backend',
      icon: <Server className="w-4 h-4 text-emerald-500" />,
      description: 'Scalable RESTful services, server scripts, and secure authentication.',
    },
    {
      id: 'Data',
      label: 'Data & Databases',
      icon: <Database className="w-4 h-4 text-amber-500" />,
      description: 'Relational data modeling, schema optimizations, and real-time data sync.',
    },
    {
      id: 'Tools',
      label: 'Tools & DevOps',
      icon: <Wrench className="w-4 h-4 text-rose-500" />,
      description: 'Version control, multi-container orchestration, and CI/CD pipelines.',
    },
  ];

  const filteredTech = techStack.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="stack-section" className="py-12 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          Stack
        </h2>
        <p className="text-base text-[#6E6E73] dark:text-[#A1A1A6]">
          Technologies I use to turn ideas into working products.
        </p>

        {/* Quick Search */}
        <div className="relative max-w-md pt-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies, libraries, tools..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grouped Stack */}
      <div className="space-y-8">
        {categories.map((cat) => {
          const items = filteredTech.filter((t) => t.category === cat.id);
          if (items.length === 0) return null;

          return (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-[28px] bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-white/10 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                      {cat.label}
                    </h3>
                    <p className="text-xs text-[#86868B] hidden sm:block">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#86868B]">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {/* Technology Chips / Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-2">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    id={`tech-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setSelectedTech(tech)}
                    className="group cursor-pointer p-3 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E]/60 border border-[#D2D2D7] dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:bg-white dark:hover:bg-[#2C2C2E] transition-all duration-200 flex flex-col justify-between space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 group-hover:bg-blue-500 transition-colors" />
                    </div>
                    {tech.description && (
                      <p className="text-[11px] text-[#86868B] group-hover:text-[#6E6E73] dark:group-hover:text-[#A1A1A6] line-clamp-2 leading-tight transition-colors">
                        {tech.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

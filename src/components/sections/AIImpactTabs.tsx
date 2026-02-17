import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ─── Types ─── */

export interface DashboardContent {
  windowLabel: string;
  topLeft: { label: string; value: string; desc: string };
  topRight: { label: string; value: string; delta: string };
  alert: { title: string; desc: string; btn: string };
  popup: { title: string; desc: string; accept: string; dismiss: string };
}

export interface AIFeature {
  label: string;
  color: string;
  dashboard: DashboardContent;
}

interface AIImpactTabsProps {
  features: AIFeature[];
}

/* ─── Color System ─── */

const colorClasses: Record<string, { bg: string; text: string; ring: string; border: string }> = {
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', ring: 'ring-purple-500/30', border: 'border-purple-500/40' },
  blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', ring: 'ring-blue-500/30', border: 'border-blue-500/40' },
  teal: { bg: 'bg-teal-500/20', text: 'text-teal-400', ring: 'ring-teal-500/30', border: 'border-teal-500/40' },
  yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', ring: 'ring-yellow-500/30', border: 'border-yellow-500/40' },
};

/* ─── Icons per feature (Heroicons paths) ─── */

const featureIcons = [
  // Copilot / sparkles
  'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z',
  // Phone / call analytics
  'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
  // Chart / marketing insights
  'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
  // Search / prospecting
  'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
];

/* ─── Bar chart data per feature ─── */

const chartData: number[][] = [
  [40, 55, 70, 85, 60, 75, 90], // Copilot
  [65, 45, 80, 55, 70, 60, 50], // Call Analytics
  [30, 50, 45, 75, 60, 80, 55], // Meta Ads
  [50, 70, 40, 60, 85, 75, 65], // Prospecting
];

const accentColors: Record<string, string> = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  teal: 'bg-teal-500',
  yellow: 'bg-yellow-500',
};

/* ─── Component ─── */

export default function AIImpactTabs({ features }: AIImpactTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = features[activeIdx];
  const colors = colorClasses[active.color] ?? colorClasses.purple;
  const d = active.dashboard;
  const bars = chartData[activeIdx] ?? chartData[0];
  const accent = accentColors[active.color] ?? 'bg-purple-500';

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Feature list (left) — ARIA tablist */}
      <div role="tablist" aria-label="AI features" aria-orientation="vertical" className="lg:w-1/3 space-y-3 w-full">
        {features.map((item, i) => {
          const c = colorClasses[item.color] ?? colorClasses.purple;
          const isActive = i === activeIdx;

          return (
            <button
              key={i}
              role="tab"
              id={`ai-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`ai-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIdx(i)}
              onKeyDown={(e) => {
                let newIdx = i;
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                  e.preventDefault();
                  newIdx = (i + 1) % features.length;
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                  e.preventDefault();
                  newIdx = (i - 1 + features.length) % features.length;
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  newIdx = 0;
                } else if (e.key === 'End') {
                  e.preventDefault();
                  newIdx = features.length - 1;
                } else { return; }
                setActiveIdx(newIdx);
                document.getElementById(`ai-tab-${newIdx}`)?.focus();
              }}
              className={cn(
                'w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left group',
                isActive
                  ? `bg-secondary/50 border-border ring-1 ${c.ring}`
                  : 'border-transparent hover:bg-secondary/30',
              )}
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300',
                  c.bg,
                  c.text,
                  isActive && 'scale-110',
                )}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={featureIcons[i] ?? featureIcons[0]}
                  />
                </svg>
              </div>
              <span
                className={cn(
                  'text-base lg:text-lg font-medium transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground',
                )}
              >
                {item.label}
              </span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="ai-tab-indicator"
                  className={cn('ml-auto w-1.5 h-8 rounded-full', accentColors[item.color])}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Dashboard mockup (right) — tabpanel */}
      <div className="lg:w-2/3 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            id={`ai-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`ai-tab-${activeIdx}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-secondary border border-border rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className={cn('px-3 py-1 rounded text-xs', colors.bg, colors.text)}>
                {d.windowLabel}
              </div>
            </div>

            {/* Top metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Chart area */}
              <div className="col-span-2 bg-card p-4 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">{d.topLeft.label}</div>
                <div className="text-lg sm:text-xl font-bold text-foreground mb-3">{d.topLeft.value}</div>

                {/* Bars */}
                <div className="flex items-end gap-1 h-20">
                  {bars.map((h, i) => {
                    const isHighlight = h === Math.max(...bars);
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                        className={cn(
                          'w-1/7 rounded-t relative',
                          isHighlight ? accent : 'bg-surface',
                        )}
                      >
                        {isHighlight && (
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-1 py-0.5 rounded shadow whitespace-nowrap">
                            +{h}%
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="text-[10px] text-muted-foreground mt-2">{d.topLeft.desc}</div>
              </div>

              {/* KPI card */}
              <div className="col-span-1 bg-card p-4 rounded-lg flex flex-col justify-between">
                <div className="text-xs text-muted-foreground">{d.topRight.label}</div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{d.topRight.value}</div>
                <div className="text-[10px] text-green-400">{d.topRight.delta}</div>
              </div>
            </div>

            {/* Alert */}
            <div className={cn('bg-card p-4 rounded-lg border-l-4', colors.border)}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{d.alert.title}</h4>
                  <p className="text-xs text-muted-foreground">{d.alert.desc}</p>
                </div>
                <button
                  className={cn(
                    'px-3 py-1 rounded text-xs transition-colors whitespace-nowrap cursor-pointer',
                    colors.bg,
                    colors.text,
                    'hover:opacity-80',
                  )}
                >
                  {d.alert.btn}
                </button>
              </div>
            </div>

            {/* Popup suggestion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-surface border border-border p-3 sm:p-4 rounded-xl shadow-lg max-w-50 sm:max-w-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className={cn('w-4 h-4', colors.text)} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xs font-bold text-foreground">{d.popup.title}</span>
              </div>
              <p className="text-xs text-muted-foreground">{d.popup.desc}</p>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-primary text-primary-foreground text-xs py-1.5 rounded hover:bg-primary-hover transition-colors cursor-pointer">
                  {d.popup.accept}
                </button>
                <button className="flex-1 bg-surface text-muted-foreground text-xs py-1.5 rounded hover:bg-background-lighter transition-colors cursor-pointer">
                  {d.popup.dismiss}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

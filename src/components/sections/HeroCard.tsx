import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface HeroCardProps {
  translations: Record<string, unknown>;
}

export default function HeroCard({ translations }: HeroCardProps) {
  const t = translations;
  const modules = (t.modules as Array<{ label: string; status: string; color: string }>) ?? [];
  const cardTitle = (t.cardTitle as string) ?? '';
  const cardSubtitle = (t.cardSubtitle as string) ?? '';
  const statsLabel = (t.statsLabel as string) ?? '';
  const statsValue = (t.statsValue as string) ?? '';
  const statsDelta = (t.statsDelta as string) ?? '';
  const automationsLabel = (t.automationsLabel as string) ?? '';
  const automationsValue = (t.automationsValue as string) ?? '';

  const colorMap: Record<string, { dot: string; bg: string; text: string }> = {
    green: { dot: 'bg-green-400', bg: 'bg-green-500/10', text: 'text-green-400' },
    blue: { dot: 'bg-blue-400', bg: 'bg-blue-500/10', text: 'text-blue-400' },
    orange: { dot: 'bg-primary', bg: 'bg-primary/10', text: 'text-primary' },
    purple: { dot: 'bg-purple-400', bg: 'bg-purple-500/10', text: 'text-purple-400' },
    teal: { dot: 'bg-teal-400', bg: 'bg-teal-500/10', text: 'text-teal-400' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="bg-card rounded-2xl shadow-2xl border border-border-light p-6 sm:p-8 relative z-10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-lg">{cardTitle}</h3>
          <p className="text-sm text-muted-foreground">{cardSubtitle}</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-surface rounded-xl p-3.5">
          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-1">
            {statsLabel}
          </p>
          <p className="text-2xl font-bold text-foreground leading-none">{statsValue}</p>
          <p className="text-xs text-green-400 font-medium mt-1">{statsDelta}</p>
        </div>
        <div className="bg-surface rounded-xl p-3.5">
          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-1">
            {automationsLabel}
          </p>
          <p className="text-2xl font-bold text-foreground leading-none">{automationsValue}</p>
          {/* Mini bar chart */}
          <div className="flex items-end gap-0.5 mt-2 h-3">
            {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                className="flex-1 bg-primary/30 rounded-[1px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Active modules */}
      <div className="space-y-2">
        {modules.map((mod, idx) => {
          const colors = colorMap[mod.color] ?? colorMap.green;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
              className="flex items-center gap-3 p-2.5 rounded-lg border border-border-light/50 hover:bg-background-lighter transition-colors"
            >
              <span className={`w-2 h-2 rounded-full ${colors.dot} shrink-0`} />
              <span className="text-sm font-medium text-foreground flex-1 truncate">
                {mod.label}
              </span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} uppercase tracking-wide whitespace-nowrap`}
              >
                {mod.status}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

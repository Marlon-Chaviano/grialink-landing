import { motion, useReducedMotion } from 'framer-motion';
import { PhoneCall, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Kpi {
  label: string;
  value: string;
}

interface CallRow {
  contact: string;
  agent: string;
  direction: string;
  duration: string;
  score: number;
  scoreLabel: string;
  finding: string;
}

interface HeroCardProps {
  translations: Record<string, unknown>;
}

const scoreTone = (score: number) => {
  if (score >= 80) {
    return {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      bar: 'bg-green-500',
      border: 'border-green-500/20',
    };
  }
  if (score >= 60) {
    return {
      bg: 'bg-accent/15',
      text: 'text-accent',
      bar: 'bg-accent',
      border: 'border-accent/25',
    };
  }
  return {
    bg: 'bg-destructive/10',
    text: 'text-destructive',
    bar: 'bg-destructive',
    border: 'border-destructive/25',
  };
};

export default function HeroCard({ translations }: HeroCardProps) {
  const t = translations;
  const pageTitle = (t.pageTitle as string) ?? '';
  const pageSubtitle = (t.pageSubtitle as string) ?? '';
  const recentCallsLabel = (t.recentCallsLabel as string) ?? '';
  const kpis = (t.kpis as Kpi[]) ?? [];
  const calls = (t.calls as CallRow[]) ?? [];
  const aiScoreLabel = (t.aiScoreLabel as string) ?? 'AI Score';

  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeOut',
      }}
      className="relative z-10 overflow-hidden rounded-2xl auth-card shadow-2xl"
      aria-hidden="true"
    >
      <div className="border-b border-white/[0.06] px-5 py-4 sm:px-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-auto text-[10px] font-medium text-muted-foreground">app.grialink.com/call-analytics</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <PhoneCall className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-foreground">{pageTitle}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{pageSubtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border-light border-b border-border-light bg-surface/40">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={kpi.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.35,
              delay: prefersReducedMotion ? 0 : 0.4 + idx * 0.06,
            }}
            className="px-4 py-3.5 sm:px-5"
          >
            <p className="text-[10px] font-medium text-muted-foreground">{kpi.label}</p>
            <p className="text-xl font-extrabold tabular-nums text-foreground">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-4 sm:p-5">
        <p className="mb-3 text-xs font-bold text-foreground">{recentCallsLabel}</p>
        <div className="space-y-2">
          {calls.map((call, idx) => {
            const tone = scoreTone(call.score);
            return (
              <motion.div
                key={call.contact}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.35,
                  delay: prefersReducedMotion ? 0 : 0.5 + idx * 0.08,
                }}
                className={cn(
                  'relative flex flex-col gap-2 rounded-xl border border-border-light bg-surface px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between',
                  call.score < 60 && 'border-l-2 border-l-destructive pl-3',
                )}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-sm font-bold text-foreground">{call.contact}</span>
                    <span className="text-[10px] text-muted-foreground">
                      {call.direction} · {call.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {call.agent}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{call.finding}</p>
                </div>

                <div
                  className={cn(
                    'flex shrink-0 items-center gap-2 rounded-lg border px-2.5 py-1.5',
                    tone.bg,
                    tone.border,
                  )}
                >
                  <Sparkles className={cn('h-3 w-3', tone.text)} strokeWidth={2} />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn('text-[9px] font-bold uppercase tracking-wide', tone.text)}>
                        {call.scoreLabel}
                      </span>
                      <span className={cn('text-xs font-bold tabular-nums', tone.text)}>{call.score}</span>
                    </div>
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-background/60">
                      <div
                        className={cn('h-full rounded-full', tone.bar)}
                        style={{ width: `${call.score}%` }}
                      />
                    </div>
                    <span className="sr-only">{aiScoreLabel}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

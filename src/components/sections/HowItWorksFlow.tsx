import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: string;
  previewTitle: string;
  previewItems?: Array<{ label: string; status: PreviewStatus }>;
  previewNote?: string;
}

type PreviewStatus = 'connected' | 'pending' | 'active';

interface StatusLabels {
  connected: string;
  pending: string;
  active: string;
}

interface HowItWorksFlowProps {
  steps: HowItWorksStep[];
  cta: string;
  statusLabels: StatusLabels;
}

const iconPaths: Record<string, string> = {
  account:
    'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  channels:
    'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  pipeline:
    'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
  ai: 'M13 10V3L4 14h7v7l9-11h-7z',
};

const statusStyles: Record<PreviewStatus, { badge: string; dot: string }> = {
  connected: {
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
    dot: 'bg-green-400',
  },
  pending: {
    badge: 'bg-surface text-muted-foreground border-border-light',
    dot: 'bg-muted-foreground/40',
  },
  active: {
    badge: 'bg-primary/10 text-primary border-primary/20',
    dot: 'bg-primary',
  },
};

export default function HowItWorksFlow({ steps, cta, statusLabels }: HowItWorksFlowProps) {
  const [activeIdx, setActiveIdx] = useState(1);
  const active = steps[activeIdx];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
      <div className="relative" role="tablist" aria-orientation="vertical" aria-label="Setup steps">
        <div
          className="pointer-events-none absolute inset-y-0 left-[2.125rem] z-0 hidden w-0.5 bg-primary/45 sm:left-[2.375rem] sm:block"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-3">
          {steps.map((step, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={step.title}
                type="button"
                role="tab"
                id={`how-step-${i}`}
                aria-selected={isActive}
                aria-controls={`how-panel-${i}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  'relative z-10 flex w-full cursor-pointer items-center gap-5 rounded-2xl border p-4 text-left transition-colors duration-200 sm:gap-6 sm:p-5',
                  isActive
                    ? 'border-primary/30 bg-card shadow-sm'
                    : 'border-border-light bg-card hover:border-border hover:bg-background-lighter',
                )}
              >
                <div className="relative z-10 flex w-9 shrink-0 justify-center sm:w-10">
                  <svg
                    className={cn(
                      'h-8 w-8 sm:h-9 sm:w-9',
                      isActive ? 'text-primary' : 'text-muted-foreground',
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={iconPaths[step.icon] ?? iconPaths.account}
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={cn(
                      'mb-1 text-base font-bold sm:text-lg',
                      isActive ? 'text-foreground' : 'text-foreground/80',
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:sticky lg:top-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            id={`how-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`how-step-${activeIdx}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="overflow-hidden rounded-2xl border border-border-light bg-card shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border-light bg-background-lighter/60 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">app.grialink.com</span>
            </div>

            <div className="p-4 sm:p-6">
              <p className="mb-4 text-xs font-semibold text-primary">{active.previewTitle}</p>

              {active.previewItems && (
                <div className="space-y-2.5">
                  {active.previewItems.map(item => {
                    const styles = statusStyles[item.status];
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border-light bg-surface px-3.5 py-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className={cn('h-2 w-2 shrink-0 rounded-full', styles.dot)} />
                          <span className="truncate text-sm font-medium text-foreground">{item.label}</span>
                        </div>
                        <span
                          className={cn(
                            'shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold',
                            styles.badge,
                          )}
                        >
                          {statusLabels[item.status]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {active.previewNote && (
                <p className="mt-4 rounded-xl border border-border-light bg-background-lighter/80 px-3.5 py-3 text-xs leading-relaxed text-muted-foreground">
                  {active.previewNote}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 text-center lg:text-left">
          <a
            href="https://app.grialink.com/app/auth/register"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-hover active:scale-[0.98]"
          >
            {cta}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

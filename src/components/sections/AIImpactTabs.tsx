import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Building2, CheckCircle, Megaphone, MessageSquare, PhoneCall, Search, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import photoElena from '@/assets/team/sofia.webp';
import photoJames from '@/assets/team/fabian.webp';
import photoSofia from '@/assets/team/yozamy.webp';

/* ─── Types ─── */

export type AIFeatureVariant = 'copilot' | 'calls' | 'marketing' | 'prospector';

export interface AIFeature {
  label: string;
  tagline: string;
  color: string;
  variant: AIFeatureVariant;
  appUrl: string;
  copilot?: {
    contact: string;
    channel: string;
    status: string;
    inbound: string;
    suggestionTitle: string;
    suggestionDraft: string;
    actions: string[];
    chips: string[];
  };
  calls?: {
    kpis: Array<{ label: string; value: string }>;
    aiScoreLabel: string;
    rows: Array<{
      contact: string;
      meta: string;
      finding: string;
      score: number;
      scoreLabel: string;
    }>;
  };
  marketing?: {
    roas: string;
    roasDelta: string;
    cpl: string;
    campaigns: Array<{
      name: string;
      spend: string;
      cpl: string;
      ctr: string;
      status: 'healthy' | 'fatigue';
    }>;
    insight: string;
    statusHealthy: string;
    statusFatigue: string;
  };
  prospector?: {
    query: string;
    meta: string;
    results: Array<{ name: string; title: string; company: string; email: string; photoKey: string; location?: string }>;
    importLabel: string;
  };
}

interface AIImpactTabsProps {
  features: AIFeature[];
  previewLabel: string;
  marketingLabels: { roas: string; cpl: string; period: string };
}

type ColorToken = { bg: string; text: string; border: string; ring: string };

/* ─── Color tokens ─── */

const colorClasses: Record<string, ColorToken> = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/25',
    ring: 'ring-primary/20',
  },
  accent: {
    bg: 'bg-accent/15',
    text: 'text-accent',
    border: 'border-accent/30',
    ring: 'ring-accent/20',
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/25',
    ring: 'ring-green-500/20',
  },
  muted: {
    bg: 'bg-surface',
    text: 'text-foreground',
    border: 'border-border-light',
    ring: 'ring-border',
  },
};

const variantIcons = {
  copilot: MessageSquare,
  calls: PhoneCall,
  marketing: Megaphone,
  prospector: Search,
};

const prospectorPhotos: Record<string, string> = {
  elena: typeof photoElena === 'string' ? photoElena : photoElena.src,
  james: typeof photoJames === 'string' ? photoJames : photoJames.src,
  sofia: typeof photoSofia === 'string' ? photoSofia : photoSofia.src,
};

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

function ContactAvatar({ name, src, size = 56 }: { name: string; src: string; size?: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();

  if (imgError || !src) {
    return (
      <div
        className="flex shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground"
        style={{ width: size, height: size }}
        aria-hidden={!name}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className="shrink-0 rounded-full bg-muted object-cover"
      style={{ width: size, height: size }}
      onError={() => setImgError(true)}
    />
  );
}

function AppChrome({ appUrl, colors, previewLabel }: { appUrl: string; colors: ColorToken; previewLabel: string }) {
  return (
    <div className="border-b border-border-light bg-background-lighter/80 px-4 py-3 sm:px-5">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-red-500/80" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
        <div className="h-2 w-2 rounded-full bg-green-500/80" />
        <span className="ml-auto truncate text-[10px] font-medium text-muted-foreground">{appUrl}</span>
      </div>
      <div className={cn('inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold', colors.bg, colors.text, colors.border)}>
        {previewLabel}
      </div>
    </div>
  );
}

function CopilotPreview({ feature, colors }: { feature: AIFeature; colors: ColorToken }) {
  const data = feature.copilot;
  if (!data) return null;

  return (
    <div className="space-y-4 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-foreground">{data.contact}</p>
          <p className="text-[11px] text-muted-foreground">
            {data.channel} · {data.status}
          </p>
        </div>
        <span className={cn('rounded-full border px-2 py-0.5 text-[10px] font-semibold', colors.bg, colors.text, colors.border)}>
          Copilot
        </span>
      </div>

      <div className="rounded-xl border border-border-light bg-surface px-3.5 py-3">
        <p className="text-xs leading-relaxed text-muted-foreground">{data.inbound}</p>
      </div>

      <div className={cn('rounded-xl border bg-card p-3.5', colors.border)}>
        <div className="mb-2 flex items-center gap-2">
          <Sparkles className={cn('h-3.5 w-3.5', colors.text)} strokeWidth={2} />
          <span className="text-xs font-bold text-foreground">{data.suggestionTitle}</span>
        </div>
        <p className="text-xs leading-relaxed text-foreground">{data.suggestionDraft}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {data.actions.map((action, idx) => (
            <button
              key={action}
              type="button"
              className={cn(
                'cursor-pointer rounded-lg px-2.5 py-1.5 text-[11px] font-semibold transition-colors duration-200',
                idx === 0
                  ? 'bg-primary text-primary-foreground hover:bg-primary-hover'
                  : 'bg-surface text-muted-foreground hover:bg-background-lighter',
              )}
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {data.chips.map(chip => (
          <span key={chip} className="rounded-md bg-surface px-2 py-1 text-[10px] font-medium text-muted-foreground">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function CallsPreview({ feature }: { feature: AIFeature }) {
  const data = feature.calls;
  if (!data) return null;

  return (
    <div className="p-4 sm:p-5">
      <div className="mb-4 grid grid-cols-3 divide-x divide-border-light rounded-xl border border-border-light bg-surface/40">
        {data.kpis.map(kpi => (
          <div key={kpi.label} className="px-3 py-3 sm:px-4">
            <p className="text-[10px] font-medium text-muted-foreground">{kpi.label}</p>
            <p className="text-lg font-extrabold tabular-nums text-foreground">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {data.rows.map(row => {
          const tone = scoreTone(row.score);
          return (
            <div
              key={row.contact}
              className={cn(
                'flex flex-col gap-2 rounded-xl border border-border-light bg-surface px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between',
                row.score < 60 && 'border-l-2 border-l-destructive',
              )}
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-foreground">{row.contact}</p>
                <p className="text-[10px] text-muted-foreground">{row.meta}</p>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{row.finding}</p>
              </div>
              <div className={cn('flex shrink-0 items-center gap-2 rounded-lg border px-2.5 py-1.5', tone.bg, tone.border)}>
                <Sparkles className={cn('h-3 w-3', tone.text)} strokeWidth={2} />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className={cn('text-[9px] font-bold uppercase tracking-wide', tone.text)}>{row.scoreLabel}</span>
                    <span className={cn('text-xs font-bold tabular-nums', tone.text)}>{row.score}</span>
                  </div>
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-background/60">
                    <div className={cn('h-full rounded-full', tone.bar)} style={{ width: `${row.score}%` }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MarketingPreview({
  feature,
  marketingLabels,
}: {
  feature: AIFeature;
  marketingLabels: { roas: string; cpl: string; period: string };
}) {
  const data = feature.marketing;
  if (!data) return null;

  return (
    <div className="space-y-4 p-4 sm:p-5">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border-light bg-surface px-3.5 py-3">
          <p className="text-[10px] font-medium text-muted-foreground">{marketingLabels.roas}</p>
          <p className="text-2xl font-extrabold text-foreground">{data.roas}</p>
          <p className="text-[10px] text-green-400">{data.roasDelta}</p>
        </div>
        <div className="rounded-xl border border-border-light bg-surface px-3.5 py-3">
          <p className="text-[10px] font-medium text-muted-foreground">{marketingLabels.cpl}</p>
          <p className="text-2xl font-extrabold text-foreground">{data.cpl}</p>
          <p className="text-[10px] text-muted-foreground">{marketingLabels.period}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border-light">
        {data.campaigns.map(campaign => (
          <div
            key={campaign.name}
            className="flex flex-col gap-2 border-b border-border-light bg-surface px-3.5 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{campaign.name}</p>
              <p className="text-[10px] text-muted-foreground">
                Spend {campaign.spend} · CPL {campaign.cpl} · CTR {campaign.ctr}
              </p>
            </div>
            <span
              className={cn(
                'shrink-0 self-start rounded-full px-2 py-0.5 text-[10px] font-semibold',
                campaign.status === 'healthy' ? 'bg-green-500/10 text-green-400' : 'bg-accent/15 text-accent',
              )}
            >
              {campaign.status === 'healthy' ? data.statusHealthy : data.statusFatigue}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-accent/25 bg-accent/10 px-3.5 py-3">
        <p className="text-xs leading-relaxed text-foreground">{data.insight}</p>
      </div>
    </div>
  );
}

function ProspectorPreview({ feature }: { feature: AIFeature }) {
  const data = feature.prospector;
  if (!data) return null;

  return (
    <div className="space-y-4 p-4 sm:p-5">
      <div className="rounded-xl border border-border-light bg-surface px-3 py-2.5">
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={2} />
          <p className="text-xs font-medium text-foreground">{data.query}</p>
        </div>
        <p className="mt-1.5 text-[10px] text-muted-foreground">{data.meta}</p>
      </div>

      <div className="space-y-3">
        {data.results.map(result => (
          <div
            key={result.email}
            className="rounded-2xl border border-border-light bg-surface p-4 shadow-sm transition-colors duration-200 hover:border-primary/20"
          >
            <div className="flex items-start gap-3">
              <div
                className="mt-1 h-4 w-4 shrink-0 rounded border border-border-light bg-background"
                aria-hidden="true"
              />
              <ContactAvatar name={result.name} src={prospectorPhotos[result.photoKey] ?? ''} size={48} />
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-semibold text-foreground">{result.name}</h4>
                <p className="text-sm text-muted-foreground">{result.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    {result.company}
                  </span>
                  {result.location ? (
                    <>
                      <span className="text-muted-foreground/50">·</span>
                      <span>{result.location}</span>
                    </>
                  ) : null}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    <CheckCircle className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    <span className="truncate">{result.email}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="w-full cursor-pointer rounded-xl bg-primary px-3 py-2.5 text-xs font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
      >
        {data.importLabel}
      </button>
    </div>
  );
}

function FeaturePreview({
  feature,
  colors,
  marketingLabels,
}: {
  feature: AIFeature;
  colors: ColorToken;
  marketingLabels: { roas: string; cpl: string; period: string };
}) {
  switch (feature.variant) {
    case 'copilot':
      return <CopilotPreview feature={feature} colors={colors} />;
    case 'calls':
      return <CallsPreview feature={feature} />;
    case 'marketing':
      return <MarketingPreview feature={feature} marketingLabels={marketingLabels} />;
    case 'prospector':
      return <ProspectorPreview feature={feature} />;
    default:
      return null;
  }
}

export default function AIImpactTabs({ features, previewLabel, marketingLabels }: AIImpactTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = features[activeIdx];
  const colors = colorClasses[active.color] ?? colorClasses.primary;
  const prefersReducedMotion = useReducedMotion();
  const ActiveIcon = variantIcons[active.variant] ?? MessageSquare;

  return (
    <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-14 lg:items-start">
      <div role="tablist" aria-label="AI features" aria-orientation="vertical" className="w-full lg:w-[38%]">
        <div className="space-y-3">
          {features.map((item, i) => {
            const isActive = i === activeIdx;
            const Icon = variantIcons[item.variant] ?? MessageSquare;

            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                id={`ai-tab-${i}`}
                aria-selected={isActive}
                aria-controls={`ai-panel-${i}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIdx(i)}
                onKeyDown={e => {
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
                  } else {
                    return;
                  }
                  setActiveIdx(newIdx);
                  document.getElementById(`ai-tab-${newIdx}`)?.focus();
                }}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-5 rounded-2xl border p-4 text-left transition-colors duration-200 sm:gap-6 sm:p-5',
                  isActive
                    ? 'border-primary/30 bg-card shadow-sm'
                    : 'border-border-light bg-card hover:border-border hover:bg-background-lighter',
                )}
              >
                <div className="flex w-9 shrink-0 justify-center sm:w-10">
                  <Icon
                    className={cn('h-8 w-8 sm:h-9 sm:w-9', isActive ? 'text-primary' : 'text-muted-foreground')}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={cn(
                      'mb-1 text-base font-bold sm:text-lg',
                      isActive ? 'text-foreground' : 'text-foreground/80',
                    )}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full lg:w-[62%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            id={`ai-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`ai-tab-${activeIdx}`}
            tabIndex={0}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-border-light bg-card shadow-2xl lg:rounded-3xl"
          >
            <AppChrome appUrl={active.appUrl} colors={colors} previewLabel={previewLabel} />
            <div className="border-b border-border-light bg-surface/30 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2.5">
                <div className={cn('flex h-9 w-9 items-center justify-center rounded-lg', colors.bg, colors.text)}>
                  <ActiveIcon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{active.label}</p>
                  <p className="text-[11px] text-muted-foreground">{active.tagline}</p>
                </div>
              </div>
            </div>
            <FeaturePreview feature={active} colors={colors} marketingLabels={marketingLabels} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

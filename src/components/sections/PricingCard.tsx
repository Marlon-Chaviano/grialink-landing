import { cn } from '@/lib/utils';
import type { Plan, FeatureGroup, PlanFeature } from '@/lib/pricing';

/* ─── Icon SVG paths (Lucide-style, 24×24) ─── */
const icons: Record<string, string> = {
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35',
  block: 'M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10ZM4.93 4.93l14.14 14.14',
  contacts: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  brain: 'M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7ZM9 21h6',
  list: 'M3 12h18M3 6h18M3 18h18',
  send: 'M22 2 11 13M22 2l-7 20-4-9-9-4z',
  bot: 'M12 8V4H8M2 14h2M20 14h2M15 13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1M9 13a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z',
  infinity: 'M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8Z',
  admin: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20 21a8 8 0 0 0-16 0',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z',
  chart: 'M3 3v18h18M7 16l4-8 4 4 4-6',
  building: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2ZM22 6l-10 7L2 6',
  messageSquare: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  zap: 'M13 2 3 14h9l-1 10 10-12h-9l1-10z',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3Z',
  headphones: 'M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3ZM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z',
};

/** Map feature labelKey → icon key */
const featureIconMap: Record<string, string> = {
  /* Prospecting & AI */
  enrichedContacts: 'contacts',
  aiCredits: 'brain',
  sequences: 'send',
  noSequences: 'send',
  emailsPerMonth: 'mail',
  basicProspecting: 'search',
  advancedAI: 'brain',
  noAdvancedAI: 'block',
  unlimitedSequences: 'send',
  unlimitedEmails: 'mail',

  /* Platform */
  agentLimit: 'users',
  adminAccounts: 'admin',
  adminAccountsPlural: 'admin',
  unlimitedInboxes: 'list',
  contactsLimit: 'contacts',
  unlimitedContacts: 'contacts',
  conversationsPerMonth: 'messageSquare',
  unlimitedConversations: 'messageSquare',
  teams: 'users',
  unlimitedTeams: 'users',
  automationRules: 'zap',
  unlimitedAutomationRules: 'zap',
  segments: 'filter',
  unlimitedSegments: 'filter',
  unlimitedAgents: 'users',

  /* Advanced */
  callTranscription: 'phone',
  noCallTranscription: 'phone',
  smartDashboard: 'chart',
  noSmartDashboard: 'chart',
  prioritySupport: 'headphones',
  noPrioritySupport: 'headphones',
  multiClinic: 'building',
  noMultiClinic: 'building',
  corporateReports: 'chart',
  noCorporateReports: 'chart',
};

/* ─── Helpers ─── */

function interpolate(template: string, values?: Record<string, string | number>): string {
  if (!values) return template;
  return Object.entries(values).reduce(
    (str, [k, v]) => str.replace(`{${k}}`, String(v)),
    template,
  );
}

/* ─── Component ─── */

interface PricingCardProps {
  plan: Plan;
  isYearly: boolean;
  translations: Record<string, any>;
}

export default function PricingCard({ plan, isYearly, translations }: PricingCardProps) {
  const planT = translations.plans[plan.id] as Record<string, string>;
  const featuresT = translations.features as Record<string, string>;

  const price = isYearly
    ? Math.round(plan.priceYearly / 12)
    : plan.priceMonthly;
  const periodLabel = isYearly ? translations.plans.perYear : translations.plans.perMonth;
  const displayPeriod = isYearly ? translations.plans.perMonth : translations.plans.perMonth;

  // Flatten all features into enabled / disabled lists (no category headers → much shorter cards)
  const allFeatures = plan.featureGroups.flatMap((g) => g.features);
  const enabledFeatures = allFeatures.filter((f) => !f.disabled);
  const disabledFeatures = allFeatures.filter((f) => f.disabled);

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl p-5 h-full transition-all duration-300 group',
        plan.highlighted
          ? 'border-2 border-primary shadow-[0_30px_60px_-15px_rgba(253,113,0,0.2)] bg-card relative z-10 xl:scale-105 xl:-mt-2'
          : 'border border-border-light bg-card hover:border-border shadow-sm'
      )}
    >
      {/* Badge */}
      {planT.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black px-4 py-1 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-primary/30">
          {planT.badge}
        </div>
      )}

      {/* Header */}
      <div className={cn('mb-4', planT.badge && 'pt-2')}>
        <h3
          className={cn(
            'text-lg font-extrabold mb-1.5 uppercase tracking-wide',
            plan.highlighted ? 'text-primary' : 'text-foreground'
          )}
        >
          {planT.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              'font-extrabold tracking-tighter transition-all duration-300',
              plan.highlighted ? 'text-4xl' : 'text-3xl',
              'text-foreground'
            )}
          >
            ${price}
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            {displayPeriod}
          </span>
        </div>

        {/* Yearly total hint */}
        {isYearly && plan.priceYearly > 0 && (
          <p className="text-xs text-muted-foreground mt-0.5">
            ${Math.round(plan.priceYearly)}{periodLabel}
          </p>
        )}

        <p className="text-xs text-muted-foreground mt-2 font-medium leading-snug">
          {planT.description}
        </p>
      </div>

      {/* CTA */}
      <a
        href="https://app.grialink.com/app/auth/register"
        className={cn(
          'w-full py-2.5 px-4 rounded-xl text-sm font-bold transition-all mb-4 text-center block',
          plan.highlighted
            ? 'bg-primary text-primary-foreground hover:brightness-110 shadow-xl shadow-primary/30'
            : plan.priceMonthly === 0
              ? 'bg-surface text-foreground border border-border-light hover:bg-muted'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary-hover'
        )}
      >
        {planT.cta}
      </a>

      {/* Enabled features — compact list */}
      <div className="grow">
        <div className="space-y-2">
          {enabledFeatures.map((feat: PlanFeature) => {
            const iconKey = featureIconMap[feat.labelKey] ?? 'search';
            const label = interpolate(featuresT[feat.labelKey] ?? feat.labelKey, feat.values);
            return (
              <div
                key={feat.labelKey + JSON.stringify(feat.values)}
                className={cn(
                  'flex items-center gap-2',
                  feat.highlight && plan.highlighted && 'bg-primary/5 py-1 px-1.5 rounded-lg -mx-1.5',
                  feat.highlight && !plan.highlighted && 'bg-surface py-1 px-1.5 rounded-lg -mx-1.5',
                )}
              >
                <svg
                  className={cn(
                    'w-4 h-4 shrink-0',
                    feat.bold || plan.highlighted ? 'text-primary' : 'text-muted-foreground'
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={icons[iconKey]} />
                </svg>
                <span
                  className={cn(
                    'text-xs leading-tight',
                    feat.bold ? 'font-bold text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Disabled features — compact inline with ✕ */}
        {disabledFeatures.length > 0 && (
          <div className="mt-3 pt-3 border-t border-border-light space-y-1.5">
            {disabledFeatures.map((feat: PlanFeature) => {
              const label = interpolate(featuresT[feat.labelKey] ?? feat.labelKey, feat.values);
              return (
                <div
                  key={feat.labelKey}
                  className="flex items-center gap-2 opacity-40"
                >
                  <svg className="w-3.5 h-3.5 shrink-0 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  <span className="text-[11px] text-muted-foreground">{label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Plan extras footnote */}
      <div className="mt-4 pt-3 border-t border-border-light space-y-0.5">
        {plan.trialDays ? (
          <p className="text-[11px] text-center text-primary font-semibold">
            {interpolate(featuresT.trialLabel, { days: plan.trialDays })}
          </p>
        ) : null}
        {plan.extraAgentPrice ? (
          <p
            className="text-[11px] text-center text-muted-foreground italic"
            dangerouslySetInnerHTML={{
              __html: interpolate(featuresT.extraAgent, { price: plan.extraAgentPrice }),
            }}
          />
        ) : null}
        {plan.extraAdminPrice ? (
          <p
            className="text-[11px] text-center text-muted-foreground italic"
            dangerouslySetInnerHTML={{
              __html: interpolate(featuresT.extraAdmin, { price: plan.extraAdminPrice }),
            }}
          />
        ) : null}
        {!plan.trialDays && !plan.extraAgentPrice && !plan.extraAdminPrice && (
          <p className="text-xs text-center text-transparent select-none" aria-hidden="true">.</p>
        )}
      </div>
    </div>
  );
}

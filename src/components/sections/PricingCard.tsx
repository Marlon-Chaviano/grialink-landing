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
};

/** Map feature labelKey → icon key */
const featureIconMap: Record<string, string> = {
  basicProspecting: 'search',
  noAdvancedAI: 'block',
  contacts: 'contacts',
  aiCredits: 'brain',
  lists: 'list',
  sequences: 'send',
  aiAgents: 'bot',
  unlimitedAgentsLists: 'infinity',
  adminAccounts: 'admin',
  adminAccountsPlural: 'admin',
  agentLimit: 'users',
  unlimitedAgents: 'users',
  callTranscription: 'phone',
  smartDashboard: 'chart',
  scoringDashboard: 'chart',
  corporateFeatures: 'building',
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
  const categoriesT = translations.categories as Record<string, string>;

  const price = isYearly
    ? Math.round(plan.priceYearly / 12)
    : plan.priceMonthly;
  const periodLabel = isYearly ? translations.plans.perYear : translations.plans.perMonth;
  const displayPeriod = isYearly ? translations.plans.perMonth : translations.plans.perMonth;

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl p-6 h-full transition-all duration-300 group',
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
      <div className={cn('mb-6', planT.badge && 'pt-2')}>
        <h3
          className={cn(
            'text-lg font-extrabold mb-2 uppercase tracking-wide',
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
              plan.highlighted ? 'text-5xl' : 'text-4xl',
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
          <p className="text-xs text-muted-foreground mt-1">
            ${Math.round(plan.priceYearly)}{periodLabel}
          </p>
        )}

        <p className="text-sm text-muted-foreground mt-3 font-medium">
          {planT.description}
        </p>
      </div>

      {/* CTA */}
      <a
        href="https://app.grialink.com/app/auth/register"
        className={cn(
          'w-full py-3 px-4 rounded-xl text-sm font-bold transition-all mb-6 text-center block',
          plan.highlighted
            ? 'bg-primary text-primary-foreground hover:brightness-110 shadow-xl shadow-primary/30'
            : plan.priceMonthly === 0
              ? 'bg-surface text-foreground border border-border-light hover:bg-muted'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary-hover'
        )}
      >
        {planT.cta}
      </a>

      {/* Feature groups */}
      <div className="flex-grow space-y-6">
        {plan.featureGroups.map((group: FeatureGroup) => (
          <div key={group.categoryKey}>
            <h4
              className={cn(
                'text-[10px] font-bold uppercase tracking-widest mb-3 border-b pb-1',
                plan.highlighted
                  ? 'text-primary border-primary/20'
                  : 'text-muted-foreground border-border-light'
              )}
            >
              {categoriesT[group.categoryKey]}
            </h4>
            <div className="space-y-3">
              {group.features.map((feat: PlanFeature) => {
                const iconKey = featureIconMap[feat.labelKey] ?? 'search';
                const label = interpolate(featuresT[feat.labelKey] ?? feat.labelKey, feat.values);
                return (
                  <div
                    key={feat.labelKey + JSON.stringify(feat.values)}
                    className={cn(
                      'flex items-center gap-3',
                      feat.disabled && 'opacity-50',
                      feat.highlight && plan.highlighted && 'bg-primary/5 p-1.5 rounded-lg -mx-1.5',
                      feat.highlight && !plan.highlighted && 'bg-surface p-1.5 rounded-lg -mx-1.5',
                    )}
                  >
                    <svg
                      className={cn(
                        'w-[18px] h-[18px] shrink-0',
                        feat.disabled
                          ? 'text-muted-foreground'
                          : feat.bold || plan.highlighted
                            ? 'text-primary'
                            : 'text-muted-foreground'
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
                        'text-sm',
                        feat.bold ? 'font-bold text-foreground' : 'text-muted-foreground',
                        feat.disabled && 'text-muted-foreground'
                      )}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Extra seller footnote */}
      <div className="mt-6 pt-4 border-t border-border-light">
        {plan.extraSellerPrice ? (
          <p
            className="text-[11px] text-center text-muted-foreground italic"
            dangerouslySetInnerHTML={{
              __html: interpolate(featuresT.extraSeller, { price: plan.extraSellerPrice }),
            }}
          />
        ) : (
          <p className="text-xs text-center text-transparent select-none" aria-hidden="true">.</p>
        )}
      </div>
    </div>
  );
}

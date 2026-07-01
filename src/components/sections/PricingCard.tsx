import { cn } from '@/lib/utils';
import type { Plan } from '@/lib/pricing';

interface PricingCardProps {
  plan: Plan;
  translations: Record<string, any>;
  lang: string;
}

export default function PricingCard({ plan, translations, lang }: PricingCardProps) {
  const planT = translations.plans[plan.id] as Record<string, string | string[]>;
  const highlights = (planT.highlights as string[]) ?? [];
  const perMonthShort = translations.plans.perMonthShort as string;
  const isEnterprise = plan.variant === 'enterprise';
  const isFeatured = plan.variant === 'featured';

  const priceLabel =
    plan.priceMonthly != null ? `$${plan.priceMonthly}` : (planT.priceLabel as string);

  const ctaHref =
    plan.id === 'enterprise'
      ? `/${lang}/contact`
      : 'https://app.grialink.com/app/auth/register';

  return (
    <div className={cn('relative flex h-full w-full', isFeatured && 'xl:-mt-1')}>
      {isFeatured && (
        <div
          className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-b from-primary/45 via-primary/10 to-transparent opacity-90 blur-md"
          aria-hidden="true"
        />
      )}
      {isEnterprise && (
        <div
          className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-b from-primary/25 via-primary/8 to-transparent opacity-70 blur-md"
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          'relative flex h-full w-full flex-col rounded-3xl p-5 transition-all duration-300 lg:p-6',
          plan.variant === 'muted' &&
            'auth-card hover:border-white/12',
          plan.variant === 'default' &&
            'auth-card hover:border-white/12 shadow-sm',
          plan.variant === 'featured' &&
            'auth-card border-2 border-primary shadow-lg shadow-primary/10',
          plan.variant === 'enterprise' &&
            'auth-card border-primary/30 bg-gradient-to-br from-background via-background to-primary/5 shadow-md shadow-primary/10',
        )}
      >
        {planT.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md shadow-primary/30">
              {planT.badge}
            </span>
          </div>
        )}

        <div className={cn('mb-5', planT.badge && 'pt-2')}>
          <h3
            className={cn(
              'mb-3 text-lg font-bold',
              isFeatured && 'text-primary',
              isEnterprise && 'text-primary',
              !isFeatured && !isEnterprise && 'text-foreground',
            )}
          >
            {planT.name}
          </h3>

          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              {priceLabel}
            </span>
            {plan.showPerMonth && (
              <span className="text-xs font-medium text-muted-foreground">/{perMonthShort}</span>
            )}
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground">{planT.description}</p>
        </div>

        <ul className="mb-6 min-h-0 flex-1 space-y-2.5">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5">
              <svg
                className={cn(
                  'mt-0.5 h-4 w-4 shrink-0',
                  isFeatured || isEnterprise ? 'text-primary' : 'text-muted-foreground',
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="text-sm leading-snug text-muted-foreground">{highlight}</span>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          className={cn(
            'mt-auto block w-full shrink-0 rounded-xl px-4 py-3 text-center text-sm font-bold transition-all duration-200',
            plan.variant === 'muted' &&
              'border border-border-light bg-surface text-foreground hover:bg-muted',
            plan.variant === 'default' &&
              'border border-border-light bg-transparent text-foreground hover:bg-surface',
            plan.variant === 'featured' &&
              'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:brightness-110',
            plan.variant === 'enterprise' &&
              'border border-primary/35 bg-transparent text-primary hover:bg-primary/10',
          )}
        >
          {planT.cta}
        </a>
      </div>
    </div>
  );
}

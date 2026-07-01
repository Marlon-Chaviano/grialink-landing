import PricingCard from './PricingCard';
import { plans } from '@/lib/pricing';

interface PricingPlansProps {
  translations: Record<string, any>;
  lang: string;
}

export default function PricingPlans({ translations, lang }: PricingPlansProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-5 lg:gap-4">
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} translations={translations} lang={lang} />
      ))}
    </div>
  );
}

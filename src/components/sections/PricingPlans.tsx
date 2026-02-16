import PricingCard from './PricingCard';
import { plans } from '@/lib/pricing';

interface PricingPlansProps {
  translations: Record<string, any>;
}

export default function PricingPlans({ translations }: PricingPlansProps) {
  const activePlans = plans.filter((p) => p.active);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
        {activePlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isYearly={false}
            translations={translations}
          />
        ))}
      </div>
    </div>
  );
}

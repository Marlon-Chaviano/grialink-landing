import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PricingToggleProps {
  monthlyLabel: string;
  yearlyLabel: string;
  saveLabel: string;
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
}

export default function PricingToggle({
  monthlyLabel,
  yearlyLabel,
  saveLabel,
  isYearly,
  onToggle,
}: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span
        className={cn(
          'text-sm font-semibold transition-colors',
          !isYearly ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {monthlyLabel}
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={isYearly}
        aria-label={`${monthlyLabel} / ${yearlyLabel}`}
        onClick={() => onToggle(!isYearly)}
        className={cn(
          'relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
          isYearly ? 'bg-primary' : 'bg-muted'
        )}
      >
        <span
          className={cn(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200',
            isYearly ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>

      <span
        className={cn(
          'text-sm font-semibold transition-colors',
          isYearly ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {yearlyLabel}
      </span>

      {isYearly && (
        <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
          {saveLabel}
        </span>
      )}
    </div>
  );
}

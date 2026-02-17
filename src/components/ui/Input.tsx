import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-lg border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        error
          ? 'border-destructive focus:ring-destructive/50 focus:border-destructive'
          : 'border-border hover:border-muted-foreground/30',
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        'w-full rounded-lg border bg-surface px-4 py-3 text-foreground appearance-none',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E")] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem]',
        error
          ? 'border-destructive focus:ring-destructive/50 focus:border-destructive'
          : 'border-border hover:border-muted-foreground/30',
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    >
      {children}
    </select>
  ),
);

Select.displayName = 'Select';

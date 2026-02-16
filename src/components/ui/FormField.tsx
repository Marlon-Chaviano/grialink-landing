import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  /** Unique id that links label to input */
  htmlFor: string;
  /** Field label text */
  label: string;
  /** Validation error message (shown below input) */
  error?: string;
  /** Additional wrapper class */
  className?: string;
  children: ReactNode;
}

export function FormField({ htmlFor, label, error, className, children }: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          className="text-xs text-destructive mt-1"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

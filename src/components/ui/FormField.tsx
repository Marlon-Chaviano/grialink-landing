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
  const errorId = `${htmlFor}-error`;

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
          id={errorId}
          className="text-xs text-destructive mt-1 flex items-center gap-1"
          role="alert"
          aria-live="polite"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

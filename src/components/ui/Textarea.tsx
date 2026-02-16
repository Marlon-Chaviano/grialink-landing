import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-lg border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60',
        'transition-colors duration-200 resize-y min-h-[8rem]',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        error
          ? 'border-destructive focus:ring-destructive/50 focus:border-destructive'
          : 'border-border',
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';

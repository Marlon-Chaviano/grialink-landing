import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
        secondary:
          'bg-foreground text-background hover:opacity-90',
        ghost:
          'text-muted-foreground hover:bg-surface border border-transparent hover:border-border',
        outline:
          'border border-border bg-transparent hover:bg-background-lighter text-muted-foreground',
        white:
          'bg-white/90 text-brand-navy hover:bg-white hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg',
      },
      size: {
        sm: 'text-sm px-4 py-2 rounded-full',
        md: 'text-base px-6 py-3 rounded-full',
        lg: 'text-lg px-8 py-4 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };

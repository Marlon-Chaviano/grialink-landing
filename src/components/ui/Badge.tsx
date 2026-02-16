import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border',
  {
    variants: {
      variant: {
        primary:
          'text-primary bg-primary/10 border-primary/20',
        success:
          'text-green-400 bg-green-500/15 border-green-500/20',
        info:
          'text-blue-400 bg-blue-500/15 border-blue-500/20',
        white:
          'text-primary-foreground bg-primary border-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };

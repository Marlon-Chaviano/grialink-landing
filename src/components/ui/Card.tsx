import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({
  className,
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-6',
        hover && 'hover:shadow-lg transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

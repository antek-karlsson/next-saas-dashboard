import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        solid: 'bg-neutral-900 text-white',
        outline: 'bg-neutral-900/0 border border-neutral-200 text-neutral-900',
      },
      size: {
        default: 'px-4 py-2 text-sm',
        sm: 'px-3 py-1.5 text-xs',
        lg: 'px-5 py-2.5 text-base',
      },
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export default function AppButton({
  variant = 'solid',
  size = 'default',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props}>
      {children}
    </button>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]',
    success: 'bg-[var(--color-success)]/20 text-[var(--color-success)]',
    warning: 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]',
    info: 'bg-blue-500/20 text-blue-400',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

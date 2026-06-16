/**
 * Reusable Card Component
 * @component
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {Object} hoverEffect - Apply hover effects
 */
export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  const hoverClass = hoverEffect
    ? 'transition-all hover:ring-amber-200/50 hover:bg-slate-950/80'
    : '';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-950/50 ring-1 ring-white/10 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

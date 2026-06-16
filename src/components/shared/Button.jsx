/**
 * Reusable Button Component
 * @component
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'outline'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {ReactNode} children - Button content
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer';

  const variants = {
    primary: 'bg-amber-200 text-slate-900 hover:bg-amber-300 focus-visible:outline-amber-200',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600 focus-visible:outline-slate-400',
    outline: 'border-2 border-amber-200 text-amber-200 hover:bg-amber-200/10 focus-visible:outline-amber-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Reusable Section Container Component
 * @component
 * @param {ReactNode} children - Section content
 * @param {string} className - Additional CSS classes
 * @param {string} bgColor - Background color class
 */
export const SectionContainer = ({
  children,
  className = '',
  bgColor = 'bg-slate-950',
}) => (
  <section className={`${bgColor} px-6 py-20 text-slate-100 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

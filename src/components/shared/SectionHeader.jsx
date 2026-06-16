/**
 * Reusable Section Header Component
 * @component
 * @param {string} subtitle - Section subtitle/label
 * @param {string} title - Main section title
 * @param {string} description - Section description
 */
export const SectionHeader = ({ subtitle, title, description }) => (
  <div className="text-center" data-aos="fade-up">
    {subtitle && (
      <p className="text-sm uppercase tracking-[0.35em] text-amber-200">
        {subtitle}
      </p>
    )}
    {title && (
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    )}
    {description && (
      <p className="mx-auto mt-6 max-w-2xl text-slate-400 leading-8">
        {description}
      </p>
    )}
  </div>
);

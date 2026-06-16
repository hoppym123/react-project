/**
 * Reusable Section Grid Component for displaying items
 * @component
 * @param {Array} items - Items to render
 * @param {function} renderItem - Function to render each item
 * @param {number} columns - Number of columns (2 or 3)
 */
export const SectionGrid = ({
  items,
  renderItem,
  columns = 3,
  className = '',
}) => {
  const gridClass = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-8 ${gridClass} ${className}`}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
};

import { cn } from '@/src/lib/utils';
import { X } from 'lucide-react';

export const FilterSidebar = ({
  showFilters,
  onToggle,
  className,
  ...filterProps
}) => {
  return (
    <>
      {/* Overlay */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Drawer */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 lg:top-24 h-full lg:h-[calc(100vh-6rem)] bg-background lg:bg-transparent z-30 lg:z-auto',
          'transition-transform duration-300 lg:transition-none',
          showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          className
        )}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <span className="font-bold text-lg">Filters</span>
          <button onClick={onToggle}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 lg:p-0 overflow-y-auto h-full">
          {/* Paste all your existing filter blocks here */}
        </div>
      </aside>
    </>
  );
};
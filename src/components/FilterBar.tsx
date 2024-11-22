import { Search, SlidersHorizontal } from 'lucide-react';
import type { Filter } from '../types';

interface FilterBarProps {
  filters: Filter;
  onFilterChange: (filters: Filter) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const platforms = ['All', 'Instagram', 'Twitter', 'TikTok', 'YouTube'];
  
  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by niche..."
            className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => onFilterChange({ ...filters, niche: e.target.value })}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-gray-200 hover:bg-gray-600">
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {platforms.map((platform) => (
          <button
            key={platform}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              filters.platform === platform
                ? 'bg-purple-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => onFilterChange({ 
              ...filters, 
              platform: platform === 'All' ? undefined : platform 
            })}
          >
            {platform}
          </button>
        ))}
      </div>
    </div>
  );
}
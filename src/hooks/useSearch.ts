import { useState } from 'react';
import type { SearchParams, FilterOptions } from '../types';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    from: '',
    to: '',
    date: '',
    passengers: 1,
  });

  const [filters, setFilters] = useState<FilterOptions>({
    busTypes: [],
    priceRange: [0, 5000],
    departureTimes: [],
    amenities: [],
    minRating: 0,
  });

  const updateSearchParams = (params: Partial<SearchParams>) => {
    setSearchParams((prev) => ({ ...prev, ...params }));
  };

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    searchParams,
    filters,
    updateSearchParams,
    updateFilters,
  };
};

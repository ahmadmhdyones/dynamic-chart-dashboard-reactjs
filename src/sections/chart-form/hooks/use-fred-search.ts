import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import fredService from '@/services/api/fred.service';
import type { IFredSeries } from '@/services/api/fred.types';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

interface Props {
  initialSearchTerm?: string;
  initialPage?: number;
  pageSize?: number;
}

export const useFredSearch = ({ initialPage = 1, initialSearchTerm = '', pageSize = 10 }: Props = {}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialSearchTerm);
  const [page, setPage] = useState(initialPage);
  const [allResults, setAllResults] = useState<IFredSeries[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(1); // Reset page when search term changes
      setAllResults([]); // Clear previous results
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  // Query FRED API for series data
  const { data, error, isError, isLoading, refetch } = useQuery({
    enabled: debouncedSearchTerm.length > 0,
    queryFn: async () => {
      if (!debouncedSearchTerm) return { seriess: [] };

      return fredService.searchSeries({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        search_text: debouncedSearchTerm,
      });
    },
    queryKey: [queryKeys.fredSeries(), debouncedSearchTerm, page, pageSize],
  });

  // Track loading state for pagination
  useEffect(() => {
    // If we're loading and it's not the first page, we're loading more
    setIsLoadingMore(isLoading && page > 1);
  }, [isLoading, page]);

  // Append new results to all results
  useEffect(() => {
    if (data?.seriess && data.seriess.length > 0) {
      setAllResults(prev => {
        // If it's the first page, replace all results
        if (page === 1) {
          return [...data.seriess];
        }

        // Otherwise, append new results
        // Filter out duplicates
        const existingIds = new Set(prev.map(item => item.id));
        const newItems = data.seriess.filter(item => !existingIds.has(item.id));

        return [...prev, ...newItems];
      });
    }
  }, [data, page]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setAllResults([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // We have more results if the current page returned a full page of results
  const hasMoreResults = (data?.seriess && data.seriess.length >= pageSize) ?? false;

  return {
    allResults,
    debouncedSearchTerm,
    error,
    handleClearSearch,
    handleLoadMore,
    handleSearchChange,
    hasMoreResults,
    isError,
    isLoading,
    isLoadingMore,
    page,
    refetch,
    searchTerm,
  };
};

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import type { IFredSeries } from '@/services/api/fred.types';

import SeriesCard from './series-card';
import SeriesCardSkeleton from './series-card-skeleton';

// ----------------------------------------------------------------------

interface SearchResultsProps {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  results: IFredSeries[];
  searchTerm: string;
  selectedSeries: IFredSeries[];
  onSeriesSelect: (series: IFredSeries) => void;
  onLoadMore: () => void;
  hasMoreResults: boolean;
  isLoadingMore?: boolean;
  hasReachedMaxSeries?: boolean;
}

function SearchResults({
  error,
  hasMoreResults,
  hasReachedMaxSeries = false,
  isError,
  isLoading,
  isLoadingMore = false,
  onLoadMore,
  onSeriesSelect,
  results,
  searchTerm,
  selectedSeries,
}: SearchResultsProps) {
  if (!searchTerm) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography color='text.secondary' variant='body1'>
          Enter a search term to find FRED data series
        </Typography>
      </Box>
    );
  }

  if (isLoading && results.length === 0 && searchTerm) {
    return (
      <Box>
        <Grid container spacing={3}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item key={index} md={6} xs={12}>
              <SeriesCardSkeleton />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity='error' sx={{ mb: 2 }}>
        Error loading data: {(error as Error).message}
      </Alert>
    );
  }

  if (results.length === 0) {
    return (
      <Alert severity='info' sx={{ mb: 2 }}>
        No results found for "{searchTerm}". Try a different search term.
      </Alert>
    );
  }

  const selectedIds = new Set(selectedSeries.map(s => s.id));

  return (
    <>
      {hasReachedMaxSeries && (
        <Alert severity='warning' sx={{ mb: 3 }}>
          You've reached the maximum number of data series allowed. Remove a series to add a new one.
        </Alert>
      )}

      <Grid container spacing={3}>
        {results.map(series => (
          <Grid item key={series.id} md={6} xs={12}>
            <SeriesCard
              isDisabled={hasReachedMaxSeries && !selectedIds.has(series.id)}
              isSelected={selectedIds.has(series.id)}
              onSelect={onSeriesSelect}
              series={series}
            />
          </Grid>
        ))}
      </Grid>

      {results.length > 0 && (hasMoreResults || isLoadingMore) && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            disabled={isLoadingMore}
            onClick={onLoadMore}
            startIcon={isLoadingMore ? <CircularProgress size={16} /> : null}
            sx={{ minWidth: '150px' }}
            variant='outlined'
          >
            {isLoadingMore ? 'Loading more...' : 'Load More'}
          </Button>
        </Box>
      )}
    </>
  );
}

export default SearchResults;

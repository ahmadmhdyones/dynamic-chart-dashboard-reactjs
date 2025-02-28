import { use, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import { getRandomColor } from '@/helpers/color.utils';
import type { IFredSeries } from '@/services/api/fred.types';
import { CHARTS_MAX_DATA_SERIES } from '@/configs/charts.config';
import { useFredSearch } from '@/services/api/hooks/use-fred-search';
import ScrollableContainer from '@/components/common/scrollable-container';
import { ChartFormContext } from '@/sections/chart-form/contexts/chart-form-context';

import SearchResults from './search-results';
import SelectedSeriesList from './selected-series-list';

// ----------------------------------------------------------------------

export const DATA_SOURCE_STEP_TITLE = 'Choose Data Source';

// ----------------------------------------------------------------------

function DataSourceStep() {
  const {
    addSeries,
    formData: { series: selectedSeries },
    removeSeries,
  } = use(ChartFormContext)!;
  const [selectedSeriesInfos, setSelectedSeriesInfos] = useState<IFredSeries[]>([]);

  const {
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
    searchTerm,
  } = useFredSearch();

  const handleRemoveSeries = (seriesId: string) => {
    removeSeries(seriesId);
    setSelectedSeriesInfos(prev => prev.filter(s => s.id !== seriesId));
  };
  const handleAddSeries = (series: IFredSeries) => {
    setSelectedSeriesInfos(prev => [...prev, series]);
    addSeries({
      color: getRandomColor(),
      data: series,
      id: series.id,
      label: series.title,
      opacity: 1,
    });
  };

  const handleSelectSeries = (series: IFredSeries) => {
    // Check if the series is already selected
    const isAlreadySelected =
      selectedSeriesInfos.some(s => s.id === series.id) && selectedSeries.some(s => s.id === series.id);

    if (isAlreadySelected) {
      // If already selected, remove it
      handleRemoveSeries(series.id);
    } else {
      // If not selected and we haven't reached the max, add it
      if (selectedSeriesInfos.length < CHARTS_MAX_DATA_SERIES) {
        handleAddSeries(series);
      }
    }
  };

  // Check if we've reached the maximum number of data series allowed
  const hasReachedMaxSeries = selectedSeriesInfos.length >= CHARTS_MAX_DATA_SERIES;

  return (
    <Box sx={{ py: 2 }}>
      <Typography gutterBottom variant='h6'>
        {DATA_SOURCE_STEP_TITLE}
      </Typography>
      <Typography color='text.secondary' sx={{ mb: 3 }} variant='body2'>
        Search and select data series from the Federal Reserve Economic Data (FRED). You can add up to{' '}
        <Typography component='span' sx={{ fontWeight: 'bold' }}>
          {CHARTS_MAX_DATA_SERIES}
        </Typography>{' '}
        data series.
      </Typography>

      {selectedSeries.length > 0 ? (
        <SelectedSeriesList onRemoveSeries={handleRemoveSeries} selectedSeries={selectedSeries} />
      ) : (
        <Paper sx={{ bgcolor: 'background.neutral', mb: 3, p: 3, textAlign: 'center' }}>
          <Typography color='warning.main' variant='subtitle1'>
            No series added to chart yet. Please select and add at least one series to proceed.
          </Typography>
        </Paper>
      )}

      <Paper sx={{ mb: 3, p: 2 }}>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: searchTerm && (
              <InputAdornment position='end'>
                <IconButton aria-label='clear search' edge='end' onClick={handleClearSearch}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label='Search FRED Data Series'
          onChange={e => handleSearchChange(e.target.value)}
          placeholder='e.g., GDP, inflation, unemployment'
          value={searchTerm}
          variant='outlined'
        />
      </Paper>

      <ScrollableContainer sx={{ height: 'inherit', maxHeight: '455px' }}>
        <SearchResults
          error={error}
          hasMoreResults={hasMoreResults}
          hasReachedMaxSeries={hasReachedMaxSeries}
          isError={isError}
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
          onLoadMore={handleLoadMore}
          onSeriesSelect={handleSelectSeries}
          results={allResults}
          searchTerm={debouncedSearchTerm}
          selectedSeries={selectedSeriesInfos}
        />
      </ScrollableContainer>
    </Box>
  );
}

export default DataSourceStep;

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';

import type { Chart } from '@/types/chart.types';

import { ChartFactory } from '@/helpers/chart-factory';
import { useChartData } from '@/sections/chart-form/hooks/use-chart-data';

// ----------------------------------------------------------------------

export interface ChartPreviewProps {
  chart: Chart;
  height?: number | string;
  width?: number | string;
  showPlaceholders?: boolean;
}

function ChartPreview({ chart, height = 300, showPlaceholders = true, width = '100%' }: ChartPreviewProps) {
  const { series } = chart;
  const { data: chartData = [], error, isError, isLoading } = useChartData({ chart });

  if (series.length === 0 && showPlaceholders) {
    return (
      <Box sx={{ alignItems: 'center', display: 'flex', height, justifyContent: 'center', width }}>
        <Typography color='text.secondary' variant='body1'>
          Select a data source to preview the chart
        </Typography>
      </Box>
    );
  }

  if (isLoading && showPlaceholders) {
    return (
      <Box
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height, justifyContent: 'center', width }}
      >
        <CircularProgress sx={{ mb: 2 }} />
        <Typography color='text.secondary' variant='body2'>
          Fetching data from FRED...
        </Typography>
        <Typography color='text.secondary' sx={{ maxWidth: '80%', mt: 1, textAlign: 'center' }} variant='caption'>
          This may take a moment, especially for high-frequency data (daily/weekly) or multiple series
        </Typography>
      </Box>
    );
  }

  if (isError && showPlaceholders) {
    return (
      <Box sx={{ height, p: 2, width }}>
        <Alert
          action={
            chartData.length > 0 ? (
              <Typography color='text.secondary' sx={{ display: 'block', mt: 1 }} variant='caption'>
                Showing partial data
              </Typography>
            ) : (
              <Typography color='text.secondary' sx={{ display: 'block', mt: 1 }} variant='caption'>
                Using mock data as fallback
              </Typography>
            )
          }
          severity='error'
        >
          <AlertTitle>Error loading data</AlertTitle>
          {error instanceof Error ? error.message : 'Failed to fetch data from FRED API'}
        </Alert>

        {chartData.length > 0 && (
          <Box sx={{ mt: 2 }}>{ChartFactory.createChart(chart, { chartData, height, width })}</Box>
        )}
      </Box>
    );
  }

  if (chartData.length === 0 && showPlaceholders) {
    return (
      <Box sx={{ alignItems: 'center', display: 'flex', height, justifyContent: 'center', width }}>
        <Typography color='text.secondary' variant='body1'>
          No data available for the selected series
        </Typography>
      </Box>
    );
  }

  // Check if we have data for all selected series
  const missingSeriesData = series.filter(s => !chartData.some(dataPoint => dataPoint[s.id] !== undefined));

  if (missingSeriesData.length > 0 && showPlaceholders) {
    return (
      <Box sx={{ height, p: 2, width }}>
        <Alert severity='warning'>
          <AlertTitle>Incomplete Data</AlertTitle>
          <Typography variant='body2'>No data available for the following series:</Typography>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            {missingSeriesData.map(s => (
              <li key={s.id}>{s.label || s.id}</li>
            ))}
          </ul>
          <Typography variant='body2'>
            This may be due to frequency conversion limitations or data availability.
          </Typography>
          <Typography sx={{ mt: 1 }} variant='body2'>
            Try selecting a different frequency or check if the series has data for the selected time period.
          </Typography>
        </Alert>
        {chartData.length > 0 && (
          <Box sx={{ mt: 2 }}>
            {ChartFactory.createChart(
              {
                ...chart,
                series: series.filter(s => !missingSeriesData.includes(s)),
              },
              { chartData, height, width }
            )}
          </Box>
        )}
      </Box>
    );
  }

  // Check for series with very few data points
  const seriesWithLimitedData = series.filter(s => {
    const dataPointsForSeries = chartData.filter(dataPoint => dataPoint[s.id] !== undefined);
    return dataPointsForSeries.length < 5; // Arbitrary threshold for "limited data"
  });

  if (seriesWithLimitedData.length > 0 && showPlaceholders) {
    return (
      <Box sx={{ height, p: 2, width }}>
        <Alert severity='info' sx={{ mb: 2 }}>
          <AlertTitle>Limited Data Available</AlertTitle>
          <Typography variant='body2'>The following series have very few data points available:</Typography>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            {seriesWithLimitedData.map(s => (
              <li key={s.id}>{s.label || s.id}</li>
            ))}
          </ul>
          <Typography variant='body2'>
            This may affect the visual quality of your chart. Consider selecting a different frequency or time period.
          </Typography>
        </Alert>
        {ChartFactory.createChart(chart, { chartData, height, width })}
      </Box>
    );
  }

  return ChartFactory.createChart(chart, { chartData, height, width });
}

export default ChartPreview;

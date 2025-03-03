import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';

import type { Chart } from '@/types/chart.types';

import { ChartFactory } from '@/helpers/chart-factory';
import EmptyContent from '@/components/common/empty-content';
import { useChartData } from '@/services/api/hooks/use-chart-data';

// ----------------------------------------------------------------------

export interface ChartPreviewProps {
  chart: Chart;
  height?: number | string;
  width?: number | string;
  showPlaceholders?: boolean;
}

function ChartPreview({ chart, height = '100%', showPlaceholders = true, width = '100%' }: ChartPreviewProps) {
  const { series } = chart;
  const { data: chartData = [], error, isError, isLoading } = useChartData({ chart });

  if (series.length === 0) {
    if (showPlaceholders) {
      return (
        <Box sx={{ alignItems: 'center', display: 'flex', height, justifyContent: 'center', width }}>
          <Typography color='text.secondary' variant='body1'>
            Select a data source to preview the chart
          </Typography>
        </Box>
      );
    }

    return <EmptyContent title='No data available' />;
  }

  if (isLoading) {
    return (
      <Box
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height, justifyContent: 'center', width }}
      >
        <CircularProgress sx={{ mb: 2 }} />

        {showPlaceholders && (
          <>
            <Typography color='text.secondary' variant='body2'>
              Fetching data from FRED...
            </Typography>
            <Typography color='text.secondary' sx={{ maxWidth: '80%', mt: 1, textAlign: 'center' }} variant='caption'>
              This may take a moment, especially for high-frequency data (daily/weekly) or multiple series
            </Typography>
          </>
        )}
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ height, p: 2, width }}>
        <Alert severity='error'>
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

  return ChartFactory.createChart(chart, { chartData, height, width });
}

export default ChartPreview;

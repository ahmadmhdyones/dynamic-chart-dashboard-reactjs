import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import type { Chart } from '@/types/chart.types';

import { paths } from '@/helpers/map-routes';
import { useCharts } from '@/services/api/hooks/use-charts';
import CreateChartButton from '@/components/charts/CreateChartButton';
import { useDeleteChart } from '@/services/api/hooks/use-delete-chart';

import ChartsGrid from './components/charts-grid';
import ChartFullscreenDialog from './components/chart-fullscreen-dialog';

// ----------------------------------------------------------------------

export default function SectionChartsList() {
  const navigate = useNavigate();
  const { data: charts = [], error, isLoading } = useCharts();
  const { isPending: isDeleting, mutate: deleteChart } = useDeleteChart();

  const [fullscreenChart, setFullscreenChart] = useState<Chart | null>(null);

  const handleEditChart = (chart: Chart) => {
    navigate(paths.dashboard.charts.id.edit.to(chart.id));
  };

  const handleDeleteChart = (chart: Chart) => {
    deleteChart(chart.id, {
      onError: () => {
        toast.error('Failed to delete chart');
      },
      onSuccess: () => {
        toast.success('Chart deleted successfully');
      },
    });
  };

  const handleFullscreenChart = (chart: Chart) => {
    setFullscreenChart(chart);
  };

  const handleCloseFullscreen = () => {
    setFullscreenChart(null);
  };

  const handleDownloadChart = (_chart: Chart) => {
    toast.success('Download functionality would be implemented here');
  };

  return (
    <Box component='section'>
      <Stack alignItems='center' direction='row' justifyContent='space-between' mb={5}>
        {isLoading ? (
          <Skeleton height={40} variant='text' width={100} />
        ) : (
          <Typography variant='h4'>Total Charts: {charts.length}</Typography>
        )}

        <CreateChartButton />
      </Stack>

      <ChartsGrid
        charts={charts}
        error={error}
        isDeleting={isDeleting}
        isLoading={isLoading}
        onDelete={handleDeleteChart}
        onDownload={handleDownloadChart}
        onEdit={handleEditChart}
        onFullscreen={handleFullscreenChart}
      />

      {fullscreenChart && (
        <ChartFullscreenDialog chart={fullscreenChart} onClose={handleCloseFullscreen} open={!!fullscreenChart} />
      )}
    </Box>
  );
}

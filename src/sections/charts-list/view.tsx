import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import type { Chart } from '@/types/chart.types';

import { paths } from '@/helpers/map-routes';
import { useCharts } from '@/sections/common/hooks/use-charts';
import { useDeleteChart } from '@/sections/common/hooks/use-delete-chart';

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
    <>
      <Stack alignItems='center' direction='row' justifyContent='space-between' mb={5}>
        {isLoading ? (
          <Skeleton height={40} variant='text' width={100} />
        ) : (
          <Typography variant='h4'>Total Charts: {charts.length}</Typography>
        )}

        <Button
          color='primary'
          component={Link}
          startIcon={<AddIcon />}
          to={paths.dashboard.charts.new.to()}
          variant='contained'
        >
          Create New Chart
        </Button>
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
    </>
  );
}

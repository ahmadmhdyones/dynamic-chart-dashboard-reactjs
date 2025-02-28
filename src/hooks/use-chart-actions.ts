import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

import type { Chart } from '@/types/chart.types';

import { paths } from '@/helpers/map-routes';
import { useDeleteChart } from '@/services/api/hooks/use-delete-chart';

// ----------------------------------------------------------------------

export default function useChartActions() {
  const navigate = useNavigate();
  const { isPending: isDeleting, mutate: deleteChart } = useDeleteChart();

  const [fullscreenChart, setFullscreenChart] = useState<Chart | null>(null);

  const handleFullscreenChart = (chart: Chart) => {
    setFullscreenChart(chart);
  };

  const handleCloseFullscreen = () => {
    setFullscreenChart(null);
  };

  const handleEditChart = (chart: Chart) => {
    navigate(paths.dashboard.charts.id.edit.to(chart.id));
  };

  const handleDownloadChart = (_chart: Chart) => {
    toast.success('Download functionality would be implemented here');
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

  return {
    fullscreenChart,
    isDeleting,
    onCloseFullscreen: handleCloseFullscreen,
    onDelete: handleDeleteChart,
    onDownload: handleDownloadChart,
    onEdit: handleEditChart,
    onFullscreen: handleFullscreenChart,
  };
}

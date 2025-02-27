import Grid from '@mui/material/Grid';

import type { Chart } from '@/types/chart.types';

import EmptyContent from '@/components/common/empty-content';
import ErrorContent from '@/components/common/error-content';

import ChartGridItem from './chart-grid-item';
import ChartGridItemSkeleton from './chart-grid-item-skeleton';

// ----------------------------------------------------------------------

interface Props {
  charts: Chart[];
  isLoading: boolean;
  error: Error | null;
  onEdit?: (chart: Chart) => void;
  onDelete?: (chart: Chart) => void;
  onFullscreen?: (chart: Chart) => void;
  onDownload?: (chart: Chart) => void;
  isDeleting?: boolean;
}

export default function ChartsGrid({
  charts,
  error,
  isDeleting,
  isLoading,
  onDelete,
  onDownload,
  onEdit,
  onFullscreen,
}: Props) {
  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[...Array(4)].map((_, index) => (
          <Grid item key={index} sm={6} xs={12}>
            <ChartGridItemSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!charts.length) {
    return <EmptyContent description='Create your first chart to see it here' title='No charts found' />;
  }

  if (error) {
    return <ErrorContent error={error} message='Failed to fetch charts' />;
  }

  return (
    <Grid container spacing={3}>
      {charts.map(chart => (
        <Grid item key={chart.id} sm={6} xs={12}>
          <ChartGridItem
            chart={chart}
            disableActions={isDeleting}
            onDelete={onDelete}
            onDownload={onDownload}
            onEdit={onEdit}
            onFullscreen={onFullscreen}
          />
        </Grid>
      ))}
    </Grid>
  );
}

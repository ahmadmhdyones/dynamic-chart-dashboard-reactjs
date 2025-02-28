import Grid from '@mui/material/Grid';

import type { Chart } from '@/types/chart.types';

import ErrorContent from '@/components/common/error-content';
import ChartGridItem from '@/sections/charts-list/components/chart-grid-item';

import SectionEmpty from './section-empty';
import SectionSkeleton from './section-skeleton';

// ----------------------------------------------------------------------

interface Props {
  isLoading: boolean;
  error: Error | null;
  charts: Chart[];
}

function SectionContent({ charts, error, isLoading }: Props) {
  if (isLoading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return <ErrorContent message={error.message} title='Error Loading Charts' />;
  }

  if (charts.length > 0) {
    return charts.map(chart => (
      <Grid item key={chart.id} md={6} xs={12}>
        <ChartGridItem chart={chart} />
      </Grid>
    ));
  }

  return <SectionEmpty />;
}

export default SectionContent;

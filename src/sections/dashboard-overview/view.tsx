import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import type { ChartType } from '@/types/chart-type.enum';

import { useCharts } from '@/services/api/hooks/use-charts';

import ChartTypeStats from './components/chart-type-stats';

// ----------------------------------------------------------------------

export default function SectionDashboardOverview() {
  const { data: charts = [], isLoading } = useCharts();

  // Count charts by type
  const chartTypeCount = charts.reduce(
    (acc, chart) => {
      acc[chart.type] = (acc[chart.type] || 0) + 1;
      return acc;
    },
    {} as Record<ChartType, number>
  );

  return (
    <Box component='section'>
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12}>
          <ChartTypeStats
            barCharts={chartTypeCount['bar'] || 0}
            isLoading={isLoading}
            lineCharts={chartTypeCount['line'] || 0}
            totalCharts={charts.length}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

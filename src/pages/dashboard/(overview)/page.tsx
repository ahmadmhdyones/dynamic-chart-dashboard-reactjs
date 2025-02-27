import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { paths } from '@/helpers/map-routes';
import MetaTags from '@/components/common/meta-tags';
import { useCharts } from '@/services/api/hooks/use-charts';
import { RecentCharts, ChartTypeStats } from '@/sections/dashboard/components';

// ----------------------------------------------------------------------

function PageDashboardOverview() {
  const { data: charts = [], isLoading } = useCharts();

  // Get the most recent charts (up to 2)
  const recentCharts = [...charts].slice(0, 2);

  // Count charts by type
  const chartTypeCount = charts.reduce(
    (acc, chart) => {
      acc[chart.type] = (acc[chart.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <PageContainer title='Overview'>
      <MetaTags title='Overview | DCDR' />

      <Box component='main' id={paths.dashboard.root.id}>
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

          {/* Recent Charts Section */}
          <RecentCharts charts={recentCharts} isLoading={isLoading} />
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default PageDashboardOverview;

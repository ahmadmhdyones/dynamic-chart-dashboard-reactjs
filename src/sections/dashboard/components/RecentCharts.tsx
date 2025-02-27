import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@/helpers/map-routes';
import ChartGridItem from '@/sections/charts-list/components/chart-grid-item';
import ChartGridItemSkeleton from '@/sections/charts-list/components/chart-grid-item-skeleton';

import CreateChartButton from './CreateChartButton';

// ----------------------------------------------------------------------

interface Chart {
  id: string;
  type: string;
  // Add other chart properties as needed
}

interface RecentChartsProps {
  charts: Chart[];
  isLoading: boolean;
}

function RecentCharts({ charts, isLoading }: RecentChartsProps) {
  return (
    <Grid item xs={12}>
      <Box sx={{ mb: 3, mt: 2 }}>
        <Stack alignItems='center' direction='row' justifyContent='space-between'>
          <Typography variant='h5'>Recent Charts</Typography>
          <CreateChartButton />
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {isLoading ? (
          // Show skeletons while loading
          [...Array(2)].map((_, index) => (
            <Grid item key={index} md={6} xs={12}>
              <ChartGridItemSkeleton />
            </Grid>
          ))
        ) : charts.length > 0 ? (
          // Show recent charts
          charts.map(chart => (
            <Grid item key={chart.id} md={6} xs={12}>
              <ChartGridItem
                chart={chart}
                onEdit={chart => {
                  window.location.href = paths.dashboard.charts.id.edit.to(chart.id);
                }}
                onFullscreen={chart => {
                  window.location.href = paths.dashboard.charts.id.edit.to(chart.id);
                }}
              />
            </Grid>
          ))
        ) : (
          // No charts available
          <Grid item xs={12}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Typography sx={{ mb: 1 }} variant='h6'>
                No Charts Created Yet
              </Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }} variant='body2'>
                Get started by creating your first chart
              </Typography>
              <CreateChartButton />
            </Card>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default RecentCharts;

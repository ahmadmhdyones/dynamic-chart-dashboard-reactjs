import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useChartActions from '@/hooks/use-chart-actions';
import { useCharts } from '@/services/api/hooks/use-charts';
import { ChartsGrid } from '@/components/charts/chart-grid';
import CreateChartButton from '@/components/charts/create-chart-button';

// ----------------------------------------------------------------------

export default function SectionRecentCharts() {
  const { data: charts = [], error, isLoading } = useCharts();

  const chartActions = useChartActions();

  return (
    <Box component='section' sx={{ mb: 3 }}>
      <Box sx={{ mb: 3, mt: 2 }}>
        <Stack alignItems='center' direction='row' justifyContent='space-between'>
          <Typography variant='h5'>Recent Charts</Typography>
          <CreateChartButton />
        </Stack>
      </Box>

      <ChartsGrid charts={charts} error={error} isLoading={isLoading} {...chartActions} />
    </Box>
  );
}

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import useChartActions from '@/hooks/use-chart-actions';
import { useCharts } from '@/services/api/hooks/use-charts';
import { ChartsGrid } from '@/components/charts/chart-grid';
import CreateChartButton from '@/components/charts/create-chart-button';

// ----------------------------------------------------------------------

export default function SectionChartsList() {
  const { data: charts = [], error, isLoading } = useCharts();
  const chartActions = useChartActions();

  return (
    <Box component='section' sx={{ mb: 3 }}>
      <Stack alignItems='center' direction='row' justifyContent='space-between' mb={5}>
        {isLoading ? (
          <Skeleton height={40} variant='text' width={100} />
        ) : (
          <Typography variant='h4'>Total Charts: {charts.length}</Typography>
        )}

        <CreateChartButton />
      </Stack>

      <ChartsGrid charts={charts} error={error} isLoading={isLoading} {...chartActions} />
    </Box>
  );
}

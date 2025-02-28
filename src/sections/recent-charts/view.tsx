import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useCharts } from '@/services/api/hooks/use-charts';

import SectionHeader from './components/section-header';
import SectionContent from './components/section-content';

// ----------------------------------------------------------------------

export default function SectionRecentCharts() {
  const { data: charts = [], error, isLoading } = useCharts();

  return (
    <Box component='section'>
      <SectionHeader title='Recent Charts' />

      <Grid container spacing={3}>
        <SectionContent charts={charts} error={error} isLoading={isLoading} />
      </Grid>
    </Box>
  );
}

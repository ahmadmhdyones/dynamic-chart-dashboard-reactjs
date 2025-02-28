import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CreateChartButton from '@/components/charts/CreateChartButton';

// ----------------------------------------------------------------------

function SectionEmpty() {
  return (
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
  );
}

export default SectionEmpty;

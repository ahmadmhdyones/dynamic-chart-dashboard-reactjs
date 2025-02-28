import Grid from '@mui/material/Grid';

import ChartGridItemSkeleton from '@/sections/charts-list/components/chart-grid-item-skeleton';

// ----------------------------------------------------------------------

function SectionSkeleton() {
  return (
    <Grid container spacing={3}>
      {[...Array(2)].map((_, index) => (
        <Grid item key={index} md={6} xs={12}>
          <ChartGridItemSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}

export default SectionSkeleton;

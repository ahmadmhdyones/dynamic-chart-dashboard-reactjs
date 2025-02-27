import { use } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CHARTS } from '@/configs/charts.config';
import { ChartFormContext } from '@/sections/chart-form/contexts/chart-form-context';

import ChartTypeCard from './chart-type-card';

// ----------------------------------------------------------------------

export const CHART_TYPE_STEP_TITLE = 'Choose Chart Type';

// ----------------------------------------------------------------------

function ChartTypeStep() {
  const {
    formData: { type },
    setChartType,
  } = use(ChartFormContext)!;

  return (
    <Box>
      <Typography gutterBottom variant='h6'>
        {CHART_TYPE_STEP_TITLE}
      </Typography>
      <Typography color='text.secondary' sx={{ mb: 3 }} variant='body2'>
        Select the type of chart that best represents your data.
      </Typography>

      <Grid container spacing={3}>
        {CHARTS.map(option => (
          <Grid item key={option.value} md={4} sm={6} xs={12}>
            <ChartTypeCard
              description={option.description}
              disabled={!option.supported}
              icon={option.icon}
              isSelected={type === option.value}
              label={option.label}
              onClick={() => option.supported && setChartType(option.value)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ChartTypeStep;

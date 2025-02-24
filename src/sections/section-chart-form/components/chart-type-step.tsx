import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { ChartTypeOption } from '@/types/chart.types';

import type { ChartType } from '@/models';
import ChartTypeCard from '@/sections/section-chart-form/components/chart-type-card';

// ----------------------------------------------------------------------

interface ChartTypeStepProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
  options: ChartTypeOption[];
}

function ChartTypeStep({ onTypeChange, options, selectedType }: ChartTypeStepProps) {
  return (
    <Box sx={{ py: 2 }}>
      <Typography gutterBottom variant='h6'>
        Select Chart Type
      </Typography>
      <Typography color='text.secondary' sx={{ mb: 3 }} variant='body2'>
        Choose the type of chart that best represents your data.
      </Typography>

      <Grid container spacing={3}>
        {options.map(option => (
          <Grid item key={option.value} md={4} sm={6} xs={12}>
            <ChartTypeCard
              onSelect={() => option.supported && onTypeChange(option.value)}
              option={option}
              selected={selectedType === option.value}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ChartTypeStep;

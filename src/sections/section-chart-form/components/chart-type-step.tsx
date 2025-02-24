import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';

import type { ChartType } from '@/types/chart-type.enum';
import type { ChartTypeOption } from '@/types/chart.types';

import ChartTypeOptionCard from '@/sections/section-chart-form/components/chart-type-option-card';

// ----------------------------------------------------------------------

export interface ChartTypeStepProps {
  options: ChartTypeOption[];
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
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

      <RadioGroup
        aria-label='chart-type'
        name='chart-type'
        onChange={e => onTypeChange(e.target.value as ChartType)}
        value={selectedType}
      >
        <Grid container spacing={2}>
          {options.map(option => (
            <Grid item key={option.value} md={4} sm={6} xs={12}>
              <ChartTypeOptionCard onTypeChange={onTypeChange} option={option} selectedType={selectedType} />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </Box>
  );
}

export default ChartTypeStep;

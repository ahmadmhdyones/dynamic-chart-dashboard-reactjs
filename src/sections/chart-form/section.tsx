import Grid from '@mui/material/Grid';

import { createChart } from '@/helpers/chart-factory';
import { configChartDefault } from '@/configs/charts.config';

import ChartFormStepper from './components/chart-form-stepper';
import { ChartFormProvider } from './contexts/chart-form-context';

// ----------------------------------------------------------------------

export default function SectionChartForm() {
  return (
    <ChartFormProvider initialFormData={createChart(configChartDefault.type)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ChartFormStepper />
        </Grid>
      </Grid>
    </ChartFormProvider>
  );
}

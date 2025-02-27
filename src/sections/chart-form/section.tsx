import { Suspense } from 'react';

import Grid from '@mui/material/Grid';

import PageLoader from '@/components/ui/page-loader';
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
          <Suspense fallback={<PageLoader />}>
            <ChartFormStepper />
          </Suspense>
        </Grid>
      </Grid>
    </ChartFormProvider>
  );
}

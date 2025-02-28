import { Suspense } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import type { Chart } from '@/types/chart.types';

import PageLoader from '@/components/ui/page-loader';
import { createChart } from '@/helpers/chart-factory';
import { configChartDefault } from '@/configs/charts.config';

import ChartFormStepper from './components/chart-form-stepper';
import { ChartFormProvider } from './contexts/chart-form-context/chart-form-provider';
import type { ChartFormMode } from './contexts/chart-form-context/chart-form-context';

// ----------------------------------------------------------------------

interface SectionChartFormProps {
  initialChartData?: Chart;
  mode?: ChartFormMode;
}

export default function SectionChartForm({
  initialChartData = createChart(configChartDefault.type),
  mode = 'create',
}: SectionChartFormProps) {
  return (
    <Box component='section' sx={{ mb: 3 }}>
      <ChartFormProvider initialFormData={initialChartData} mode={mode}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Suspense fallback={<PageLoader />}>
              <ChartFormStepper />
            </Suspense>
          </Grid>
        </Grid>
      </ChartFormProvider>
    </Box>
  );
}

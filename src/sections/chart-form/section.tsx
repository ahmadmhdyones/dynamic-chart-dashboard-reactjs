import Grid from '@mui/material/Grid';

import type { ChartFormData } from './types';
import { DEFAULT_CHART_FORM_DATA } from './config';
import ChartFormStepper from './components/chart-form-stepper';
import { ChartFormProvider } from './contexts/chart-form-context';

// ----------------------------------------------------------------------

interface Props {
  initialFormData?: ChartFormData;
}

export default function SectionChartForm({ initialFormData = DEFAULT_CHART_FORM_DATA }: Props) {
  return (
    <ChartFormProvider initialFormData={initialFormData}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ChartFormStepper />
        </Grid>
      </Grid>
    </ChartFormProvider>
  );
}

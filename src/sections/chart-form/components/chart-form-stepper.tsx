import { use, lazy, useState } from 'react';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

import { CHART_TYPE_STEP_TITLE } from './chart-type-step/step';
import { DATA_SOURCE_STEP_TITLE } from './data-source-step/step';
import { ChartFormContext } from '../contexts/chart-form-context';
import ChartPreviewCard from './chart-preview/chart-preview-card';
import { CHART_CONFIG_STEP_TITLE } from './chart-config-step/step';

// ----------------------------------------------------------------------

const ChartTypeStep = lazy(() => import('./chart-type-step/step'));
const DataSourceStep = lazy(() => import('./data-source-step/step'));
const ChartConfigStep = lazy(() => import('./chart-config-step/step'));

// ----------------------------------------------------------------------

const steps = [CHART_TYPE_STEP_TITLE, DATA_SOURCE_STEP_TITLE, CHART_CONFIG_STEP_TITLE];

// ----------------------------------------------------------------------

function ChartFormStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { chartData, error, formData, isError, isLoading, submitForm } = use(ChartFormContext)!;
  const {
    config: { title },
    series: selectedSeries,
    type,
  } = formData;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <ChartTypeStep />;
      case 1:
        return <DataSourceStep />;
      case 2:
        return <ChartConfigStep />;
      default:
        return 'Unknown step';
    }
  };

  const isBackDisabled = activeStep === 0;
  const isNextDisabled = (activeStep === 0 && !type) || (activeStep === 1 && selectedSeries.length === 0);
  const isSubmitDisabled = selectedSeries.length === 0 || !title;

  return (
    <Box>
      {/* Chart Form Stepper */}
      <Paper sx={{ mb: 3, p: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Chart Form Stepper Content */}
        <Box sx={{ mt: 3 }}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button disabled={isBackDisabled} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button disabled={isSubmitDisabled} onClick={submitForm} variant='contained'>
                Create Chart
              </Button>
            ) : (
              <Button disabled={isNextDisabled} onClick={handleNext} variant='contained'>
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>

      {/* Chart Preview */}
      <Paper sx={{ p: 3 }}>
        <ChartPreviewCard
          chart={formData}
          chartData={chartData}
          error={error}
          isError={isError}
          isLoading={isLoading}
        />
      </Paper>
    </Box>
  );
}

export default ChartFormStepper;

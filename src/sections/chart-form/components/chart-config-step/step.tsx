import { use } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import type { FredFrequencyShort } from '@/types/fred-freq.enum';

import { timeFrequencyOptions } from '@/helpers/charts.utils';
import { ChartFormContext } from '@/sections/chart-form/contexts/chart-form-context';

import ChartTypeConfigPanel from './chart-type-config-panel';
import SeriesTypeConfigPanel from './series-type-config-panel';

// ----------------------------------------------------------------------

export const CHART_CONFIG_STEP_TITLE = 'Configure Chart';

// ----------------------------------------------------------------------

function ChartConfigStep() {
  const { formData, setTimeFrequency, updateChartConfig, updateSeriesConfig: updateSeries } = use(ChartFormContext)!;

  const {
    config: { title },
    series,
    timeFrequency,
    type,
  } = formData;

  return (
    <Box sx={{ py: 2 }}>
      <Typography gutterBottom variant='h6'>
        {CHART_CONFIG_STEP_TITLE}
      </Typography>
      <Typography color='text.secondary' sx={{ mb: 3 }} variant='body2'>
        Configure your chart appearance and settings.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography gutterBottom variant='subtitle1'>
              Chart Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Chart Title'
                  onChange={e => updateChartConfig({ title: e.target.value })}
                  placeholder='Enter chart title'
                  required
                  value={title}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='time-frequency-label'>Time Frequency</InputLabel>
                  <Select
                    id='time-frequency'
                    label='Time Frequency'
                    labelId='time-frequency-label'
                    onChange={e => setTimeFrequency(e.target.value as FredFrequencyShort)}
                    value={timeFrequency}
                  >
                    {timeFrequencyOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <ChartTypeConfigPanel chartType={type} />
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography gutterBottom variant='subtitle1'>
              Series Configuration
            </Typography>
            <SeriesTypeConfigPanel chartType={type} onUpdateSeries={updateSeries} series={series} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChartConfigStep;

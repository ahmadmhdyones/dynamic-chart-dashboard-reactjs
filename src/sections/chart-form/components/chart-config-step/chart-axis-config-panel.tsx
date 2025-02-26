import { use } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ChartType } from '@/types/chart-type.enum';
import type { AxisChartConfig } from '@/types/chart-config.types';

import { legendPositionOptions } from '@/sections/chart-form/helpers';
import { ChartFormContext } from '@/sections/chart-form/contexts/chart-form-context';

// ----------------------------------------------------------------------

interface Props {
  chartType: ChartType.LINE | ChartType.BAR;
}

function ChartAxisConfigPanel({ chartType }: Props) {
  const { formData, updateChartConfig } = use(ChartFormContext)!;
  const config = formData.config as AxisChartConfig;

  const handleConfigChange = (key: keyof AxisChartConfig, value: AxisChartConfig[keyof AxisChartConfig]) => {
    updateChartConfig({ [key]: value });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography gutterBottom variant='subtitle1'>
        {chartType === ChartType.LINE ? 'Line Chart Configuration' : 'Bar Chart Configuration'}
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <TextField
            disabled
            fullWidth
            helperText='X-Axis Title is automatically generated based on the selected series'
            label='X-Axis Title'
            onChange={e => handleConfigChange('xAxisTitle', e.target.value)}
            value={config.xAxisTitle}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label='Y-Axis Title'
            onChange={e => handleConfigChange('yAxisTitle', e.target.value)}
            value={config.yAxisTitle}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id='legend-position-label'>Legend Position</InputLabel>
            <Select
              id='legend-position'
              label='Legend Position'
              labelId='legend-position-label'
              onChange={e => handleConfigChange('legendPosition', e.target.value)}
              value={config.legendPosition || 'right'}
            >
              {legendPositionOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={config.gridLines !== false}
                  onChange={e => handleConfigChange('gridLines', e.target.checked)}
                />
              }
              label='Show Grid Lines'
            />
            <FormControlLabel
              control={
                <Switch
                  checked={config.showTooltip !== false}
                  onChange={e => handleConfigChange('showTooltip', e.target.checked)}
                />
              }
              label='Show Tooltip'
            />
            <FormControlLabel
              control={
                <Switch
                  checked={config.showLegend !== false}
                  onChange={e => handleConfigChange('showLegend', e.target.checked)}
                />
              }
              label='Show Legend'
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ChartAxisConfigPanel;

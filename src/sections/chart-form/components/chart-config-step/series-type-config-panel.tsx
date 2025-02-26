import { lazy, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { ChartType } from '@/types/chart-type.enum';
import type { SeriesConfig, BarSeriesConfig, LineSeriesConfig } from '@/types/series-config.types';

import ConfigTabPanel from './config-tab-panel';

// ----------------------------------------------------------------------

const SeriesConfigBarPanel = lazy(() => import('./series-bar-config-panel'));
const SeriesConfigLinePanel = lazy(() => import('./series-line-config-panel'));

// ----------------------------------------------------------------------

interface Props {
  chartType: ChartType;
  series: SeriesConfig[];
  onUpdateSeries: (seriesId: string, config: Partial<SeriesConfig>) => void;
}

function SeriesTypeConfigPanel({ chartType, onUpdateSeries, series }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (series.length === 0) {
    return (
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography color='text.secondary' variant='body1'>
          No data series selected. Please add data series in the previous step.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          aria-label='series configuration tabs'
          onChange={handleTabChange}
          scrollButtons={series.length > 3 ? 'auto' : undefined}
          value={activeTab}
          variant={series.length > 3 ? 'scrollable' : 'standard'}
        >
          {series.map(s => (
            <Tab
              key={s.id}
              label={
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                  <Box
                    sx={{
                      bgcolor: s.color,
                      borderRadius: '50%',
                      height: 12,
                      mr: 1,
                      width: 12,
                    }}
                  />
                  <Tooltip title={s.data?.title || s.label || s.id}>
                    <Typography noWrap sx={{ maxWidth: 120 }} variant='body2'>
                      {s.data?.title || s.label || s.id}
                    </Typography>
                  </Tooltip>
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>

      {series.map((s, index) => (
        <ConfigTabPanel index={index} key={s.id} value={activeTab}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Series Display Name'
                onChange={e => onUpdateSeries(s.id, { label: e.target.value })}
                placeholder='Enter series display name'
                sx={{ mb: 2 }}
                value={s.label}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography gutterBottom variant='subtitle2'>
                Color
              </Typography>
              <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 2 }}>
                <HexColorPicker
                  color={s.color}
                  onChange={color => onUpdateSeries(s.id, { color })}
                  style={{ height: 170, width: '100%' }}
                />
                <Box sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label='Hex Color'
                    onChange={e => onUpdateSeries(s.id, { color: e.target.value })}
                    size='small'
                    value={s.color}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography gutterBottom id='opacity-slider' variant='body2'>
                    Opacity: {s.opacity}
                  </Typography>
                  <Slider
                    aria-labelledby='opacity-slider'
                    max={1}
                    min={0}
                    onChange={(_, value) => onUpdateSeries(s.id, { opacity: value as number })}
                    step={0.1}
                    value={s.opacity}
                    valueLabelDisplay='auto'
                  />
                </Box>
              </Paper>
            </Grid>

            <Grid item md={8} xs={12}>
              {chartType === ChartType.LINE && (
                <SeriesConfigLinePanel onUpdateSeries={onUpdateSeries} series={s as LineSeriesConfig} />
              )}

              {chartType === ChartType.BAR && (
                <SeriesConfigBarPanel onUpdateSeries={onUpdateSeries} series={s as BarSeriesConfig} />
              )}
            </Grid>
          </Grid>
        </ConfigTabPanel>
      ))}
    </Box>
  );
}

export default SeriesTypeConfigPanel;

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import type { LineSeriesConfig } from '@/types/series-config.types';

import { lineStyleOptions } from '@/helpers/charts.utils';

// ----------------------------------------------------------------------

interface Props {
  series: LineSeriesConfig;
  onUpdateSeries: (seriesId: string, config: Partial<LineSeriesConfig>) => void;
}

function SeriesLineConfigPanel({ onUpdateSeries, series }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        height: '100%',
        p: 2,
      }}
    >
      <Typography gutterBottom variant='subtitle2'>
        Line Style
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography gutterBottom variant='body2'>
            Line Type
          </Typography>
          <ToggleButtonGroup
            aria-label='line type'
            exclusive
            fullWidth
            onChange={(_, value) => value && onUpdateSeries(series.id, { lineType: value })}
            size='small'
            value={series.lineType}
          >
            {lineStyleOptions.map(option => (
              <ToggleButton key={option.value} value={option.value}>
                {option.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography gutterBottom id='line-width-slider' variant='body2'>
            Line Width: {series.lineWidth}px
          </Typography>
          <Slider
            aria-labelledby='line-width-slider'
            max={10}
            min={1}
            onChange={(_, value) => onUpdateSeries(series.id, { lineWidth: value as number })}
            step={1}
            value={series.lineWidth}
            valueLabelDisplay='auto'
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default SeriesLineConfigPanel;

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import type { BarSeriesConfig } from '@/types/series-config.types';

// ----------------------------------------------------------------------

interface Props {
  series: BarSeriesConfig;
  onUpdateSeries: (seriesId: string, config: Partial<BarSeriesConfig>) => void;
}

function SeriesBarConfigPanel({ onUpdateSeries, series }: Props) {
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
        Bar Style
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography gutterBottom id='bar-width-slider' variant='body2'>
            Bar Width: {series.barWidth}px
          </Typography>
          <Slider
            aria-labelledby='bar-width-slider'
            max={50}
            min={5}
            onChange={(_, value) => onUpdateSeries(series.id, { barWidth: value as number })}
            step={1}
            value={series.barWidth}
            valueLabelDisplay='auto'
          />
        </Box>

        <Box>
          <Typography gutterBottom id='bar-radius-slider' variant='body2'>
            Bar Corner Radius: {series.barRadius}px
          </Typography>
          <Slider
            aria-labelledby='bar-radius-slider'
            max={20}
            min={0}
            onChange={(_, value) => onUpdateSeries(series.id, { barRadius: value as number })}
            step={1}
            value={series.barRadius}
            valueLabelDisplay='auto'
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default SeriesBarConfigPanel;

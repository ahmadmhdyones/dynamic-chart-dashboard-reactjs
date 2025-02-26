import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import type { Chart } from '@/types/chart.types';
import { FredFrequencyShort } from '@/types/fred-freq.enum';

import { getFrequencyLabel, hasFrequencyLimitations } from '@/helpers/charts.utils';

import ChartPreview from './chart-preview';

// ----------------------------------------------------------------------

export interface Props {
  chart: Chart;
  height?: number | string;
  width?: number | string;
  showTitle?: boolean;
  showFrequencyChip?: boolean;
  showFrequencyWarning?: boolean;
}

function ChartPreviewCard({
  chart,
  height = 400,
  showFrequencyChip = true,
  showFrequencyWarning = true,
  showTitle = true,
  width = '100%',
}: Props) {
  const {
    config: { title },
    timeFrequency,
  } = chart;

  // Check if we need to show a frequency warning
  const displayFrequencyWarning = showFrequencyWarning && hasFrequencyLimitations(timeFrequency);

  return (
    <Card sx={{ width }}>
      <CardContent>
        {showTitle && (
          <>
            <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant='h6'>{title || 'Chart Preview'}</Typography>
              {showFrequencyChip && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip
                    color='primary'
                    label={`Frequency: ${getFrequencyLabel(timeFrequency)}`}
                    size='small'
                    variant='outlined'
                  />
                </Box>
              )}
            </Box>
            <Divider sx={{ mb: 2 }} />
          </>
        )}

        {displayFrequencyWarning && (
          <Alert severity='info' sx={{ mb: 2 }}>
            <Typography variant='body2'>
              {timeFrequency === FredFrequencyShort.Daily
                ? 'Daily data may be limited to recent periods due to FRED API constraints.'
                : 'Weekly data for long time periods may be limited by FRED API constraints.'}
            </Typography>
          </Alert>
        )}

        <Box sx={{ height }}>
          <ChartPreview chart={chart} height={height} width='100%' />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ChartPreviewCard;

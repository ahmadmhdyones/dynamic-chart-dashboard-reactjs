import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import type { TransitionProps } from '@mui/material/transitions';

import type { Chart } from '@/types/chart.types';

import { getFrequencyLabel } from '@/helpers/charts.utils';
import { ChartPreview } from '@/components/charts/chart-preview';

// ----------------------------------------------------------------------

const Transition = forwardRef(function Transition(
  props: {
    children: React.ReactElement;
  } & TransitionProps,
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

// ----------------------------------------------------------------------

interface Props {
  chart: Chart;
  open: boolean;
  onClose: () => void;
}

export default function ChartFullscreenDialog({ chart, onClose, open }: Props) {
  const {
    config: { title },
    timeFrequency,
  } = chart;

  return (
    <Dialog fullScreen onClose={onClose} open={open} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton aria-label='close' color='inherit' edge='start' onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography component='div' sx={{ flex: 1, ml: 2 }} variant='h6'>
            {title || 'Untitled Chart'}
          </Typography>
          <Chip
            color='primary'
            label={getFrequencyLabel(timeFrequency)}
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              border: '1px solid',
              borderColor: 'rgba(255,255,255,0.1)',
            }}
            variant='filled'
          />
        </Toolbar>
      </AppBar>

      <Box sx={{ height: 'calc(100vh - 64px)', p: 3 }}>
        <Box sx={{ height: 'calc(100% - 40px)' }}>
          <ChartPreview chart={chart} height='100%' width='100%' />
        </Box>
      </Box>
    </Dialog>
  );
}

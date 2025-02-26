import { lazy } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ChartType } from '@/types/chart-type.enum';

// ----------------------------------------------------------------------

const AxisChartConfigPanel = lazy(() => import('./chart-axis-config-panel'));

// ----------------------------------------------------------------------

function ChartTypeConfigPanel({ chartType: type }: { chartType: ChartType }) {
  // Render different configuration panels based on chart type
  switch (type) {
    case ChartType.LINE:
    case ChartType.BAR:
      return <AxisChartConfigPanel chartType={type} />;
    case ChartType.PIE:
    case ChartType.SCATTER:
    case ChartType.TREEMAP:
    default:
      return (
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography color='text.secondary' variant='body1'>
            Configuration not available for this chart type
          </Typography>
        </Box>
      );
  }
}

export default ChartTypeConfigPanel;

import GridOnIcon from '@mui/icons-material/GridOn';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

import { ChartType } from '@/types/chart-type.enum';
import type { ChartTypeOption } from '@/types/chart.types';

// ----------------------------------------------------------------------

export const CHART_MAX_DATA_SERIES = 5;

export const CHARTS: ChartTypeOption[] = [
  {
    description: 'Best for showing trends over time or continuous data.',
    icon: <ShowChartIcon fontSize='large' />,
    label: 'Line Chart',
    supported: true,
    value: ChartType.LINE,
  },
  {
    description: 'Best for comparing values across categories.',
    icon: <BarChartIcon fontSize='large' />,
    label: 'Bar Chart',
    supported: true,
    value: ChartType.BAR,
  },
  {
    description: 'Best for showing proportions or percentages of a whole.',
    icon: <PieChartIcon fontSize='large' />,
    label: 'Pie Chart',
    supported: false,
    value: ChartType.PIE,
  },
  {
    description: 'Best for showing relationships between two variables.',
    icon: <ScatterPlotIcon fontSize='large' />,
    label: 'Scatter Plot',
    supported: false,
    value: ChartType.SCATTER,
  },
  {
    description: 'Best for showing hierarchical data as nested rectangles.',
    icon: <GridOnIcon fontSize='large' />,
    label: 'Treemap',
    supported: false,
    value: ChartType.TREEMAP,
  },
];

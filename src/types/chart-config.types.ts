import type { ChartType } from '@/types/chart-type.enum';

// ----------------------------------------------------------------------

export interface BaseChartConfig {
  title: string;
  // legendPosition?: 'top' | 'right' | 'bottom' | 'left' | 'none';
  // margin?: { top: number; right: number; bottom: number; left: number };
  // bgColor?: string;
}

export interface AxisChartConfig extends BaseChartConfig {
  xAxisTitle: string;
  yAxisTitle: string;
  gridLines: boolean;
  showTooltip: boolean;
  showLegend: boolean;
}

export interface PieChartConfig extends BaseChartConfig {
  showLabels: boolean;
  showLegend: boolean;
  donut: boolean;
}

export interface ScatterChartConfig extends AxisChartConfig {
  showRegressionLine: boolean;
  regressionLineColor: string;
}

export interface TreemapChartConfig extends BaseChartConfig {
  showLabels: boolean;
}

export type ChartConfigMap = {
  [ChartType.LINE]: AxisChartConfig;
  [ChartType.BAR]: AxisChartConfig;
  [ChartType.PIE]: PieChartConfig;
  [ChartType.SCATTER]: ScatterChartConfig;
  [ChartType.TREEMAP]: TreemapChartConfig;
};

export type ChartConfig<T extends ChartType> = ChartConfigMap[T];

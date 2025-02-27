import type { IFredSeries } from '@/services/api/fred.types';

import type { ChartType } from './chart-type.enum';

// ----------------------------------------------------------------------

export interface BaseSeriesConfig {
  color: string;
  data?: IFredSeries;
  id: IFredSeries['id'];
  label: string;
  opacity: number;
}

export interface LineSeriesConfig extends BaseSeriesConfig {
  lineType: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
  showDots?: boolean;
}

export interface BarSeriesConfig extends BaseSeriesConfig {
  barWidth: number;
  barRadius: number;
  barStyle?: 'default' | 'stacked';
}

export interface PieSeriesConfig extends BaseSeriesConfig {
  innerRadius: number;
  outerRadius: number;
  padAngle: number;
}

export interface ScatterSeriesConfig extends BaseSeriesConfig {
  symbolSize: number;
  symbolType: 'circle' | 'square' | 'triangle' | 'diamond';
}

export interface TreemapSeriesConfig extends BaseSeriesConfig {
  padding: number;
  borderWidth: number;
}

export type SeriesConfigMap = {
  [ChartType.LINE]: LineSeriesConfig;
  [ChartType.BAR]: BarSeriesConfig;
  [ChartType.PIE]: PieSeriesConfig;
  [ChartType.SCATTER]: ScatterSeriesConfig;
  [ChartType.TREEMAP]: TreemapSeriesConfig;
};

export type SeriesConfig<T extends ChartType = ChartType> = SeriesConfigMap[T];

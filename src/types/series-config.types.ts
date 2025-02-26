import type { IFredSeries } from '@/services/api/fred.types';

import type { ChartType } from './chart-type.enum';

// ----------------------------------------------------------------------

export interface BaseSeriesConfig {
  id: IFredSeries['id'];
  label: string;
  color: string;
  opacity: number;
}

export interface LineSeriesConfig extends BaseSeriesConfig {
  lineType: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
}

export interface BarSeriesConfig extends BaseSeriesConfig {
  barWidth: number;
  barRadius: number;
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

export type SeriesConfig<T extends ChartType> = SeriesConfigMap[T];

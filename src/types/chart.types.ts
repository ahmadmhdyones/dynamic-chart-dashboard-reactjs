import type { ChartType } from './chart-type.enum';
import type { FredFrequencyShort } from './fred-freq.enum';
import type { ChartConfig, BaseChartConfig } from './chart-config.types';
import type { SeriesConfig, BaseSeriesConfig } from './series-config.types';

// ----------------------------------------------------------------------

export interface BaseChart {
  id: string;
  type: ChartType;
  config: BaseChartConfig;
  series: BaseSeriesConfig[];
  data: ChartDataPoint[];
  timeFrequency: FredFrequencyShort;
}

export interface Chart<T extends ChartType> extends Omit<BaseChart, 'config' | 'series'> {
  config: ChartConfig<T>;
  series: SeriesConfig<T>[];
}

export interface ChartDataPoint {
  date: string;
  [key: string]: number | string;
}

export interface ChartTypeOption {
  description: string;
  icon: React.ReactNode;
  label: string;
  supported: boolean;
  value: ChartType;
}

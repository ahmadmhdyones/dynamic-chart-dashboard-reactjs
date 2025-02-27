import type { ChartType } from './chart-type.enum';
import type { ChartConfig } from './chart-config.types';
import type { SeriesConfig } from './series-config.types';
import type { FredFrequencyShort } from './fred-freq.enum';

// ----------------------------------------------------------------------

export interface Chart<T extends ChartType = ChartType> {
  id: string;
  type: ChartType;
  config: ChartConfig<T>;
  series: SeriesConfig<T>[];
  data: ChartDataPoint[];
  timeFrequency: FredFrequencyShort;
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

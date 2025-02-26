import { createContext } from 'react';

import type { Chart } from '@/types/chart.types';
import type { ChartType } from '@/types/chart-type.enum';
import type { ChartConfig } from '@/types/chart-config.types';
import type { FredFrequencyShort } from '@/types/fred-freq.enum';
import type { SeriesConfig, BaseSeriesConfig } from '@/types/series-config.types';

// ----------------------------------------------------------------------

export interface ChartFormContextProps {
  formData: Chart;

  // Chart type step
  setChartType: (type: ChartType) => void;

  // Data source step
  addSeries: (series: BaseSeriesConfig) => void;
  removeSeries: (seriesId: BaseSeriesConfig['id']) => void;

  // Chart config step
  updateChartConfig: (config: Partial<ChartConfig>) => void;
  updateSeriesConfig: (seriesId: SeriesConfig['id'], config: Partial<SeriesConfig>) => void;
  setTimeFrequency: (timeFrequency: FredFrequencyShort) => void;

  // Form actions
  resetForm: () => void;
  submitForm: () => void;
}

export const ChartFormContext = createContext<ChartFormContextProps | undefined>(undefined);

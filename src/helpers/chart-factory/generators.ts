import { v4 as uuidv4 } from 'uuid';

import type { Chart } from '@/types/chart.types';
import { ChartType } from '@/types/chart-type.enum';
import type { ChartConfig } from '@/types/chart-config.types';
import type { FredFrequencyShort } from '@/types/fred-freq.enum';
import type {
  SeriesConfig,
  BarSeriesConfig,
  PieSeriesConfig,
  BaseSeriesConfig,
  LineSeriesConfig,
  ScatterSeriesConfig,
  TreemapSeriesConfig,
} from '@/types/series-config.types';

import { getRandomColor } from '@/helpers/color.utils';
import { configChartDefault } from '@/configs/charts.config';

// ----------------------------------------------------------------------

export function createDefaultSeriesConfig<T extends ChartType>(
  chartType: T,
  baseConfig: BaseSeriesConfig = { color: getRandomColor(), data: undefined, id: uuidv4(), label: '', opacity: 1 }
): SeriesConfig<T> {
  let seriesConfig;

  switch (chartType) {
    case ChartType.LINE:
      seriesConfig = {
        ...baseConfig,
        lineType: 'solid',
        lineWidth: 2,
      } as LineSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.BAR:
      seriesConfig = {
        ...baseConfig,
        barRadius: 0,
        barWidth: 20,
      } as BarSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.PIE:
      seriesConfig = {
        ...baseConfig,
        innerRadius: 0,
        outerRadius: 100,
        padAngle: 0.01,
      } as PieSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.SCATTER:
      seriesConfig = {
        ...baseConfig,
        symbolSize: 6,
        symbolType: 'circle',
      } as ScatterSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.TREEMAP:
      seriesConfig = {
        ...baseConfig,
        borderWidth: 1,
        padding: 2,
      } as TreemapSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    default:
      return baseConfig as unknown as SeriesConfig<T>;
  }
}

export function createDefaultChartConfig<T extends ChartType>(chartType: T): ChartConfig<T> {
  switch (chartType) {
    case ChartType.LINE:
    case ChartType.BAR:
      return {
        gridLines: true,
        legendPosition: 'right',
        showLegend: true,
        showTooltip: true,
        title: '',
        xAxisTitle: 'Date',
        yAxisTitle: 'Value',
      } as ChartConfig<T>;

    case ChartType.PIE:
      return {
        donut: false,
        legendPosition: 'right',
        showLabels: true,
        showLegend: true,
        title: '',
      } as ChartConfig<T>;

    case ChartType.SCATTER:
      return {
        gridLines: true,
        legendPosition: 'right',
        regressionLineColor: getRandomColor(),
        showLegend: true,
        showRegressionLine: false,
        showTooltip: true,
        title: '',
        xAxisTitle: 'Date',
        yAxisTitle: 'Value',
      } as ChartConfig<T>;

    case ChartType.TREEMAP:
      return {
        legendPosition: 'bottom',
        showLabels: true,
        title: '',
      } as ChartConfig<T>;

    default:
      return {} as ChartConfig<T>;
  }
}

export function createChart<T extends ChartType>(
  chartType: T,
  id: string = uuidv4(),
  timeFrequency: FredFrequencyShort = configChartDefault.timeFrequency
): Chart<T> {
  return {
    config: createDefaultChartConfig(chartType),
    data: [],
    id,
    series: [],
    timeFrequency,
    type: chartType,
  };
}

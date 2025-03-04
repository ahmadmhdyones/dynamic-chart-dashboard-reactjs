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
        lineType: configChartDefault.lineType,
        lineWidth: configChartDefault.lineWidth,
        showDots: configChartDefault.showDots,
      } as LineSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.BAR:
      seriesConfig = {
        ...baseConfig,
        barRadius: configChartDefault.barRadius,
        barStyle: configChartDefault.barStyle,
        barWidth: configChartDefault.barWidth,
      } as BarSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.PIE:
      seriesConfig = {
        ...baseConfig,
        innerRadius: configChartDefault.innerRadius,
        outerRadius: configChartDefault.outerRadius,
        padAngle: configChartDefault.padAngle,
      } as PieSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.SCATTER:
      seriesConfig = {
        ...baseConfig,
        symbolSize: configChartDefault.symbolSize,
        symbolType: configChartDefault.symbolType,
      } as ScatterSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    case ChartType.TREEMAP:
      seriesConfig = {
        ...baseConfig,
        borderWidth: configChartDefault.borderWidth,
        padding: configChartDefault.padding,
      } as TreemapSeriesConfig;

      return seriesConfig as SeriesConfig<T>;

    default:
      return baseConfig as unknown as SeriesConfig<T>;
  }
}

export function createDefaultChartConfig<T extends ChartType>(
  chartType: T = configChartDefault.type as T
): ChartConfig<T> {
  switch (chartType) {
    case ChartType.LINE:
    case ChartType.BAR:
      return {
        animationDuration: configChartDefault.animationDuration,
        animationEasing: configChartDefault.animationEasing,
        gridLines: configChartDefault.showGridLines,
        legendPosition: configChartDefault.legendPosition,
        showLegend: configChartDefault.showLegend,
        showTooltip: configChartDefault.showTooltip,
        title: configChartDefault.title,
        xAxisTitle: configChartDefault.xAxisTitle,
        yAxisTitle: configChartDefault.yAxisTitle,
      } as ChartConfig<T>;

    case ChartType.PIE:
      return {
        animationDuration: configChartDefault.animationDuration,
        animationEasing: configChartDefault.animationEasing,
        donut: false,
        legendPosition: configChartDefault.legendPosition,
        showLabels: configChartDefault.showLabels,
        showLegend: configChartDefault.showLegend,
        title: configChartDefault.title,
      } as ChartConfig<T>;

    case ChartType.SCATTER:
      return {
        animationDuration: configChartDefault.animationDuration,
        animationEasing: configChartDefault.animationEasing,
        gridLines: configChartDefault.showGridLines,
        legendPosition: configChartDefault.legendPosition,
        regressionLineColor: getRandomColor(),
        showLegend: configChartDefault.showLegend,
        showRegressionLine: configChartDefault.showRegressionLine,
        showTooltip: configChartDefault.showTooltip,
        title: configChartDefault.title,
        xAxisTitle: configChartDefault.xAxisTitle,
        yAxisTitle: configChartDefault.yAxisTitle,
      } as ChartConfig<T>;

    case ChartType.TREEMAP:
      return {
        animationDuration: configChartDefault.animationDuration,
        animationEasing: configChartDefault.animationEasing,
        legendPosition: configChartDefault.legendPosition,
        showLabels: configChartDefault.showLabels,
        title: configChartDefault.title,
      } as ChartConfig<T>;

    default:
      return {} as ChartConfig<T>;
  }
}

export function createChart<T extends ChartType>(
  chartType: T = configChartDefault.type as T,
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

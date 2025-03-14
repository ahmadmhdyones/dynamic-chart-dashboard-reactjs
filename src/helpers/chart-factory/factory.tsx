import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
} from 'recharts';

import { ChartType } from '@/types/chart-type.enum';
import type { Chart, ChartDataPoint } from '@/types/chart.types';
import type { AxisChartConfig } from '@/types/chart-config.types';
import type { BarSeriesConfig, LineSeriesConfig } from '@/types/series-config.types';

// ----------------------------------------------------------------------

interface ChartOptions {
  chartData?: ChartDataPoint[];
  height?: number | string;
  width?: number | string;
}

class ChartFactory {
  static createChart(chart: Chart, options: ChartOptions = {}) {
    const { chartData = chart.data || [], height = 400, width = '100%' } = options;

    switch (chart.type) {
      case ChartType.LINE:
        return this.createLineChart(chart as Chart<ChartType.LINE>, { chartData, height, width });
      case ChartType.BAR:
        return this.createBarChart(chart as Chart<ChartType.BAR>, { chartData, height, width });
      default:
        return <div style={{ padding: '20px', textAlign: 'center' }}>Unsupported chart type: {chart.type}</div>;
    }
  }

  private static createLineChart(chart: Chart<ChartType.LINE>, { chartData, height, width }: ChartOptions) {
    const config = chart.config as AxisChartConfig;

    return (
      <ResponsiveContainer height={height} width={width}>
        <RechartsLineChart data={chartData} margin={{ bottom: 50, left: 20, right: 30, top: 20 }}>
          {config.gridLines !== false && <CartesianGrid strokeDasharray='3 3' />}
          <XAxis dataKey='date' label={{ offset: -10, position: 'insideBottomRight', value: config.xAxisTitle }} />
          <YAxis label={{ angle: -90, position: 'insideLeft', value: config.yAxisTitle }} />
          {config.showTooltip !== false && <Tooltip />}
          {config.showLegend !== false && this.getLegendComponent(config.legendPosition)}
          {chart.series.map(s => {
            const lineSeries = s as LineSeriesConfig;
            return (
              <Line
                activeDot={{ r: 8 }}
                animationDuration={config.animationDuration}
                animationEasing={config.animationEasing}
                dataKey={s.id}
                dot={lineSeries.showDots !== false ? { r: 4 } : false}
                isAnimationActive={true}
                key={s.id}
                name={s.label}
                stroke={s.color}
                strokeDasharray={
                  lineSeries.lineType === 'dashed' ? '5 5' : lineSeries.lineType === 'dotted' ? '2 2' : undefined
                }
                strokeOpacity={s.opacity}
                strokeWidth={lineSeries.lineWidth}
                type='monotone'
              />
            );
          })}
        </RechartsLineChart>
      </ResponsiveContainer>
    );
  }

  private static createBarChart(chart: Chart<ChartType.BAR>, { chartData, height, width }: ChartOptions) {
    const config = chart.config as AxisChartConfig;

    return (
      <ResponsiveContainer height={height} width={width}>
        <RechartsBarChart
          data={chartData}
          margin={{ bottom: 50, left: 20, right: 30, top: 20 }}
          stackOffset={chart.series.some(s => (s as BarSeriesConfig).barStyle === 'stacked') ? 'sign' : undefined}
        >
          {config.gridLines !== false && <CartesianGrid strokeDasharray='3 3' />}
          <XAxis dataKey='date' label={{ offset: -10, position: 'insideBottomRight', value: config.xAxisTitle }} />
          <YAxis label={{ angle: -90, position: 'insideLeft', value: config.yAxisTitle }} />
          {config.showTooltip !== false && <Tooltip />}
          {config.showLegend !== false && this.getLegendComponent(config.legendPosition)}
          {chart.series.map(s => {
            const barSeries = s as BarSeriesConfig;
            return (
              <Bar
                animationDuration={config.animationDuration}
                animationEasing={config.animationEasing}
                barSize={barSeries.barWidth}
                dataKey={s.id}
                fill={s.color}
                fillOpacity={s.opacity}
                isAnimationActive={true}
                key={s.id}
                name={s.label}
                radius={[barSeries.barRadius || 0, barSeries.barRadius || 0, 0, 0]}
                stackId={barSeries.barStyle === 'stacked' ? 'stack' : undefined}
              />
            );
          })}
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  }

  private static getLegendComponent(position: AxisChartConfig['legendPosition']) {
    return (
      <Legend
        align={position === 'right' ? 'right' : position === 'left' ? 'left' : 'center'}
        layout={position === 'left' || position === 'right' ? 'vertical' : 'horizontal'}
        verticalAlign={position === 'bottom' ? 'bottom' : position === 'top' ? 'top' : 'middle'}
        wrapperStyle={
          position === 'left'
            ? { left: 0, paddingRight: 10 }
            : position === 'right'
              ? { paddingLeft: 10, right: 0 }
              : {}
        }
      />
    );
  }
}

export default ChartFactory;

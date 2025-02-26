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
    return (
      <ResponsiveContainer height={height} width={width}>
        <RechartsLineChart data={chartData} margin={{ bottom: 50, left: 20, right: 30, top: 20 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='date'
            label={{ offset: -10, position: 'insideBottomRight', value: chart.config.xAxisTitle }}
          />
          <YAxis label={{ angle: -90, position: 'insideLeft', value: chart.config.yAxisTitle }} />
          <Tooltip />
          <Legend />
          {chart.series.map(s => (
            <Line
              activeDot={{ r: 8 }}
              dataKey={s.id}
              dot={{ r: 4 }}
              key={s.id}
              name={s.label}
              stroke={s.color}
              strokeDasharray={s.lineType === 'dashed' ? '5 5' : s.lineType === 'dotted' ? '2 2' : undefined}
              strokeOpacity={s.opacity}
              strokeWidth={s.lineWidth}
              type='monotone'
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    );
  }

  private static createBarChart(chart: Chart<ChartType.BAR>, { chartData, height, width }: ChartOptions) {
    return (
      <ResponsiveContainer height={height} width={width}>
        <RechartsBarChart data={chartData} margin={{ bottom: 50, left: 20, right: 30, top: 20 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='date'
            label={{ offset: -10, position: 'insideBottomRight', value: chart.config.xAxisTitle }}
          />
          <YAxis label={{ angle: -90, position: 'insideLeft', value: chart.config.yAxisTitle }} />
          <Tooltip />
          <Legend />
          {chart.series.map(s => (
            <Bar
              barSize={s.barWidth}
              dataKey={s.id}
              fill={s.color}
              fillOpacity={s.opacity}
              key={s.id}
              name={s.label}
              radius={[s.barRadius || 0, s.barRadius || 0, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartFactory;

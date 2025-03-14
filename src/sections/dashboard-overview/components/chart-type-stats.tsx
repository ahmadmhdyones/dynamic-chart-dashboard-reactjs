import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import { paths } from '@/helpers/map-routes';
import { QueryParams } from '@/helpers/map-params/query-params.enum';

import StatsCard from './stats-card';

// ----------------------------------------------------------------------

interface ChartTypeStatsProps {
  totalCharts: number;
  line: number;
  bar: number;
  isLoading: boolean;
}

function ChartTypeStats({ bar: barCharts, isLoading, line: lineCharts, totalCharts }: ChartTypeStatsProps) {
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={12}>
        <StatsCard
          buttonIcon={<BarChartIcon fontSize='small' />}
          buttonLink={paths.dashboard.charts.root.to()}
          buttonText='View All Charts'
          icon={<BarChartIcon fontSize='large' />}
          iconBgColor='primary.lighter'
          iconColor='primary.main'
          isLoading={isLoading}
          title='Total Charts'
          value={totalCharts}
        />
      </Grid>

      <Grid item md={4} xs={12}>
        <StatsCard
          buttonIcon={<ShowChartIcon fontSize='small' />}
          buttonLink={`${paths.dashboard.charts.root.to()}?${QueryParams.ChartType}=line`}
          buttonText='View Line Charts'
          icon={<ShowChartIcon fontSize='large' />}
          iconBgColor='success.lighter'
          iconColor='success.main'
          isLoading={isLoading}
          title='Line Charts'
          value={lineCharts || 0}
        />
      </Grid>

      <Grid item md={4} xs={12}>
        <StatsCard
          buttonIcon={<BarChartIcon fontSize='small' />}
          buttonLink={`${paths.dashboard.charts.root.to()}?${QueryParams.ChartType}=bar`}
          buttonText='View Bar Charts'
          icon={<BarChartIcon fontSize='large' />}
          iconBgColor='warning.lighter'
          iconColor='warning.main'
          isLoading={isLoading}
          title='Bar Charts'
          value={barCharts || 0}
        />
      </Grid>
    </Grid>
  );
}

export default ChartTypeStats;

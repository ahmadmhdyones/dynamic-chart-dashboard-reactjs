import { Suspense } from 'react';
import { useParams } from 'react-router';
import { PageContainer } from '@toolpad/core/PageContainer';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from '@/helpers/map-routes';
import { RouteParams } from '@/helpers/map-params';
import MetaTags from '@/components/common/meta-tags';
import SectionChartForm from '@/sections/chart-form';
import { useChart } from '@/services/api/hooks/use-chart';

// ----------------------------------------------------------------------

function PageChartsEdit() {
  const { [RouteParams.ChartId]: chartId } = useParams<{ [RouteParams.ChartId]: string }>();
  const { data: chart, error, isLoading } = useChart({ id: chartId || '' });

  const renderContent = () => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <CircularProgress />
        </Box>
      );
    }

    if (error || !chart) {
      return (
        <Alert severity='error' sx={{ mt: 2 }}>
          <AlertTitle>Error</AlertTitle>
          {error?.message || 'Chart not found'}
        </Alert>
      );
    }

    return (
      <Suspense fallback={<CircularProgress />}>
        <SectionChartForm initialChartData={chart} mode='edit' />
      </Suspense>
    );
  };

  return (
    <PageContainer
      breadcrumbs={[
        { path: paths.dashboard.root.to(), title: 'Dashboard' },
        { path: paths.dashboard.charts.root.to(), title: 'Charts' },
        { path: paths.dashboard.charts.id.edit.to(chartId || ''), title: 'Edit Chart' },
      ]}
      title={`Edit Chart: ${chart?.config.title || 'Loading...'}`}
    >
      <MetaTags title={`Edit Chart | DCDR`} />

      <Box component='main' id={paths.dashboard.charts.id.edit.id}>
        {renderContent()}
      </Box>
    </PageContainer>
  );
}

export default PageChartsEdit;
